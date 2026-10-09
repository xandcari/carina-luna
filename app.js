(function () {
  "use strict";

  var LANGS = ["es", "en", "fr", "de"];
  var LOCALE = { es: "es-AR", en: "en-GB", fr: "fr-FR", de: "de-DE" };
  var VIEWS = ["home", "about", "experience", "projects", "community", "next", "contact", "privacy"];
  var STORE = { lang: "cl-lang", theme: "cl-theme", rail: "cl-rail" };
  var state = { lang: "es", view: "home", filter: "all", commFilter: "all", album: "all", tab: "photos" };

  /* ── utilidades ─────────────────────────────────────────── */
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function get(obj, path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj); }
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function t() { return window.T[state.lang]; }
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = store(STORE.lang);
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : "es";
  }

  // Cambia el espacio fino de miles (U+202F, que algunas tipografías no dibujan) por un espacio duro común.
  function num(n) { return n.toLocaleString(LOCALE[state.lang]).replace(/ /g, " "); }

  function fmtDate(d) {
    if (!d) return t().ui.present;
    if (d.length === 1) return String(d[0]);
    var s = new Intl.DateTimeFormat(LOCALE[state.lang], { month: "short", year: "numeric" }).format(new Date(d[0], d[1] - 1, 1));
    return s.replace(/\.(?=\s)/, "");
  }

  /* ── textos estáticos ───────────────────────────────────── */
  function renderStatic() {
    var tr = t();
    document.documentElement.lang = state.lang;
    document.title = tr.meta.title;
    $('meta[name="description"]').setAttribute("content", tr.meta.desc);
    $('meta[property="og:title"]').setAttribute("content", tr.meta.title);
    $('meta[property="og:description"]').setAttribute("content", tr.meta.desc);

    $$("[data-i18n]").forEach(function (n) {
      var v = get(tr, n.getAttribute("data-i18n"));
      if (typeof v === "string") n.textContent = v;
    });
    $$("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":"), v = get(tr, p[1]);
        if (typeof v === "string") n.setAttribute(p[0], v);
      });
    });
    // tooltips de la barra colapsada
    $$(".rail-link").forEach(function (a) { var l = a.querySelector(".rl-label"); if (l) a.setAttribute("data-tip", l.textContent); });
    $("#langSwitch").setAttribute("aria-label", tr.ui.lang);
    $$("#langSwitch button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)); });
    $("#year").textContent = new Date().getFullYear();
  }

  /* ── vistas ─────────────────────────────────────────────── */
  function renderTilesNav() {
    var ul = $("#tilesNav"); clear(ul);
    VIEWS.filter(function (v) { return v !== "home" && v !== "privacy"; }).forEach(function (v) {
      var src = $('.rail-link[data-view="' + v + '"]');
      var svg = src.querySelector("svg").cloneNode(true);
      ul.appendChild(el("li", {}, [el("a", { class: "tile-link", href: "#" + v }, [svg, el("span", { text: t().nav[v === "community" ? "communities" : v] }), el("span", { class: "arr", "aria-hidden": "true", text: "→" })])]));
    });
  }

  function renderStats() {
    var ul = $("#stats"); clear(ul);
    window.DATA.stats.forEach(function (s) {
      var strong = el("strong", { "data-n": s.n, "data-plus": s.plus ? "1" : "" });
      strong.textContent = num(s.n) + (s.plus ? "+" : "");
      ul.appendChild(el("li", { class: "stat" }, [strong, el("span", { text: t().stats[s.id] })]));
    });
  }

  function renderAbout() {
    var dl = $("#facts"); clear(dl);
    t().about.facts.forEach(function (f) { dl.appendChild(el("div", {}, [el("dt", { text: f[0] }), el("dd", { text: f[1] })])); });
    var portrait = $("#portraitImg"); if (portrait) portrait.setAttribute("alt", t().moments.portrait);
  }

  function renderSkills() {
    var box = $("#skillGrid"); clear(box);
    t().skills.groups.forEach(function (g) {
      var chips = el("div", { class: "chips" }, g.i.map(function (x) { return el("span", { class: "chip", text: x }); }));
      box.appendChild(el("article", { class: "skill-card reveal" }, [el("h3", { text: g.t }), chips]));
    });
  }

  function renderExperience() {
    var ol = $("#timeline"); clear(ol);
    window.DATA.experience.forEach(function (j) {
      var txt = t().experience.items[j.id];
      ol.appendChild(el("li", { class: "job reveal" + (j.end ? "" : " current") }, [
        el("div", { class: "job-head" }, [el("h3", { text: txt.role }), el("span", { class: "date", text: fmtDate(j.start) + " – " + fmtDate(j.end) })]),
        el("p", { class: "org", text: j.org }),
        el("ul", {}, txt.bullets.map(function (b) { return el("li", { text: b }); }))
      ]));
    });
  }

  function renderEducation() {
    var ul = $("#eduList"); clear(ul);
    window.DATA.education.forEach(function (e) {
      var live = e.when === "inProgress";
      ul.appendChild(el("li", {}, [
        el("div", {}, [el("b", { text: t().education.items[e.id] }), el("small", { text: e.org })]),
        el("span", { class: "when" + (live ? " live" : ""), text: live ? t().education.inProgress : e.when })
      ]));
    });
    var ll = $("#langList"); clear(ll);
    t().education.langs.forEach(function (l) { ll.appendChild(el("li", {}, [document.createTextNode(l[0]), el("span", { text: l[1] })])); });
  }

  function filterButtons(box, keys, labels, current, onPick) {
    clear(box);
    keys.forEach(function (k) {
      var b = el("button", { type: "button", class: "filter", "aria-pressed": String(current === k), text: labels[k] });
      b.addEventListener("click", function () { onPick(k); });
      box.appendChild(b);
    });
  }

  function renderProjects() {
    var names = t().projects.filters;
    filterButtons($("#filters"), ["all", "security", "web", "data", "design"], names, state.filter, function (k) { state.filter = k; renderProjects(); });
    var grid = $("#projectGrid"); clear(grid);
    window.DATA.projects.forEach(function (p) {
      if (state.filter !== "all" && p.cat.indexOf(state.filter) < 0) return;
      var txt = t().projects.items[p.id];
      grid.appendChild(el("article", { class: "card" + (p.featured ? " featured" : "") }, [
        el("span", { class: "meta", text: txt.role }),
        el("h3", { text: txt.name }),
        el("p", { text: txt.desc }),
        el("div", { class: "chips" }, p.stack.map(function (s) { return el("span", { class: "chip", text: s }); }))
      ]));
    });
  }

  function renderNext() {
    var grid = $("#nextGrid"); clear(grid);
    window.DATA.next.forEach(function (n) {
      var txt = t().next.items[n.id];
      grid.appendChild(el("article", { class: "next-card" }, [
        el("span", { class: "status " + n.status, text: t().next.status[n.status] }),
        el("h3", { text: txt.name }),
        el("p", { text: txt.desc }),
        el("div", { class: "chips" }, n.tags.map(function (g) { return el("span", { class: "chip", text: g }); }))
      ]));
    });
  }

  function renderLinks() {
    var d = window.DATA;
    var map = { "#mailLink": "mailto:" + d.email, "#inLink": d.linkedin, "#ghLink": d.github, "#cvLink": d.cv };
    Object.keys(map).forEach(function (sel) { var n = $(sel); if (n) n.href = map[sel]; });
  }

  /* ── Comunidades ────────────────────────────────────────── */
  function renderCommTabs() {
    var C = t().communities;
    $("#tab-photos").textContent = C.tabPhotos;
    $("#tab-events").textContent = C.tabEvents;
    setTab(state.tab, true);
  }
  function setTab(k, quiet) {
    state.tab = k;
    ["photos", "events"].forEach(function (n) {
      $("#tab-" + n).setAttribute("aria-selected", String(n === k));
      $("#tab-" + n).setAttribute("tabindex", n === k ? "0" : "-1");
      $("#panel-" + n).hidden = n !== k;
    });
    if (k !== "photos") { var v = $("#reelVideo"); if (v) v.pause(); }
    if (k === "events") updateDots();
    if (!quiet) observeReveal();
  }

  function renderCommunities() {
    var C = t().communities;
    var present = {};
    window.DATA.communities.forEach(function (c) { present[c.type] = true; });
    var keys = ["all", "event", "community", "course", "project"].filter(function (k) { return k === "all" || present[k]; });
    var labels = { all: t().ui.all, event: C.types.event, community: C.types.community, course: C.types.course, project: C.types.project };
    filterButtons($("#commFilters"), keys, labels, state.commFilter, function (k) { state.commFilter = k; renderCommunities(); });
    var grid = $("#commGrid"); clear(grid);
    window.DATA.communities.forEach(function (c) {
      if (state.commFilter !== "all" && c.type !== state.commFilter) return;
      var txt = C.items[c.id];
      var initials = c.name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
      var meta = [C.types[c.type], c.year].filter(Boolean).join(" · ");
      var badge = c.logo
        ? el("span", { class: "comm-badge has-logo", "aria-hidden": "true" }, [el("img", { src: c.logo, alt: "", width: 48, height: 48, loading: "lazy" })])
        : el("span", { class: "comm-badge t-" + c.type, "aria-hidden": "true", text: initials });
      var kids = [
        el("div", { class: "comm-top" }, [badge, el("div", {}, [el("span", { class: "meta", text: meta }), el("h3", { text: c.name })])]),
        el("p", { class: "comm-role" }, [el("b", { text: txt.role })])
      ];
      if (txt.desc) kids.push(el("p", { text: txt.desc }));
      grid.appendChild(el("article", { class: "card" }, kids));
    });
  }

  /* carrusel de gráficas de eventos */
  function renderGallery() {
    var C = t().communities;
    var track = $("#carTrack"), dots = $("#carDots"); clear(track); clear(dots);
    var slides = window.DATA.gallery;
    slides.forEach(function (g, i) {
      var img = el("img", { src: g.src, alt: g.label, width: g.w, height: g.h, loading: "lazy" });
      var cap = el("figcaption", {}, [el("b", { text: g.label }), g.credit ? el("span", { text: " · " + C.creditLabel + ": " + g.credit }) : null]);
      track.appendChild(el("figure", { class: "slide", role: "group", "aria-roledescription": "slide", "aria-label": C.slide + " " + (i + 1) + " / " + slides.length }, [img, cap]));
      var d = el("button", { type: "button", class: "dot-btn", role: "tab", "aria-label": C.slide + " " + (i + 1) });
      d.addEventListener("click", function () { goTo(i); });
      dots.appendChild(d);
    });
    $("#carPrev").setAttribute("aria-label", C.prev);
    $("#carNext").setAttribute("aria-label", C.next);
    var single = slides.length < 2;
    $("#carPrev").hidden = single; $("#carNext").hidden = single; dots.hidden = single;
    updateDots();
  }
  function slideW() { var s = $("#carTrack .slide"); return s ? s.getBoundingClientRect().width + 16 : 0; }
  function goTo(i) { $("#carTrack").scrollTo({ left: i * slideW(), behavior: reduceMotion ? "auto" : "smooth" }); }
  function updateDots() {
    var tr = $("#carTrack"); if (!tr) return;
    var i = Math.round(tr.scrollLeft / (slideW() || 1));
    $$("#carDots .dot-btn").forEach(function (d, k) { d.setAttribute("aria-selected", String(k === i)); });
  }
  function initCarousel() {
    var tr = $("#carTrack");
    tr.addEventListener("scroll", function () { window.requestAnimationFrame(updateDots); }, { passive: true });
    $("#carPrev").addEventListener("click", function () { tr.scrollBy({ left: -slideW(), behavior: "smooth" }); });
    $("#carNext").addEventListener("click", function () { tr.scrollBy({ left: slideW(), behavior: "smooth" }); });
    tr.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); tr.scrollBy({ left: slideW(), behavior: "smooth" }); }
      if (e.key === "ArrowLeft") { e.preventDefault(); tr.scrollBy({ left: -slideW(), behavior: "smooth" }); }
    });
  }

  /* fotos por álbum + visor + reel */
  var shown = [], lbIndex = 0;

  function albumName(a) { return a.name || t().moments.albumMore; }

  function renderPhotos() {
    var M = t().moments, albums = window.DATA.albums;
    var labels = { all: t().ui.all };
    albums.forEach(function (a) { labels[a.id] = albumName(a); });
    filterButtons($("#albumChips"), ["all"].concat(albums.map(function (a) { return a.id; })), labels, state.album, function (k) { state.album = k; renderPhotos(); });
    $("#albumChips").setAttribute("aria-label", M.albums);

    var order = albums.map(function (a) { return a.id; });
    shown = window.DATA.moments.filter(function (m) { return state.album === "all" || m.album === state.album; })
      .sort(function (a, b) { return order.indexOf(a.album) - order.indexOf(b.album); });

    var grid = $("#photoGrid"); clear(grid);
    shown.forEach(function (m, i) {
      var wide = m.w > m.h * 1.6;
      var img = el("img", { src: m.src, alt: m.cap || M.alt, width: m.w, height: m.h, loading: "lazy", decoding: "async" });
      var btn = el("button", { type: "button", class: "tile-btn", "aria-label": (m.cap || M.alt) + " · " + (i + 1) + "/" + shown.length }, [img, m.cap ? el("span", { class: "tile-cap", text: m.cap }) : null]);
      btn.addEventListener("click", function () { openLightbox(i); });
      grid.appendChild(el("li", { class: "tile" + (wide ? " wide" : "") }, [btn]));
    });

    var v = $("#reelVideo"), r = window.DATA.reel;
    if (v && !v.getAttribute("src")) { v.setAttribute("src", r.src); v.setAttribute("poster", r.poster); }
    if (v) v.setAttribute("aria-label", M.reel);
    $("#reelBtn").setAttribute("aria-label", v && !v.paused ? M.pause : M.play);
    $("#lbClose").setAttribute("aria-label", M.close); $("#lbPrev").setAttribute("aria-label", M.prev); $("#lbNext").setAttribute("aria-label", M.next);
  }

  function showLightbox(i) {
    lbIndex = (i + shown.length) % shown.length;
    var m = shown[lbIndex];
    var img = $("#lbImg"); img.src = m.src; img.alt = m.cap || t().moments.alt;
    $("#lbCap").textContent = (m.cap ? m.cap + " · " : "") + (lbIndex + 1) + " / " + shown.length;
  }
  function openLightbox(i) { var lb = $("#lightbox"); showLightbox(i); if (!lb.open) lb.showModal(); }

  function initPhotos() {
    var lb = $("#lightbox");
    $("#lbClose").addEventListener("click", function () { lb.close(); });
    $("#lbPrev").addEventListener("click", function () { showLightbox(lbIndex - 1); });
    $("#lbNext").addEventListener("click", function () { showLightbox(lbIndex + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") showLightbox(lbIndex - 1);
      if (e.key === "ArrowRight") showLightbox(lbIndex + 1);
    });
    var v = $("#reelVideo"), btn = $("#reelBtn"), fig = $("#reel");
    function sync() { fig.classList.toggle("playing", !v.paused); btn.setAttribute("aria-label", v.paused ? t().moments.play : t().moments.pause); }
    btn.addEventListener("click", function () { if (v.paused) v.play().catch(function () {}); else v.pause(); });
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    if ("IntersectionObserver" in window && !reduceMotion) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) v.play().catch(function () {}); else v.pause(); });
      }, { threshold: 0.45 }).observe(v);
    }
    // pestañas internas (con flechas del teclado)
    var tabs = $("#commTabs");
    tabs.addEventListener("click", function (e) { var b = e.target.closest(".tab"); if (b) setTab(b.dataset.tab); });
    tabs.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      var next = state.tab === "photos" ? "events" : "photos"; setTab(next); $("#tab-" + next).focus();
    });
    sync();
  }

  /* ── animaciones ────────────────────────────────────────── */
  var revealObs;
  function observeReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!revealObs) {
      revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    }
    els.forEach(function (n) { if (!n.classList.contains("in")) revealObs.observe(n); });
  }

  var counted = false;
  function countUp() {
    if (counted || reduceMotion) return;
    counted = true;
    var start = performance.now(), dur = 1100, nodes = $$("#stats strong");
    function tick(now) {
      var p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      nodes.forEach(function (n) { n.textContent = num(Math.round(Number(n.dataset.n) * e)) + (n.dataset.plus && p === 1 ? "+" : ""); });
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── ruteo por vistas ───────────────────────────────────── */
  function currentView() {
    var h = location.hash.replace(/^#\/?/, "");
    return VIEWS.indexOf(h) > -1 ? h : "home";
  }
  function showView(v, first) {
    state.view = v;
    $$(".view").forEach(function (s) {
      var on = s.dataset.view === v;
      s.hidden = !on; s.classList.toggle("active", on);
    });
    $$(".rail-link[data-view]").forEach(function (a) {
      if (a.dataset.view === v) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (v !== "community") { var vid = $("#reelVideo"); if (vid) vid.pause(); }
    closeDrawer();
    if (!first) { window.scrollTo(0, 0); $("#main").focus({ preventScroll: true }); }
    observeReveal();
    if (v === "home") countUp();
    if (v === "community" && state.tab === "events") updateDots();
  }

  /* ── barra lateral, tema, idioma ────────────────────────── */
  function setRail(expanded) {
    $("#app").classList.toggle("expanded", expanded);
    $("#railToggle").setAttribute("aria-expanded", String(expanded));
    store(STORE.rail, expanded ? "1" : "0");
  }
  function openDrawer() { $("#app").classList.add("drawer"); $("#scrim").hidden = false; }
  function closeDrawer() { $("#app").classList.remove("drawer"); $("#scrim").hidden = true; }

  function applyTheme(mode) { document.documentElement.setAttribute("data-theme", mode === "light" || mode === "dark" ? mode : "auto"); }
  function currentIsDark() {
    var m = document.documentElement.getAttribute("data-theme");
    if (m === "dark") return true;
    if (m === "light") return false;
    return matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /* ── política de privacidad ─────────────────────────────── */
  function renderPrivacy() {
    var P = t().privacy;
    $("#privTitle").textContent = P.title;
    $("#privUpdated").textContent = P.updated;
    $("#privIntro").textContent = P.intro;
    var box = $("#privBody"); clear(box);
    P.sections.forEach(function (s) {
      box.appendChild(el("h3", { text: s.h }));
      (s.p || []).forEach(function (x) { box.appendChild(el("p", { text: x })); });
      if (s.ul) box.appendChild(el("ul", {}, s.ul.map(function (x) { return el("li", { text: x }); })));
    });
  }

  function renderAll() {
    renderStatic();
    renderTilesNav(); renderStats(); renderAbout(); renderSkills(); renderExperience(); renderEducation();
    renderProjects(); renderCommTabs(); renderPhotos(); renderCommunities(); renderGallery(); renderNext(); renderLinks(); renderPrivacy();
    observeReveal();
  }

  function setLang(l) {
    state.lang = l; store(STORE.lang, l);
    try { var url = new URL(location.href); url.searchParams.set("lang", l); history.replaceState(null, "", url); } catch (e) { /* en un marco restringido no se puede cambiar la URL */ }
    counted = true;
    renderAll();
    $$(".reveal").forEach(function (n) { n.classList.add("in"); });
  }

  /* fondo animado: solo en pantallas grandes, sin "reducir movimiento" ni "ahorro de datos" */
  function initBackground() {
    var v = $("#bgReel"); if (!v) return;
    var conn = navigator.connection || {};
    if (reduceMotion || conn.saveData || innerWidth <= 860) return;
    v.src = "assets/video/fondo-eventos.mp4";
    v.addEventListener("playing", function () { v.parentNode.classList.add("on"); }, { once: true });
    v.play().catch(function () {});
    document.addEventListener("visibilitychange", function () { if (document.hidden) v.pause(); else v.play().catch(function () {}); });
  }

  /* correo: texto seleccionable + botón copiar (los enlaces mailto no siempre funcionan) */
  function initCopy() {
    var btn = $("#copyMail"), txt = $("#mailText"); if (!btn) return;
    txt.textContent = window.DATA.email;
    var timer;
    btn.addEventListener("click", function () {
      function done(ok) {
        btn.textContent = ok ? t().ui.copied : t().ui.copy;
        clearTimeout(timer); timer = setTimeout(function () { btn.textContent = t().ui.copy; }, 1800);
        if (!ok) { var r = document.createRange(); r.selectNodeContents(txt); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      }
      try { navigator.clipboard.writeText(window.DATA.email).then(function () { done(true); }, function () { done(false); }); } catch (e) { done(false); }
    });
  }

  function init() {
    state.lang = pickLang();
    if (window.__SHARED__) $$("[data-cv]").forEach(function (n) { n.remove(); });   // versión compartida: sin descarga de CV
    applyTheme(store(STORE.theme));
    renderAll();
    initCarousel(); initPhotos(); initBackground(); initCopy();

    $$("#langSwitch button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
    $("#themeBtn").addEventListener("click", function () { var n = currentIsDark() ? "light" : "dark"; applyTheme(n); store(STORE.theme, n); });
    $("#railToggle").addEventListener("click", function () { setRail(!$("#app").classList.contains("expanded")); });
    $("#railOpen").addEventListener("click", openDrawer);
    $("#scrim").addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

    if (store(STORE.rail) === "1" && innerWidth > 860) setRail(true);
    window.addEventListener("hashchange", function () { showView(currentView()); });
    showView(currentView(), true);
    if (state.view === "home") countUp();
  }

  init();
})();
