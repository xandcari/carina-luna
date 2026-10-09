/* ============================================================
   Contenido de la página "Comunidades" (carrusel + tarjetas)
   Para sumar una foto: copiarla a assets/comunidades/ y agregar
   una línea en DATA.gallery. Para sumar una comunidad: DATA.communities
   y T.<idioma>.communities.items.<id> en los cuatro idiomas.
   type: event | community | course | project
   ============================================================ */

window.DATA.gallery = [
  { src: "assets/comunidades/talentoit-plataforma.jpg", community: "talentoit", label: "TalentoIT · Feria Virtual de Empleo Tech", credit: "Potrero Digital", w: 1080, h: 1350 },
  { src: "assets/comunidades/ekoparty-22-anuncio.jpg", community: "hotfixers", label: "Ekoparty 22 · Buenos Aires", credit: "ekoparty.org", w: 1282, h: 1600 },
  { src: "assets/comunidades/talentoit-visita-google.jpg", community: "google", label: "Visita a Google · 8/10", credit: "Potrero Digital · Fundación Compromiso", w: 1080, h: 1350 },
  { src: "assets/comunidades/cloud-speaking-english-club.jpg", community: "english", label: "Cloud Speaking English Club", credit: "AWS User Group Cochabamba", w: 1200, h: 1200 },
  { src: "assets/comunidades/nerdearla-nerd.jpg", community: "nerdearla", label: "Nerdearla Argentina", credit: "nerdearla.com", w: 533, h: 800 },
  { src: "assets/comunidades/ekoparty-agenda-2026.jpg", community: "hotfixers", label: "Ekoparty 2026 · Agenda Main Track", credit: "ekoparty.org", w: 1282, h: 1600 },
  { src: "assets/comunidades/ekoparty-startup-zone.jpg", community: "hotfixers", label: "Ekoparty 2026 · Startup Zone", credit: "ekoparty.org", w: 1080, h: 1350 },
  { src: "assets/comunidades/ekoparty-main-ctf.jpg", community: "hotfixers", label: "Ekoparty 2026 · Main CTF", credit: "ekoparty.org", w: 1080, h: 1350 },
  { src: "assets/comunidades/ekoparty-wardriving.jpg", community: "hotfixers", label: "Ekoparty 2026 · Wardriving", credit: "ekoparty.org", w: 1080, h: 1350 }
];

window.DATA.communities = [
  { id: "talentoit", type: "event", name: "Talento IT · Feria virtual de empleo Tech", year: "2026" },
  { id: "google", type: "event", name: "Visita a Google · 8/10", year: "2026" },
  { id: "hotfixers", type: "event", name: "HOTFIXERS · Ekoparty 2026", year: "2026" },
  { id: "nerdearla", type: "event", name: "Nerdearla Argentina 2026", year: "2026", logo: "assets/comunidades/logo-nerdearla.png" },
  { id: "awscd", type: "event", name: "AWS Community Day Argentina", year: "2026" },
  { id: "kcd", type: "event", name: "KCD Argentina 2026 · 3/10", year: "2026" },
  { id: "hack", type: "event", name: "Hack the Talent Zone", year: "2026" },
  { id: "steam", type: "community", name: "STEAM Girls Club", year: "", logo: "assets/comunidades/logo-steam-girls-club.jpg" },
  { id: "aws", type: "community", name: "AWS User Group Cochabamba", year: "" },
  { id: "english", type: "community", name: "Cloud Speaking English Club", year: "" },
  { id: "tecnokeeper", type: "course", name: "TecnoKeeper · Fundamentos de Ciberseguridad", year: "2026" },
  { id: "innova", type: "project", name: "Innova Lab · Equipo 27", year: "2026" },
  { id: "s2620", type: "project", name: "Talently Lab · s2620", year: "2026" },
  { id: "ux4", type: "project", name: "UX Proyecto #4", year: "" },
  { id: "uxdesp", type: "project", name: "UX/UI Desperdicios", year: "" }
];

function _comm(T, nav, o) { T.nav.communities = nav; T.communities = o; }

