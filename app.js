/* ============================================================
   Apuntes de biblioteca para familias · Calaveritas literarias
   Escuela Primaria «Molino de Rosas» · Ciclo 2026-2027

   Flujo: 1) grupo → 2) día (en orden cronológico) → 3) una de tres pestañas:
     · Lo que trabajamos en la clase (herramientas y juegos)
     · Lo que anotamos en el cuaderno
     · Lo que aprendimos en esa clase
   Solo hay un día y una pestaña abiertos a la vez.
   Depende de: rima.js (window.Rima) y datos.js (window.PROYECTO, window.CUADERNO).
   ============================================================ */
(function () {
  "use strict";

  const D = window.PROYECTO;
  const C = window.CUADERNO;
  const R = window.Rima;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const COLORES = ["#C2005F", "#1F7A52", "#5B2A86", "#9A4A00", "#0E6A8F", "#7C2D12", "#4D7C0F", "#A21CAF", "#155E75", "#B45309"];
  const ETIQUETA = { pasada: "Ya fue", ahora: "En curso", hoy: "Hoy", futura: "Próximamente" };
  const PESTANAS = [
    ["trabajamos", "🧩", "Lo que trabajamos", "herramientas y juegos"],
    ["cuaderno", "📒", "Lo que anotamos", "en el cuaderno"],
    ["aprendimos", "💡", "Lo que aprendimos", "en esa clase"]
  ];
  // Herramientas de la planeación → lo que pueden explorar las familias
  const HERRAMIENTAS = {
    modelos: ["modelo", "📖", "El modelo que leímos"],
    rimas: ["rimas", "🔎", "Buscador y banco de rimas"],
    juegos: ["juegos", "🎲", "Juegos de rimas"],
    acuerdos: ["acuerdos", "🤝", "Humor con cariño"],
    taller: ["receta", "🧁", "La receta de la calaverita"],
    juntos: ["receta", "🧁", "La receta de la calaverita"],
    recursos: ["recursos", "✨", "Recursos de poeta"],
    recortables: ["recortables", "✂️", "Los recortables de la clase"],
    armado: ["armado", "🃏", "Así se arma la calaverita"],
    mesa: ["mesa", "📇", "La hoja de la mesa: recursos y rimas"],
    digital: ["digital", "💻", "La herramienta digital de la clase"]
  };
  // Ajustes de un grupo en una fecha (D.ajustes[grupo][MM-DD]): cambian título, textos,
  // herramientas o agregan «Dónde vamos» solo para ese grupo, sin tocar a los demás.
  const ajusteDe = (g, md) => (D.ajustes && D.ajustes[g.id] && D.ajustes[g.id][md]) || null;

  /* ---------- Memoria del navegador (opcional: si falla, la página sigue igual) ---------- */
  const leer = (k, def) => { try { const v = localStorage.getItem("calaveritas-familias:" + k); return v === null ? def : JSON.parse(v); } catch (e) { return def; } };
  const guardar = (k, v) => { try { localStorage.setItem("calaveritas-familias:" + k, JSON.stringify(v)); } catch (e) { /* sin memoria */ } };

  /* ---------- Utilidades ---------- */
  const marcas = (t) => esc(t)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, '<mark class="cd-resalta">$1</mark>')
    .replace(/\n/g, "<br>");
  const mayus = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const minutos = (h) => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
  const hora = (m) => Math.floor(m / 60) + ":" + String(m % 60).padStart(2, "0");
  const mismoDia = (a, b) => a.toDateString() === b.toDateString();
  const fechaLarga = (d) => `${mayus(DIAS[d.getDay()])} ${d.getDate()} de ${MESES[d.getMonth()]}`;
  const fechaCorta = (d) => `${DIAS[d.getDay()].slice(0, 3)} ${d.getDate()} ${MESES[d.getMonth()].slice(0, 3)}`;
  const mezclar = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const modeloDe = (g) => D.modelos.find((m) => m.para.includes(g.grado)) || D.modelos[0];
  const rellenar = (t, g) => (t || "")
    .replace(/\{modelo\}/g, modeloDe(g).id)
    .replace(/\{ext\}/g, D.extension[g.grado].texto)
    .replace(/\{nombre\}/g, g.nombre);
  /* ---------- Calaveritas armadas (2.° a 6.°): tiras de colores como en el Armador ---------- */
  const armadoDe = (g) => (D.armado && D.armado[g.grado]) || null;
  function tirasHTML(A, de = 1, a = A.N) {
    const filas = [];
    for (let n = de; n <= a; n++) {
      if (A.cuartetas && n === 1) filas.push('<div class="qhead">Cuarteta 1</div>');
      if (A.cuartetas && n === 5) filas.push('<div class="qhead">Cuarteta 2</div>');
      const v = A.ejemplo.versos[n - 1];
      filas.push(`<div class="strip"><span class="num">${n}${A.letras ? "ABABCDCD"[n - 1] : ""}</span>${v.map(([t, c]) => `<span class="seg cat-${c}">${esc(t)}</span>`).join("")}</div>`);
    }
    return filas.join("");
  }

  function decir(texto) {
    try {
      if (!("speechSynthesis" in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      u.lang = "es-MX"; u.rate = 0.9;
      const voces = speechSynthesis.getVoices();
      const v = voces.find((x) => /es[-_]MX/i.test(x.lang)) || voces.find((x) => /^es/i.test(x.lang));
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { /* el navegador no puede leer en voz alta */ }
  }

  D.banco.forEach((f, i) => { f.c = COLORES[i % COLORES.length]; f.clave = R.claves(f.p[0][0]); });

  function familiasDe(palabra, conAsonante) {
    const k = R.claves(palabra);
    if (!k) return { k: null, cons: [], aso: [] };
    const cons = D.banco.filter((f) => f.clave.consonante === k.consonante);
    const aso = conAsonante ? D.banco.filter((f) => f.clave.consonante !== k.consonante && f.clave.asonante === k.asonante) : [];
    return { k, cons, aso };
  }

  /* ---------- Línea del tiempo de cada grupo ---------- */
  function entradasDe(g) {
    let nC = 0, nL = 0;
    const lista = g.ruta.map(([md, clave, pasos]) => {
      const s = D.sesiones[clave];
      const aj = ajusteDe(g, md);
      const [m, d] = md.split("-").map(Number);
      // La actividad no depende del horario: si ese día al grupo le toca la clase de 50 minutos,
      // es «Clase»; si le toca la lectura de 20 minutos, es «Lectura». Solo si la fecha no cae
      // en ninguno de sus dos días se usa el tipo sugerido de la sesión.
      const dow = new Date(2026, m - 1, d).getDay();
      const esClase = dow === g.diaClase ? true : dow === g.diaLectura ? false : s.tipo === "C";
      const num = esClase ? ++nC : ++nL;
      const ini = minutos(esClase ? g.clase : g.lectura);
      const dur = esClase ? 50 : 20;
      const inicio = new Date(2026, m - 1, d, Math.floor(ini / 60), ini % 60);
      return {
        md, s, aj, pasos: pasos || "", inicio, fin: new Date(inicio.getTime() + dur * 60000),
        nombre: (esClase ? "Clase " : "Lectura ") + num, titulo: (aj && aj.titulo) || s.titulo,
        cuando: `${hora(ini)}–${hora(ini + dur)} · ${esClase ? "clase de 50 minutos" : "lectura de 20 minutos"}`
      };
    });
    (C[g.id] || []).forEach((p) => {
      const md = p.f.slice(5);
      if (lista.some((e) => e.md === md)) return;
      const [y, m, d] = p.f.split("-").map(Number);
      lista.push({
        md, extra: p, inicio: new Date(y, m - 1, d, 0, 0), fin: new Date(y, m - 1, d, 23, 59),
        nombre: "Biblioteca", titulo: p.titulo || "Lectura en biblioteca", cuando: "Sesión de biblioteca"
      });
    });
    return lista.sort((a, b) => a.inicio - b.inicio);
  }
  function estadoDe(e, ahora) {
    if (ahora >= e.fin) return "pasada";
    if (ahora >= e.inicio) return "ahora";
    return mismoDia(ahora, e.inicio) ? "hoy" : "futura";
  }
  // Una página del cuaderno se muestra a partir de las 0:00 de su fecha: se pueden dejar
  // preparadas las de toda la semana y cada una se habilita sola el día que toca.
  const yaVisible = (p, ahora = new Date()) => { const [y, m, d] = p.f.split("-").map(Number); return ahora >= new Date(y, m - 1, d); };
  const paginasDe = (g, md) => (C[g.id] || []).filter((p) => p.f.slice(5) === md && yaVisible(p));

  /* ---------- Estado ---------- */
  const est = {
    grupo: null, dia: null, pestana: "trabajamos", herramienta: null,
    juego: "semaforo", tema: "d", modoModelo: "rimas",
    semaforo: null, memo: null, det: null
  };
  const grupoActual = () => D.grupos.find((g) => g.id === est.grupo);

  function leerHash() {
    const [g, md, p] = decodeURIComponent((location.hash || "").slice(1)).split("/");
    return {
      g: D.grupos.some((x) => x.id === g) ? g : null,
      md: /^\d\d-\d\d$/.test(md || "") ? md : null,
      p: PESTANAS.some((x) => x[0] === p) ? p : null
    };
  }
  function escribirHash() {
    const h = est.grupo ? "#" + [est.grupo, est.dia, est.pestana].filter(Boolean).join("/") : "";
    try { history.replaceState(null, "", h || location.pathname); } catch (e) { /* sin historial */ }
  }

  function elegirDiaPorOmision(g) {
    const ahora = new Date();
    const lista = entradasDe(g).filter((e) => estadoDe(e, ahora) !== "futura");
    return lista.length ? lista[lista.length - 1].md : null;
  }

  /* ---------- Cierre de la semana: «Para terminar la calaverita» ---------- */
  function diaConHerramienta(g, h) {
    const ahora = new Date();
    const lista = entradasDe(g).filter((e) => !e.extra && estadoDe(e, ahora) !== "futura" && herramientasDe(e, g).some((t) => t[0] === h));
    return lista.length ? lista[lista.length - 1].md : null;
  }
  function pintarCierre() {
    const sec = $("#cierre"), g = grupoActual(), K = D.cierre;
    const vigente = K && new Date() <= new Date(K.mostrarHasta + "T23:59:59");
    if (!g || !vigente) { sec.hidden = true; sec.innerHTML = ""; return; }
    const A = armadoDe(g);
    const requisitos = A ? [`${D.extension[g.grado].texto} (${A.esquema})`].concat(A.revisar) : [D.extension[g.grado].texto].concat(K.revisar1 || []);
    const herr = A ? "armado" : "recortables";
    const dia = diaConHerramienta(g, herr);
    const pasos = A ? K.pasosArmado : K.pasos1;
    const d = D.digital && D.digital[g.id];
    sec.hidden = false;
    sec.className = "cierre card-box g" + g.grado;
    sec.innerHTML = `<h2 id="t-cierre" class="paso"><span class="num" aria-hidden="true">📌</span> Para terminar la calaverita de ${esc(g.nombre)}</h2>
      <p class="cierre-fecha"><strong>Fecha límite: ${esc(K.limite)}.</strong> ${marcas(K.ceremonia)}</p>
      <p>${marcas(K.porque)}</p>
      <div class="cierre-grid">
        <div><h3>Lo que debe tener la calaverita de ${esc(g.nombre)}</h3><ul class="receta">${requisitos.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
        <div><h3>Cómo terminarla en casa</h3><ol class="receta">${pasos.map((t) => `<li>${marcas(t)}</li>`).join("")}<li>${marcas(K.entrega)}</li></ol>
          <div class="fila">${dia ? `<button type="button" class="boton principal" data-abrir-dia="${dia}" data-abrir-herr="${herr}">${A ? "🃏 Ver cómo se arma (ejemplo y piezas)" : "✂️ Ver los recortables y la guía"}</button>` : ""}
          ${A && d && d.url ? `<a class="boton" href="${esc(d.url)}" target="_blank" rel="noopener">Abrir el Armador de ${esc(g.nombre)} ↗</a>` : ""}</div>
        </div>
      </div>
      <p class="leyenda">${marcas(K.nota)}</p>`;
  }

  /* ---------- Paso 1: grupos ---------- */
  function pintarGrupos() {
    $("#grupos").innerHTML = D.grupos.map((g) =>
      `<button type="button" class="g${g.grado}" data-grupo="${g.id}" aria-pressed="${g.id === est.grupo}">${esc(g.nombre)}</button>`).join("");
  }

  /* ---------- Paso 2: días ---------- */
  function pintarDias() {
    const g = grupoActual();
    if (!g) {
      $("#paso-dias").hidden = true;
      $("#dia").innerHTML = "";
      return;
    }
    $("#paso-dias").hidden = false;
    const ahora = new Date();
    $("#dias").innerHTML = entradasDe(g).map((e) => {
      const st = estadoDe(e, ahora);
      const futura = st === "futura";
      const hayCuaderno = paginasDe(g, e.md).length > 0;
      return `<li><button type="button" class="dia-btn ${e.extra ? "extra" : e.s.tipo === "C" ? "clase" : "lectura"} ${st}" data-dia="${e.md}"
        aria-pressed="${e.md === est.dia}" ${futura ? 'disabled aria-disabled="true"' : ""}>
        <span class="dia-fecha">${fechaCorta(e.inicio)}${hayCuaderno ? ' <span title="Hay apunte en el cuaderno" aria-label="con apunte en el cuaderno">📒</span>' : ""}</span>
        <span class="dia-nombre">${esc(e.nombre)}</span>
        <span class="dia-tit">${esc(e.titulo)}</span>
        ${e.pasos ? `<span class="dia-meta">${esc(e.pasos)}</span>` : ""}
        <span class="chip ${st}">${ETIQUETA[st]}</span></button></li>`;
    }).join("");
  }

  /* ---------- Paso 3: el día elegido ---------- */
  function pintarDia() {
    const g = grupoActual();
    const cont = $("#dia");
    if (!g) { cont.innerHTML = ""; return; }
    const e = entradasDe(g).find((x) => x.md === est.dia);
    if (!e) {
      cont.innerHTML = '<p class="guia">Elija un día de la lista para ver sus apuntes.</p>';
      return;
    }
    const aviso = !e.extra && D.avisos[e.md] ? `<p class="aviso">${esc(D.avisos[e.md])}</p>` : "";
    cont.innerHTML = `<article class="dia" aria-labelledby="dia-titulo">
      <header class="dia-cab">
        <p class="dia-cuando">${fechaLarga(e.inicio)} · ${esc(e.cuando)}</p>
        <h3 id="dia-titulo">${esc(e.nombre)}: ${esc(e.titulo)}</h3>
        ${e.pasos ? `<p class="dia-meta">${esc(e.pasos)}</p>` : ""}
        ${aviso}
      </header>
      <div class="pestanas" role="tablist" aria-label="Apuntes del día">
        ${PESTANAS.map(([id, ic, t1, t2]) => `<button type="button" role="tab" id="tab-${id}" aria-controls="panel"
          aria-selected="${est.pestana === id}" tabindex="${est.pestana === id ? 0 : -1}" data-pestana="${id}">
          <span class="p-ic" aria-hidden="true">${ic}</span><span class="p-t1">${t1}</span><span class="p-t2">${t2}</span></button>`).join("")}
      </div>
      <div class="panel-dia" role="tabpanel" id="panel" aria-labelledby="tab-${est.pestana}" tabindex="0">
        ${{ trabajamos: panelTrabajamos, cuaderno: panelCuaderno, aprendimos: panelAprendimos }[est.pestana](g, e)}
      </div>
    </article>`;
  }

  /* ----- Pestaña 1: lo que trabajamos ----- */
  function disponible(h, g) {
    if (h === "armado") return !!armadoDe(g);
    if (h === "mesa") return !!(D.recortables && D.recortables[g.id] && D.recortables[g.id].mesa);
    if (h === "digital") return !!(D.digital && D.digital[g.id]);
    return true;
  }
  function herramientasDe(e, g) {
    if (e.extra) return [];
    const vistas = [];
    ((e.aj && e.aj.herramientas) || e.s.herramientas).filter((h) => disponible(h, g)).forEach((h) => {
      const t = HERRAMIENTAS[h];
      if (t && !vistas.some((v) => v[0] === t[0])) vistas.push(t);
    });
    return vistas;
  }
  function panelTrabajamos(g, e) {
    if (e.extra) {
      return `<p class="lead">${esc(e.extra.trabajamos || "Trabajamos en la biblioteca.")}</p>
        <p class="leyenda">Lo que quedó escrito está en la pestaña «Lo que anotamos en el cuaderno».</p>`;
    }
    const hs = herramientasDe(e, g);
    if (!hs.some((h) => h[0] === est.herramienta)) est.herramienta = hs.length ? hs[0][0] : null;
    const libros = g.libros.map((id) => `<em>${esc(D.libros[id])}</em>`).join(", ");
    const hicimos = (e.aj && e.aj.hicimos) || e.s.apuntes.hicimos;
    return `<p class="lead">${esc(rellenar(hicimos, g))}</p>
      ${e.aj && e.aj.avance ? `<div class="caja avance"><h4>Dónde vamos</h4><p>${marcas(e.aj.avance)}</p></div>` : ""}
      <p class="leyenda">Libros de la biblioteca que acompañan el proyecto: ${libros}.</p>
      ${hs.length ? `<h4 class="sub">Explore en casa lo que usamos en clase</h4>
      <div class="herramientas" role="group" aria-label="Herramientas y juegos de la clase">
        ${hs.map(([id, ic, t]) => `<button type="button" class="herr" data-herramienta="${id}" aria-pressed="${est.herramienta === id}"><span aria-hidden="true">${ic}</span> ${t}</button>`).join("")}
      </div>
      <div class="herr-panel">${{ modelo: verModelo, rimas: verRimas, juegos: verJuegos, acuerdos: verAcuerdos, receta: verReceta, recursos: verRecursos, recortables: verRecortables, mesa: verMesa, digital: verDigital, armado: verArmado }[est.herramienta](g)}</div>` : ""}`;
  }

  function modeloHTML(m, modo) {
    const palabras = [];
    m.versos.forEach((v) => v.replace(/\[([^\]]+)\]/g, (_, w) => palabras.push(w)));
    const color = {};
    let n = 0;
    ["consonante", "asonante"].forEach((tipo) => {
      const grupos = {};
      palabras.forEach((w) => { if (color[w]) return; const k = R.claves(w); if (k) (grupos[k[tipo]] = grupos[k[tipo]] || []).push(w); });
      Object.values(grupos).filter((x) => x.length > 1).forEach((x) => { const c = COLORES[n++ % 6]; x.forEach((w) => { color[w] = c; }); });
    });
    return m.versos.map((v) => "<p>" + esc(v).replace(/\[([^\]]+)\]/g, (_, w) => {
      const c = color[w] || COLORES[0];
      return modo === "completar"
        ? `<button type="button" class="hueco" style="--c:${c}" aria-label="Descubrir la palabra que rima">${w}</button>`
        : `<mark class="rima-color" style="--c:${c}">${w}</mark>`;
    }) + "</p>").join("");
  }
  function verModelo(g) {
    const m = modeloDe(g);
    return `<p class="guia">Es el modelo que leímos en voz alta en ${esc(g.nombre)}. Sirve de inspiración: cada calaverita se escribe con ideas propias.</p>
      <div class="fila" role="group" aria-label="Cómo leer el modelo">
        <button type="button" class="boton" data-modo="rimas" aria-pressed="${est.modoModelo === "rimas"}">🎨 Ver las rimas</button>
        <button type="button" class="boton" data-modo="completar" aria-pressed="${est.modoModelo === "completar"}">🙊 Adivinar la rima</button>
        <button type="button" class="boton" data-decir="${esc(m.versos.join(" ").replace(/[[\]]/g, ""))}">🔊 Escuchar</button>
      </div>
      <div class="verso-grande">${modeloHTML(m, est.modoModelo)}</div>
      <p class="leyenda">${est.modoModelo === "rimas" ? "Las palabras del mismo color riman entre sí." : "Digan en voz alta la palabra que falta y toquen la raya para comprobar."}</p>`;
  }

  function verRimas(g) {
    const conImagen = g.grado <= 2;
    const temas = [["todos", "Todas"]].concat(Object.entries(D.temas));
    const familias = D.banco.map((f, i) => {
      const ps = est.tema === "todos" ? f.p : f.p.filter((p) => p[2] === est.tema);
      return ps.length ? `<section class="familia" id="fam-${i}" style="--c:${f.c}"><h5>${esc(f.t)}</h5>
        <ul>${ps.map(([w, e]) => `<li><button type="button" class="palabra" data-decir="${esc(w)}">${conImagen && e ? `<span aria-hidden="true">${e}</span> ` : ""}${esc(w)}</button></li>`).join("")}</ul></section>` : "";
    }).join("");
    return `<form class="ventanilla" id="ventanilla">
        <label>Escriba una palabra y busque con qué rima<input id="palabra" autocomplete="off" spellcheck="false" placeholder="Por ejemplo: salón"></label>
        <button class="boton principal" type="submit">Buscar rimas</button>
        <div class="respuesta" id="respuesta" aria-live="polite"></div>
      </form>
      <div class="chips" role="group" aria-label="Temas">${temas.map(([id, t]) => `<button type="button" class="chip-tema" data-tema="${id}" aria-pressed="${est.tema === id}">${esc(t)}</button>`).join("")}</div>
      <div class="familias">${familias}</div>
      <p class="leyenda">Toque una palabra para escucharla.</p>`;
  }
  function buscarRima(g) {
    const palabra = $("#palabra").value.trim();
    const r = $("#respuesta");
    document.querySelectorAll(".familia.encendida").forEach((x) => x.classList.remove("encendida"));
    const { k, cons, aso } = familiasDe(palabra, g.grado >= 3);
    if (!k) { r.textContent = "Escriba una palabra para buscar sus rimas."; return; }
    const encender = (f) => { const el = $("#fam-" + D.banco.indexOf(f)); if (el) el.classList.add("encendida"); return el; };
    if (cons.length) {
      cons.forEach(encender);
      r.innerHTML = `<strong>${esc(palabra)}</strong> termina en <strong>-${esc(k.muestra)}</strong>. Su familia quedó marcada.${aso.length ? ` También sirven, con rima asonante: ${aso.map((f) => esc(f.t)).join(", ")}.` : ""}`;
      const el = encender(cons[0]);
      if (el) el.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      return;
    }
    aso.forEach(encender);
    r.innerHTML = `<strong>${esc(palabra)}</strong> termina en <strong>-${esc(k.muestra)}</strong> y no está en el banco.
      Truco: recorran el abecedario delante de la terminación y quédense con las palabras que existen.
      <span class="abecedario">${"b c ch d f g j l m n p r s t v z".split(" ").map((l) => `<span>${l}-${esc(k.muestra)}</span>`).join("")}</span>
      ${aso.length ? `<br>Con rima asonante sirven: ${aso.map((f) => esc(f.t)).join(", ")}.` : ""}`;
  }

  function verJuegos(g) {
    const juegos = [["semaforo", "🚦", "¿Riman?"], ["memorama", "🃏", "Memorama"], ["detectives", "🔎", "Detectives de rimas"]];
    return `<div class="chips" role="group" aria-label="Juegos">${juegos.map(([id, ic, t]) =>
      `<button type="button" class="chip-tema" data-juego="${id}" aria-pressed="${est.juego === id}"><span aria-hidden="true">${ic}</span> ${t}</button>`).join("")}</div>
      ${{ semaforo: juegoSemaforo, memorama: juegoMemorama, detectives: juegoDetectives }[est.juego](g)}`;
  }
  function juegoSemaforo(g) {
    const conAso = g.grado >= 3;
    const s = est.semaforo;
    if (!s || s.conAso !== conAso) est.semaforo = { conAso, mazo: mezclar(D.pares.filter((p) => conAso || p[2] !== "asonante")), carta: 0, aciertos: 0, jugadas: 0, veredicto: "" };
    const t = est.semaforo;
    const [a, b] = t.mazo[t.carta % t.mazo.length];
    return `<div class="juego">
      <p class="guia">Digan las dos palabras en voz alta y decidan.${conAso ? " Desde 3.° también vale «se parecen»: solo coinciden las vocales." : ""}</p>
      <p class="par"><span>${esc(a)}</span> y <span>${esc(b)}</span></p>
      <div class="semaforo">
        <button type="button" data-voto="consonante"><span class="luz verde"></span>Riman igual</button>
        ${conAso ? '<button type="button" data-voto="asonante"><span class="luz ambar"></span>Se parecen</button>' : ""}
        <button type="button" data-voto="no"><span class="luz roja"></span>No riman</button>
      </div>
      <p class="veredicto" aria-live="polite">${esc(t.veredicto)}</p>
      <div class="fila centro"><button type="button" class="boton" data-decir="${esc(a + ", " + b)}">🔊 Escuchar</button><button type="button" class="boton principal" data-otra-pareja>Otra pareja</button></div>
      <p class="marcador">Llevamos ${t.aciertos} de ${t.jugadas}</p></div>`;
  }
  function votar(g, voto) {
    const t = est.semaforo;
    if (t.veredicto) return;
    const [a, b, tipo] = t.mazo[t.carta % t.mazo.length];
    const ka = R.claves(a), kb = R.claves(b);
    t.jugadas++;
    const bien = voto === tipo;
    if (bien) t.aciertos++;
    const porque = tipo === "consonante" ? `Terminan igual: -${ka.muestra}.`
      : tipo === "asonante" ? `Solo coinciden las vocales: ${ka.asonante.split("").join("-")}. Es rima asonante.`
        : `Terminan distinto: -${ka.muestra} y -${kb.muestra}.`;
    t.veredicto = (bien ? "¡Bien! " : "Escuchemos otra vez. ") + porque;
  }
  function repartirMemorama(g) {
    const usables = (f) => (g.grado <= 2 ? f.p.filter((p) => p[1]) : f.p);
    const cartas = mezclar(D.banco.filter((f) => usables(f).length >= 2)).slice(0, g.grado <= 2 ? 4 : 6)
      .flatMap((f) => mezclar(usables(f)).slice(0, 2).map(([w, e]) => ({ w, e, f: f.t, c: f.c })));
    est.memo = { grado: g.grado, cartas: mezclar(cartas), abiertas: [], hechas: [], intentos: 0, bloqueo: false };
  }
  function juegoMemorama(g) {
    if (!est.memo || est.memo.grado !== g.grado) repartirMemorama(g);
    const m = est.memo, conImagen = g.grado <= 2;
    const fin = m.hechas.length === m.cartas.length;
    return `<p class="guia">Destapen dos cartas por turno. Si las palabras riman, se quedan abiertas.</p>
      <div class="memorama">${m.cartas.map((c, i) => {
        const vista = m.abiertas.includes(i) || m.hechas.includes(i);
        return `<button type="button" class="carta ${vista ? "vista" : ""} ${m.hechas.includes(i) ? "hecha" : ""}" data-carta="${i}" style="--c:${c.c}" aria-label="${vista ? esc(c.w) : "Carta tapada"}">
          ${vista ? `${conImagen && c.e ? `<span class="emoji" aria-hidden="true">${c.e}</span>` : ""}<span>${esc(c.w)}</span>` : '<span aria-hidden="true">💀</span>'}</button>`;
      }).join("")}</div>
      <p class="marcador" aria-live="polite">${fin ? `🎉 ¡Encontraron todas las parejas en ${m.intentos} intentos!` : `Parejas: ${m.hechas.length / 2} de ${m.cartas.length / 2} · Intentos: ${m.intentos}`}</p>
      <div class="fila"><button type="button" class="boton principal" data-memo-nuevo>Repartir otra vez</button></div>`;
  }
  function destapar(i) {
    const m = est.memo;
    if (m.bloqueo || m.abiertas.includes(i) || m.hechas.includes(i)) return;
    m.abiertas.push(i);
    if (m.abiertas.length === 2) {
      m.intentos++;
      const [a, b] = m.abiertas;
      if (m.cartas[a].f === m.cartas[b].f) { m.hechas.push(a, b); m.abiertas = []; }
      else { m.bloqueo = true; setTimeout(() => { m.abiertas = []; m.bloqueo = false; pintarDia(); }, 1300); }
    }
  }
  function nuevoCaso() {
    const vistas = new Set(), pares = [];
    for (const p of mezclar(D.detectives)) {
      const k = R.claves(R.ultimaPalabra(p[0])).consonante;
      if (!vistas.has(k)) { vistas.add(k); pares.push(p); }
      if (pares.length === 4) break;
    }
    est.det = { pares, derecha: mezclar(pares.map((_, i) => i)), sel: null, unidos: [], error: null };
  }
  function juegoDetectives() {
    if (!est.det) nuevoCaso();
    const d = est.det, fin = d.unidos.length === d.pares.length;
    const izq = d.pares.map((p, i) => `<button type="button" class="verso-det ${d.sel === i ? "sel" : ""} ${d.unidos.includes(i) ? "unido" : ""}" data-det-izq="${i}" ${d.unidos.includes(i) ? "disabled" : ""}>${esc(p[0])}</button>`).join("");
    const der = d.derecha.map((i) => `<button type="button" class="verso-det ${d.unidos.includes(i) ? "unido" : ""} ${d.error === i ? "mal" : ""}" data-det-der="${i}" ${d.unidos.includes(i) ? "disabled" : ""}>${esc(d.pares[i][1])}</button>`).join("");
    return `<p class="guia">Toquen un verso de la izquierda y después el de la derecha que rima con él.</p>
      <div class="detectives"><div class="col-det">${izq}</div><div class="col-det">${der}</div></div>
      <p class="marcador" aria-live="polite">${fin ? "🎉 ¡Caso resuelto! Lean las parejas en voz alta." : d.sel === null ? "Elijan un verso de la izquierda." : "Ahora el verso que rima."}</p>
      <div class="fila"><button type="button" class="boton principal" data-det-nuevo>Otro caso</button></div>`;
  }

  const verAcuerdos = () => `<p class="guia">En las calaveritas nos reímos, pero con cariño. Estos son los acuerdos del grupo:</p>
    <ol class="lista-grande">${D.acuerdos.map((a) => `<li>${esc(a)}</li>`).join("")}</ol>`;
  const verReceta = (g) => `<p class="guia">Cinco piezas que forman una calaverita. En ${esc(g.nombre)} la extensión es de <strong>${esc(D.extension[g.grado].texto)}</strong>.</p>
    <ol class="receta">${D.receta.map((r) => `<li><strong>${esc(r.pieza)}:</strong> ${esc(r.que)} <em>Ejemplo: ${esc(r.ej)}</em></li>`).join("")}</ol>`;
  const verRecursos = (g) => `<p class="guia">Herramientas de poeta que conoce ${esc(g.nombre)} para que la calaverita suene y sorprenda.</p>
    <div class="recursos">${D.recursos.filter((r) => r.grados.includes(g.grado)).map((r) => `<article class="recurso">
      <h5><span aria-hidden="true">${r.ic}</span> ${esc(r.nombre)}</h5><p>${esc(r.que)}</p>
      <blockquote>${esc(r.ejemplo).replace(/ \/ /g, "<br>")}</blockquote>
      <button type="button" class="boton" data-decir="${esc(r.ejemplo.replace(/\//g, ","))}">🔊 Escuchar</button></article>`).join("")}</div>`;

  function verRecortables(g) {
    const r = D.recortables[g.id];
    if (!r) return '<p class="guia">Este grupo todavía no tiene hoja de recortables.</p>';
    const hoja = ([src, alt, pie], i) => `<figure class="recorte">
        <a href="${esc(src)}" target="_blank" rel="noopener" aria-label="Abrir en grande: ${esc(pie || `hoja ${i + 1}`)}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></a>
        <figcaption>${esc(pie || `Hoja ${i + 1}`)} · toque la imagen para verla en grande</figcaption></figure>`;
    return `<p class="guia">${esc(r.guia)}</p>
      <div class="fila"><a class="boton principal" href="${esc(r.pdf)}" target="_blank" rel="noopener">📄 Ver o descargar el PDF de ${esc(g.nombre)}</a></div>
      <div class="recortes">${r.hojas.map(hoja).join("")}</div>
      <h4 class="sub">Así se pegan en el cuaderno</h4>
      <div class="recortes">${hoja([r.cuaderno, r.cuadernoAlt, "Guía «Así organizo mi cuaderno»"], 2)}</div>
      <p class="leyenda">No hace falta imprimir ni recortar en casa: cada estudiante recibe su hoja en la biblioteca y quien faltó la recibe en la siguiente sesión.</p>`;
  }

  function figura([src, alt, pie], i) {
    return `<figure class="recorte">
        <a href="${esc(src)}" target="_blank" rel="noopener" aria-label="Abrir en grande: ${esc(pie || `hoja ${i + 1}`)}"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy"></a>
        <figcaption>${esc(pie || `Hoja ${i + 1}`)} · toque la imagen para verla en grande</figcaption></figure>`;
  }
  function verMesa(g) {
    const m = D.recortables[g.id].mesa;
    return `<p class="guia">${esc(m.guia)}</p>
      <div class="fila"><a class="boton principal" href="${esc(m.pdf)}" target="_blank" rel="noopener">📄 Ver o descargar la hoja de la mesa de ${esc(g.nombre)}</a></div>
      <div class="recortes">${m.hojas.map(figura).join("")}</div>
      <p class="leyenda">En la biblioteca está impresa en un porta servilletas que gira sobre la mesa. No hace falta imprimirla en casa.</p>`;
  }
  function verArmado(g) {
    const A = armadoDe(g);
    const d = D.digital && D.digital[g.id];
    return `<p class="guia">En ${esc(g.nombre)} la calaverita <strong>se arma con tarjetas</strong>: cada verso lleva una tarjeta de inicio y una final, y las finales de cada pareja de versos riman. Lo único que se escribe es <strong>✎ Algo propio</strong>, lo que solo el niño sabe de la persona a quien la dedica.</p>
      <div class="row"><span class="gchip">${esc(g.nombre)}</span><span class="pill">${esc(A.esquema)}</span><span class="pill">${esc(A.reto)}</span></div>
      <div class="cuad"><h4>Ejemplo del maestro: «${esc(A.ejemplo.titulo)}»</h4>${tirasHTML(A)}
        <p class="cuad-firma">— ${esc(A.firma)}</p></div>
      <h4 class="sub">Las piezas, verso por verso</h4>
      <ol class="pasos-arm">${A.pasos.map(([a, b, ca, cb], i) => `<li><span class="seg cat-${ca}">${esc(a)}</span><span class="seg cat-${cb}">${esc(b)}</span>${A.corte && i + 1 === A.corte ? ` <span class="pill">${esc(A.etiquetas[1])}</span>` : ""}</li>`).join("")}</ol>
      ${A.moldes.length ? `<h4 class="sub">Moldes para escribir ✎ Algo propio</h4><ul class="receta">${A.moldes.map(([m, ideas]) => `<li><strong>${esc(m)}</strong>${ideas.length ? ` <em>por ejemplo: ${esc(ideas.join(", "))}</em>` : ""}</li>`).join("")}</ul>` : ""}
      <details class="repaso"><summary>Lista de revisión de ${esc(g.nombre)}</summary><ul class="receta">${A.revisar.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></details>
      ${d && d.url ? `<div class="fila"><a class="boton principal" href="${esc(d.url)}" target="_blank" rel="noopener">🃏 Abrir el armador de ${esc(g.nombre)}</a></div>` : ""}`;
  }
  function verDigital(g) {
    const d = D.digital[g.id];
    return `<h4 class="sub">${esc(d.titulo)}</h4>
      <p class="guia">${esc(d.que)}</p>
      ${d.secciones && d.secciones.length ? `<ul class="receta">${d.secciones.map(([t, x]) => `<li><strong>${esc(t)}:</strong> ${esc(x)}</li>`).join("")}</ul>` : ""}
      ${d.url ? `<div class="fila"><a class="boton principal" href="${esc(d.url)}" target="_blank" rel="noopener">💻 Abrir la herramienta</a></div>`
        : `<p class="leyenda">${esc(d.sinEnlace || "Se usa en la biblioteca, proyectada en el pizarrón.")}</p>`}`;
  }

  /* ----- Pestaña 2: lo que anotamos en el cuaderno ----- */
  function bloque([t, a, b, c, d]) {
    if (t === "tit") return `<h4 class="cd-tit">${marcas(a)}</h4>`;
    if (t === "p") return `<p>${marcas(a)}</p>`;
    if (t === "def") return `<p class="cd-def"><strong>${marcas(a)}</strong> ${marcas(b)}</p>`;
    if (t === "verso") return `<div class="cd-verso">${a ? `<p class="cd-verso-tit">${marcas(a)}</p>` : ""}${b.map((v) => `<p>${marcas(v)}</p>`).join("")}</div>`;
    if (t === "pares") return `${a ? `<p class="cd-sub">${marcas(a)}</p>` : ""}<ul class="cd-pares">${b.map(([x, y]) => `<li><span>${marcas(x)}</span><span class="cd-guion" aria-hidden="true">—</span><span class="sr">rima con</span><span>${marcas(y)}</span></li>`).join("")}</ul>`;
    if (t === "lista") return `${a ? `<p class="cd-sub">${marcas(a)}</p>` : ""}<ul class="cd-lista ${c || ""}">${b.map((x) => `<li>${marcas(x)}</li>`).join("")}</ul>`;
    if (t === "ficha") return `<div class="cd-ficha">${a ? `<p class="cd-ficha-cab">${marcas(a)}</p>` : ""}${b.map(([q, ay, r]) => `<div class="cd-preg"><p class="cd-q"><strong>${marcas(q)}</strong>${ay ? ` <span class="cd-ayuda">${marcas(ay)}</span>` : ""}</p>${r ? `<p class="cd-r">${marcas(r)}</p>` : '<p class="cd-r cd-vacio"><span class="sr">Sin respuesta escrita</span></p>'}</div>`).join("")}</div>`;
    if (t === "img") return `<figure class="cd-img ${d || ""}"><a href="${esc(a)}" target="_blank" rel="noopener" title="Abrir la imagen en grande"><img src="${esc(a)}" alt="${esc(b)}" loading="lazy"></a>${c ? `<figcaption>${esc(c)}</figcaption>` : ""}</figure>`;
    if (t === "tiras") { const A = D.armado && D.armado[b]; return A ? `<div class="cd-tiras">${a ? `<p class="cd-verso-tit">${marcas(a)}</p>` : ""}${tirasHTML(A, c || 1, d || A.N)}</div>` : ""; }
    if (t === "enlace") return `<p><a class="cd-enlace" href="${esc(b)}" target="_blank" rel="noopener">${esc(a)}</a></p>`;
    return "";
  }
  const hojaHTML = (p, pie = "") => `<article class="cd-hoja" aria-label="Cuaderno, ${esc(p.fecha)}"><p class="cd-fecha">${esc(p.fecha)}</p>${p.b.map(bloque).join("")}${pie}</article>`;
  function panelCuaderno(g, e) {
    const ps = paginasDe(g, e.md);
    if (!ps.length) return `<p class="lead">Este día no hay página de cuaderno registrada todavía.</p>
      <p class="leyenda">Los días con apunte llevan 📒 en la lista. Todas las páginas están más abajo, en «El cuaderno completo de ${esc(g.nombre)}».</p>`;
    return `<p class="guia">Así quedó en el cuaderno de ${esc(g.nombre)}. Si su hija o hijo faltó, puede copiarla para ponerse al día.</p>
      ${ps.map((p) => hojaHTML(p)).join("")}`;
  }

  /* ---------- El cuaderno completo del grupo, en orden de fecha ---------- */
  function pintarCuadernoCompleto() {
    const g = grupoActual();
    const sec = $("#cuaderno-completo");
    if (!g) { sec.hidden = true; sec.innerHTML = ""; return; }
    const ps = (C[g.id] || []).filter((p) => yaVisible(p)).sort((a, b) => (a.f < b.f ? -1 : 1));
    sec.hidden = false;
    sec.innerHTML = `<h2 id="t-cuaderno" class="paso"><span class="num" aria-hidden="true">📒</span> El cuaderno completo de ${esc(g.nombre)}</h2>
      <p class="guia">Todas las páginas que el grupo anotó en la biblioteca, en orden de fecha, como se ven en el cuaderno.</p>
      ${ps.length ? `<div class="cd-cuaderno">${ps.map((p) => hojaHTML(p,
        `<p class="cd-ir"><button type="button" class="boton" data-dia="${p.f.slice(5)}">Ver lo que trabajamos y aprendimos ese día</button></p>`)).join("")}</div>`
        : '<p class="leyenda">Todavía no hay páginas de cuaderno para este grupo.</p>'}`;
  }

  /* ----- Pestaña 3: lo que aprendimos ----- */
  function panelAprendimos(g, e) {
    if (e.extra) return `<p class="lead">${esc(e.extra.aprendimos || "")}</p>`;
    const a = Object.assign({}, e.s.apuntes, e.aj || {});
    const requisitos = D.requisitos.map(([t, d]) => `<li><strong>${esc(t)}:</strong> ${d === "@extension" ? esc(`${g.nombre}: ${D.extension[g.grado].texto}`) : esc(d)}</li>`).join("");
    return `<p class="lead">${esc(rellenar(a.aprendimos, g))}</p>
      <div class="caja faltaste"><h4>Si faltó a esta clase</h4><p>${esc(rellenar(a.faltaste, g))}</p></div>
      ${a.casa ? `<div class="caja casa"><h4>Para platicar en casa (opcional)</h4><p>${esc(a.casa)}</p></div>` : ""}
      <details class="repaso"><summary>Lo que debe tener la calaverita de ${esc(g.nombre)}</summary><ul class="receta">${requisitos}</ul></details>`;
  }

  /* ---------- Pintar todo ---------- */
  function pintar() {
    const ga = grupoActual();
    document.body.dataset.grado = ga ? ga.grado : "";
    pintarGrupos();
    pintarCierre();
    pintarDias();
    pintarDia();
    pintarCuadernoCompleto();
    escribirHash();
    const g = grupoActual();
    if (g && window.contarVisita) window.contarVisita(g.id, g.nombre);
  }

  /* ---------- Eventos ---------- */
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest("button");
    if (!b || b.disabled) return;
    const g = grupoActual();
    const ds = b.dataset;
    if (ds.grupo) {
      est.grupo = ds.grupo; guardar("grupo", est.grupo);
      est.dia = elegirDiaPorOmision(grupoActual()); est.pestana = "trabajamos"; est.herramienta = null;
      est.memo = null; est.semaforo = null;
      pintar();
      return;
    }
    if (ds.abrirDia) {
      est.dia = ds.abrirDia; est.pestana = "trabajamos"; est.herramienta = ds.abrirHerr || null;
      pintar();
      const d = $("#dia");
      if (d) d.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      return;
    }
    if (ds.dia) {
      est.dia = ds.dia; est.pestana = "trabajamos"; est.herramienta = null;
      pintar();
      const d = $("#dia");
      if (d) d.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      return;
    }
    if (ds.pestana) { est.pestana = ds.pestana; pintarDia(); escribirHash(); $("#tab-" + est.pestana).focus(); return; }
    if (ds.decir) { decir(ds.decir); b.classList.add("sonando"); setTimeout(() => b.classList.remove("sonando"), 600); return; }
    if (!g) return;
    if (ds.herramienta) est.herramienta = ds.herramienta;
    else if (ds.modo) est.modoModelo = ds.modo;
    else if (b.classList.contains("hueco")) { b.classList.toggle("visto"); return; }
    else if (ds.tema) est.tema = ds.tema;
    else if (ds.juego) est.juego = ds.juego;
    else if (ds.voto) votar(g, ds.voto);
    else if (ds.otraPareja !== undefined) { est.semaforo.carta++; est.semaforo.veredicto = ""; }
    else if (ds.carta !== undefined) destapar(Number(ds.carta));
    else if (ds.memoNuevo !== undefined) repartirMemorama(g);
    else if (ds.detIzq !== undefined) { est.det.sel = Number(ds.detIzq); est.det.error = null; }
    else if (ds.detDer !== undefined) {
      const d = est.det, i = Number(ds.detDer);
      if (d.sel === null) return;
      if (i === d.sel) { d.unidos.push(i); d.sel = null; d.error = null; }
      else { d.error = i; setTimeout(() => { d.error = null; pintarDia(); }, 900); }
    } else if (ds.detNuevo !== undefined) nuevoCaso();
    else return;
    pintarDia();
  });

  document.addEventListener("submit", (ev) => {
    if (ev.target.id !== "ventanilla") return;
    ev.preventDefault();
    const g = grupoActual();
    if (est.tema !== "todos") { const p = $("#palabra").value; est.tema = "todos"; pintarDia(); $("#palabra").value = p; }
    buscarRima(g);
  });

  // Flechas izquierda/derecha entre pestañas (patrón accesible de pestañas)
  document.addEventListener("keydown", (ev) => {
    const tab = ev.target.closest && ev.target.closest('[role="tab"]');
    if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(ev.key)) return;
    ev.preventDefault();
    const ids = PESTANAS.map((p) => p[0]);
    let i = ids.indexOf(est.pestana);
    if (ev.key === "ArrowRight") i = (i + 1) % ids.length;
    if (ev.key === "ArrowLeft") i = (i - 1 + ids.length) % ids.length;
    if (ev.key === "Home") i = 0;
    if (ev.key === "End") i = ids.length - 1;
    est.pestana = ids[i]; pintarDia(); escribirHash(); $("#tab-" + est.pestana).focus();
  });

  function desdeHash() {
    const h = leerHash();
    est.grupo = h.g || leer("grupo", null);
    const g = grupoActual();
    if (!g) { est.grupo = null; est.dia = null; return; }
    const ahora = new Date();
    const valido = h.md && entradasDe(g).some((e) => e.md === h.md && estadoDe(e, ahora) !== "futura");
    est.dia = valido ? h.md : elegirDiaPorOmision(g);
    est.pestana = h.p || "trabajamos";
    est.herramienta = null;
  }
  window.addEventListener("hashchange", () => { desdeHash(); pintar(); });
  window.addEventListener("error", (ev) => {
    const a = $("#aviso-error");
    a.hidden = false;
    a.textContent = "Ocurrió un problema en la página: " + (ev.message || "error desconocido") + ". Tome una foto de este aviso y compártala con el maestro de biblioteca.";
  });

  desdeHash();
  pintar();
}());
