/* ============================================================
   Pestaña "Habilidades" (ES · EN · FR · DE)
   - DATA.linkedin: aptitudes tal como figuran en el perfil de LinkedIn, agrupadas.
   - T.<idioma>.skillsTab: textos, nombres traducidos y el bloque "IA y desarrollo".
   Para sumar una aptitud: agregar su id en un grupo de DATA.linkedin y su nombre en names.
   ============================================================ */

window.DATA.linkedin = {
  url: "https://www.linkedin.com/in/carina-alejandra-luna/",
  groups: [
    { id: "industry", items: ["itrisk", "itaudit", "sod", "pm"] },
    { id: "tools", items: ["excel", "ppt", "iam"] },
    { id: "soft", items: ["problem", "critical", "exec"] }
  ],
  assessed: ["excel"]
};

window.DATA.aiTags = {
  dev: ["AI assistants", "Prompting", "Git", "React · Node.js · FastAPI"],
  product: ["Gemini API", "LLM", "Data extraction"],
  match: ["Matching", "Ranking", "Explainable AI"],
  content: ["Scripts", "Narration", "Video", "Audio"],
  auto: ["Python", "Power BI", "Excel"],
  grc: ["GDPR / Ley 25.326", "Traceability", "Risk"],
  learn: ["Google Cloud Summit 2026", "AI", "Cloud · Data"]
};

window.T.es.nav.skills = "Habilidades";
window.T.es.skillsTab = {
  title: "Habilidades",
  intro: "Lo que figura en mi perfil de LinkedIn, lo que uso todos los días y cómo trabajo con inteligencia artificial.",
  tabLinkedin: "En LinkedIn", tabCv: "Competencias", tabAi: "IA y desarrollo",
  viewProfile: "Ver mi perfil en LinkedIn",
  assessed: "Evaluación de LinkedIn superada",
  groups: { industry: "Conocimiento del sector", tools: "Herramientas y tecnologías", soft: "Aptitudes interpersonales" },
  names: {
    itrisk: "Gestión de riesgos de TI", itaudit: "Controles internos y auditoría de TI", sod: "Segregación de funciones (SoD)", pm: "Gestión de proyectos",
    excel: "Microsoft Excel", ppt: "Microsoft PowerPoint", iam: "AWS Identity and Access Management (IAM)",
    problem: "Resolución de problemas", critical: "Pensamiento crítico", exec: "Presentaciones ejecutivas"
  },
  ai: {
    title: "IA y desarrollo",
    intro: "Uso la inteligencia artificial como una herramienta de trabajo, con criterio de auditoría: todo lo que genera se revisa y se valida antes de usarse.",
    items: {
      dev: { h: "Desarrollo con asistentes de IA", p: "Diseño, programo y pruebo portales, bots y herramientas de datos trabajando con asistentes de IA para analizar, escribir código, documentar y revisar. Cada resultado lo reviso y lo valido yo." },
      product: { h: "IA dentro del producto", p: "En Potrero Empleos, un modelo de lenguaje (API de Gemini) lee el CV, extrae los datos y precarga el formulario de postulación. Si la IA no está disponible, el sistema pasa solo al formulario manual." },
      match: { h: "Matching de CVs", p: "Un motor lee los CVs, extrae el texto y ordena a los candidatos por coincidencia de habilidades con cada vacante. La próxima versión va a explicar cada puntaje." },
      content: { h: "Contenido y comunicación", p: "Guiones, narración, presentaciones, videos y audios: preparo materiales como el teaser de Potrero Empleos, reels de eventos y audios para practicar inglés, con voces y edición automatizadas." },
      auto: { h: "Automatización de reportes", p: "Automatizo la consolidación de hallazgos, indicadores y tableros con Excel, Power BI y Python, para que el equipo dedique su tiempo a analizar y no a copiar datos." },
      grc: { h: "IA con criterio de GRC", p: "Aplico a la IA lo que sé de riesgo y cumplimiento: datos mínimos, consentimiento explícito, protección de datos personales, trazabilidad y revisión humana de los resultados." },
      learn: { h: "Formación continua", p: "Sigo eventos y cursos de IA, nube y datos, como el Google Cloud Summit Argentina 2026 (IA, Cloud, Data y la nueva era agéntica), y llevo lo aprendido a mis proyectos." }
    }
  }
};