_comm(window.T.es, "Comunidades", {
  title: "Comunidades",
  intro: "Aprendo y construyo en comunidad: eventos, grupos de estudio, proyectos colaborativos y espacios de tecnología.",
  creditLabel: "Imagen",
  galleryTitle: "En imágenes",
  prev: "Anterior", next: "Siguiente", slide: "Imagen",
  back: "Volver al portfolio",
  types: { event: "Evento", community: "Comunidad", course: "Curso", project: "Proyecto" },
  items: {
    talentoit: { role: "Desarrollo del portal", desc: "Feria virtual y gratuita para toda la Argentina, del 3 al 7 de agosto de 2026, organizada por Potrero Empleos (Potrero Digital · Fundación Compromiso). Desarrollé el portal privado de acceso a CVs y el dashboard de métricas." },
    google: { role: "Participante", desc: "Encuentro del 8 de octubre con desayuno y networking, taller de IA con Gemini y panel con Googlers, organizado por Potrero Digital y Fundación Compromiso." },
    hotfixers: { role: "Voluntaria (Hotfixer) · presencial, jornada completa · sector Sponsors y Speakers", desc: "Voluntariado en la 22.ª Ekoparty (7 al 9 de octubre de 2026, CEC Buenos Aires), la conferencia de ciberseguridad más importante de Latinoamérica. Apoyo en el sector de Sponsors, con los stands de patrocinadores, y en Speakers." },
    nerdearla: { role: "Voluntaria", desc: "El evento tech gratuito más grande de Hispanoamérica: charlas y talleres online (22 y 23 de septiembre) y presenciales (24 al 26) en Ciudad Cultural Konex, Buenos Aires." },
    awscd: { role: "Voluntaria", desc: "Evento de tecnología cloud de la comunidad AWS de Argentina: 12 de septiembre de 2026, en UAI Anexo Cisneros (CABA)." },
    kcd: { role: "Voluntaria", desc: "Voluntariado en KCD Argentina 2026 (Kubernetes Community Days), el 3 de octubre." },
    hack: { role: "Participante", desc: "Stand de Women Hacks en Ekoparty 2026, con mentorías de STEAM Girls Club." },
    steam: { role: "Miembro", desc: "Comunidad que impulsa el talento tech de las mujeres con formación, visibilidad y red de apoyo: proyectos, charlas, talleres y ofertas de empleo." },
    aws: { role: "Miembro", desc: "Grupo de usuarios de AWS de Cochabamba (Bolivia), que impulsa iniciativas de comunidad como el Cloud Speaking English Club." },
    english: { role: "Miembro", desc: "Club virtual de práctica oral de inglés para la comunidad tech: 6 sesiones semanales, jueves a las 20:00 (hora de Bolivia), nivel básico e intermedio." },
    tecnokeeper: { role: "Estudiante", desc: "Curso de fundamentos de ciberseguridad." },
    innova: { role: "Frontend", desc: "Equipo del proyecto PRECIAR, la calculadora de costos y punto de equilibrio." },
    s2620: { role: "UX/UI", desc: "Grupo de simulación de proyectos de Talently Lab." },
    ux4: { role: "Integrante", desc: "Grupo de trabajo de diseño UX/UI." },
    uxdesp: { role: "Integrante", desc: "Grupo de trabajo de diseño UX/UI." }
  }
});

