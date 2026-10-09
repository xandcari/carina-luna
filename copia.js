/* Detector de copias
   Si esta página se abre desde una dirección que no es la oficial (es decir, alguien la copió y la publicó en otro lado),
   muestra un aviso en la copia y envía a un servicio de notificaciones la dirección de la copia y la hora, para avisarle a la titular.
   No se envía ningún dato de la persona que visita. En la dirección oficial y en pruebas locales no hace nada. */
(function () {
  "use strict";
  var OFICIAL = ["xandcari.github.io"];
  var h = location.hostname;
  if (!h || OFICIAL.indexOf(h) > -1 || h === "localhost" || h === "127.0.0.1" || h === "[::1]" || /\.localhost$/.test(h)) return;

  var ORIGINAL = "https://xandcari.github.io/carina-luna/";
  var TOPIC = "cl-aviso-9943bc558606973a";

  // 1) aviso a la titular (como máximo una vez por día y por dirección)
  try {
    var key = "cl-copia-aviso", last = Number(localStorage.getItem(key) || 0);
    if (Date.now() - last > 24 * 3600 * 1000) {
      localStorage.setItem(key, String(Date.now()));
      var msg = "Copia detectada de tu portfolio\nDireccion: " + location.href + "\nHora: " + new Date().toISOString();
      fetch("https://ntfy.sh/" + TOPIC + "?title=Copia%20de%20tu%20portfolio&priority=high&tags=warning", { method: "POST", body: msg, mode: "no-cors", keepalive: true });
    }
  } catch (e) { /* sin almacenamiento: no se avisa */ }

  // 2) aviso visible en la copia
  function banner() {
    var b = document.createElement("div");
    b.setAttribute("role", "alert");
    b.style.cssText = "position:fixed;left:0;right:0;top:0;z-index:2147483647;padding:.8rem 1rem;background:#B3261E;color:#fff;font:700 15px/1.4 system-ui,sans-serif;text-align:center";
    b.appendChild(document.createTextNode("Esta página es una copia no autorizada de un portfolio. / This page is an unauthorised copy. Original: "));
    var a = document.createElement("a");
    a.href = ORIGINAL; a.textContent = ORIGINAL; a.style.cssText = "color:#fff;text-decoration:underline";
    b.appendChild(a);
    document.body.appendChild(b);
    document.title = "Copia no autorizada";
  }
  if (document.body) banner(); else document.addEventListener("DOMContentLoaded", banner);
})();