window.T.en.nav.skills = "Skills";
window.T.en.skillsTab = {
  title: "Skills",
  intro: "What appears on my LinkedIn profile, what I use every day, and how I work with artificial intelligence.",
  tabLinkedin: "On LinkedIn", tabCv: "Core skills", tabAi: "AI & development",
  viewProfile: "View my LinkedIn profile",
  assessed: "Passed LinkedIn skill assessment",
  groups: { industry: "Industry knowledge", tools: "Tools and technologies", soft: "Interpersonal skills" },
  names: {
    itrisk: "IT risk management", itaudit: "Internal controls and IT audit", sod: "Segregation of Duties (SoD)", pm: "Project management",
    excel: "Microsoft Excel", ppt: "Microsoft PowerPoint", iam: "AWS Identity and Access Management (IAM)",
    problem: "Problem solving", critical: "Critical thinking", exec: "Executive presentations"
  },
  ai: {
    title: "AI & development",
    intro: "I use artificial intelligence as a work tool, with an auditor's mindset: everything it produces is reviewed and validated before it is used.",
    items: {
      dev: { h: "Development with AI assistants", p: "I design, code and test portals, bots and data tools working with AI assistants to analyse, write code, document and review. I check and validate every result myself." },
      product: { h: "AI inside the product", p: "In Potrero Empleos, a language model (Gemini API) reads the CV, extracts the data and pre-fills the application form. If the AI is not available, the system falls back to the manual form on its own." },
      match: { h: "CV matching", p: "An engine reads CVs, extracts the text and ranks candidates by how well their skills match each opening. The next version will explain every score." },
      content: { h: "Content and communication", p: "Scripts, narration, presentations, videos and audio: I prepare materials such as the Potrero Empleos teaser, event reels and English practice audio, with automated voices and editing." },
      auto: { h: "Report automation", p: "I automate the consolidation of findings, indicators and dashboards with Excel, Power BI and Python, so the team spends its time analysing instead of copying data." },
      grc: { h: "AI with a GRC mindset", p: "I apply what I know about risk and compliance to AI: minimal data, explicit consent, personal-data protection, traceability and human review of results." },
      learn: { h: "Continuous learning", p: "I follow AI, cloud and data events and courses, such as Google Cloud Summit Argentina 2026 (AI, Cloud, Data and the new agentic era), and bring what I learn into my projects." }
    }
  }
};

window.T.fr.nav.skills = "Compétences";
window.T.fr.skillsTab = {
  title: "Compétences",
  intro: "Ce qui figure sur mon profil LinkedIn, ce que j'utilise au quotidien et ma façon de travailler avec l'intelligence artificielle.",
  tabLinkedin: "Sur LinkedIn", tabCv: "Compétences clés", tabAi: "IA et développement",
  viewProfile: "Voir mon profil LinkedIn",
  assessed: "Évaluation LinkedIn réussie",
  groups: { industry: "Connaissance du secteur", tools: "Outils et technologies", soft: "Compétences interpersonnelles" },
  names: {
    itrisk: "Gestion des risques informatiques", itaudit: "Contrôles internes et audit informatique", sod: "Séparation des tâches (SoD)", pm: "Gestion de projet",
    excel: "Microsoft Excel", ppt: "Microsoft PowerPoint", iam: "AWS Identity and Access Management (IAM)",
    problem: "Résolution de problèmes", critical: "Esprit critique", exec: "Présentations de direction"
  },
  ai: {
    title: "IA et développement",
    intro: "J'utilise l'intelligence artificielle comme un outil de travail, avec un regard d'auditrice : tout ce qu'elle produit est relu et validé avant d'être utilisé.",
    items: {
      dev: { h: "Développement avec des assistants d'IA", p: "Je conçois, programme et teste des portails, des bots et des outils de données en m'appuyant sur des assistants d'IA pour analyser, écrire du code, documenter et relire. Je vérifie et valide moi-même chaque résultat." },
      product: { h: "L'IA dans le produit", p: "Dans Potrero Empleos, un modèle de langage (API Gemini) lit le CV, extrait les données et préremplit le formulaire de candidature. Si l'IA n'est pas disponible, le système bascule seul sur le formulaire manuel." },
      match: { h: "Matching de CV", p: "Un moteur lit les CV, en extrait le texte et classe les candidats selon la correspondance de leurs compétences avec chaque offre. La prochaine version expliquera chaque score." },
      content: { h: "Contenu et communication", p: "Scripts, narration, présentations, vidéos et audio : je prépare des supports comme le teaser de Potrero Empleos, des reels d'événements et des audios pour pratiquer l'anglais, avec des voix et un montage automatisés." },
      auto: { h: "Automatisation des rapports", p: "J'automatise la consolidation des constats, des indicateurs et des tableaux de bord avec Excel, Power BI et Python, pour que l'équipe consacre son temps à analyser plutôt qu'à recopier des données." },
      grc: { h: "L'IA avec un regard GRC", p: "J'applique à l'IA ce que je sais du risque et de la conformité : données minimales, consentement explicite, protection des données personnelles, traçabilité et relecture humaine des résultats." },
      learn: { h: "Formation continue", p: "Je suis des événements et des formations sur l'IA, le cloud et les données, comme le Google Cloud Summit Argentina 2026 (IA, Cloud, Data et la nouvelle ère agentique), et j'en fais profiter mes projets." }
    }
  }
};