_comm(window.T.en, "Communities", {
  title: "Communities",
  intro: "I learn and build together with others: events, study groups, collaborative projects and tech spaces.",
  creditLabel: "Image",
  galleryTitle: "In pictures",
  prev: "Previous", next: "Next", slide: "Image",
  back: "Back to portfolio",
  types: { event: "Event", community: "Community", course: "Course", project: "Project" },
  items: {
    talentoit: { role: "Portal development", desc: "A free virtual job fair for all of Argentina, 3–7 August 2026, organised by Potrero Empleos (Potrero Digital · Fundación Compromiso). I built the private CV-access portal and the metrics dashboard." },
    google: { role: "Participant", desc: "An 8 October meet-up with breakfast and networking, an AI workshop on Gemini and a panel with Googlers, organised by Potrero Digital and Fundación Compromiso." },
    hotfixers: { role: "Volunteer (Hotfixer) · on site, full time · Sponsors and Speakers area", desc: "Volunteering at the 22nd Ekoparty (7–9 October 2026, CEC Buenos Aires), Latin America's leading cybersecurity conference. Support in the Sponsors area, with the sponsor booths, and with Speakers." },
    nerdearla: { role: "Volunteer", desc: "The largest free tech event in the Spanish-speaking world: online talks and workshops (22–23 September) and in-person ones (24–26) at Ciudad Cultural Konex, Buenos Aires." },
    awscd: { role: "Volunteer", desc: "A cloud technology event by Argentina's AWS community: 12 September 2026 at UAI Anexo Cisneros (Buenos Aires)." },
    kcd: { role: "Volunteer", desc: "Volunteering at KCD Argentina 2026 (Kubernetes Community Days) on 3 October." },
    hack: { role: "Participant", desc: "Women Hacks stand at Ekoparty 2026, with mentoring by STEAM Girls Club." },
    steam: { role: "Member", desc: "A community that boosts women's tech talent with training, visibility and a support network: projects, talks, workshops and job offers." },
    aws: { role: "Member", desc: "The AWS user group of Cochabamba (Bolivia), behind community initiatives such as the Cloud Speaking English Club." },
    english: { role: "Member", desc: "A virtual spoken-English practice club for the tech community: 6 weekly sessions, Thursdays at 8 pm (Bolivia time), basic and intermediate levels." },
    tecnokeeper: { role: "Student", desc: "Course on cybersecurity fundamentals." },
    innova: { role: "Frontend", desc: "Team behind PRECIAR, the cost and break-even calculator." },
    s2620: { role: "UX/UI", desc: "A Talently Lab project simulation group." },
    ux4: { role: "Team member", desc: "A UX/UI design working group." },
    uxdesp: { role: "Team member", desc: "A UX/UI design working group." }
  }
});

_comm(window.T.fr, "Communautés", {
  title: "Communautés",
  intro: "J'apprends et je construis en communauté : événements, groupes d'étude, projets collaboratifs et espaces tech.",
  creditLabel: "Image",
  galleryTitle: "En images",
  prev: "Précédent", next: "Suivant", slide: "Image",
  back: "Retour au portfolio",
  types: { event: "Événement", community: "Communauté", course: "Formation", project: "Projet" },
  items: {
    talentoit: { role: "Développement du portail", desc: "Foire virtuelle et gratuite pour toute l'Argentine, du 3 au 7 août 2026, organisée par Potrero Empleos (Potrero Digital · Fundación Compromiso). J'ai développé le portail privé d'accès aux CV et le tableau de bord d'indicateurs." },
    google: { role: "Participante", desc: "Rencontre du 8 octobre avec petit-déjeuner et networking, atelier d'IA sur Gemini et table ronde avec des Googlers, organisée par Potrero Digital et la Fundación Compromiso." },
    hotfixers: { role: "Bénévole (Hotfixer) · sur place, à temps plein · pôle Sponsors et Speakers", desc: "Bénévolat à la 22e Ekoparty (du 7 au 9 octobre 2026, CEC Buenos Aires), la principale conférence de cybersécurité d'Amérique latine. Appui au pôle Sponsors, avec les stands des partenaires, et auprès des Speakers." },
    nerdearla: { role: "Bénévole", desc: "Le plus grand événement tech gratuit d'Amérique hispanophone : conférences et ateliers en ligne (22 et 23 septembre) puis sur place (24 au 26) à la Ciudad Cultural Konex, Buenos Aires." },
    awscd: { role: "Bénévole", desc: "Événement cloud de la communauté AWS d'Argentine : 12 septembre 2026, à l'UAI Anexo Cisneros (Buenos Aires)." },
    kcd: { role: "Bénévole", desc: "Bénévolat à KCD Argentina 2026 (Kubernetes Community Days), le 3 octobre." },
    hack: { role: "Participante", desc: "Stand Women Hacks à Ekoparty 2026, avec du mentorat de STEAM Girls Club." },
    steam: { role: "Membre", desc: "Communauté qui soutient les talents tech féminins avec formation, visibilité et réseau d'entraide : projets, conférences, ateliers et offres d'emploi." },
    aws: { role: "Membre", desc: "Le groupe d'utilisateurs AWS de Cochabamba (Bolivie), à l'origine d'initiatives communautaires comme le Cloud Speaking English Club." },
    english: { role: "Membre", desc: "Club virtuel de pratique orale de l'anglais pour la communauté tech : 6 séances hebdomadaires, le jeudi à 20 h (heure de Bolivie), niveaux débutant et intermédiaire." },
    tecnokeeper: { role: "Étudiante", desc: "Formation aux fondamentaux de la cybersécurité." },
    innova: { role: "Frontend", desc: "L'équipe du projet PRECIAR, le calculateur de coûts et de seuil de rentabilité." },
    s2620: { role: "UX/UI", desc: "Groupe de simulation de projets de Talently Lab." },
    ux4: { role: "Membre de l'équipe", desc: "Groupe de travail en design UX/UI." },
    uxdesp: { role: "Membre de l'équipe", desc: "Groupe de travail en design UX/UI." }
  }
});

