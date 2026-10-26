# Panteón de versos · Apuntes para familias

Sitio de consulta para familias de la **Escuela Primaria «Molino de Rosas»** (Biblioteca, ciclo 2026-2027).
Muestra, por grupo y en orden de fecha, qué se hizo en cada sesión de biblioteca, qué quedó en el cuaderno y qué se aprendió.

Autor: Profr. Eduardo Kantún Martínez, Promotor de Lectura.

---

## Cómo funciona para las familias

1. **Elija el grupo** (1.° A a 6.° A).
2. **Elija el día.** Las sesiones aparecen en orden cronológico; las que aún no ocurren se ven como «Próximamente» y no se pueden abrir. El cuaderno 📒 señala los días con apunte.
3. **Elija una de tres pestañas** (solo una abierta a la vez):

| Pestaña | Qué muestra |
|---|---|
| 🧩 **Lo que trabajamos** (herramientas y juegos) | Qué se hizo en clase y las herramientas de esa sesión para explorarlas en casa: modelo leído, buscador y banco de rimas, juegos (¿Riman?, Memorama, Detectives), receta de la calaverita, humor con cariño, recursos de poeta. |
| 📒 **Lo que anotamos** en el cuaderno | La página del cuaderno de ese día, con apariencia de hoja de raya. |
| 💡 **Lo que aprendimos** en esa clase | El aprendizaje, qué hacer si faltó, una idea opcional para platicar en casa y los requisitos de la calaverita del grado. |

Debajo del día elegido está siempre **📒 El cuaderno completo del grupo**: todas sus páginas en orden de fecha, cada una con un botón para abrir ese día.

Cada vista tiene su propio enlace, por ejemplo `…/#3A/10-08/cuaderno`, para mandarlo por WhatsApp a las familias de un grupo.

## Archivos

```
index.html   estructura de la página
estilos.css  apariencia (incluye la hoja de cuaderno)
rima.js      motor que detecta rimas en español (consonante y asonante)
datos.js     TODO el contenido: sesiones, apuntes, banco de rimas y páginas del cuaderno
app.js       lógica de la página (grupos, días, pestañas, juegos)
contador.js  conteo anónimo de visitas por grupo (GoatCounter)
img/         imágenes de las páginas del cuaderno
img/recortables/  hojas de recortables y guías «Así organizo mi cuaderno» de cada grupo (WebP)
pdf/         un PDF por grupo: 2 hojas de recortables + la guía del cuaderno
             y pdf/mesa-recursos-*.pdf: la hoja de la mesa (recursos literarios y banco de rimas)
img/recortables/mesa-*.webp  las dos caras de la hoja de la mesa de cada grupo
herramienta/ la herramienta digital «Panteón de versos · Sesiones de octubre» (Agenda, Sesión, Armador y Guía)
```

## Semana de recortables y escritura (19 al 23 de octubre)

> **Nota:** desde el 22 de octubre, 2.° a 6.° A siguen el calendario de las calaveritas armadas (ver «Actualización del 26 de octubre»). La tabla de abajo queda como registro del plan original; 1.° A lo sigue igual.

Cada grupo tiene dos sesiones esa semana, **en el orden en que le toquen, sea lectura de 20 minutos o clase de 50**:

1. **Pegamos los recortables en el cuaderno** (primera sesión de la semana).
2. **Escribo mi calaverita** (siguiente sesión), con las tarjetas pegadas y el banco de rimas.

| Grupo | Recortables | Escritura |
|---|---|---|
| 1.° A | lun 19 (lectura) | mié 21 (clase) |
| 6.° A | lun 19 (lectura) | jue 22 (clase) |
| 2.° A | mar 20 (clase) | vie 23 (lectura) |
| 3.° A | mar 20 (lectura) | jue 22 (clase) |
| 4.° A | mié 21 (clase) | vie 23 (lectura) |
| 5.° A | mié 21 (clase) | vie 23 (lectura) |

Después siguen «Leo a mi pareja» y «Reviso, paso en limpio y leo» en las dos sesiones siguientes de cada grupo.

**La página decide sola si una sesión es «Clase» o «Lectura»** según el día de la semana (campos `diaClase` y `diaLectura` de cada grupo en `datos.js`). Así cualquier actividad puede moverse a cualquiera de los dos horarios cambiando solo la fecha en `ruta`.

**Desbloqueo por fecha.** Cada sesión aparece «Próximamente» y no se puede abrir hasta su día; a las 0:00 de ese día se habilita, y con ella su página del cuaderno (también en «El cuaderno completo»). Por eso las páginas de toda la semana ya están cargadas: cada una aparece sola en su fecha. Si alguien abre antes un enlace a un día futuro, la página lo lleva al último día disponible.