window.T.de.nav.skills = "Fähigkeiten";
window.T.de.skillsTab = {
  title: "Fähigkeiten",
  intro: "Was in meinem LinkedIn-Profil steht, was ich täglich nutze und wie ich mit künstlicher Intelligenz arbeite.",
  tabLinkedin: "Auf LinkedIn", tabCv: "Kernkompetenzen", tabAi: "KI und Entwicklung",
  viewProfile: "Mein LinkedIn-Profil ansehen",
  assessed: "LinkedIn-Skill-Test bestanden",
  groups: { industry: "Branchenwissen", tools: "Tools und Technologien", soft: "Zwischenmenschliche Fähigkeiten" },
  names: {
    itrisk: "IT-Risikomanagement", itaudit: "Interne Kontrollen und IT-Revision", sod: "Funktionstrennung (SoD)", pm: "Projektmanagement",
    excel: "Microsoft Excel", ppt: "Microsoft PowerPoint", iam: "AWS Identity and Access Management (IAM)",
    problem: "Problemlösung", critical: "Kritisches Denken", exec: "Präsentationen für die Geschäftsführung"
  },
  ai: {
    title: "KI und Entwicklung",
    intro: "Ich nutze künstliche Intelligenz als Arbeitswerkzeug, mit dem Blick einer Prüferin: Alles, was sie erzeugt, wird geprüft und validiert, bevor es verwendet wird.",
    items: {
      dev: { h: "Entwicklung mit KI-Assistenten", p: "Ich entwerfe, programmiere und teste Portale, Bots und Datenwerkzeuge und arbeite dabei mit KI-Assistenten, um zu analysieren, Code zu schreiben, zu dokumentieren und zu prüfen. Jedes Ergebnis kontrolliere und validiere ich selbst." },
      product: { h: "KI im Produkt", p: "Bei Potrero Empleos liest ein Sprachmodell (Gemini-API) den Lebenslauf, extrahiert die Daten und füllt das Bewerbungsformular vor. Ist die KI nicht verfügbar, wechselt das System selbstständig zum manuellen Formular." },
      match: { h: "CV-Matching", p: "Eine Engine liest Lebensläufe, extrahiert den Text und reiht Kandidaten nach der Übereinstimmung ihrer Fähigkeiten mit jeder Stelle. Die nächste Version erklärt jede Bewertung." },
      content: { h: "Inhalte und Kommunikation", p: "Skripte, Vertonung, Präsentationen, Videos und Audio: Ich erstelle Materialien wie den Teaser von Potrero Empleos, Event-Reels und Audios zum Englischüben, mit automatisierten Stimmen und Schnitt." },
      auto: { h: "Automatisierung von Berichten", p: "Ich automatisiere die Zusammenführung von Feststellungen, Kennzahlen und Dashboards mit Excel, Power BI und Python, damit das Team seine Zeit mit Analyse statt mit Abtippen verbringt." },
      grc: { h: "KI mit GRC-Blick", p: "Ich wende auf KI an, was ich über Risiko und Compliance weiß: minimale Daten, ausdrückliche Einwilligung, Schutz personenbezogener Daten, Nachvollziehbarkeit und menschliche Prüfung der Ergebnisse." },
      learn: { h: "Laufende Weiterbildung", p: "Ich verfolge Veranstaltungen und Kurse zu KI, Cloud und Daten, etwa den Google Cloud Summit Argentina 2026 (KI, Cloud, Daten und die neue agentische Ära), und bringe das Gelernte in meine Projekte ein." }
    }
  }
};
