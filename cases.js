const cases = [
  {
    id: 1,
    title: "El Diamante Estrella Azul",
    description: "Un robo audaz en el museo de la ciudad",
    difficulty: "easy",
    story:
      "La noche del sábado, el famoso Diamante Estrella Azul fue robado del Museo Nacional durante la gala anual de beneficencia. El diamante, valuado en 5 millones de dólares, desapareció de su vitrina blindada sin activar las alarmas. Hay cuatro sospechosos principales, todos con acceso al museo esa noche. Las cámaras de seguridad mostraron interferencias entre las 10:30 PM y 11:00 PM, justo cuando ocurrió el robo.",
    suspects: [
      {
        name: "Victoria Sterling",
        role: "Curadora del Museo",
        avatar: "👩‍💼",
        description: "Lleva 15 años trabajando en el museo y tiene acceso a todas las áreas de seguridad.",
        alibi: "Estaba supervisando la gala en el salón principal cuando ocurrió el robo.",
      },
      {
        name: "Marcus Chen",
        role: "Jefe de Seguridad",
        avatar: "👨‍✈️",
        description: "Ex policía, responsable de todos los sistemas de seguridad del museo.",
        alibi: "Revisaba las cámaras en la sala de control durante el incidente.",
      },
      {
        name: "Elena Rossi",
        role: "Empresaria Coleccionista",
        avatar: "💃",
        description: "Rica coleccionista de arte, conocida por su obsesión con las gemas raras.",
        alibi: "Estaba en el baño cuando la alarma sonó brevemente.",
      },
      {
        name: "David Park",
        role: "Técnico de Sistemas",
        avatar: "👨‍💻",
        description: "Instaló el nuevo sistema de seguridad hace dos meses.",
        alibi: "Salió temprano de la gala por una emergencia familiar.",
      },
    ],
    clues: [
      {
        title: "Huella Digital",
        icon: "🔍",
        description:
          "Se encontró una huella digital parcial en el panel de control de la vitrina. Pertenece a alguien con acceso administrativo.",
      },
      {
        title: "Grabación de Seguridad",
        icon: "📹",
        description:
          "Las cámaras fueron desactivadas usando un código de acceso maestro que solo tienen tres personas en el museo.",
      },
      {
        title: "Testimonio del Guardia",
        icon: "👮",
        description:
          "El guardia nocturno vio a alguien cerca de la sala de control a las 10:25 PM, cinco minutos antes de que las cámaras fallaran.",
      },
      {
        title: "Transacción Bancaria",
        icon: "💰",
        description:
          "Elena Rossi realizó una transferencia sospechosa de $50,000 a una cuenta offshore tres días antes del robo.",
      },
      {
        title: "Mensaje de Texto",
        icon: "📱",
        description:
          "Marcus Chen recibió un mensaje cifrado de un número desconocido a las 10:15 PM: 'Todo listo para esta noche'.",
      },
      {
        title: "Análisis de Fibras",
        icon: "🧵",
        description:
          "Se encontraron fibras de un traje caro cerca de la vitrina, probablemente de ropa formal usada en la gala.",
      },
      {
        title: "Registro de Acceso",
        icon: "🔐",
        description:
          "El registro muestra que Victoria Sterling accedió a la sala de gemas tres veces esa noche, más de lo habitual.",
      },
      {
        title: "Testigo Anónimo",
        icon: "👤",
        description:
          "Un invitado anónimo reportó haber visto a Victoria hablando nerviosamente por teléfono en el estacionamiento a las 11:15 PM.",
      },
    ],
    guilty: "Victoria Sterling",
    solution:
      "Victoria Sterling es la culpable. Como curadora con 15 años de experiencia, tenía acceso completo a todos los sistemas de seguridad y conocía cada punto ciego. Sus múltiples visitas a la sala de gemas esa noche le permitieron preparar el robo. Utilizó su código maestro para desactivar las cámaras y su conocimiento del museo para evitar ser detectada. La llamada nerviosa en el estacionamiento fue para confirmar la entrega del diamante a su comprador. Las deudas de juego ocultas la motivaron a traicionar la confianza depositada en ella durante todos estos años.",
  },
  {
    id: 2,
    title: "Muerte en la Mansión Ashwood",
    description: "Un asesinato durante una cena familiar",
    difficulty: "medium",
    story:
      "Lord Richard Ashwood fue encontrado muerto en su estudio la noche de su 60º cumpleaños. La familia estaba reunida para una cena de celebración cuando, a las 9:45 PM, el mayordomo descubrió el cuerpo. Richard había sido envenenado con una rara toxina vegetal agregada a su copa de vino. Solo los miembros de la familia inmediata tenían acceso al estudio esa noche. La fortuna de 20 millones está en juego y todos tenían motivos.",
    suspects: [
      {
        name: "Margaret Ashwood",
        role: "Esposa",
        avatar: "👩‍🦳",
        description: "Casada con Richard por 35 años. Conocida botánica y experta en plantas raras.",
        alibi: "Estaba arreglándose en su habitación hasta las 9:30 PM.",
      },
      {
        name: "Thomas Ashwood",
        role: "Hijo Mayor",
        avatar: "👨‍💼",
        description: "Heredero principal y empresario fracasado con deudas enormes.",
        alibi: "Fumaba en el jardín entre las 9:30 y 10:00 PM.",
      },
      {
        name: "Sophia Ashwood",
        role: "Hija Menor",
        avatar: "👩‍🎓",
        description: "Doctora en química, recientemente desheredada por su padre.",
        alibi: "Estaba en la biblioteca leyendo antes de la cena.",
      },
      {
        name: "James Wellington",
        role: "Socio de Negocios",
        avatar: "🤵",
        description: "Socio de Richard por 10 años, recientemente demandado por fraude.",
        alibi: "Llegó tarde a la cena, apareció a las 9:40 PM.",
      },
    ],
    clues: [
      {
        title: "Copa de Vino",
        icon: "🍷",
        description:
          "La copa de Richard contenía trazas de Aconitum, una planta extremadamente venenosa conocida como 'acónito'.",
      },
      {
        title: "Libro de Botánica",
        icon: "📖",
        description:
          "Se encontró un libro sobre plantas tóxicas abierto en la página del acónito en el invernadero de Margaret.",
      },
      {
        title: "Testamento Modificado",
        icon: "📜",
        description: "Richard había cambiado su testamento esa misma tarde, dejando todo a una fundación benéfica.",
      },
      {
        title: "Correos Electrónicos",
        icon: "✉️",
        description:
          "Thomas envió correos desesperados a su padre pidiendo dinero para pagar deudas de juego por $500,000.",
      },
      {
        title: "Prescripción Médica",
        icon: "💊",
        description:
          "Sophia había prescrito medicamentos cardíacos a su padre que, combinados con acónito, acelerarían su efecto.",
      },
      {
        title: "Documentos Legales",
        icon: "⚖️",
        description: "James enfrentaba una demanda de $2 millones que Richard se negó a ayudar a pagar.",
      },
      {
        title: "Cámara del Invernadero",
        icon: "📹",
        description:
          "Las cámaras de seguridad muestran a Margaret cosechando plantas en el invernadero dos días antes.",
      },
      {
        title: "Análisis de Residuos",
        icon: "🔬",
        description: "Se encontraron trazas microscópicas de tierra del invernadero en la chaqueta de Thomas.",
      },
      {
        title: "Declaración del Mayordomo",
        icon: "🎩",
        description: "El mayordomo vio a Thomas salir apresuradamente del estudio a las 9:20 PM.",
      },
      {
        title: "Registro Telefónico",
        icon: "📞",
        description:
          "Thomas llamó a un prestamista ilegal minutos después de salir del estudio, diciendo 'pronto tendré el dinero'.",
      },
    ],
    guilty: "Thomas Ashwood",
    solution:
      "Thomas Ashwood es el asesino. Desesperado por sus deudas de juego, robó acónito del invernadero de su madre (explicando la tierra en su chaqueta). Aprovechó el conocimiento que ella compartía sobre plantas para cometer el crimen perfecto. Cuando su padre se negó a darle dinero esa tarde, Thomas supo que su única salida era heredar la fortuna. Entró al estudio antes de la cena con la excusa de reconciliarse, envenenó el vino preparado para el brindis, y esperó. Su llamada al prestamista reveló su certeza de obtener el dinero pronto, antes de saber que el testamento había sido cambiado.",
  },
  {
    id: 3,
    title: "El Enigma del Expreso Nocturno",
    description: "Un robo en un tren de lujo",
    difficulty: "medium",
    story:
      "Durante el viaje nocturno del Expreso Real de Londres a Edimburgo, el valioso Collar de Esmeraldas de la Condesa desapareció de su compartimento privado. El robo ocurrió entre las 2:00 AM y 3:00 AM mientras el tren atravesaba la campiña inglesa a toda velocidad. Solo cuatro personas tenían acceso al vagón de primera clase esa noche. El collar, valuado en 3 millones de libras, debe estar todavía en el tren ya que no hubo paradas hasta que se descubrió el robo a las 6:00 AM.",
    suspects: [
      {
        name: "Condesa Katerina Volkov",
        role: "Víctima",
        avatar: "👸",
        description: "Aristócrata rusa, dueña del collar. Tiene problemas financieros secretos.",
        alibi: "Dormía en su compartimento cuando ocurrió el robo supuestamente.",
      },
      {
        name: "Antoine Dubois",
        role: "Mayordomo Personal",
        avatar: "🤵",
        description: "Ha servido a la Condesa por 20 años. Tiene llaves de todos sus equipajes.",
        alibi: "Estaba en el vagón comedor preparando el desayuno matinal.",
      },
      {
        name: "Olivia Hart",
        role: "Agente de Seguros",
        avatar: "💼",
        description: "Representa la compañía que aseguró el collar por 4 millones. Viajaba en el mismo vagón.",
        alibi: "Trabajaba en su laptop en su compartimento toda la noche.",
      },
      {
        name: "Inspector Morrison",
        role: "Detective Retirado",
        avatar: "🕵️",
        description: "Ex detective de Scotland Yard, viajaba de vacaciones coincidentemente.",
        alibi: "Estaba despierto leyendo en su compartimento, escuchó pasos sospechosos.",
      },
    ],
    clues: [
      {
        title: "Caja Fuerte Abierta",
        icon: "🔓",
        description: "La pequeña caja fuerte del compartimento fue abierta con la combinación correcta, no forzada.",
      },
      {
        title: "Reporte Financiero",
        icon: "📊",
        description: "La Condesa tiene deudas de casino por 2 millones de libras que vencen este mes.",
      },
      {
        title: "Póliza de Seguro",
        icon: "📋",
        description: "El seguro del collar paga 4 millones, un millón más que su valor real de mercado actual.",
      },
      {
        title: "Testimonio del Conductor",
        icon: "🚂",
        description: "El conductor vio a Antoine caminando nerviosamente por el pasillo a las 2:30 AM.",
      },
      {
        title: "Huellas de Zapatos",
        icon: "👞",
        description: "Se encontraron marcas de zapatos femeninos de diseñador cerca de la ventana del compartimento.",
      },
      {
        title: "Correo Electrónico",
        icon: "📧",
        description: "Olivia envió un email a su jefe a las 1:45 AM: 'El plan procede según lo acordado'.",
      },
      {
        title: "Registro de Llamadas",
        icon: "📱",
        description: "La Condesa hizo una llamada encriptada a las 3:15 AM a un número de Suiza.",
      },
      {
        title: "Declaración de Morrison",
        icon: "🗣️",
        description: "Morrison escuchó dos personas susurrando en ruso en el pasillo alrededor de las 2:45 AM.",
      },
    ],
    guilty: "Condesa Katerina Volkov",
    solution:
      "La Condesa Katerina Volkov orquestó el robo de su propio collar en complicidad con Olivia Hart. Desesperada por sus deudas de casino, ideó un plan de fraude de seguros. El collar está escondido en el tren, probablemente en el equipaje de Olivia. La sobrevaloración del seguro (4 millones vs 3 millones) les daría suficiente dinero para pagar las deudas de la Condesa y dividir el resto. La llamada encriptada a Suiza fue para confirmar que el collar sería enviado allí una vez que cobren el seguro. El 'robo' les permite a ambas salir ganando: la Condesa resuelve sus deudas y Olivia obtiene una comisión enorme más una parte del fraude.",
  },
  {
    id: 4,
    title: "Secretos en Silicon Valley",
    description: "Robo de propiedad intelectual corporativa",
    difficulty: "hard",
    story:
      "TechNova Corp estaba a punto de lanzar una revolucionaria tecnología de IA valorada en 50 millones de dólares. Tres días antes del lanzamiento, el código fuente completo fue robado de los servidores seguros de la compañía y ofrecido a la competencia. El robo ocurrió el viernes a las 11:00 PM usando credenciales de acceso legítimas. Solo cuatro personas tenían el nivel de acceso necesario. El código fue descargado a una unidad USB y borrado de los servidores. La compañía enfrenta la ruina sin su producto estrella.",
    suspects: [
      {
        name: "Dr. Sarah Chen",
        role: "CTO y Creadora Principal",
        avatar: "👩‍💻",
        description: "Genio de la IA que desarrolló la tecnología. Recientemente negociaba su salida.",
        alibi: "Trabajaba desde casa esa noche, tiene registros de VPN como prueba.",
      },
      {
        name: "Michael Torres",
        role: "Ingeniero Senior",
        avatar: "👨‍💻",
        description: "Segundo al mando del proyecto. Fue pasado por alto para un ascenso importante.",
        alibi: "Estaba en la oficina hasta las 10:00 PM, verificado por el sistema de acceso.",
      },
      {
        name: "Rachel Kim",
        role: "Gerente de Seguridad IT",
        avatar: "👩‍💼",
        description: "Controla todos los sistemas de seguridad. Ex empleada de la competencia principal.",
        alibi: "Respondía una emergencia de servidores desde casa entre 10:30 PM y 12:00 AM.",
      },
      {
        name: "David Zhang",
        role: "Inversor Principal",
        avatar: "💼",
        description: "Tiene 30% de las acciones. Recientemente rechazó una oferta de compra de la competencia.",
        alibi: "En una cena de negocios hasta las 11:30 PM con testigos.",
      },
    ],
    clues: [
      {
        title: "Logs del Sistema",
        icon: "🖥️",
        description: "Las credenciales de Rachel fueron usadas para el acceso, pero desde una ubicación IP interna.",
      },
      {
        title: "Cámara de Seguridad",
        icon: "📹",
        description:
          "Michael aparece en video saliendo del edificio a las 10:00 PM, pero regresando a las 10:45 PM por la entrada trasera.",
      },
      {
        title: "Correos Borrados",
        icon: "🗑️",
        description: "Se recuperaron emails borrados entre Michael y un ejecutivo de CompetitorTech.",
      },
      {
        title: "Transacción Cripto",
        icon: "₿",
        description: "Una billetera de criptomonedas vinculada a Michael recibió $100,000 el sábado por la mañana.",
      },
      {
        title: "USB Registrada",
        icon: "💾",
        description: "El sistema detectó una USB conectada a la estación de trabajo de Michael a las 11:05 PM.",
      },
      {
        title: "Registro de Badge",
        icon: "🎫",
        description: "El badge de Michael fue usado para acceder al cuarto de servidores a las 10:50 PM.",
      },
      {
        title: "Chat Interno",
        icon: "💬",
        description: "Michael envió mensajes amargos sobre ser ignorado para el ascenso semanas antes.",
      },
      {
        title: "Análisis Forense",
        icon: "🔬",
        description:
          "Se encontró malware en la computadora de Michael diseñado para robar credenciales de otros usuarios.",
      },
    ],
    guilty: "Michael Torres",
    solution:
      "Michael Torres es el culpable. Resentido por ser pasado para el ascenso a favor de Dr. Chen, decidió vengarse y enriquecerse. Instaló malware para robar las credenciales de Rachel semanas antes, dándole la cobertura perfecta. La noche del robo, salió ostentosamente a las 10:00 PM para ser visto, pero regresó sigilosamente por la entrada trasera usando su conocimiento del edificio. Usó las credenciales robadas de Rachel para acceder al sistema, descargó el código a una USB, y lo vendió a CompetitorTech por $100,000 en criptomonedas. Su error fue no darse cuenta de que el sistema registraba tanto el uso de badges físicos como las conexiones USB, contradeciendo su supuesta ausencia.",
  },
  {
    id: 5,
    title: "El Último Acto de la Ópera",
    description: "Asesinato tras bambalinas en el Teatro Imperial",
    difficulty: "hard",
    story:
      "Durante el estreno de 'La Traviata', la famosa soprano Isabella Marconi fue encontrada muerta en su camerino durante el segundo intermedio. Había sido estrangulada con una cuerda de piano. El camerino estaba cerrado desde adentro, y solo cuatro personas tenían llaves maestras del teatro. La víctima había recibido amenazas anónimas durante semanas. El detective debe resolver el caso antes de que termine la función para evitar pánico entre los 800 espectadores.",
    suspects: [
      {
        name: "Lorenzo Bianchi",
        role: "Director de Orquesta",
        avatar: "🎭",
        description: "Ex esposo de Isabella. Divorciados hace un año tras un escándalo público de infidelidad.",
        alibi: "Dirigía la orquesta en el foso durante todo el segundo acto.",
      },
      {
        name: "Valentina Rossi",
        role: "Soprano Understudy",
        avatar: "🎤",
        description: "Suplente de Isabella. Esta era su oportunidad de brillar en el papel protagónico.",
        alibi: "Estaba en el camerino contiguo preparándose para su escena en el acto tres.",
      },
      {
        name: "Marco Santini",
        role: "Empresario y Productor",
        avatar: "💼",
        description: "Productor del espectáculo. Isabella amenazó con romper su contrato millonario.",
        alibi: "Conversaba con inversores en el lobby VIP durante el intermedio.",
      },
      {
        name: "Sofia Moretti",
        role: "Vestuarista Principal",
        avatar: "👗",
        description: "Mejor amiga de Isabella desde la infancia. Recientemente tuvieron una fuerte discusión.",
        alibi: "Preparaba vestuario para el acto tres en el cuarto de vestuario.",
      },
    ],
    clues: [
      {
        title: "Cuerda de Piano",
        icon: "🎹",
        description: "La cuerda usada para estrangular proviene del piano del camerino de Lorenzo, no del de Isabella.",
      },
      {
        title: "Testamento Reciente",
        icon: "📄",
        description:
          "Isabella cambió su testamento la semana pasada, dejando toda su fortuna a una fundación de niños.",
      },
      {
        title: "Grabación de Audio",
        icon: "🎙️",
        description:
          "Una grabadora oculta en el camerino captó una discusión acalorada entre Isabella y Valentina a las 8:15 PM.",
      },
      {
        title: "Análisis de Fibras",
        icon: "🧬",
        description: "Se encontraron fibras de terciopelo rojo del telón principal en las uñas de Isabella.",
      },
      {
        title: "Correos Amenazantes",
        icon: "📧",
        description:
          "Los emails amenazantes fueron rastreados a una computadora pública, pero con el estilo de escritura de Valentina.",
      },
      {
        title: "Llave Duplicada",
        icon: "🔑",
        description:
          "Se encontró una llave maestra duplicada en el bolso de Valentina que no está registrada oficialmente.",
      },
      {
        title: "Testimonio del Tramoyista",
        icon: "👷",
        description:
          "El tramoyista vio a Valentina salir rápidamente del pasillo de camerinos a las 8:45 PM, justo después del descubrimiento.",
      },
      {
        title: "Marcas Defensivas",
        icon: "🩹",
        description:
          "Isabella tenía marcas defensivas en sus manos, y Valentina tiene arañazos frescos en sus brazos cubiertos con maquillaje.",
      },
      {
        title: "Diario Personal",
        icon: "📖",
        description: "El diario de Valentina revela obsesión con 'finalmente obtener el reconocimiento que merezco'.",
      },
      {
        title: "Cronología del Director",
        icon: "⏰",
        description:
          "Lorenzo estuvo visible dirigiendo durante todo el tiempo del asesinato, imposible que haya salido del foso.",
      },
    ],
    guilty: "Valentina Rossi",
    solution:
      "Valentina Rossi es la asesina. Obsesionada con obtener el papel protagónico, planeó meticulosamente el asesinato durante semanas. Envió las amenazas anónimas para crear un escenario de 'asesino desconocido'. Durante el segundo acto, usó su llave duplicada no registrada para entrar al camerino de Isabella, confrontarla, y estrangularla con la cuerda de piano robada previamente del camerino de Lorenzo para desviar sospechas. Las fibras de terciopelo en las uñas de Isabella provienen de cuando Valentina la arrastró cerca del telón. Los arañazos en los brazos de Valentina, que intentó cubrir con maquillaje, coinciden con las marcas defensivas de Isabella. Su plan era perfecto, excepto que no contaba con que el tramoyista la viera saliendo apresuradamente.",
  },
  {
    id: 6,
    title: "Veneno en el Viñedo",
    description: "Muerte durante la cata anual en Napa Valley",
    difficulty: "medium",
    story:
      "Durante la prestigiosa cata anual del Viñedo Château Beaumont, el renombrado sommelier y crítico de vinos Jean-Pierre Dubois colapsó y murió frente a 50 invitados de élite. El análisis toxicológico reveló que su copa de Cabernet Sauvignon 1995 contenía cianuro. El vino vino directamente de una botella sellada de la reserva privada del viñedo. Solo cuatro personas tenían acceso a esa bodega secreta. El escándalo amenaza con destruir la reputación de 200 años de la familia Beaumont.",
    suspects: [
      {
        name: "Henri Beaumont",
        role: "Propietario del Viñedo",
        avatar: "🍷",
        description:
          "Quinta generación de la familia Beaumont. Jean-Pierre acababa de publicar una crítica devastadora de sus vinos.",
        alibi: "Daba la bienvenida a los invitados en la entrada principal durante la cata.",
      },
      {
        name: "Amélie Beaumont",
        role: "Enóloga Principal",
        avatar: "👩‍🔬",
        description:
          "Hija de Henri y maestra enóloga. Jean-Pierre rechazó públicamente su propuesta de matrimonio hace 5 años.",
        alibi: "Supervisaba la cata en el salón principal, sirviendo vinos personalmente.",
      },
      {
        name: "Carlos Mendoza",
        role: "Maestro de Bodega",
        avatar: "🧑‍🌾",
        description: "Trabaja en el viñedo desde hace 30 años. Jean-Pierre lo acusó de sabotaje en su última crítica.",
        alibi: "Estaba en los viñedos supervisando la cosecha nocturna.",
      },
      {
        name: "Isabelle Moreau",
        role: "Competidora y Propietaria de Viñedo Rival",
        avatar: "💼",
        description:
          "Dueña del viñedo competidor Domaine Moreau. Se beneficiaría enormemente del escándalo de Beaumont.",
        alibi: "Asistía a la cata como invitada VIP, sentada en la primera fila.",
      },
    ],
    clues: [
      {
        title: "Análisis Químico",
        icon: "⚗️",
        description: "El cianuro fue inyectado a través del corcho con una jeringa hipodérmica ultrafina.",
      },
      {
        title: "Registro de Acceso",
        icon: "🔐",
        description:
          "La puerta de la bodega privada fue abierta a las 6:45 AM, tres horas antes de la cata, usando el código de Amélie.",
      },
      {
        title: "Compra Sospechosa",
        icon: "💳",
        description:
          "Se encontró un recibo de farmacia en el auto de Amélie por la compra de 'productos químicos de laboratorio' hace una semana.",
      },
      {
        title: "Diario de Jean-Pierre",
        icon: "📓",
        description:
          "En su diario, Jean-Pierre escribió: 'Amélie me llamó anoche, dijo que quería 'aclarar las cosas' antes de la cata'.",
      },
      {
        title: "Cámaras de Seguridad",
        icon: "📹",
        description:
          "Las cámaras muestran a Amélie entrando sola a la bodega privada a las 6:47 AM con un bolso grande.",
      },
      {
        title: "Testimonio del Camarero",
        icon: "🍽️",
        description:
          "El camarero vio a Amélie insistir específicamente en servir personalmente la copa de Jean-Pierre.",
      },
      {
        title: "Mensaje Borrado",
        icon: "📱",
        description: "Se recuperó un mensaje borrado en el teléfono de Amélie: 'Hoy por fin tendrá lo que merece'.",
      },
      {
        title: "Huella en la Jeringa",
        icon: "💉",
        description:
          "Se encontró una jeringa desechada en el baño de señoras con huellas dactilares parciales de Amélie.",
      },
    ],
    guilty: "Amélie Beaumont",
    solution:
      "Amélie Beaumont es la asesina. El rechazo público de Jean-Pierre hace años, seguido de su devastadora crítica reciente del viñedo familiar, la llevó a planear su venganza meticulosamente. Usando su acceso como enóloga principal, entró a la bodega privada temprano esa mañana con los químicos comprados días antes. Inyectó el cianuro en la botella específica que sabía serviría a Jean-Pierre, basándose en el orden tradicional de cata. Su insistencia en servir personalmente la copa de Jean-Pierre aseguró que la víctima correcta recibiera el vino envenenado. El mensaje borrado revela su intención premeditada. Amélie creyó que su posición de confianza y su coartada en el salón la protegerían, pero la evidencia forense y los registros digitales sellaron su destino.",
  },
  {
    id: 7,
    title: "Traición en la Embajada",
    description: "Espionaje y asesinato en territorio diplomático",
    difficulty: "hard",
    story:
      "El Embajador William Hartley fue encontrado muerto en su oficina privada dentro de la Embajada Británica a las 11:30 PM. Había recibido un disparo con su propia arma de servicio, que tenía solo sus huellas. La investigación preliminar sugiere suicidio, pero documentos clasificados sobre operaciones de inteligencia han desaparecido. Solo cuatro personas estaban en el edificio esa noche con acceso al área segura. El gobierno exige respuestas antes de que estalle un escándalo internacional.",
    suspects: [
      {
        name: "Catherine Hartley",
        role: "Esposa del Embajador",
        avatar: "👩‍💼",
        description: "Ex agente de inteligencia MI6. Su matrimonio estaba en crisis tras descubrir una infidelidad.",
        alibi: "Estaba en su residencia privada dentro del complejo de la embajada.",
      },
      {
        name: "James Mitchell",
        role: "Agregado Militar",
        avatar: "🎖️",
        description: "Veterano de operaciones encubiertas. El Embajador descubrió que vendía información clasificada.",
        alibi: "Trabajaba en su oficina revisando reportes de inteligencia.",
      },
      {
        name: "Natasha Volkov",
        role: "Intérprete Diplomática",
        avatar: "👩‍🏫",
        description: "Ciudadana naturalizada de origen ruso. Tenía acceso a todas las reuniones confidenciales.",
        alibi: "Organizaba archivos en la sala de documentos clasificados.",
      },
      {
        name: "Robert Chen",
        role: "Jefe de Seguridad",
        avatar: "👮",
        description:
          "Ex SAS con 15 años de servicio. El Embajador planeaba reemplazarlo por fallas de seguridad recientes.",
        alibi: "Hacía su ronda de seguridad por el perímetro exterior.",
      },
    ],
    clues: [
      {
        title: "Análisis Balístico",
        icon: "🔫",
        description:
          "El ángulo del disparo es inconsistente con un suicidio. Fue disparado desde aproximadamente 2 metros de distancia.",
      },
      {
        title: "Residuos de Pólvora",
        icon: "🧪",
        description:
          "Las manos del Embajador no tienen residuos de pólvora, imposible si él hubiera disparado el arma.",
      },
      {
        title: "Documentos Encriptados",
        icon: "🗄️",
        description:
          "Los archivos robados contenían evidencia de que James Mitchell filtraba información a potencias extranjeras.",
      },
      {
        title: "Registros de Correo",
        icon: "📨",
        description:
          "El Embajador envió un email a las 11:00 PM a su superior directo: 'Tengo pruebas definitivas contra Mitchell. Confrontación mañana'.",
      },
      {
        title: "Cámaras de Seguridad",
        icon: "📹",
        description:
          "Mysteriosamente, las cámaras del pasillo hacia la oficina del Embajador fueron desactivadas entre 11:15 y 11:35 PM.",
      },
      {
        title: "Tarjeta de Acceso",
        icon: "🎫",
        description: "La tarjeta de James fue usada para acceder al ala privada del Embajador a las 11:18 PM.",
      },
      {
        title: "Cuenta Bancaria Offshore",
        icon: "💰",
        description: "James tiene una cuenta en las Islas Caimán con $2 millones de origen desconocido.",
      },
      {
        title: "Testimonio del Guardia",
        icon: "👁️",
        description:
          "El guardia nocturno vio a James saliendo del ala privada a las 11:33 PM, minutos después del disparo.",
      },
      {
        title: "Mensaje Cifrado",
        icon: "🔐",
        description:
          "Se interceptó un mensaje cifrado del teléfono de James a un agente extranjero: 'Problema resuelto. Documentos en camino'.",
      },
      {
        title: "Análisis de Video",
        icon: "📽️",
        description:
          "Las cámaras exteriores muestran a James en su auto abriendo un sobre grande a las 11:45 PM - los documentos robados.",
      },
    ],
    guilty: "James Mitchell",
    solution:
      "James Mitchell es el asesino. Después de años vendiendo secretos de estado a potencias extranjeras, el Embajador Hartley finalmente reunió pruebas definitivas de su traición. Mitchell sabía que sería arrestado y enjuiciado al día siguiente. Esa noche, usó sus credenciales de alto nivel para acceder al ala privada, desactivó las cámaras usando sus códigos de seguridad, y confrontó a Hartley. Cuando el Embajador se negó a negociar, Mitchell tomó el arma de servicio del escritorio y le disparó, colocándola luego en la mano de Hartley para simular suicidio. Robó los documentos incriminatorios y salió, creyendo que su posición militar lo protegería. No contaba con que el análisis forense revelaría la imposibilidad del suicidio, ni que su mensaje cifrado sería interceptado por contrainteligencia.",
  },
  {
    id: 8,
    title: "Misterio en el Observatorio",
    description: "Desaparición y muerte en la cima de la montaña",
    difficulty: "easy",
    story:
      "El renombrado astrofísico Dr. Alan Kruger desapareció durante su turno nocturno en el Observatorio Montaña Blanca. Su cuerpo fue encontrado al amanecer al pie del acantilado, 300 metros debajo del telescopio principal. La policía asume que fue un accidente, pero su asistente insiste en que Alan tenía miedo a las alturas y nunca se acercaba al borde. Esa noche, Alan estaba a punto de anunciar un descubrimiento que 'cambiaría la astronomía para siempre'. Cuatro personas estaban en el observatorio aislado esa noche.",
    suspects: [
      {
        name: "Dr. Patricia Hayes",
        role: "Astrofísica Rival",
        avatar: "👩‍🔬",
        description:
          "Competidora directa de Alan por fondos de investigación de $10 millones. Fue rechazada tres veces.",
        alibi: "Trabajaba en el laboratorio de datos en el nivel inferior.",
      },
      {
        name: "Marcus Webb",
        role: "Asistente de Investigación",
        avatar: "👨‍💻",
        description:
          "Estudiante de doctorado de Alan. Descubrió que Alan planeaba publicar el descubrimiento sin darle crédito.",
        alibi: "Estaba en su dormitorio descansando después de su turno.",
      },
      {
        name: "Jennifer Nakamura",
        role: "Ingeniera de Telescopios",
        avatar: "🔧",
        description:
          "Mantiene el equipo del observatorio. Alan la acusó de negligencia que dañó el telescopio principal.",
        alibi: "Realizaba mantenimiento de emergencia en la sala de control.",
      },
      {
        name: "Dr. Richard Foster",
        role: "Director del Observatorio",
        avatar: "👨‍💼",
        description: "Mentor de Alan por 20 años. Alan amenazó con exponer malversación de fondos de investigación.",
        alibi: "En su oficina revisando propuestas de financiamiento.",
      },
    ],
    clues: [
      {
        title: "Notas de Investigación",
        icon: "📝",
        description:
          "Las notas del descubrimiento de Alan desaparecieron de su oficina. La computadora fue borrada remotamente.",
      },
      {
        title: "Registro Digital",
        icon: "💻",
        description: "Marcus accedió a la computadora de Alan a las 2:15 AM usando una contraseña robada hace semanas.",
      },
      {
        title: "Cámaras de Seguridad",
        icon: "📹",
        description: "El video muestra a Marcus siguiendo a Alan hacia la plataforma de observación a las 2:30 AM.",
      },
      {
        title: "Fibras de Ropa",
        icon: "🧵",
        description: "Se encontraron fibras de la sudadera de Marcus en la barandilla donde Alan fue empujado.",
      },
      {
        title: "Testimonio del Guardia",
        icon: "👮",
        description: "El guardia escuchó una discusión acalorada cerca del telescopio alrededor de las 2:35 AM.",
      },
      {
        title: "Correos Borrados",
        icon: "📧",
        description: "Marcus envió un email borrado a Patricia: 'Si no me dan crédito, nadie lo tendrá'.",
      },
      {
        title: "Análisis Forense",
        icon: "🔬",
        description: "El cuerpo de Alan tiene marcas de forcejeo y empujón, no consistentes con una caída accidental.",
      },
      {
        title: "Backup en la Nube",
        icon: "☁️",
        description:
          "Se recuperó un backup del descubrimiento de Alan. Confirmaba que Marcus no sería mencionado como coautor.",
      },
    ],
    guilty: "Marcus Webb",
    solution:
      "Marcus Webb es el asesino. Después de años trabajando como asistente de Alan, descubrió que el descubrimiento revolucionario que había ayudado a desarrollar sería publicado solo bajo el nombre de Alan. Enfurecido y sintiendo que su carrera académica estaba arruinada, Marcus decidió tomar acción. Esa noche, después de robar y borrar las notas digitales, siguió a Alan a la plataforma de observación con la excusa de discutir el descubrimiento. En la confrontación, empujó a Alan por el borde del acantilado. Marcus creyó que sin las notas y sin Alan, podría reclamar el descubrimiento como propio. No anticipó que habría backups en la nube, ni que las cámaras de seguridad lo capturarían siguiendo a Alan, ni que las fibras forenses lo vincularían directamente al sitio del crimen.",
  },
]