**Herramienta nueva: ✂️ Los recortables de la clase** (pestaña «Lo que trabajamos» de ambas sesiones): las dos hojas del grado, la guía de pegado y el PDF para ver o descargar. No hace falta imprimir en casa.

**Páginas del día de escritura.** Llevan un «Ejemplo del maestro», marcado como tal, y la lista de revisión del grado. Si después quiere subir lo que realmente quedó en el pizarrón, edite ese bloque en `window.CUADERNO` (la fecha ya está puesta) o agregue una foto con un bloque `["img", ...]`.

**Para actualizar el contenido solo se edita `datos.js`.** Al inicio de la sección `window.CUADERNO` hay instrucciones para agregar una página nueva del cuaderno: se copia un bloque, se cambia la fecha (`AAAA-MM-DD`) y el contenido. La página aparece sola en «El cuaderno completo» del grupo. Si la fecha coincide con una sesión del proyecto, aparece también en la pestaña «Lo que anotamos» de ese día; si no coincide (por ejemplo, un reporte de lectura), se crea un día nuevo en la lista, y entonces hay que escribir también `titulo`, `trabajamos` y `aprendimos`.

## Actualización del 26 de octubre: formato de la herramienta y calaveritas armadas

**Mismo formato y estilo que la herramienta.** El sitio usa ahora el diseño de «Panteón de versos · Sesiones de octubre»: encabezado morado fijo con botones tipo píldora (Grupo, Sesiones, Cuaderno, Guía) y papel picado naranja, tarjetas blancas con sombra, botones naranjas y **un color por grado** (el mismo de la herramienta para 2.° a 6.°; verde olivo para 1.°). Los días se ven como las tarjetas de la Agenda, con su línea de pasos. La hoja de raya del cuaderno se conserva. Todo el tema está al final de `estilos.css`, en el bloque «TEMA PANTEÓN DE VERSOS».

**La herramienta está dentro del sitio.** El archivo vive en `herramienta/panteon-de-versos-sesiones.html` y se publica junto con el sitio. El final del enlace elige qué se abre: `#armador-2` … `#armador-6` abre el Armador del grado; `#guia`, `#agenda` y `#sesion` abren esas vistas. Sin final, abre la Agenda como siempre. Si actualiza la herramienta, reemplace ese archivo y conserve al final el bloque «Enlace directo desde el sitio de apuntes».

**Calendario de 2.° a 6.° A igual al de la herramienta.** Desde el 22 de octubre las rutas siguen la Agenda de la herramienta:

| Grupo | Sesiones |
|---|---|
| 2.° A | vie 23 *Pienso mi ✎ Algo propio* · mar 27 *Armo mi calaverita* (pasos 1–4 de 4) · vie 30 *Reviso, paso en limpio y leo* |
| 3.° A | jue 22 *Armo mi calaverita · primera parte* (pasos 1–4 de 6) · jue 29 *Termino de armar* (pasos 5–6) |
| 4.° A y 5.° A | vie 23 *Pienso mi ✎ Algo propio* · mié 28 *Armo mi calaverita* (pasos 1–6 de 8) · vie 30 *Termino de armar* (pasos 7–8) |
| 6.° A | jue 22 *Ficha de mi personaje y mis primeros versos* (pasos 1–4 de 8) · jue 29 *Termino de armar* (pasos 5–8) |

1.° A no cambia. Cada sesión de la ruta puede llevar una tercera pieza con sus pasos, por ejemplo `["10-28", "armo", "Pasos 1–6 de 8"]`; se muestra en la tarjeta del día y en su encabezado.

**🃏 Así se arma la calaverita.** Herramienta nueva para las familias de 2.° a 6.°: el ejemplo del maestro en tiras de colores, igual que el cuaderno del Armador, las piezas verso por verso, los moldes de ✎ Algo propio, la lista de revisión y el botón para abrir el Armador del grado. Sus datos están en `window.PROYECTO.armado` y salen de la herramienta, con las mismas tarjetas.

**Páginas del cuaderno con tiras.** Las páginas de armado usan el bloque `["tiras", "título", grado, desde, hasta]`, que pinta los versos del ejemplo del grado como tiras de colores. Ejemplo: `["tiras", "Ejemplo del maestro", 6, 1, 4]` muestra la cuarteta 1 de sexto.