_comm(window.T.de, "Communities", {
  title: "Communities",
  intro: "Ich lerne und baue gemeinsam mit anderen: Events, Lerngruppen, gemeinsame Projekte und Tech-Räume.",
  creditLabel: "Bild",
  galleryTitle: "In Bildern",
  prev: "Zurück", next: "Weiter", slide: "Bild",
  back: "Zurück zum Portfolio",
  types: { event: "Veranstaltung", community: "Community", course: "Kurs", project: "Projekt" },
  items: {
    talentoit: { role: "Portal-Entwicklung", desc: "Kostenlose virtuelle Jobmesse für ganz Argentinien, 3.–7. August 2026, organisiert von Potrero Empleos (Potrero Digital · Fundación Compromiso). Ich habe das private Portal für den Zugriff auf Lebensläufe und das Kennzahlen-Dashboard entwickelt." },
    google: { role: "Teilnehmerin", desc: "Treffen am 8. Oktober mit Frühstück und Networking, KI-Workshop zu Gemini und Panel mit Googlern, organisiert von Potrero Digital und der Fundación Compromiso." },
    hotfixers: { role: "Freiwillige (Hotfixer) · vor Ort, in Vollzeit · Bereich Sponsors und Speakers", desc: "Freiwilligenarbeit bei der 22. Ekoparty (7.–9. Oktober 2026, CEC Buenos Aires), der wichtigsten Cybersicherheitskonferenz Lateinamerikas. Unterstützung im Bereich Sponsors mit den Ständen der Partner sowie bei den Speakers." },
    nerdearla: { role: "Freiwillige", desc: "Das größte kostenlose Tech-Event der spanischsprachigen Welt: Vorträge und Workshops online (22.–23. September) und vor Ort (24.–26.) in der Ciudad Cultural Konex, Buenos Aires." },
    awscd: { role: "Freiwillige", desc: "Ein Cloud-Technologie-Event der AWS-Community Argentiniens: 12. September 2026, UAI Anexo Cisneros (Buenos Aires)." },
    kcd: { role: "Freiwillige", desc: "Freiwilligenarbeit bei der KCD Argentina 2026 (Kubernetes Community Days) am 3. Oktober." },
    hack: { role: "Teilnehmerin", desc: "Women-Hacks-Stand auf der Ekoparty 2026, mit Mentoring von STEAM Girls Club." },
    steam: { role: "Mitglied", desc: "Eine Community, die Tech-Talente von Frauen fördert: Weiterbildung, Sichtbarkeit und ein Unterstützungsnetzwerk mit Projekten, Vorträgen, Workshops und Stellenangeboten." },
    aws: { role: "Mitglied", desc: "Die AWS-Nutzergruppe von Cochabamba (Bolivien), die Community-Initiativen wie den Cloud Speaking English Club anstößt." },
    english: { role: "Mitglied", desc: "Ein virtueller Club zum Üben von gesprochenem Englisch für die Tech-Community: 6 wöchentliche Sitzungen, donnerstags um 20 Uhr (bolivianische Zeit), Grund- und Mittelstufe." },
    tecnokeeper: { role: "Teilnehmerin", desc: "Kurs zu den Grundlagen der Cybersicherheit." },
    innova: { role: "Frontend", desc: "Team hinter PRECIAR, dem Kosten- und Break-even-Rechner." },
    s2620: { role: "UX/UI", desc: "Eine Projektsimulationsgruppe von Talently Lab." },
    ux4: { role: "Teammitglied", desc: "Eine UX/UI-Designarbeitsgruppe." },
    uxdesp: { role: "Teammitglied", desc: "Eine UX/UI-Designarbeitsgruppe." }
  }
});
// Fotos de la sección "En comunidad" (página principal). cap = leyenda opcional.
window.DATA.moments = [
  {
    "src": "assets/galeria/aws-community-day.jpg",
    "w": 720,
    "h": 960,
    "cap": "AWS Community Day"
  },
  {
    "src": "assets/galeria/aws-stand.jpg",
    "w": 720,
    "h": 540,
    "cap": "AWS Community Day"
  },
  {
    "src": "assets/galeria/google-g.jpg",
    "w": 720,
    "h": 691,
    "cap": "Google"
  },
  {
    "src": "assets/galeria/youtube-space.jpg",
    "w": 720,
    "h": 845,
    "cap": "YouTube Space"
  },
  {
    "src": "assets/galeria/google-cloud-summit-acreditacion.jpg",
    "w": 540,
    "h": 960,
    "cap": "Google Cloud Summit Argentina"
  },
  {
    "src": "assets/galeria/google-cloud-summit.jpg",
    "w": 628,
    "h": 1000,
    "cap": "Google Cloud Summit Argentina"
  },
  {
    "src": "assets/galeria/tunel-flores.jpg",
    "w": 720,
    "h": 956,
    "cap": ""
  },
  {
    "src": "assets/galeria/jpmorgan.jpg",
    "w": 562,
    "h": 1000,
    "cap": "J.P. Morgan"
  },
  {
    "src": "assets/galeria/auditorio.jpg",
    "w": 720,
    "h": 470,
    "cap": ""
  },
  {
    "src": "assets/galeria/remeras-rosas.jpg",
    "w": 594,
    "h": 1000,
    "cap": ""
  },
  {
    "src": "assets/galeria/google-sala.jpg",
    "w": 599,
    "h": 1000,
    "cap": "Google"
  },
  {
    "src": "assets/galeria/crea-inspira-conecta.jpg",
    "w": 720,
    "h": 956,
    "cap": "YouTube Space"
  },
  {
    "src": "assets/galeria/silent-disco.jpg",
    "w": 720,
    "h": 625,
    "cap": ""
  },
  {
    "src": "assets/galeria/stand-regional.jpg",
    "w": 720,
    "h": 956,
    "cap": ""
  },
  {
    "src": "assets/galeria/grupo-noche.jpg",
    "w": 720,
    "h": 423,
    "cap": ""
  },
  {
    "src": "assets/galeria/aws-expo.jpg",
    "w": 562,
    "h": 1000,
    "cap": "AWS"
  },
  {
    "src": "assets/galeria/computadoras-retro.jpg",
    "w": 562,
    "h": 1000,
    "cap": ""
  },
  {
    "src": "assets/galeria/mirador.jpg",
    "w": 720,
    "h": 956,
    "cap": ""
  },
  {
    "src": "assets/galeria/panoramica.jpg",
    "w": 720,
    "h": 244,
    "cap": ""
  }
];
window.DATA.reel = { src: "assets/video/reel-ekoparty.mp4", poster: "assets/video/reel-poster.jpg", w: 540, h: 960 };

