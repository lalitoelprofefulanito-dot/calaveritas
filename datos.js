/* ============================================================
   PROYECTO: datos del proyecto «Calaveritas literarias» (Biblioteca, ciclo 2026-2027).
   grupos.ruta = [fecha MM-DD, clave de sesión] en orden cronológico.
   grupos.diaClase / diaLectura = día de la semana de la clase de 50 min y de la lectura de 20 min
     (1 lunes, 2 martes, 3 miércoles, 4 jueves, 5 viernes). Con ellos la página decide sola si
     una fecha es «Clase» o «Lectura»: cualquier sesión puede ir en cualquiera de los dos horarios.
   Una sesión aparece «Próximamente» (bloqueada) hasta que llega su fecha; ese día se habilita.
   recortables = hoja de recortables de cada grupo (PDF en pdf/ e imágenes en img/recortables/).
   sesiones.*.apuntes = lo que se muestra a las familias en cada pestaña:
     hicimos -> «Lo que trabajamos»; aprendimos, faltaste y casa -> «Lo que aprendimos».
   Marcadores que se rellenan solos: {ext} extensión del grado, {nombre} grupo, {modelo} letra del modelo.
   ============================================================ */
window.PROYECTO = {
 "escuela": "Escuela Primaria «Molino de Rosas»",
 "ciclo": "2026-2027",
 "grupos": [
  {
   "id": "1A",
   "nombre": "1.° A",
   "grado": 1,
   "clase": "9:00",
   "diaClase": 3,
   "lectura": "11:30",
   "diaLectura": 1,
   "libros": [
    "BV-1634",
    "BV-1615"
   ],
   "ruta": [
    [
     "10-05",
     "escuchamos"
    ],
    [
     "10-07",
     "conocemos"
    ],
    [
     "10-12",
     "juego"
    ],
    [
     "10-14",
     "juntos"
    ],
    [
     "10-19",
     "recortables"
    ],
    [
     "10-21",
     "escribo"
    ],
    [
     "10-26",
     "pareja"
    ],
    [
     "10-28",
     "reviso"
    ]
   ]
  },
  {
   "id": "2A",
   "nombre": "2.° A",
   "grado": 2,
   "clase": "11:30",
   "diaClase": 2,
   "lectura": "11:30",
   "diaLectura": 5,
   "libros": [
    "BV-1634",
    "BV-1615"
   ],
   "ruta": [
    [
     "10-06",
     "conocemos"
    ],
    [
     "10-09",
     "juego"
    ],
    [
     "10-13",
     "juntos"
    ],
    [
     "10-16",
     "preparo"
    ],
    [
     "10-20",
     "recortables"
    ],
    [
     "10-23",
     "escribo"
    ],
    [
     "10-27",
     "pareja"
    ],
    [
     "10-30",
     "reviso"
    ]
   ]
  },
  {
   "id": "3A",
   "nombre": "3.° A",
   "grado": 3,
   "clase": "12:30",
   "diaClase": 4,
   "lectura": "9:00",
   "diaLectura": 2,
   "libros": [
    "BV-1634",
    "BV-0631"
   ],
   "ruta": [
    [
     "10-06",
     "escuchamos"
    ],
    [
     "10-08",
     "conocemos"
    ],
    [
     "10-13",
     "juego"
    ],
    [
     "10-15",
     "juntos"
    ],
    [
     "10-20",
     "recortables"
    ],
    [
     "10-22",
     "escribo"
    ],
    [
     "10-27",
     "pareja"
    ],
    [
     "10-29",
     "reviso"
    ]
   ]
  },
  {
   "id": "4A",
   "nombre": "4.° A",
   "grado": 4,
   "clase": "11:30",
   "diaClase": 3,
   "lectura": "9:00",
   "diaLectura": 5,
   "libros": [
    "BV-1634",
    "BV-0631"
   ],
   "ruta": [
    [
     "10-07",
     "conocemos"
    ],
    [
     "10-09",
     "juego"
    ],
    [
     "10-14",
     "juntos"
    ],
    [
     "10-16",
     "preparo"
    ],
    [
     "10-21",
     "recortables"
    ],
    [
     "10-23",
     "escribo"
    ],
    [
     "10-28",
     "pareja"
    ],
    [
     "10-30",
     "reviso"
    ]
   ]
  },
  {
   "id": "5A",
   "nombre": "5.° A",
   "grado": 5,
   "clase": "8:00",
   "diaClase": 3,
   "lectura": "10:00",
   "diaLectura": 5,
   "libros": [
    "BV-1634",
    "BV-0631",
    "BV-1575"
   ],
   "ruta": [
    [
     "10-07",
     "conocemos"
    ],
    [
     "10-09",
     "juego"
    ],
    [
     "10-14",
     "juntos"
    ],
    [
     "10-16",
     "preparo"
    ],
    [
     "10-21",
     "recortables"
    ],
    [
     "10-23",
     "escribo"
    ],
    [
     "10-28",
     "pareja"
    ],
    [
     "10-30",
     "reviso"
    ]
   ]
  },
  {
   "id": "6A",
   "nombre": "6.° A",
   "grado": 6,
   "clase": "13:30",
   "diaClase": 4,
   "lectura": "9:00",
   "diaLectura": 1,
   "libros": [
    "BV-1634",
    "BV-0631",
    "BV-1575"
   ],
   "ruta": [
    [
     "10-05",
     "escuchamos"
    ],
    [
     "10-08",
     "conocemos"
    ],
    [
     "10-12",
     "juego"
    ],
    [
     "10-15",
     "juntos"
    ],
    [
     "10-19",
     "recortables"
    ],
    [
     "10-22",
     "escribo"
    ],
    [
     "10-26",
     "pareja"
    ],
    [
     "10-29",
     "reviso"
    ]
   ]
  }
 ],
 "avisos": {
  "10-26": "El Plan Anual reserva este día para la Evaluación de Comprensión Lectora. Si se mantiene, la lectura a la pareja pasa al inicio de la última clase."
 },
 "sesiones": {
  "escuchamos": {
   "tipo": "L",
   "titulo": "Escuchamos calaveritas",
   "herramientas": [
    "modelos",
    "juegos"
   ],
   "apuntes": {
    "hicimos": "Conocimos el libro Calaveritas literarias de la biblioteca y escuchamos calaveritas en voz alta. Antes de la última palabra de cada verso, el grupo adivinaba cuál era.",
    "aprendimos": "Una calaverita literaria es un texto breve en verso, con rima, en el que la Calaca (la Muerte) llega por alguien o por algo, y todo termina con humor y cariño.",
    "faltaste": "No pasa nada: en la siguiente sesión volvemos a leer calaveritas antes de escribir.",
    "casa": "Si quieren, jueguen a buscar palabras que rimen con «Calaca»: vaca, alpaca, hamaca…"
   }
  },
  "conocemos": {
   "tipo": "C",
   "titulo": "Conocemos a la Calaca",
   "herramientas": [
    "taller",
    "modelos",
    "acuerdos"
   ],
   "apuntes": {
    "hicimos": "Vimos a La Catrina, la famosa calavera del grabador José Guadalupe Posada. Leímos el modelo de nuestro grado, buscamos familias de palabras que riman y cada quien eligió a quién le llegará la Calaca en su calaverita. También acordamos cómo hacer humor con cariño.",
    "aprendimos": "La calaverita va dirigida a un personaje, un animal, un objeto, un oficio o una situación de la escuela. Nos reímos con la Calaca, no de las personas.",
    "faltaste": "Piensa a quién le llegará la Calaca en tu calaverita: tu mascota, un juguete, un objeto del salón, un personaje de cuento… En la siguiente sesión lo anotamos juntos.",
    "casa": "Si lo desean, pueden platicar cómo se celebra el Día de Muertos en su familia."
   }
  },
  "juego": {
   "tipo": "L",
   "titulo": "Juego de rimas",
   "herramientas": [
    "rimas",
    "juegos"
   ],
   "apuntes": {
    "hicimos": "Jugamos con familias de palabras que riman y votamos con el semáforo: verde si riman igual, rojo si no riman. Entre todos armamos versos en el pizarrón.",
    "aprendimos": "Dos palabras riman cuando suenan igual al final: salón y dragón, bailar y cantar. Desde 3.° también vale la rima asonante, en la que solo coinciden las vocales: cuarto y zapato.",
    "faltaste": "Repasa el banco de rimas en la pestaña «Lo que trabajamos», en «Buscador y banco de rimas».",
    "casa": "Si quieren, jueguen a decir palabras que rimen con «salón» o con «bailar»."
   }
  },
  "juntos": {
   "tipo": "C",
   "titulo": "Escribimos juntos",
   "herramientas": [
    "taller",
    "juntos",
    "rimas",
    "recursos"
   ],
   "apuntes": {
    "hicimos": "Escribimos entre todo el grupo una calaverita en el pizarrón: primero dijimos la idea en una frase y después buscamos las rimas. Luego cada quien eligió el destinatario de su propia calaverita.",
    "aprendimos": "La receta de la calaverita tiene cinco piezas: a quién va dirigida, la Calaca llega, algo propio, la rima y el giro final.",
    "faltaste": "En la siguiente sesión te ayudamos a elegir tu destinatario. Si quieres, piensa desde ahora un detalle que solo tú sabrías.",
    "casa": ""
   }
  },
  "preparo": {
   "tipo": "L",
   "titulo": "Preparo mi calaverita",
   "herramientas": [
    "taller",
    "rimas"
   ],
   "apuntes": {
    "hicimos": "Cada quien planeó su calaverita con su pareja y la anotó en una tarjeta: a quién le llega la Calaca, qué hace, un detalle propio y tres palabras que riman. Las tarjetas se quedan guardadas en la biblioteca.",
    "aprendimos": "Antes de escribir conviene tener la idea clara: quién, qué pasa y cómo termina.",
    "faltaste": "Tu tarjeta la hacemos al inicio de la siguiente clase. No tienes que traer nada escrito.",
    "casa": ""
   }
  },
  "recortables": {
   "tipo": "L",
   "titulo": "Pegamos los recortables en el cuaderno",
   "herramientas": [
    "recortables",
    "taller"
   ],
   "apuntes": {
    "hicimos": "Recibimos la hoja de recortables de nuestro grado. Recortamos las tarjetas por la línea punteada, elegimos una de cada color y las pegamos en el cuaderno siguiendo la guía «Así organizo mi cuaderno». Con eso quedó listo el plan de la calaverita: quién llega, a quién y qué pasa.",
    "aprendimos": "Planear antes de escribir ayuda: cada color es una pieza de la calaverita y, al pegarlas en orden, ya sabemos qué va en cada verso. Las tarjetas son un apoyo; las ideas y el detalle propio son de cada quien.",
    "faltaste": "No pasa nada: al inicio de la siguiente sesión de biblioteca te damos tu hoja de recortables y te ayudamos a pegarla. No hay que imprimir ni recortar nada en casa.",
    "casa": "Si quieren, pregunten qué tarjetas eligió y por qué. La hoja completa está en «Lo que trabajamos», en «Los recortables de la clase»."
   }
  },
  "escribo": {
   "tipo": "C",
   "titulo": "Escribo mi calaverita",
   "herramientas": [
    "taller",
    "rimas",
    "recortables",
    "modelos"
   ],
   "apuntes": {
    "hicimos": "Con las tarjetas ya pegadas en el cuaderno, cada quien escribió su calaverita, de {ext}. Nos apoyamos en el banco de rimas y en las parejas que riman de los recortables; quien lo necesitó, dictó al maestro o trabajó con su pareja.",
    "aprendimos": "La pieza más importante es «algo propio»: un detalle que solo tú sabrías o inventarías. Eso hace única a tu calaverita.",
    "faltaste": "Escribes tu calaverita en la siguiente sesión de biblioteca, con ayuda del maestro, sea lectura o clase. La calaverita se escribe en la escuela: no se hace en casa ni se copia de internet o de la IA.",
    "casa": ""
   }
  },
  "pareja": {
   "tipo": "L",
   "titulo": "Leo a mi pareja y ajusto",
   "herramientas": [
    "recursos",
    "juegos"
   ],
   "apuntes": {
    "hicimos": "Leímos el borrador a una pareja y lo mejoramos: cambiamos palabras repetidas, completamos versos y agregamos un giro final. Quien no había terminado, terminó aquí.",
    "aprendimos": "Leer en voz alta ayuda a descubrir qué falta o qué se puede mejorar.",
    "faltaste": "Al inicio de la última clase lees tu borrador a una pareja y lo terminas ahí.",
    "casa": ""
   }
  },
  "reviso": {
   "tipo": "C",
   "titulo": "Reviso, paso en limpio y leo",
   "herramientas": [
    "juntos",
    "acuerdos"
   ],
   "apuntes": {
    "hicimos": "Revisamos la calaverita con la lista de cotejo, la pasamos en limpio con título y seudónimo, la decoramos y la leímos en voz alta. Las calaveritas quedan en el muro de la escuela.",
    "aprendimos": "Firmamos con seudónimo o iniciales, grado y grupo: nunca con apellidos.",
    "faltaste": "Acércate al maestro de biblioteca: buscamos un momento en la escuela para que termines y tu calaverita llegue al muro.",
    "casa": "Visiten el muro de la escuela. Con su autorización firmada, la calaverita se publica en el sitio de Biblioteca Viva, solo con seudónimo."
   }
  }
 },
 "recortables": {
  "1A": {
   "pdf": "pdf/calaveritas-1A.pdf",
   "guia": "Cada color es una pieza del pareado: quién llega, por quién, qué hizo y la rima. Se elige una tarjeta de cada color y se pegan en orden; el maestro ayuda a leerlas.",
   "hojas": [
    [
     "img/recortables/rec-1A-1.webp",
     "Hoja 1 de recortables de 1.° A: tarjetas de ¿Quién llega? (la Calaca, la Flaca, la Pelona, la Catrina) y ¿Por quién? (animales, familia, mascota)."
    ],
    [
     "img/recortables/rec-1A-2.webp",
     "Hoja 2 de recortables de 1.° A: tarjetas de ¿Qué hizo?, de La rima con su palabra que rima, y tarjetas en blanco para título, detalle e iniciales."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-1A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 1.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  },
  "2A": {
   "pdf": "pdf/calaveritas-2A.pdf",
   "guia": "Cada color es un verso del cuarteto. Se elige una tarjeta de cada color y se pega un verso en cada renglón; riman el verso 2 y el 4 (terminan en -ó).",
   "hojas": [
    [
     "img/recortables/rec-2A-1.webp",
     "Hoja 1 de recortables de 2.° A: guía para pegar 4 versos y tarjetas de ¿A quién le llega la Calaca?, ¿Qué hacía? y verso 2: ¿quién llega?."
    ],
    [
     "img/recortables/rec-2A-2.webp",
     "Hoja 2 de recortables de 2.° A: tarjetas del verso 3 (qué hizo la Calaca), del verso 4 (final en -ó), sonidos y tarjetas en blanco."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-2A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 2.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  },
  "3A": {
   "pdf": "pdf/calaveritas-3A.pdf",
   "guia": "Cada color es un verso. Todas las tarjetas de los versos 2, 4 y 6 terminan en -ar, así que la rima funciona con cualquier combinación. El detalle propio se escribe a mano en el verso 1.",
   "hojas": [
    [
     "img/recortables/rec-3A-1.webp",
     "Hoja 1 de recortables de 3.° A: guía para pegar 6 versos que riman en -ar y tarjetas de arranque, a quién y qué hacía."
    ],
    [
     "img/recortables/rec-3A-2.webp",
     "Hoja 2 de recortables de 3.° A: tarjetas de quién llega, qué quería, qué le pasó a la Calaca, final en -ar y tarjetas en blanco."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-3A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 3.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  },
  "4A": {
   "pdf": "pdf/calaveritas-4A.pdf",
   "guia": "Las tarjetas arman el plan (a quién, qué hacía, quién llega, qué le pasa y final). Los versos los escribe cada quien, con apoyo de arranques y parejas que riman.",
   "hojas": [
    [
     "img/recortables/rec-4A-1.webp",
     "Hoja 1 de recortables de 4.° A: guía del plan y tarjetas de a quién, qué hacía y nombres de la Muerte con sus rimas."
    ],
    [
     "img/recortables/rec-4A-2.webp",
     "Hoja 2 de recortables de 4.° A: tarjetas de qué le pasa, final sorpresa, arranques, parejas que riman y tarjetas en blanco."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-4A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 4.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  },
  "5A": {
   "pdf": "pdf/calaveritas-5A.pdf",
   "guia": "Primero se pega la ficha del personaje y se responde; luego se arma el plan con las tarjetas de colores. Las dos estrofas las escribe cada quien, con arranques, recursos literarios y parejas que riman.",
   "hojas": [
    [
     "img/recortables/rec-5A-1.webp",
     "Hoja 1 de recortables de 5.° A: guía del cuaderno, ficha del personaje en seis preguntas, nombres de la Muerte con sus rimas, qué le pasa y giro final."
    ],
    [
     "img/recortables/rec-5A-2.webp",
     "Hoja 2 de recortables de 5.° A: arranques, recursos literarios con ejemplo, organizador de estrofas, parejas que riman y tarjetas en blanco."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-5A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 5.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  },
  "6A": {
   "pdf": "pdf/calaveritas-6A.pdf",
   "guia": "Primero se pega la ficha del personaje y se responde; luego se arma el plan con las tarjetas de colores. Las dos estrofas las escribe cada quien, con arranques, recursos literarios y parejas que riman.",
   "hojas": [
    [
     "img/recortables/rec-6A-1.webp",
     "Hoja 1 de recortables de 6.° A: guía del cuaderno, ficha del personaje en seis preguntas, nombres de la Muerte con sus rimas, qué le pasa y giro final."
    ],
    [
     "img/recortables/rec-6A-2.webp",
     "Hoja 2 de recortables de 6.° A: arranques, recursos literarios con ejemplo, organizador de estrofas, parejas que riman y tarjetas en blanco."
    ]
   ],
   "cuaderno": "img/recortables/cuaderno-6A.webp",
   "cuadernoAlt": "Guía «Así organizo mi cuaderno» de 6.° A: renglón por renglón, los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano."
  }
 },
 "libros": {
  "BV-1634": "Calaveritas literarias",
  "BV-1615": "Naranja dulce, limón partido",
  "BV-0631": "El nombre del juego es José Guadalupe Posada",
  "BV-1575": "La Muerte pies ligeros"
 },
 "extension": {
  "1": {
   "texto": "2 versos (un pareado)",
   "min": 2,
   "max": 2
  },
  "2": {
   "texto": "4 versos",
   "min": 4,
   "max": 4
  },
  "3": {
   "texto": "4 a 6 versos",
   "min": 4,
   "max": 6
  },
  "4": {
   "texto": "6 a 8 versos",
   "min": 6,
   "max": 8
  },
  "5": {
   "texto": "8 versos o más, con un giro final",
   "min": 8,
   "max": 99
  },
  "6": {
   "texto": "8 versos o más, con un giro final",
   "min": 8,
   "max": 99
  }
 },
 "receta": [
  {
   "n": 1,
   "pieza": "A quién",
   "que": "El destinatario: un personaje, un animal, un objeto, un oficio o una situación de la escuela.",
   "ej": "«El despertador», «mi gato», «la tarea»"
  },
  {
   "n": 2,
   "pieza": "La Calaca llega",
   "que": "Entra la Muerte con alguna acción.",
   "ej": "«La Calaca llegó al salón»"
  },
  {
   "n": 3,
   "pieza": "Algo propio",
   "que": "Un detalle que solo tú podrías saber o inventar. Esta pieza vuelve única a cada calaverita.",
   "ej": "«…con su sombrero de papel picado»"
  },
  {
   "n": 4,
   "pieza": "La rima",
   "que": "Las palabras finales de dos versos suenan igual.",
   "ej": "salón / dragón"
  },
  {
   "n": 5,
   "pieza": "El giro",
   "que": "Una salida graciosa o sorpresiva al final.",
   "ej": "La Calaca termina bailando"
  }
 ],
 "acuerdos": [
  "Nos reímos con la Calaca, no de las personas.",
  "No escribimos sobre el cuerpo, la apariencia, la lengua, la familia o la salud de nadie.",
  "Si no estamos seguros, preguntamos: «¿le daría risa a quien lo escucha?»"
 ],
 "requisitos": [
  [
   "Es una calaverita",
   "Verso con rima y la Calaca (la Muerte) como personaje"
  ],
  [
   "Humor con cariño",
   "Nos reímos con la Calaca, no de las personas. Sin burlas al cuerpo, la apariencia, la lengua, la familia, la salud ni a pérdidas reales"
  ],
  [
   "A quién va dirigida",
   "A un personaje, animal, objeto, oficio o situación de la escuela. En 5.° y 6.° también a un personaje histórico o literario. Si es una persona viva, solo con su permiso y sin nombre completo"
  ],
  [
   "Tu voz",
   "Original y escrita en clase. Lleva al menos un detalle que solo tú sabrías o inventarías. No se copia de libros, internet ni de herramientas de IA; los modelos sirven de inspiración"
  ],
  [
   "Extensión",
   "@extension"
  ],
  [
   "Firma protegida",
   "Título, seudónimo (o iniciales) y grado y grupo. Sin apellidos ni otros datos"
  ],
  [
   "Terminada en clase",
   "Se entrega al final de la última clase; no hay tarea en casa"
  ]
 ],
 "modelos": [
  {
   "id": "A",
   "para": [
    1
   ],
   "nota": "Dos versos, rima consonante",
   "versos": [
    "La Calaca llegó al [salón]",
    "y bailó con el [dragón]."
   ]
  },
  {
   "id": "B",
   "para": [
    2
   ],
   "nota": "Cuatro versos; riman el segundo y el cuarto",
   "versos": [
    "A mi gato Bigotón",
    "la Calaca fue a [buscar];",
    "pero él se hizo el dormido",
    "y la dejó sin [bailar]."
   ]
  },
  {
   "id": "C",
   "para": [
    3
   ],
   "nota": "Seis versos; riman el 2, el 4 y el 6",
   "versos": [
    "La Calaca entró a la escuela",
    "con su sombrero a [rondar];",
    "mas halló a todos leyendo",
    "y no la quisieron [mirar].",
    "Se sentó junto al estante",
    "y se puso a [hojear]."
   ]
  },
  {
   "id": "D",
   "para": [
    4
   ],
   "nota": "Seis versos con epitafio y rimas por parejas",
   "versos": [
    "Aquí yace el [despertador],",
    "que sonaba con gran [ardor];",
    "cada lunes, al [amanecer],",
    "gritaba: «¡Ya es hora de [leer]!»",
    "La Calaca, sin hacer [ruido],",
    "se lo llevó… ¡y qué bien he [dormido]!"
   ]
  },
  {
   "id": "E",
   "para": [
    5,
    6
   ],
   "nota": "Cuatro versos con rima en el segundo y el cuarto; el grupo le agrega un giro propio",
   "versos": [
    "Cuentan que la Calaca, un lunes,",
    "quiso llevarse el [recreo];",
    "mas los niños, con ingenio,",
    "le armaron un gran [torneo]."
   ]
  }
 ],
 "temas": {
  "d": "Día de Muertos",
  "m": "Nombres de la Muerte",
  "e": "Escuela",
  "a": "Animales",
  "c": "Comida",
  "o": "Casa y objetos",
  "n": "Naturaleza",
  "p": "Personas y personajes",
  "v": "Acciones"
 },
 "banco": [
  {
   "t": "-aca",
   "p": [
    [
     "Calaca",
     "💀",
     "m"
    ],
    [
     "Flaca",
     "💀",
     "m"
    ],
    [
     "vaca",
     "🐄",
     "a"
    ],
    [
     "alpaca",
     "🦙",
     "a"
    ],
    [
     "urraca",
     "🐦",
     "a"
    ],
    [
     "hamaca",
     "",
     "o"
    ],
    [
     "matraca",
     "",
     "o"
    ],
    [
     "butaca",
     "💺",
     "o"
    ],
    [
     "saca",
     "",
     "v"
    ]
   ]
  },
  {
   "t": "-ona",
   "p": [
    [
     "Pelona",
     "💀",
     "m"
    ],
    [
     "Dientona",
     "💀",
     "m"
    ],
    [
     "Llorona",
     "👻",
     "d"
    ],
    [
     "corona",
     "👑",
     "o"
    ],
    [
     "lona",
     "",
     "o"
    ],
    [
     "juguetona",
     "",
     "p"
    ],
    [
     "dormilona",
     "😴",
     "p"
    ],
    [
     "comelona",
     "",
     "p"
    ],
    [
     "persona",
     "",
     "p"
    ]
   ]
  },
  {
   "t": "-uda",
   "p": [
    [
     "Huesuda",
     "💀",
     "m"
    ],
    [
     "ayuda",
     "",
     "v"
    ],
    [
     "saluda",
     "👋",
     "v"
    ],
    [
     "estornuda",
     "🤧",
     "v"
    ],
    [
     "peluda",
     "",
     "a"
    ],
    [
     "muda",
     "",
     "p"
    ],
    [
     "menuda",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ina",
   "p": [
    [
     "Catrina",
     "💀",
     "m"
    ],
    [
     "cocina",
     "🍳",
     "o"
    ],
    [
     "gallina",
     "🐔",
     "a"
    ],
    [
     "mandarina",
     "🍊",
     "c"
    ],
    [
     "gelatina",
     "🍮",
     "c"
    ],
    [
     "golosina",
     "🍬",
     "c"
    ],
    [
     "esquina",
     "",
     "o"
    ],
    [
     "cortina",
     "",
     "o"
    ],
    [
     "bailarina",
     "🩰",
     "p"
    ],
    [
     "neblina",
     "🌫️",
     "n"
    ],
    [
     "tina",
     "🛁",
     "o"
    ]
   ]
  },
  {
   "t": "-ica",
   "p": [
    [
     "Tilica",
     "💀",
     "m"
    ],
    [
     "platica",
     "",
     "v"
    ],
    [
     "salpica",
     "",
     "v"
    ],
    [
     "explica",
     "",
     "v"
    ],
    [
     "pica",
     "",
     "v"
    ],
    [
     "rica",
     "😋",
     "c"
    ],
    [
     "chica",
     "",
     "p"
    ]
   ]
  },
  {
   "t": "-era",
   "p": [
    [
     "Calavera",
     "💀",
     "m"
    ],
    [
     "escalera",
     "",
     "o"
    ],
    [
     "primavera",
     "🌸",
     "n"
    ],
    [
     "pradera",
     "",
     "n"
    ],
    [
     "regadera",
     "🚿",
     "o"
    ],
    [
     "carretera",
     "🛣️",
     "o"
    ],
    [
     "bandera",
     "🚩",
     "e"
    ],
    [
     "tijera",
     "✂️",
     "e"
    ],
    [
     "pecera",
     "🐠",
     "o"
    ],
    [
     "cafetera",
     "☕",
     "o"
    ],
    [
     "primera",
     "🥇",
     ""
    ]
   ]
  },
  {
   "t": "-arca",
   "p": [
    [
     "Parca",
     "💀",
     "m"
    ],
    [
     "barca",
     "⛵",
     "o"
    ],
    [
     "marca",
     "",
     "v"
    ],
    [
     "charca",
     "",
     "n"
    ],
    [
     "arca",
     "",
     "o"
    ]
   ]
  },
  {
   "t": "-ada",
   "p": [
    [
     "Descarnada",
     "💀",
     "m"
    ],
    [
     "almohada",
     "",
     "o"
    ],
    [
     "tostada",
     "",
     "c"
    ],
    [
     "ensalada",
     "🥗",
     "c"
    ],
    [
     "empanada",
     "🥟",
     "c"
    ],
    [
     "limonada",
     "🍋",
     "c"
    ],
    [
     "mermelada",
     "",
     "c"
    ],
    [
     "carcajada",
     "😂",
     "v"
    ],
    [
     "mirada",
     "👀",
     ""
    ],
    [
     "cucharada",
     "🥄",
     "c"
    ],
    [
     "patada",
     "",
     "v"
    ]
   ]
  },
  {
   "t": "-erte",
   "p": [
    [
     "Muerte",
     "💀",
     "m"
    ],
    [
     "suerte",
     "🍀",
     ""
    ],
    [
     "fuerte",
     "💪",
     ""
    ],
    [
     "verte",
     "👀",
     "v"
    ],
    [
     "despierte",
     "",
     "v"
    ]
   ]
  },
  {
   "t": "-ón",
   "p": [
    [
     "salón",
     "🏫",
     "e"
    ],
    [
     "panteón",
     "🪦",
     "d"
    ],
    [
     "dragón",
     "🐉",
     "p"
    ],
    [
     "ratón",
     "🐭",
     "a"
    ],
    [
     "león",
     "🦁",
     "a"
    ],
    [
     "tiburón",
     "🦈",
     "a"
    ],
    [
     "camaleón",
     "🦎",
     "a"
    ],
    [
     "balón",
     "⚽",
     "e"
    ],
    [
     "camión",
     "🚌",
     "o"
    ],
    [
     "avión",
     "✈️",
     "o"
    ],
    [
     "corazón",
     "❤️",
     ""
    ],
    [
     "jabón",
     "🧼",
     "o"
    ],
    [
     "botón",
     "🔘",
     "o"
    ],
    [
     "cajón",
     "",
     "o"
    ],
    [
     "colchón",
     "🛏️",
     "o"
    ],
    [
     "pantalón",
     "👖",
     "o"
    ],
    [
     "listón",
     "🎀",
     "o"
    ],
    [
     "melón",
     "🍈",
     "c"
    ],
    [
     "limón",
     "🍋",
     "c"
    ],
    [
     "chicharrón",
     "",
     "c"
    ],
    [
     "canción",
     "🎵",
     "e"
    ],
    [
     "pizarrón",
     "",
     "e"
    ]
   ]
  },
  {
   "t": "-ar",
   "p": [
    [
     "altar",
     "🕯️",
     "d"
    ],
    [
     "bailar",
     "💃",
     "v"
    ],
    [
     "cantar",
     "🎤",
     "v"
    ],
    [
     "jugar",
     "🎲",
     "v"
    ],
    [
     "saltar",
     "",
     "v"
    ],
    [
     "brincar",
     "",
     "v"
    ],
    [
     "volar",
     "🪽",
     "v"
    ],
    [
     "nadar",
     "🏊",
     "v"
    ],
    [
     "soñar",
     "💭",
     "v"
    ],
    [
     "pasear",
     "",
     "v"
    ],
    [
     "cocinar",
     "",
     "v"
    ],
    [
     "despertar",
     "⏰",
     "v"
    ],
    [
     "recordar",
     "",
     "d"
    ],
    [
     "mar",
     "🌊",
     "n"
    ],
    [
     "lugar",
     "",
     ""
    ],
    [
     "hogar",
     "🏠",
     "o"
    ],
    [
     "collar",
     "📿",
     "o"
    ]
   ]
  },
  {
   "t": "-ela",
   "p": [
    [
     "vela",
     "🕯️",
     "d"
    ],
    [
     "escuela",
     "🏫",
     "e"
    ],
    [
     "acuarela",
     "🎨",
     "e"
    ],
    [
     "rayuela",
     "",
     "e"
    ],
    [
     "abuela",
     "",
     "p"
    ],
    [
     "canela",
     "",
     "c"
    ],
    [
     "cazuela",
     "🍲",
     "c"
    ],
    [
     "ciruela",
     "",
     "c"
    ],
    [
     "tela",
     "",
     "o"
    ],
    [
     "suela",
     "",
     "o"
    ]
   ]
  },
  {
   "t": "-elo",
   "p": [
    [
     "cielo",
     "☁️",
     "n"
    ],
    [
     "hielo",
     "🧊",
     "n"
    ],
    [
     "suelo",
     "",
     "n"
    ],
    [
     "vuelo",
     "✈️",
     "v"
    ],
    [
     "pañuelo",
     "",
     "o"
    ],
    [
     "abuelo",
     "",
     "p"
    ],
    [
     "caramelo",
     "🍬",
     "c"
    ],
    [
     "modelo",
     "",
     "e"
    ]
   ]
  },
  {
   "t": "-ato",
   "p": [
    [
     "retrato",
     "🖼️",
     "d"
    ],
    [
     "gato",
     "🐱",
     "a"
    ],
    [
     "pato",
     "🦆",
     "a"
    ],
    [
     "zapato",
     "👞",
     "o"
    ],
    [
     "plato",
     "🍽️",
     "o"
    ],
    [
     "garabato",
     "",
     "e"
    ],
    [
     "aparato",
     "",
     "o"
    ],
    [
     "rato",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ero",
   "p": [
    [
     "sombrero",
     "🎩",
     "o"
    ],
    [
     "librero",
     "📚",
     "e"
    ],
    [
     "florero",
     "💐",
     "o"
    ],
    [
     "salero",
     "🧂",
     "o"
    ],
    [
     "ropero",
     "",
     "o"
    ],
    [
     "agujero",
     "🕳️",
     "o"
    ],
    [
     "cartero",
     "✉️",
     "p"
    ],
    [
     "panadero",
     "🥖",
     "p"
    ],
    [
     "bombero",
     "🚒",
     "p"
    ],
    [
     "cocinero",
     "👨‍🍳",
     "p"
    ],
    [
     "carpintero",
     "🪚",
     "p"
    ],
    [
     "granjero",
     "",
     "p"
    ],
    [
     "sendero",
     "",
     "n"
    ],
    [
     "enero",
     "",
     ""
    ],
    [
     "primero",
     "🥇",
     ""
    ]
   ]
  },
  {
   "t": "-ido",
   "p": [
    [
     "dormido",
     "😴",
     "v"
    ],
    [
     "escondido",
     "🙈",
     "v"
    ],
    [
     "divertido",
     "😄",
     ""
    ],
    [
     "aburrido",
     "🥱",
     ""
    ],
    [
     "sonido",
     "🔊",
     ""
    ],
    [
     "ruido",
     "",
     ""
    ],
    [
     "nido",
     "🪺",
     "a"
    ],
    [
     "vestido",
     "👗",
     "o"
    ],
    [
     "perdido",
     "",
     ""
    ],
    [
     "olvido",
     "",
     ""
    ],
    [
     "querido",
     "❤️",
     ""
    ]
   ]
  },
  {
   "t": "-ida",
   "p": [
    [
     "comida",
     "🍽️",
     "c"
    ],
    [
     "bebida",
     "🥤",
     "c"
    ],
    [
     "salida",
     "🚪",
     "e"
    ],
    [
     "despedida",
     "👋",
     "d"
    ],
    [
     "bienvenida",
     "",
     ""
    ],
    [
     "vida",
     "",
     ""
    ],
    [
     "mordida",
     "",
     "v"
    ],
    [
     "partida",
     "",
     "e"
    ]
   ]
  },
  {
   "t": "-ado",
   "p": [
    [
     "helado",
     "🍦",
     "c"
    ],
    [
     "pescado",
     "🐟",
     "c"
    ],
    [
     "venado",
     "🦌",
     "a"
    ],
    [
     "mercado",
     "🛒",
     "o"
    ],
    [
     "candado",
     "🔒",
     "o"
    ],
    [
     "tejado",
     "",
     "o"
    ],
    [
     "soldado",
     "",
     "p"
    ],
    [
     "invitado",
     "",
     "p"
    ],
    [
     "colorado",
     "",
     ""
    ],
    [
     "cansado",
     "",
     ""
    ],
    [
     "pasado",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-or",
   "p": [
    [
     "despertador",
     "⏰",
     "o"
    ],
    [
     "tambor",
     "🥁",
     "o"
    ],
    [
     "tractor",
     "🚜",
     "o"
    ],
    [
     "motor",
     "",
     "o"
    ],
    [
     "flor",
     "🌼",
     "n"
    ],
    [
     "calor",
     "☀️",
     "n"
    ],
    [
     "color",
     "🎨",
     "e"
    ],
    [
     "profesor",
     "",
     "p"
    ],
    [
     "doctor",
     "🩺",
     "p"
    ],
    [
     "pintor",
     "🖌️",
     "p"
    ],
    [
     "señor",
     "",
     "p"
    ],
    [
     "sabor",
     "😋",
     "c"
    ],
    [
     "olor",
     "",
     ""
    ],
    [
     "amor",
     "❤️",
     ""
    ]
   ]
  },
  {
   "t": "-ía",
   "p": [
    [
     "día",
     "☀️",
     ""
    ],
    [
     "mediodía",
     "",
     ""
    ],
    [
     "sandía",
     "🍉",
     "c"
    ],
    [
     "panadería",
     "🥐",
     "o"
    ],
    [
     "lotería",
     "🎴",
     "o"
    ],
    [
     "fotografía",
     "📷",
     "d"
    ],
    [
     "alegría",
     "😄",
     ""
    ],
    [
     "poesía",
     "📜",
     "e"
    ],
    [
     "melodía",
     "🎶",
     ""
    ],
    [
     "fantasía",
     "✨",
     ""
    ],
    [
     "policía",
     "👮",
     "p"
    ],
    [
     "dormía",
     "😴",
     "v"
    ],
    [
     "comía",
     "",
     "v"
    ],
    [
     "decía",
     "",
     "v"
    ],
    [
     "sonreía",
     "🙂",
     "v"
    ]
   ]
  },
  {
   "t": "-ote",
   "p": [
    [
     "tejocote",
     "",
     "d"
    ],
    [
     "elote",
     "🌽",
     "c"
    ],
    [
     "camote",
     "🍠",
     "c"
    ],
    [
     "chayote",
     "",
     "c"
    ],
    [
     "zapote",
     "",
     "c"
    ],
    [
     "guajolote",
     "🦃",
     "a"
    ],
    [
     "papalote",
     "🪁",
     "o"
    ],
    [
     "bigote",
     "🥸",
     ""
    ]
   ]
  },
  {
   "t": "-eso",
   "p": [
    [
     "hueso",
     "🦴",
     "d"
    ],
    [
     "queso",
     "🧀",
     "c"
    ],
    [
     "travieso",
     "😜",
     ""
    ],
    [
     "regreso",
     "🔙",
     ""
    ],
    [
     "tieso",
     "",
     ""
    ],
    [
     "beso",
     "😘",
     ""
    ],
    [
     "peso",
     "🪙",
     "o"
    ]
   ]
  },
  {
   "t": "-ana",
   "p": [
    [
     "ventana",
     "🪟",
     "o"
    ],
    [
     "campana",
     "🔔",
     "e"
    ],
    [
     "semana",
     "📅",
     "e"
    ],
    [
     "manzana",
     "🍎",
     "c"
    ],
    [
     "banana",
     "🍌",
     "c"
    ],
    [
     "mañana",
     "🌅",
     "n"
    ],
    [
     "rana",
     "🐸",
     "a"
    ],
    [
     "iguana",
     "🦎",
     "a"
    ],
    [
     "hermana",
     "",
     "p"
    ],
    [
     "lana",
     "🧶",
     "o"
    ]
   ]
  },
  {
   "t": "-eta",
   "p": [
    [
     "maceta",
     "🪴",
     "o"
    ],
    [
     "maleta",
     "🧳",
     "o"
    ],
    [
     "bicicleta",
     "🚲",
     "o"
    ],
    [
     "trompeta",
     "🎺",
     "o"
    ],
    [
     "camiseta",
     "👕",
     "o"
    ],
    [
     "libreta",
     "📒",
     "e"
    ],
    [
     "galleta",
     "🍪",
     "c"
    ],
    [
     "paleta",
     "🍭",
     "c"
    ],
    [
     "receta",
     "",
     "c"
    ],
    [
     "cometa",
     "☄️",
     "n"
    ],
    [
     "planeta",
     "🪐",
     "n"
    ]
   ]
  },
  {
   "t": "-ola",
   "p": [
    [
     "ola",
     "🌊",
     "n"
    ],
    [
     "amapola",
     "🌺",
     "n"
    ],
    [
     "caracola",
     "🐚",
     "a"
    ],
    [
     "bola",
     "",
     "o"
    ],
    [
     "consola",
     "🎮",
     "o"
    ],
    [
     "cacerola",
     "",
     "o"
    ],
    [
     "cola",
     "",
     ""
    ],
    [
     "sola",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ura",
   "p": [
    [
     "lectura",
     "📖",
     "e"
    ],
    [
     "escritura",
     "✍️",
     "e"
    ],
    [
     "pintura",
     "🎨",
     "e"
    ],
    [
     "basura",
     "🗑️",
     "o"
    ],
    [
     "armadura",
     "",
     "o"
    ],
    [
     "aventura",
     "🗺️",
     ""
    ],
    [
     "travesura",
     "😜",
     ""
    ],
    [
     "dulzura",
     "🍯",
     ""
    ],
    [
     "altura",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ino",
   "p": [
    [
     "camino",
     "🛤️",
     "n"
    ],
    [
     "pino",
     "🌲",
     "n"
    ],
    [
     "molino",
     "",
     "o"
    ],
    [
     "pepino",
     "🥒",
     "c"
    ],
    [
     "comino",
     "",
     "c"
    ],
    [
     "vecino",
     "",
     "p"
    ],
    [
     "padrino",
     "",
     "p"
    ],
    [
     "sobrino",
     "",
     "p"
    ],
    [
     "destino",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ol",
   "p": [
    [
     "farol",
     "🏮",
     "d"
    ],
    [
     "sol",
     "☀️",
     "n"
    ],
    [
     "girasol",
     "🌻",
     "n"
    ],
    [
     "caracol",
     "🐌",
     "a"
    ],
    [
     "frijol",
     "🫘",
     "c"
    ],
    [
     "col",
     "🥬",
     "c"
    ],
    [
     "español",
     "",
     "e"
    ]
   ]
  },
  {
   "t": "-ín",
   "p": [
    [
     "jardín",
     "🌷",
     "n"
    ],
    [
     "delfín",
     "🐬",
     "a"
    ],
    [
     "calcetín",
     "🧦",
     "o"
    ],
    [
     "cojín",
     "",
     "o"
    ],
    [
     "patín",
     "🛼",
     "o"
    ],
    [
     "violín",
     "🎻",
     "o"
    ],
    [
     "festín",
     "",
     "c"
    ],
    [
     "parlanchín",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ena",
   "p": [
    [
     "cena",
     "",
     "c"
    ],
    [
     "arena",
     "🏖️",
     "n"
    ],
    [
     "ballena",
     "🐋",
     "a"
    ],
    [
     "colmena",
     "🐝",
     "a"
    ],
    [
     "sirena",
     "🧜",
     "p"
    ],
    [
     "cadena",
     "⛓️",
     "o"
    ],
    [
     "antena",
     "📡",
     "o"
    ]
   ]
  },
  {
   "t": "-ante",
   "p": [
    [
     "estante",
     "📚",
     "e"
    ],
    [
     "elefante",
     "🐘",
     "a"
    ],
    [
     "gigante",
     "",
     "p"
    ],
    [
     "cantante",
     "🎤",
     "p"
    ],
    [
     "guante",
     "🧤",
     "o"
    ],
    [
     "diamante",
     "💎",
     "o"
    ],
    [
     "volante",
     "",
     "o"
    ],
    [
     "brillante",
     "✨",
     ""
    ]
   ]
  },
  {
   "t": "-aso",
   "p": [
    [
     "payaso",
     "🤡",
     "p"
    ],
    [
     "vaso",
     "🥛",
     "o"
    ],
    [
     "paso",
     "👣",
     "v"
    ],
    [
     "ocaso",
     "🌇",
     "n"
    ],
    [
     "caso",
     "",
     ""
    ]
   ]
  },
  {
   "t": "-ente",
   "p": [
    [
     "puente",
     "🌉",
     "o"
    ],
    [
     "fuente",
     "⛲",
     "n"
    ],
    [
     "serpiente",
     "🐍",
     "a"
    ],
    [
     "gente",
     "",
     ""
    ],
    [
     "valiente",
     "",
     ""
    ],
    [
     "presente",
     "🎁",
     ""
    ],
    [
     "caliente",
     "🔥",
     ""
    ]
   ]
  },
  {
   "t": "-ó",
   "p": [
    [
     "llegó",
     "",
     "v"
    ],
    [
     "bailó",
     "💃",
     "v"
    ],
    [
     "comió",
     "",
     "v"
    ],
    [
     "durmió",
     "😴",
     "v"
    ],
    [
     "saltó",
     "",
     "v"
    ],
    [
     "cantó",
     "🎤",
     "v"
    ],
    [
     "tropezó",
     "",
     "v"
    ],
    [
     "escapó",
     "🏃",
     "v"
    ],
    [
     "gritó",
     "📣",
     "v"
    ],
    [
     "cayó",
     "",
     "v"
    ],
    [
     "se llevó",
     "",
     "v"
    ]
   ]
  },
  {
   "t": "-aba",
   "p": [
    [
     "estaba",
     "",
     ""
    ],
    [
     "jugaba",
     "",
     "v"
    ],
    [
     "bailaba",
     "",
     "v"
    ],
    [
     "cantaba",
     "",
     "v"
    ],
    [
     "soñaba",
     "💭",
     "v"
    ],
    [
     "roncaba",
     "😴",
     "v"
    ],
    [
     "lloraba",
     "",
     "v"
    ],
    [
     "miraba",
     "👀",
     "v"
    ]
   ]
  },
  {
   "t": "-ando",
   "p": [
    [
     "cantando",
     "🎤",
     "v"
    ],
    [
     "bailando",
     "💃",
     "v"
    ],
    [
     "jugando",
     "🎲",
     "v"
    ],
    [
     "saltando",
     "",
     "v"
    ],
    [
     "soñando",
     "💭",
     "v"
    ],
    [
     "roncando",
     "😴",
     "v"
    ],
    [
     "volando",
     "🪽",
     "v"
    ]
   ]
  },
  {
   "t": "-endo",
   "p": [
    [
     "durmiendo",
     "😴",
     "v"
    ],
    [
     "comiendo",
     "",
     "v"
    ],
    [
     "corriendo",
     "🏃",
     "v"
    ],
    [
     "leyendo",
     "📖",
     "v"
    ],
    [
     "escondiendo",
     "🙈",
     "v"
    ],
    [
     "sonriendo",
     "🙂",
     "v"
    ],
    [
     "riendo",
     "😄",
     "v"
    ]
   ]
  }
 ],
 "nombresMuerte": [
  [
   "la Calaca",
   "La más usada en las calaveritas"
  ],
  [
   "la Flaca",
   "Porque es puro hueso"
  ],
  [
   "la Huesuda",
   "Por sus huesos"
  ],
  [
   "la Pelona",
   "Porque no tiene pelo"
  ],
  [
   "la Catrina",
   "La elegante calavera de Posada"
  ],
  [
   "la Dientona",
   "Por su gran sonrisa"
  ],
  [
   "la Tilica",
   "Flaquita, flaquita"
  ],
  [
   "la Calavera",
   "Como su cabeza de hueso"
  ],
  [
   "la Parca",
   "Nombre antiguo de la Muerte"
  ],
  [
   "la Descarnada",
   "Porque no tiene carne"
  ],
  [
   "la Muerte",
   "Su nombre de siempre"
  ]
 ],
 "recursos": [
  {
   "id": "rima",
   "nombre": "Rima",
   "ic": "🎵",
   "grados": [
    1,
    2,
    3,
    4,
    5,
    6
   ],
   "que": "Dos palabras riman cuando suenan igual al final.",
   "ejemplo": "La Calaca llegó al salón / y bailó con el dragón."
  },
  {
   "id": "asonante",
   "nombre": "Rima asonante",
   "ic": "🔈",
   "grados": [
    3,
    4,
    5,
    6
   ],
   "que": "Solo coinciden las vocales desde la vocal fuerte: cuarto y zapato (a-o).",
   "ejemplo": "La Flaca se fue a la fiesta / con su vestido de tierra."
  },
  {
   "id": "onomatopeya",
   "nombre": "Onomatopeya",
   "ic": "💥",
   "grados": [
    1,
    2
   ],
   "que": "Palabras que imitan sonidos: ¡pum!, miau, clac clac, ñam ñam.",
   "ejemplo": "Toc, toc, tocó la Calaca; / ¡muuu!, le contestó la vaca."
  },
  {
   "id": "calambur",
   "nombre": "Calambur",
   "ic": "🔀",
   "grados": [
    1,
    2
   ],
   "que": "Al juntar o separar las sílabas se esconde otra palabra: «Oro parece, plata no es» (¡plátano es!).",
   "ejemplo": "Oro parece, plata no es."
  },
  {
   "id": "aliteracion",
   "nombre": "Aliteración",
   "ic": "🔁",
   "grados": [
    3,
    4,
    5,
    6
   ],
   "que": "Repetir un mismo sonido para que el verso suene: «la Calaca callada cuenta cuentos».",
   "ejemplo": "La Calaca callada cuenta cuentos."
  },
  {
   "id": "epitafio",
   "nombre": "Epitafio",
   "ic": "🪦",
   "grados": [
    4,
    5,
    6
   ],
   "que": "Es lo que se escribe en una tumba. En la calaverita suele empezar con «Aquí yace…».",
   "ejemplo": "Aquí yace el despertador, / que sonaba con gran ardor."
  },
  {
   "id": "personificacion",
   "nombre": "Personificación",
   "ic": "🎭",
   "grados": [
    1,
    2,
    3,
    4,
    5,
    6
   ],
   "que": "Dar acciones de persona a lo que no es persona: la Muerte habla, baila, se tropieza.",
   "ejemplo": "La Calaca se puso a bailar con el despertador."
  },
  {
   "id": "hiperbole",
   "nombre": "Exageración",
   "ic": "🎈",
   "grados": [
    3,
    4,
    5,
    6
   ],
   "que": "Exagerar algo para dar risa (se llama hipérbole).",
   "ejemplo": "Mi gato era tan dormilón / que roncó hasta en el panteón."
  },
  {
   "id": "comparacion",
   "nombre": "Comparación",
   "ic": "⚖️",
   "grados": [
    3,
    4,
    5,
    6
   ],
   "que": "Unir dos cosas con «como»: flaca como un fideo.",
   "ejemplo": "Llegó la Flaca, flaca como un fideo."
  },
  {
   "id": "dobles",
   "nombre": "Juego de palabras",
   "ic": "🃏",
   "grados": [
    5,
    6
   ],
   "que": "Usar una palabra que tiene dos significados para sorprender.",
   "ejemplo": "La Parca fue al partido / y se quedó en la banca."
  },
  {
   "id": "ironia",
   "nombre": "Giro final",
   "ic": "🌀",
   "grados": [
    1,
    2,
    3,
    4,
    5,
    6
   ],
   "que": "Al final pasa algo inesperado y gracioso, sin burlarse de nadie.",
   "ejemplo": "Cuentan que la Calaca, un lunes, / quiso llevarse el recreo; / mas los niños, con ingenio, / le armaron un gran torneo."
  }
 ],
 "pares": [
  [
   "salón",
   "dragón",
   "consonante"
  ],
  [
   "Calaca",
   "vaca",
   "consonante"
  ],
  [
   "mesa",
   "libro",
   "no"
  ],
  [
   "cuarto",
   "zapato",
   "asonante"
  ],
  [
   "bailar",
   "cantar",
   "consonante"
  ],
  [
   "luna",
   "sol",
   "no"
  ],
  [
   "escuela",
   "abuela",
   "consonante"
  ],
  [
   "tierra",
   "fiesta",
   "asonante"
  ],
  [
   "gato",
   "flor",
   "no"
  ],
  [
   "sombrero",
   "primero",
   "consonante"
  ],
  [
   "perro",
   "cielo",
   "asonante"
  ],
  [
   "Calaca",
   "dragón",
   "no"
  ],
  [
   "elote",
   "bigote",
   "consonante"
  ],
  [
   "casa",
   "mañana",
   "asonante"
  ],
  [
   "hueso",
   "queso",
   "consonante"
  ],
  [
   "vela",
   "tienda",
   "asonante"
  ],
  [
   "tambor",
   "papel",
   "no"
  ],
  [
   "recreo",
   "torneo",
   "consonante"
  ]
 ],
 "detectives": [
  [
   "La Calaca fue al mercado",
   "y compró un pan colorado"
  ],
  [
   "El gato dormía en la cama",
   "cuando llegó la Flaca en pijama"
  ],
  [
   "La Pelona tocó el tambor",
   "y bailó con el doctor"
  ],
  [
   "La Catrina entró a la cocina",
   "y se comió la gelatina"
  ],
  [
   "La Huesuda salió a pasear",
   "y se cayó al saltar"
  ],
  [
   "El despertador sonó",
   "y la Calaca despertó"
  ],
  [
   "La Parca subió a una barca",
   "y remó hasta la charca"
  ],
  [
   "La Calavera subió la escalera",
   "y se resbaló en la primera"
  ],
  [
   "La Tilica llegó al salón",
   "persiguiendo a un ratón"
  ],
  [
   "La Muerte buscó la suerte",
   "y la encontró en el pan fuerte"
  ]
 ]
};

/* ============================================================
   CUADERNO: lo que cada grupo anotó en su cuaderno, por fecha.
   Para agregar una página nueva, copie un bloque { f: ..., b: [...] }
   en el grupo que corresponda y cambie fecha y contenido.

   f      fecha en formato AAAA-MM-DD (ordena y enlaza con la sesión del mismo día)
   fecha  la fecha tal como se escribió en el cuaderno
   b      bloques de la página, en orden:
          ["tit", "Título"]
          ["p", "Párrafo"]
          ["def", "término", "definición"]
          ["verso", "título del verso (opcional)", ["verso 1", "verso 2"]]
          ["pares", "subtítulo (opcional)", [["palabra", "palabra"]]]
          ["lista", "subtítulo (opcional)", ["elemento"], "plana" | ""]
          ["ficha", "encabezado", [["pregunta", "ayuda", "respuesta (vacía si no se escribió)"]]]
          ["img", "img/archivo", "texto alternativo", "pie (opcional)", "mini" | ""]
          ["enlace", "texto", "https://..."]
   Marcas: ==resaltado== y **negritas**.

   Solo en días que NO son sesión del proyecto de calaveritas (por ejemplo,
   reportes de lectura) se agregan: titulo, trabajamos y aprendimos, para que
   las tres pestañas de ese día tengan contenido.
   ============================================================ */
window.CUADERNO = {
  "1A": [
    { f: "2026-10-07", fecha: "Miércoles 07 de octubre de 2026", b: [
      ["tit", "La rima"],
      ["def", "rima s.f.", "Repetición dos o más veces de los sonidos al final de las palabras."],
      ["verso", "Versos", ["La calaca ==tilica y flaca==", "de su tumba ya ==salía==,", "a paso apresurado", "y a la primaria se ==metía==."]],
      ["pares", "", [["rondando", "buscando"], ["salones", "tragones"]]]
    ]},
    { f: "2026-10-14", fecha: "Miércoles 14 de octubre de 2026", b: [
      ["tit", "Memorama de rimas"],
      ["pares", "", [["🍦 helado", "pescado 🐟"], ["🐝 colmena", "sirena 🧜‍♀️"], ["🥗 ensalada", "carcajada 🤣"], ["🎤 cantando", "soñando 😴"]]]
    ]},
    { f: "2026-10-19", fecha: "Lunes 19 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-1A.webp", "Guía «Así organizo mi cuaderno» de 1.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 1.° A (PDF)", "pdf/calaveritas-1A.pdf"]
    ]},
    { f: "2026-10-21", fecha: "Miércoles 21 de octubre de 2026", b: [
      ["tit", "Termino mi calaverita"],
      ["p", "Con las tarjetas ya pegadas, escribimos o dictamos el **título** y **mi detalle**, dibujamos a la Calaca con nuestro personaje y pusimos **nuestras iniciales**."],
      ["verso", "Ejemplo del maestro: «La abuelita bailarina»", ["La Calaca llegó por mi ==abuelita==", "y bailó con la ==galletita==."]],
      ["p", "**Mi detalle:** hace las galletas más ricas del barrio."],
      ["p", "La tuya lleva tus propias tarjetas y tu detalle."],
      ["lista", "Reviso ✓", ["💀 ¿Está la Calaca?", "🎵 ¿Riman las palabras del final?", "😄 ¿Da risa sin burlarse?", "✍️ ¿Puse mis iniciales?"], ""],
      ["p", "Se la leí a mi pareja ✓"]
    ]}
  ],
  "2A": [
    { f: "2026-09-29", fecha: "Martes 29 de septiembre de 2026",
      titulo: "Reporte de lectura: «Mi papá es un héroe»",
      trabajamos: "Leímos en la biblioteca el cuento «Mi papá es un héroe», de Stella Gurney, y empezamos nuestro primer reporte de lectura.",
      aprendimos: "Un reporte de lectura ordena lo que leímos: el título y quién lo escribió, los personajes, qué pasó al principio y al final, un dibujo y si nos gustó y por qué.",
      b: [
      ["tit", "Reporte de lecturas"],
      ["img", "img/portada-mi-papa-es-un-heroe.jpg", "Portada del libro «Mi papá es un héroe», de Stella Gurney, Ediciones Castillo", "", "mini"],
      ["ficha", "Mi reporte de lectura n.° 1 · Fecha: 29/09/2026", [
        ["1. Título y autor", "Copio el título y el nombre de quien lo escribió.", "Mi papá es un héroe\nStella Gurney"],
        ["2. Personajes", "Escribo los nombres de los personajes.", "Tariq, Mamá, Papá, Shazia,\nPasajero mandón, tía, Tomás, maestra, sus compañeros."],
        ["3. Al principio…", "Escribo una oración de lo que pasó al principio.", ""],
        ["4. Al final…", "Escribo una oración de cómo terminó.", ""],
        ["5. Mi dibujo", "Dibujo una parte del cuento.", ""],
        ["6. ¿Me gustó? ¿Por qué?", "Escribo si me gustó y por qué.", ""]
      ]],
      ["enlace", "▶ Video de la lectura del libro", "https://www.youtube.com/watch?v=5gnjxnFIAL0"]
    ]},
    { f: "2026-10-16", fecha: "Viernes 16 de octubre de 2026", b: [
      ["tit", "Léelo con diferentes tonos"],
      ["verso", "", ["A mi gato bigotón", "La calaca fue a ==buscar==", "Pero él se hizo el dormido", "y la dejó sin ==bailar=="]]
    ]},
    { f: "2026-10-20", fecha: "Martes 20 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-2A.webp", "Guía «Así organizo mi cuaderno» de 2.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 2.° A (PDF)", "pdf/calaveritas-2A.pdf"]
    ]},
    { f: "2026-10-23", fecha: "Viernes 23 de octubre de 2026", b: [
      ["tit", "Escribo mi calaverita"],
      ["p", "Debajo de las tarjetas escribimos el **título**, **mi detalle** (algo de mi personaje que nadie más conoce, y lo agregamos en el verso 1) y el **seudónimo**."],
      ["verso", "Ejemplo del maestro: «El abuelito de la tele»", ["Mi abuelito, el que colecciona trompos, veía la tele,", "cuando la Flaca ==llegó==;", "le contó un chiste", "y al final se ==rió==."]],
      ["p", "La tuya lleva tus propias tarjetas y tu detalle."],
      ["lista", "Reviso ✓", ["4 versos", "riman el 2 y el 4", "está la Calaca", "algo que solo yo sé", "título"], "plana"],
      ["p", "**Le gustó:** ____________ · **Me sugiere:** ____________"]
    ]}
  ],
  "3A": [
    { f: "2026-10-01", fecha: "Jueves 01 de octubre de 2026",
      titulo: "Reporte de lectura",
      trabajamos: "Continuamos nuestro reporte de lectura: buscamos en el libro una pista para descubrir algo que no está escrito y anotamos una palabra nueva con su significado.",
      aprendimos: "Un libro no siempre lo dice todo: con una pista del texto podemos descubrir lo que no está escrito. Y cuando encontramos una palabra nueva, buscamos lo que significa.",
      b: [
      ["ficha", "Reporte de lectura n.º ___ · Fecha: ________", [
        ["1. Título y autor", "El título como aparece en la portada y quién lo escribió.", ""],
        ["2. Personajes principales", "Sus nombres y una frase de quién es cada uno.", ""],
        ["3. ¿Dónde y cuándo pasa?", "El lugar y el momento. Si no lo dice, escribo «el libro no lo dice».", ""],
        ["4. ¿Qué pasó?", "Con mis palabras: Al inicio… / Después… / Al final…", ""],
        ["5. Una pista y lo que descubrí", "«El libro no dice que ___, pero yo lo sé porque en la página ___ dice que ___».", "El gran padre quería que existiera la vida. Él sembró 5 árboles porque exhalan oxígeno y eso se necesita para que exista la vida."],
        ["6. Una palabra nueva", "La palabra, la oración del libro donde aparece y lo que significa.", "**oropéndola**\nf. Pájaro de plumaje amarillo, de alas y cola negras, que hace su nido colgándolo con hebras de las ramas horizontales de los árboles."],
        ["7. Mi opinión", "Si me gustó o no, con una razón, y un dibujo pequeño.", ""]
      ]]
    ]},
    { f: "2026-10-08", fecha: "Jueves 08 de octubre de 2026", b: [
      ["tit", "Las rimas"],
      ["def", "rima s.f.", "repetición dos o más veces de los sonidos al final de las palabras."],
      ["verso", "A LA ESCUELA", ["A los gordos y ==flacos==", "los quiero en un ==costal==", "pues se comieron mis ==tacos==", "y de la ofrenda mi ==tamal=="]],
      ["img", "img/calaverita-a-la-escuela-3A.webp", "Calaverita «A la escuela» para colorear: a la izquierda el texto en un pergamino; a la derecha la Catrina sostiene un costal frente a dos calaveras que comen tacos junto a la ofrenda", ""]
    ]},
    { f: "2026-10-13", fecha: "Martes 13 de octubre de 2026", b: [
      ["tit", "Semáforo y memorama de rimas"],
      ["pares", "", [["plato", "zapato"], ["fuente", "serpiente"], ["hueso", "peso"], ["barca", "parca"]]],
      ["pares", "Rimas del memorama", [["soñando", "bailando"], ["carpintero", "sombrero"], ["dientona", "persona"], ["estante", "diamante"], ["estaba", "jugaba"], ["suelo", "vuelo"]]]
    ]},
    { f: "2026-10-15", fecha: "Jueves 15 de octubre 2026", b: [
      ["tit", "La pelota de la Pelona"],
      ["verso", "", ["Baloncín era la pelota de un niño", "desgastada, pero llena de cariño", "llegó la Pelona y no la vio,", "tropezó con ella y se cayó", "y en vez de llevárselo al panteón,", "¡se quedó bailando con el balón!"]],
      ["img", "img/la-pelota-de-la-pelona-3A.webp", "Dibujo para colorear: la Pelona, con sombrero de flores, baila abrazada a un balón entre papel picado, calaveras músicos y una ofrenda", ""]
    ]},
    { f: "2026-10-20", fecha: "Martes 20 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-3A.webp", "Guía «Así organizo mi cuaderno» de 3.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 3.° A (PDF)", "pdf/calaveritas-3A.pdf"]
    ]},
    { f: "2026-10-22", fecha: "Jueves 22 de octubre de 2026", b: [
      ["tit", "Escribo mi calaverita"],
      ["p", "Escribimos el **título**, agregamos con nuestra letra **mi detalle** en el verso 1 y firmamos con **seudónimo**. Los versos 2, 4 y 6 terminan en **-ar**."],
      ["verso", "Ejemplo del maestro: «El tío roncador»", ["Cuentan que mi tío, el que arregla bicis,", "no dejaba de ==roncar==,", "cuando la Pelona llegó", "y se lo quiso ==llevar==;", "pero se quedó dormida", "y se puso a ==bailar==."]],
      ["p", "**¿Solo 4 versos?** Se pegan los versos 1, 2, 3 y 6."],
      ["p", "La tuya lleva tus propias tarjetas y tu detalle."],
      ["lista", "Reviso ✓", ["versos 2, 4 y 6 en -ar", "está la Calaca", "mi detalle propio", "humor con cariño"], "plana"],
      ["p", "**Le gustó:** ________ · **Me sugiere:** ________ · **Cambié:** ________"]
    ]}
  ],
  "4A": [
    { f: "2026-09-30", fecha: "Miércoles 30 de septiembre de 2026",
      titulo: "Reporte de lectura: «¡Mi papá es un héroe!»",
      trabajamos: "Leímos «¡Mi papá es un héroe!», de Stella Gurney, y llenamos nuestro primer reporte de lectura.",
      aprendimos: "Un reporte de lectura nos ayuda a recordar y ordenar la historia: quiénes son los personajes, dónde y cuándo pasa, y qué ocurrió al inicio, en el desarrollo y al final.",
      b: [
      ["ficha", "Reporte de lectura n.º 1 · Fecha: 30/09/2026", [
        ["1. Título y autor", "El título como aparece en la portada y quién lo escribió.", "Título: ¡Mi papá es un héroe!\nAutora: Stella Gurney"],
        ["2. Personajes principales", "Quiénes son, qué hacen y qué quieren en la historia.", "Tariq, Papá, Mamá, Shaiza, tía, Maestra, Tomás, El señor de corbata, los amigos"],
        ["3. ¿Dónde y cuándo pasa?", "El lugar y el momento en que ocurre la historia.", "En la casa y en la escuela de Tariq, en las mañanas."],
        ["4. Resumen", "Con mis palabras: qué pasó al inicio, en el desarrollo y al final.", "==Tariq tiene una familia, papá, mamá, Shaiza, tía. Él va todos los días a la escuela. Su padre los lleva temprano a la escuela, y al regresar lo despierta con un gran abrazo.=="],
        ["5. ¿Por qué el personaje actuó así?", "«Creo que ___ actuó así porque ___. Lo pienso porque en la página ___ dice que ___».", ""],
        ["6. Una palabra nueva", "La palabra, la oración donde aparece y lo que significa.", ""],
        ["7. Mi opinión", "Si me gustó o no, con una razón.", ""]
      ]]
    ]},
    { f: "2026-10-14", fecha: "Miércoles 14 de octubre de 2026", b: [
      ["tit", "Escribimos el borrador de la calaverita"],
      ["p", "¿A quién se la dirijo? ____________"],
      ["verso", "Calaverita construida por el grupo 4° A", ["Estaba el maestro Pedro", "leyendo en su ==salón==", "cuando aparece la flaca", "quien no pudo llevárselo al ==panteón=="]],
      ["p", "**Tarea: Crea los últimos versos tomando en cuenta lo siguiente:**"],
      ["lista", "", ["==**Algo propio:** Es muy puntual==", "==**Giro:** La calaca promete volver el próximo año=="], ""]
    ]},
    { f: "2026-10-21", fecha: "Miércoles 21 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-4A.webp", "Guía «Así organizo mi cuaderno» de 4.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 4.° A (PDF)", "pdf/calaveritas-4A.pdf"]
    ]},
    { f: "2026-10-23", fecha: "Viernes 23 de octubre de 2026", b: [
      ["tit", "2. Mis versos"],
      ["p", "Con el plan ya pegado, escribimos de **6 a 8 versos**: el 2 rima con el 1, el 4 con el 3, el 6 con el 5 y el 8 con el 7. Nos apoyamos en los arranques y en las parejas que riman."],
      ["verso", "Ejemplo del maestro: «La cantante de la regadera»", ["Aquí yace mi hermana, la ==cantora==,", "que en la regadera cantaba a toda ==hora==;", "con el champú por micrófono en la ==mano==", "ensayaba su concierto de ==verano==.", "La Parca llegó tocando la ==puerta==,", "pero perdió la discusión, ==boquiabierta==;", "ahora cantan juntas cada ==canción==", "y comparten la misma ==emoción==."]],
      ["p", "La tuya lleva tu propio plan y algo que solo tú sabes."],
      ["lista", "3. Revisión ✓", ["6 a 8 versos", "suenan igual las rimas", "la Calaca es personaje", "algo propio y final sorpresa", "humor con cariño"], "plana"],
      ["p", "**Le gustó:** ________ · **Sugerencia:** ________ · **Lo que cambié:** ________"]
    ]}
  ],
  "5A": [
    { f: "2026-09-30", fecha: "Miércoles 30 de septiembre de 2026",
      titulo: "Reporte de lectura: «Mi papá es un héroe»",
      trabajamos: "Leímos «Mi papá es un héroe», de Stella Gurney, e hicimos el reporte de lectura n.º 1: la ficha del libro y un resumen con nuestras palabras.",
      aprendimos: "La ficha de un libro reúne título, autor, editorial y género. Resumir es contar lo importante de la historia con nuestras propias palabras.",
      b: [
      ["tit", "Reporte de lectura No. 1"],
      ["p", "Fecha: 30/09/2026"],
      ["ficha", "", [
        ["1.- Ficha del libro", "", "Título: Mi papá es un héroe\nAutor (a): Stella Gurney\nEditorial: Ediciones Castillo\nGénero: Cuento."],
        ["2. Resumen con mis propias palabras", "", "El cuento trata de Tariq y de su familia. Su papá trabaja de noche como taxista. Cada mañana, su padre los lleva a la escuela en su taxi. Un día, unos niños se burlaron de cómo hablaba el señor..."],
        ["3.", "", "A Tariq le llama la atención ser taxista como su padre. Al papá de Tariq su gusto por trabajar."]
      ]]
    ]},
    { f: "2026-10-07", fecha: "Miércoles 07 de octubre de 2026", b: [
      ["def", "Calaveritas literarias:", "Son versos con rima que tienen de personaje principal a la muerte (calaca, huesuda, flaca, catrina)."],
      ["def", "Humor con cariño:", "Nos reímos con la calaca, no de las personas. Sin burlas al cuerpo, la apariencia, la lengua, la familia, la salud ni a pérdidas reales."],
      ["def", "Dedicatoria:", "Se escribe para una persona, personaje, lugar, término, o lo que uno desee."],
      ["def", "Originalidad:", "Debe de contener algo escrito que solo tú sabrías."],
      ["img", "img/catrina-en-el-salon-5A.webp", "Dibujo para colorear: la Catrina entra al salón con una escoba y una bolsa de dulces mientras cuatro estudiantes corren riendo con comida, junto a la ofrenda de Día de Muertos", ""]
    ]},
    { f: "2026-10-16", fecha: "Viernes 16 de octubre de 2026", b: [
      ["p", "**Personaje / Destinatario:** ____________"],
      ["ficha", "", [
        ["¿Qué hacía mi personaje cuando se apareció la muerte?", "Ejemplos: Peleaba con molinos de viento, escribía versos de noche, leía las leyes, grababa calaveras, decía una mentira, cuidaba su rosa, perseguía a un conejo", ""],
        ["¿Cómo le llamaré a la muerte?", "Ejemplos: La Calaca, la Flaca, la Huesuda, la Pelona, la Catrina, La elegante calavera de, la Dientona, la Tilica, Flaquita, la Calavera, la Parca, la Descarnada, la Muerte.", ""],
        ["¿Qué hacía la muerte?", "Ejemplos: La Calaca... llegó sin avisar, se tropezó, se distrajo, perdió la discusión, se quedó dormida, se llevó algo y se arrepintió, no pudo llevárselo, se puso a bailar, se perdió en el camino, se asustó", ""],
        ["¿Qué sabes tú que nadie más sabe de tu personaje?", "", ""],
        ["¿Cuál es el giro argumental de tu calaverita?", "Ejemplos: 🌀 Termina bailando · 🌀 Se queda a leer en la biblioteca · 🌀 Se lleva otra cosa por error · 🌀 Se hace amiga del destinatario · 🌀 Huye corriendo · 🌀 Promete volver el próximo año · 🌀 Todo era un sueño · 🌀 El destinatario la engaña", ""]
      ]]
    ]},
    { f: "2026-10-21", fecha: "Miércoles 21 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-5A.webp", "Guía «Así organizo mi cuaderno» de 5.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 5.° A (PDF)", "pdf/calaveritas-5A.pdf"]
    ]},
    { f: "2026-10-23", fecha: "Viernes 23 de octubre de 2026", b: [
      ["tit", "3. Mis versos"],
      ["p", "Con la ficha respondida y el plan pegado, escribimos **dos estrofas**: la 1 presenta al personaje, lo que hace siempre y el dato propio; la 2 trae a la Calaca, algo que le sale mal y el giro final. Riman el verso 2 con el 4 y el 6 con el 8."],
      ["verso", "Ejemplo del maestro · Estrofa 1", ["Cuentan que Posada, el grabador,", "nació en Aguascalientes, tierra de ==feria==;", "grababa y grababa calaveras sin parar", "con tinta, buril y cara muy ==seria==."]],
      ["verso", "Estrofa 2", ["Llegó la Catrina a su taller,", "pero al ver su retrato se quedó ==encantada==;", "Posada la grabó con sombrero elegante", "y la Catrina, presumida, se fue sin llevarse ==nada==."]],
      ["p", "**Recurso:** aliteración: «grababa y grababa» repite el sonido gr."],
      ["p", "La tuya es sobre tu propio personaje, con tu dato propio."],
      ["lista", "4. Revisión ✓", ["8 versos o más", "se reconoce a mi personaje", "rimas consonantes o asonantes", "giro final", "humor con cariño y respeto", "usé un recurso"], "plana"],
      ["p", "**Le gustó:** ________ · **Sugerencia:** ________ · **Lo que cambié:** ________"]
    ]}
  ],
  "6A": [
    { f: "2026-10-08", fecha: "Jueves 08 de octubre de 2026", b: [
      ["tit", "Requisitos para la calaverita literaria"],
      ["lista", "", [
        "1.- Es una calaverita...",
        "2.- Humor con cariño (con respeto).",
        "3.- A quién va dirigida (personaje histórico).",
        "4.- Tu voz (Original y escrita en clase. Lleva al menos un detalle que solo tú sabrías).",
        "5.- Extensión 5° y 6° mínimo con 8 versos.",
        "6.- Firma protegida (Usaremos seudónimo o iniciales), grado y grupo."
      ], "plana"]
    ]},
    { f: "2026-10-19", fecha: "Lunes 19 de octubre de 2026", b: [
      ["tit", "Mi calaverita literaria"],
      ["p", "Recortamos las tarjetas por la línea punteada y pegamos **una de cada color**, en orden, siguiendo la guía."],
      ["img", "img/recortables/cuaderno-6A.webp", "Guía «Así organizo mi cuaderno» de 6.° A: los recuadros de color muestran dónde se pega cada tarjeta y el texto café lo que se escribe a mano", "Guía «Así organizo mi cuaderno» · recuadro de color = tarjeta que se pega · texto café = lo que se escribe a mano"],
      ["enlace", "📄 Hojas de recortables y guía de 6.° A (PDF)", "pdf/calaveritas-6A.pdf"]
    ]},
    { f: "2026-10-22", fecha: "Jueves 22 de octubre de 2026", b: [
      ["tit", "3. Mis versos"],
      ["p", "Con la ficha respondida y el plan pegado, escribimos **dos estrofas**: la 1 presenta al personaje, lo que hace siempre y el dato propio; la 2 trae a la Calaca, algo que le sale mal y el giro final. Riman el verso 2 con el 4 y el 6 con el 8."],
      ["verso", "Ejemplo del maestro · Estrofa 1", ["Cuentan que Sor Juana, la gran poeta,", "de niña quiso ir a la universidad vestida de ==varón==;", "leía y leía de noche y de día", "y llenó de libros cada ==rincón==."]],
      ["verso", "Estrofa 2", ["La Muerte llegó a su celda callada,", "pero se perdió entre tanta ==poesía==;", "Sor Juana la convenció con su ingenio y su frase", "y ahora la Muerte le hace ==compañía==."]],
      ["p", "**Recurso:** exageración: «llenó de libros cada rincón»."],
      ["p", "La tuya es sobre tu propio personaje histórico, con tu dato propio."],
      ["lista", "4. Revisión ✓", ["8 versos o más", "se reconoce a mi personaje", "rimas consonantes o asonantes", "giro final", "humor con cariño y respeto", "usé un recurso"], "plana"],
      ["p", "**Le gustó:** ________ · **Sugerencia:** ________ · **Lo que cambié:** ________"]
    ]}
  ]
};