**La hoja de la mesa** sigue en *Escribo mi calaverita* y *Leo a mi pareja*, que ahora solo usa 1.° A: el banco de rimas de 2.° y 3.° de esa hoja (palabras en -ó y en -ar) era del esquema anterior y no corresponde a las calaveritas armadas.

## Actualización del 22 de octubre

### Tres funciones nuevas

| Novedad | Dónde se ve | Dónde se edita |
|---|---|---|
| **📇 La hoja de la mesa: recursos y rimas** | Pestaña «Lo que trabajamos» de *Escribo mi calaverita* y *Leo a mi pareja*, en los seis grupos | `datos.js`, al final: `window.PROYECTO.recortables["…"].mesa` |
| **💻 La herramienta digital de la clase** | Solo en los grupos que la tengan registrada (hoy, 6.° A) | `datos.js`, al final: `window.PROYECTO.digital` |
| **Ajustes por grupo y recuadro «Dónde vamos»** | Cambia el título y los textos de una sesión **solo para un grupo** | `datos.js`, al final: `window.PROYECTO.ajustes` |

**La hoja de la mesa** es la hoja de recursos literarios (una cara) y banco de rimas (la otra) que está impresa en el porta servilletas de cada mesa de la biblioteca. Las familias la ven en imagen y pueden descargarla en PDF; no hace falta imprimirla en casa.

**Los ajustes por grupo** sirven cuando un grupo avanzó distinto de lo planeado. Por ejemplo, la sesión *Escribo mi calaverita* dice para todos que «cada quien escribió su calaverita»; si un grupo solo llegó a la mitad, se escribe un ajuste para ese grupo y esa fecha, y los demás grupos no cambian. Solo se escriben los campos que cambian (`titulo`, `hicimos`, `avance`, `aprendimos`, `faltaste`, `casa`, `herramientas`); lo demás se toma de la sesión general. El campo `avance` muestra el recuadro **Dónde vamos**, útil para decir con honestidad que la calaverita todavía no está terminada.

**La herramienta digital** se describe con su título, para qué sirve y sus secciones. Mientras no tenga dirección (`url: ""`), la página dice que se usa en la biblioteca. Cuando la publique, pegue la dirección entre las comillas de `url` y aparecerá el botón **💻 Abrir la herramienta**. Para agregar la de otro grupo, copie el bloque de `"6A"` y cambie la clave del grupo.

### Registro de 6.° A (semana del 19 al 22 de octubre)

Con base en el relato del trabajo de la semana:

- **Lunes 19 (lectura).** Recortaron y pegaron en el cuaderno la hoja de recortables siguiendo la guía. Quedó lista la guía de trabajo: preguntas del personaje, tarjetas para planear, arranques, recursos literarios, parejas que riman y revisión.
- **Jueves 22 (clase).** Respondieron las seis preguntas rosas de la ficha del personaje y, con la herramienta digital, armaron con tarjetas **los pasos 1 a 4** (cuarteta 1). La calaverita **no está terminada**.
- **Jueves 29 (clase, preparada).** *Termino de armar mi calaverita*: pasos 5 a 8 (cuarteta 2) y revisión. Su página del cuaderno se habilita sola ese día.

## Publicar en GitHub Pages (paso a paso)

1. Entre a <https://github.com> con su cuenta.
2. Arriba a la derecha, toque el **+** y elija **New repository**.
3. En **Repository name** escriba, por ejemplo, `calaveritas-familias`. Deje marcado **Public** y toque **Create repository**.
4. En la página del repositorio nuevo, toque el enlace **uploading an existing file**.
5. Abra en su computadora la carpeta `calaveritas-familias` (descomprimida), seleccione **todo su contenido** (los seis archivos, este README y las carpetas `img` y `pdf`) y arrástrelo a la ventana del navegador. Espere a que terminen de cargarse.
6. Abajo, toque **Commit changes**.
7. Toque la pestaña **Settings** (engrane, arriba del repositorio) y, en el menú de la izquierda, **Pages**.
8. En **Branch** elija `main`, deje la carpeta en `/ (root)` y toque **Save**.
9. Espere uno o dos minutos y recargue esa misma página: arriba aparece el enlace del sitio, con la forma `https://SU-USUARIO.github.io/calaveritas-familias/`.

Para actualizar después: entre al repositorio, toque el archivo (por ejemplo `datos.js`), toque el lápiz ✏️ para editar, haga el cambio y toque **Commit changes**. El sitio se actualiza en uno o dos minutos.

