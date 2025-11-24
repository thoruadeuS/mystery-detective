let currentCase = null
let revealedClues = 0
let selectedSuspect = null
let timerInterval = null
let startTime = null
let casesResolved = 0
let casesAttempted = 0
let currentFilter = "all"

const caseSelector = document.getElementById("caseSelector")
const gameContent = document.getElementById("gameContent")
const caseButtons = document.getElementById("caseButtons")
const storyText = document.getElementById("storyText")
const caseTitle = document.getElementById("caseTitle")
const suspectsGrid = document.getElementById("suspectsGrid")
const cluesGrid = document.getElementById("cluesGrid")
const suspectButtons = document.getElementById("suspectButtons")
const revealBtn = document.getElementById("revealBtn")
const verdictModal = document.getElementById("verdictModal")
const verdictTitle = document.getElementById("verdictTitle")
const verdictText = document.getElementById("verdictText")
const newCaseBtn = document.getElementById("newCaseBtn")
const progressBar = document.getElementById("progressBar")
const progressText = document.getElementById("progressText")
const timerDisplay = document.getElementById("timer")
const detectiveNotes = document.getElementById("detectiveNotes")
const noteCount = document.getElementById("noteCount")
const casesResolvedDisplay = document.getElementById("casesResolved")
const accuracyDisplay = document.getElementById("accuracy")

detectiveNotes?.addEventListener("input", (e) => {
  noteCount.textContent = e.target.value.length
})

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
    e.target.classList.add("active")
    currentFilter = e.target.dataset.filter
    renderCaseButtons()
  })
})

function renderCaseButtons() {
  caseButtons.innerHTML = ""
  const filteredCases = currentFilter === "all" ? cases : cases.filter((c) => c.difficulty === currentFilter)

  filteredCases.forEach((caseData) => {
    const button = document.createElement("button")
    button.className = "case-btn"

    const difficultyClass = `difficulty-${caseData.difficulty}`
    const difficultyText =
      caseData.difficulty === "easy" ? "Fácil" : caseData.difficulty === "medium" ? "Medio" : "Difícil"

    button.innerHTML = `
      <h3>${caseData.title}</h3>
      <p>${caseData.description}</p>
      <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
    `
    button.addEventListener("click", () => startCase(caseData))
    caseButtons.appendChild(button)
  })
}

function startTimer() {
  startTime = Date.now()
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime
    const minutes = Math.floor(elapsed / 60000)
    const seconds = Math.floor((elapsed % 60000) / 1000)
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }, 1000)
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

function getElapsedTime() {
  if (!startTime) return "00:00"
  const elapsed = Date.now() - startTime
  const minutes = Math.floor(elapsed / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

function updateStats() {
  casesResolvedDisplay.textContent = casesResolved
  const accuracy = casesAttempted > 0 ? Math.round((casesResolved / casesAttempted) * 100) : 0
  accuracyDisplay.textContent = `${accuracy}%`
}

function startCase(caseData) {
  currentCase = caseData
  revealedClues = 0
  selectedSuspect = null

  caseSelector.classList.add("hidden")
  gameContent.classList.remove("hidden")

  caseTitle.textContent = caseData.title
  storyText.textContent = caseData.story

  if (detectiveNotes) {
    detectiveNotes.value = ""
    noteCount.textContent = "0"
  }
  startTimer()

  renderSuspects()
  renderClues()
  renderVerdictButtons()
  updateProgress()
}

function renderSuspects() {
  suspectsGrid.innerHTML = ""
  currentCase.suspects.forEach((suspect) => {
    const card = document.createElement("div")
    card.className = "suspect-card"
    card.innerHTML = `
      <div class="suspect-avatar">${suspect.avatar}</div>
      <h3 class="suspect-name">${suspect.name}</h3>
      <p class="suspect-role">${suspect.role}</p>
      <p class="suspect-description">${suspect.description}</p>
      <div class="suspect-alibi">
        <strong>Coartada:</strong> ${suspect.alibi}
      </div>
    `
    suspectsGrid.appendChild(card)
  })
}

function renderClues() {
  cluesGrid.innerHTML = ""
  currentCase.clues.forEach((clue, index) => {
    const card = document.createElement("div")
    card.className = "clue-card locked"
    card.innerHTML = `
      <div class="clue-header">
        <span class="clue-icon">${clue.icon}</span>
        <h3 class="clue-title">${clue.title}</h3>
      </div>
      <p class="clue-description">${clue.description}</p>
    `
    card.addEventListener("click", () => revealClue(card, index))
    cluesGrid.appendChild(card)
  })
}

function revealClue(card, index) {
  if (card.classList.contains("locked")) {
    card.classList.remove("locked")
    card.classList.add("revealed")
    revealedClues++
    updateProgress()
    checkRevealButton()
  }
}

function updateProgress() {
  const total = currentCase.clues.length
  const percentage = (revealedClues / total) * 100
  progressBar.style.setProperty("--progress", `${percentage}%`)
  progressText.textContent = `${revealedClues}/${total}`
}

function renderVerdictButtons() {
  suspectButtons.innerHTML = ""
  currentCase.suspects.forEach((suspect) => {
    const button = document.createElement("button")
    button.className = "suspect-btn"
    button.textContent = suspect.name
    button.addEventListener("click", () => selectSuspect(button, suspect.name))
    suspectButtons.appendChild(button)
  })
}

function selectSuspect(button, name) {
  document.querySelectorAll(".suspect-btn").forEach((btn) => {
    btn.classList.remove("selected")
  })
  button.classList.add("selected")
  selectedSuspect = name
  checkRevealButton()
}

function checkRevealButton() {
  const allCluesRevealed = revealedClues === currentCase.clues.length
  const suspectSelected = selectedSuspect !== null
  revealBtn.disabled = !(allCluesRevealed && suspectSelected)
}

function showVerdict() {
  stopTimer()
  casesAttempted++

  const isCorrect = selectedSuspect === currentCase.guilty

  if (isCorrect) {
    casesResolved++
    verdictTitle.textContent = "¡Felicidades, Detective! 🎉"
    verdictTitle.style.color = "var(--color-success)"
  } else {
    verdictTitle.textContent = "¡Caso Sin Resolver! ❌"
    verdictTitle.style.color = "var(--color-danger)"
  }

  updateStats()

  verdictText.innerHTML = `
    <strong>${isCorrect ? "Has resuelto el caso correctamente." : `Tu sospecha era incorrecta. El verdadero culpable era ${currentCase.guilty}.`}</strong><br><br>
    ${currentCase.solution}
  `

  document.getElementById("solveTime").textContent = getElapsedTime()
  document.getElementById("cluesUsed").textContent = `${revealedClues}/${currentCase.clues.length}`

  verdictModal.classList.remove("hidden")
}

function resetToMenu() {
  verdictModal.classList.add("hidden")
  gameContent.classList.add("hidden")
  caseSelector.classList.remove("hidden")
  currentCase = null
  revealedClues = 0
  selectedSuspect = null
  stopTimer()
}

revealBtn.addEventListener("click", showVerdict)
newCaseBtn.addEventListener("click", resetToMenu)

renderCaseButtons()
updateStats()
