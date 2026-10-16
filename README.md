# Calaveritas literarias · Apuntes para familias

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
```

**Para actualizar el contenido solo se edita `datos.js`.** Al inicio de la sección `window.CUADERNO` hay instrucciones para agregar una página nueva del cuaderno: se copia un bloque, se cambia la fecha (`AAAA-MM-DD`) y el contenido. La página aparece sola en «El cuaderno completo» del grupo. Si la fecha coincide con una sesión del proyecto, aparece también en la pestaña «Lo que anotamos» de ese día; si no coincide (por ejemplo, un reporte de lectura), se crea un día nuevo en la lista, y entonces hay que escribir también `titulo`, `trabajamos` y `aprendimos`.

## Publicar en GitHub Pages (paso a paso)

1. Entre a <https://github.com> con su cuenta.
2. Arriba a la derecha, toque el **+** y elija **New repository**.
3. En **Repository name** escriba, por ejemplo, `calaveritas-familias`. Deje marcado **Public** y toque **Create repository**.
4. En la página del repositorio nuevo, toque el enlace **uploading an existing file**.
5. Abra en su computadora la carpeta `calaveritas-familias` (descomprimida), seleccione **todo su contenido** (los cinco archivos, este README y la carpeta `img`) y arrástrelo a la ventana del navegador. Espere a que terminen de cargarse.
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
- **Diseño Universal para el Aprendizaje (DUA).** Varias formas de acceder al mismo contenido: lectura en voz alta (🔊), emojis en 1.° y 2.°, colores para ver las rimas, juegos para practicarlas y letra Atkinson Hyperlegible.
- **Corresponsabilidad escuela–familia.** «Para platicar en casa» propone conversaciones opcionales (cómo se celebra el Día de Muertos en la familia), sin exigir materiales ni tareas.
- **Privacidad.** No se piden ni se guardan datos personales; las páginas del cuaderno no llevan nombres de estudiantes. El navegador solo recuerda el último grupo elegido, y el conteo de visitas es anónimo y sin cookies.