**Al agregar apuntes nuevos suba siempre dos cosas:** `datos.js` y, si la página lleva dibujo, la imagen dentro de la carpeta `img` (en GitHub: abra la carpeta `img`, toque **Add file → Upload files**, arrastre la imagen y toque **Commit changes**). Si falta la imagen, la página del cuaderno aparece sin dibujo. Las familias ven los cambios en cuanto GitHub termina de publicar (pestaña **Actions** del repositorio, círculo verde ✅): la página pide siempre la versión más reciente de `datos.js`.

### Mostrarlo en el Google Sites de la biblioteca

En el editor de Google Sites: panel derecho **Insertar → Insertar → Por URL**, pegue el enlace de GitHub Pages y elija **Página completa** (o use **Páginas → + → Insertar página completa**). También puede poner un **Botón** que abra el enlace directamente, que funciona mejor en celulares y conserva los enlaces por grupo.

## Contar las visitas de cada grupo (GoatCounter)

GitHub Pages no cuenta visitas por sí mismo. `contador.js` usa **GoatCounter**, un servicio gratuito para proyectos sin fines de lucro que **no usa cookies ni guarda datos personales** (no hace falta pedir consentimiento a las familias). Cada grupo se registra como una página: `/grupo/1A` a `/grupo/6A`, más `/inicio`, que cuenta las entradas al sitio. Si una familia revisa 3.° A varias veces en la misma visita, cuenta una sola vez.

**Crear la cuenta (una sola vez):**

1. Entre a <https://www.goatcounter.com> y toque **Sign up**.
2. En **Code** escriba un nombre corto, sin espacios ni acentos, por ejemplo `biblioteca-molino`. Será su panel: `https://biblioteca-molino.goatcounter.com`.
3. Escriba su correo y una contraseña y toque **Sign up**. Confirme el correo que le llega.
4. Cuando le pida el **Site domain**, escriba la dirección de su sitio de GitHub Pages (por ejemplo `su-usuario.github.io`).

**Conectarlo con el sitio:**

5. En GitHub, abra el repositorio, toque `contador.js` y luego el lápiz ✏️.
6. En la línea `const CODIGO_GOATCOUNTER = "PENDIENTE";` cambie `PENDIENTE` por su código, sin borrar las comillas: `const CODIGO_GOATCOUNTER = "biblioteca-molino";`
7. Toque **Commit changes**. En uno o dos minutos empieza a contar.

**Consultar el conteo:** entre a su panel (`https://SU-CODIGO.goatcounter.com`). Verá cada `/grupo/…` con su número de visitas por día, semana o mes. Si quiere compartirlo con dirección o con el CTE sin dar su contraseña: **Settings → Settings → Dashboard viewable by → Anyone**.

**Qué significa el número (y qué no):** es un indicador aproximado del interés de las familias por grupo, útil para decidir dónde reforzar la difusión (por ejemplo, reenviar el enlace al chat de un grupo con pocas visitas). No identifica quién entró, y algunos bloqueadores de anuncios impiden el conteo, así que el número real puede ser mayor. No conviene leerlo como medida del compromiso de una familia en particular: el acceso a internet, el tiempo disponible y el dispositivo son condiciones situacionales, no disposiciones.

## Razonamiento pedagógico

- **Tres pestañas, tres momentos de la clase.** *Lo que trabajamos* recupera la experiencia (hacer); *Lo que anotamos* muestra el registro que produjo el propio estudiante; *Lo que aprendimos* nombra el aprendizaje y abre la metacognición en casa («¿qué aprendiste hoy?», con algo concreto que mirar juntos).
- **Una cosa a la vez.** Un día y una pestaña abiertos; dentro, una herramienta y un juego a la vez. Así se reduce la carga cognitiva para familias que consultan desde el celular.
- **Faltar no se castiga.** Cada sesión dice qué hacer si el estudiante faltó y que se pone al día en la escuela. La calaverita no es tarea: se escribe en clase, con apoyos.
- **Diseño Universal para el Aprendizaje (DUA).** Varias formas de acceder al mismo contenido: lectura en voz alta (🔊), emojis en 1.° y 2.°, colores para ver las rimas y las piezas de la calaverita, juegos para practicarlas, letra base grande (18 px) y texto secundario oscuro para que se lea bien.
- **Corresponsabilidad escuela–familia.** «Para platicar en casa» propone conversaciones opcionales (cómo se celebra el Día de Muertos en la familia), sin exigir materiales ni tareas.
- **Privacidad.** No se piden ni se guardan datos personales; las páginas del cuaderno no llevan nombres de estudiantes. El navegador solo recuerda el último grupo elegido, y el conteo de visitas es anónimo y sin cookies.