window.T.es.moments = {"title": "En comunidad", "intro": "Eventos, stands, visitas y mucha gente que construye tecnología. Algunos momentos de este año.", "alt": "Foto de un evento de comunidad", "reel": "Reel · Ekoparty 22", "play": "Reproducir", "pause": "Pausar", "close": "Cerrar", "prev": "Anterior", "next": "Siguiente", "cta": "Ver todas las comunidades", "portrait": "Retrato de Carina Alejandra Luna"};
window.T.en.moments = {"title": "In the community", "intro": "Events, booths, visits and plenty of people building technology. A few moments from this year.", "alt": "Photo from a community event", "reel": "Reel · Ekoparty 22", "play": "Play", "pause": "Pause", "close": "Close", "prev": "Previous", "next": "Next", "cta": "See all communities", "portrait": "Portrait of Carina Alejandra Luna"};
window.T.fr.moments = {"title": "En communauté", "intro": "Événements, stands, visites et beaucoup de gens qui construisent la technologie. Quelques moments de cette année.", "alt": "Photo d'un événement communautaire", "reel": "Reel · Ekoparty 22", "play": "Lire", "pause": "Pause", "close": "Fermer", "prev": "Précédent", "next": "Suivant", "cta": "Voir toutes les communautés", "portrait": "Portrait de Carina Alejandra Luna"};
window.T.de.moments = {"title": "In der Community", "intro": "Events, Messestände, Besuche und viele Menschen, die Technologie bauen. Einige Momente dieses Jahres.", "alt": "Foto von einer Community-Veranstaltung", "reel": "Reel · Ekoparty 22", "play": "Abspielen", "pause": "Pause", "close": "Schließen", "prev": "Zurück", "next": "Weiter", "cta": "Alle Communities ansehen", "portrait": "Porträt von Carina Alejandra Luna"};


