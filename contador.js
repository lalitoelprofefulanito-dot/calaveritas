/* ============================================================
   Contador de visitas por grupo · GoatCounter (gratuito para escuelas
   y proyectos sin fines de lucro, sin cookies y sin datos personales).

   ÚNICO CAMBIO NECESARIO: escriba entre comillas el código de su cuenta
   de GoatCounter. Si su panel es https://biblioteca-molino.goatcounter.com,
   el código es: biblioteca-molino
   Mientras diga "PENDIENTE", el contador no hace nada y la página funciona igual.
   ============================================================ */
const CODIGO_GOATCOUNTER = "PENDIENTE";

(function () {
  "use strict";
  const contados = new Set(); // cada grupo se cuenta una vez por visita, aunque se cambie de grupo varias veces
  const pendientes = [];

  // app.js llama a esta función cada vez que se muestra un grupo
  window.contarVisita = function (id, nombre) {
    if (CODIGO_GOATCOUNTER === "PENDIENTE" || contados.has(id)) return;
    contados.add(id);
    enviar({ path: "/grupo/" + id, title: "Grupo " + nombre });
  };

  function enviar(datos) {
    if (window.goatcounter && window.goatcounter.count) window.goatcounter.count(datos);
    else pendientes.push(datos);
  }

  if (CODIGO_GOATCOUNTER === "PENDIENTE") return;

  // Carga el script de GoatCounter sin conteo automático: contamos nosotros
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = "https://" + CODIGO_GOATCOUNTER + ".goatcounter.com/count";
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  s.onload = function () {
    // Una visita a la página de inicio por cada vez que alguien abre el sitio
    enviar({ path: "/inicio", title: "Entrada al sitio" });
    pendientes.splice(0).forEach(enviar);
  };
  document.head.appendChild(s);
}());