// Álbumes de la galería (los nombres propios no se traducen; "more" usa moments.albumMore)
window.DATA.albums = [
  { id: "aws", name: "AWS Community Day" },
  { id: "google", name: "Google" },
  { id: "gcs", name: "Google Cloud Summit" },
  { id: "youtube", name: "YouTube Space" },
  { id: "jpm", name: "J.P. Morgan" },
  { id: "more", name: "" }
];
(function () {
  var map = {
    "aws-community-day": "aws", "aws-stand": "aws", "aws-expo": "aws",
    "google-g": "google", "google-sala": "google",
    "google-cloud-summit-acreditacion": "gcs", "google-cloud-summit": "gcs",
    "youtube-space": "youtube", "crea-inspira-conecta": "youtube",
    "jpmorgan": "jpm", "mirador": "jpm", "panoramica": "jpm"
  };
  window.DATA.moments.forEach(function (m) {
    var k = m.src.split("/").pop().replace(".jpg", "");
    m.album = map[k] || "more";
  });
})();
window.T.es.nav.home = "Inicio";
window.T.es.communities.tabPhotos = "Fotos y video"; window.T.es.communities.tabEvents = "Eventos y comunidades";
window.T.es.moments.albumMore = "Más momentos"; window.T.es.moments.albums = "Álbumes";
window.T.en.nav.home = "Home";
window.T.en.communities.tabPhotos = "Photos & video"; window.T.en.communities.tabEvents = "Events & communities";
window.T.en.moments.albumMore = "More moments"; window.T.en.moments.albums = "Albums";
window.T.fr.nav.home = "Accueil";
window.T.fr.communities.tabPhotos = "Photos et vidéo"; window.T.fr.communities.tabEvents = "Événements et communautés";
window.T.fr.moments.albumMore = "Plus de moments"; window.T.fr.moments.albums = "Albums";
window.T.de.nav.home = "Start";
window.T.de.communities.tabPhotos = "Fotos & Video"; window.T.de.communities.tabEvents = "Events & Communities";
window.T.de.moments.albumMore = "Weitere Momente"; window.T.de.moments.albums = "Alben";
window.T.es.ui.copy = "Copiar"; window.T.es.ui.copied = "¡Copiado!";
window.T.en.ui.copy = "Copy"; window.T.en.ui.copied = "Copied!";
window.T.fr.ui.copy = "Copier"; window.T.fr.ui.copied = "Copié !";
window.T.de.ui.copy = "Kopieren"; window.T.de.ui.copied = "Kopiert!";
window.T.es.ui.themeNames = { light: "Claro", dark: "Oscuro", rose: "Rosa pastel", cream: "Crema" }; window.T.es.ui.theme = "Tema";
window.T.en.ui.themeNames = { light: "Light", dark: "Dark", rose: "Pastel pink", cream: "Cream" }; window.T.en.ui.theme = "Theme";
window.T.fr.ui.themeNames = { light: "Clair", dark: "Sombre", rose: "Rose pastel", cream: "Crème" }; window.T.fr.ui.theme = "Thème";
window.T.de.ui.themeNames = { light: "Hell", dark: "Dunkel", rose: "Pastellrosa", cream: "Creme" }; window.T.de.ui.theme = "Design";
