/* ============================================================
   Contenido de la landing — Carina Alejandra Luna
   Idiomas: es · en · fr · de
   - DATA: lo que no cambia según el idioma (fechas, stack, links).
   - T:    todos los textos traducidos.
   Para agregar o editar un proyecto: tocar DATA.projects y
   T.<idioma>.projects.items.<id> en los cuatro idiomas.
   ============================================================ */

window.DATA = {
  email: "caricariluna@gmail.com",
  linkedin: "https://www.linkedin.com/in/carina-alejandra-luna",
  github: "https://github.com/xandcari",
  cv: "assets/CV_Carina_Luna_GRC.pdf",
  location: "Gral. San Martín, Buenos Aires · Argentina",

  stats: [
    { id: "years", n: 25, plus: true },
    { id: "visits", n: 25000, plus: true },
    { id: "signups", n: 9400, plus: false },
    { id: "companies", n: 18, plus: false },
    { id: "plants", n: 14, plus: true }
  ],

  // fechas: [año, mes]; end: null = actualidad
  experience: [
    { id: "fundacion", org: "Fundación Compromiso", start: [2026, 4], end: null },
    { id: "talentoit", org: "Potrero Digital / Fundación Compromiso", start: [2026, 5], end: [2026, 8] },
    { id: "gastrobsas", org: "Gastrobsas S.A.", start: [2026, 4], end: [2026, 7] },
    { id: "marfrig", org: "Marfrig Global Foods", start: [2023, 11], end: [2025, 10] },
    { id: "vae", org: "Industrias VAE", start: [2023, 3], end: [2023, 10] },
    { id: "mkind", org: "MKind, Inc. — Right Height Manufacturing", start: [2018], end: [2022] },
    { id: "falabella", org: "Grupo Falabella", start: [2015, 8], end: [2017, 10] },
    { id: "arcos", org: "Arcos Dorados (McDonald's)", start: [1998, 4], end: [2012, 9] }
  ],

  // cat: security | product | design | data
  projects: [
    { id: "talentoit", cat: ["security", "data", "web"], stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "GA4", "Power BI"], featured: true },
    { id: "potrero", cat: ["web", "data"], stack: ["FastAPI", "SQLAlchemy", "React", "Tailwind", "Gemini API", "JWT"], featured: true },
    { id: "whatsapp", cat: ["security", "web"], stack: ["FastAPI", "WhatsApp Cloud API", "Webhooks", "Opt-in / GDPR"] },
    { id: "matcher", cat: ["data", "web"], stack: ["Node.js", "Prisma", "PostgreSQL", "pdf-parse"] },
    { id: "preciar", cat: ["web", "design"], stack: ["Next.js", "TypeScript", "Tailwind", "Zod", "Decimal.js", "Vitest"] },
    { id: "novamarket", cat: ["web", "design"], stack: ["React", "Vite", "Jira", "Netlify"] },
    { id: "ecobite", cat: ["design"], stack: ["Figma", "UI Kit", "Prototipo", "Trello / Notion"] },
    { id: "urbanfix", cat: ["design"], stack: ["Figma", "Jira", "Confluence"] },
    { id: "teaser", cat: ["design"], stack: ["Animación", "Guion", "Diapositivas", "Narración"] },
    { id: "grc", cat: ["security", "data"], stack: ["SAP GRC", "SoD", "Excel", "Power BI"] }
  ],

  education: [
    { id: "unsam-lic", org: "UNSAM", when: "inProgress" },
    { id: "cyber", org: "Potrero Digital", when: "inProgress" },
    { id: "soc", org: "DOJO + WoSec", when: "inProgress" },
    { id: "qa", org: "Globant — Escuela de Innovación & Tecnología", when: "inProgress" },
    { id: "data", org: "Ministerio de Educación + Potrero Digital", when: "2026" },
    { id: "uxui", org: "Potrero Digital · Talento Tech", when: "2026" },
    { id: "rrhh", org: "UNSAM", when: "2019" },
    { id: "mkt", org: "UNSAM", when: "2018" },
    { id: "pymes", org: "UNSAM", when: "2017" },
    { id: "utn", org: "UTN", when: "2014" }
  ],

  next: [
    { id: "sod", status: "idea", tags: ["Python", "SAP GRC", "SoD"] },
    { id: "riskboard", status: "design", tags: ["React", "Power BI", "ISO 27001"] },
    { id: "soclab", status: "building", tags: ["SIEM", "Wazuh", "Sigma"] },
    { id: "botcloud", status: "building", tags: ["Meta", "FastAPI", "Cloud"] },
    { id: "matcher2", status: "idea", tags: ["Matching", "IA explicable", "Python"] },
    { id: "kit", status: "design", tags: ["Figma", "Design System", "PyMEs"] }
  ]
};

window.T = {
  /* ───────────────────────── ESPAÑOL ───────────────────────── */
  es: {
    meta: {
      title: "Carina Alejandra Luna — GRC, auditoría de sistemas y riesgo tecnológico",
      desc: "Portfolio de Carina Alejandra Luna: GRC, auditoría de sistemas, SAP GRC, controles internos, datos y desarrollo de productos digitales."
    },
    ui: { skip: "Ir al contenido", menu: "Menú", theme: "Cambiar tema", lang: "Idioma", present: "Actualidad", all: "Todos", more: "Ver más", less: "Ver menos", visit: "Ver proyecto" },
    nav: { about: "Perfil", skills: "Competencias", experience: "Experiencia", projects: "Proyectos", next: "Próximamente", education: "Formación", contact: "Contacto" },
    hero: {
      kicker: "Hola, soy",
      role: "GRC · Auditoría de sistemas · Riesgo tecnológico",
      tagline: "Convierto controles, datos y procesos en evidencia clara para decidir — y construyo las herramientas digitales para sostenerlos.",
      cta1: "Hablemos",
      cta2: "Descargar CV (PDF)",
      badge: "Disponible para nuevos desafíos"
    },
    stats: { years: "años de trayectoria", visits: "visitas en la Feria TalentoIT", signups: "registros en la Feria", companies: "empresas participantes", plants: "plantas analizadas" },
    about: {
      title: "Perfil",
      lead: "Auditoría con mirada de producto.",
      p1: "Tengo experiencia en auditoría interna y operativa, control de procesos y análisis de riesgos, incluida la revisión de accesos, roles y Segregación de Deberes (SoD) en SAP GRC. Analizo operaciones y documentación respaldatoria para detectar desvíos, revisar controles y aportar evidencia para la toma de decisiones.",
      p2: "Lo combino con documentación de procesos, seguimiento de indicadores y automatización de reportes. Hoy trabajo en procesos y desarrollos digitales para empleabilidad en Fundación Compromiso, profundizo mi formación en ciberseguridad y SOC, y apunto a crecer en Gobierno, Riesgo y Cumplimiento (GRC).",
      facts: [
        ["Foco", "GRC y riesgo tecnológico"],
        ["Base", "Gral. San Martín, Buenos Aires"],
        ["Idiomas", "Español nativo · Inglés B1"],
        ["Marcos", "ISO 27001 · COBIT · ITIL · BCRA"]
      ]
    },
    skills: {
      title: "Competencias clave",
      groups: [
        { t: "GRC, riesgos y controles", i: ["Auditoría interna y operativa", "Análisis de riesgos y desvíos", "Control interno", "Documentación de hallazgos", "Trazabilidad y seguimiento de mejoras"] },
        { t: "Seguridad y accesos", i: ["SAP GRC", "Usuarios, roles y accesos", "Segregación de Deberes (SoD)", "Portal privado con magic link", "Tokens con vencimiento"] },
        { t: "Procesos y gobernanza", i: ["Relevamiento y mejora de procesos", "Procedimientos y manuales", "Circuitos y puntos de control", "Indicadores de gestión"] },
        { t: "Datos y reporting", i: ["Excel avanzado", "Power BI", "Tableros e indicadores", "Automatización de reportes", "GA4", "Python/pandas y SQL (en formación)"] },
        { t: "Producto y desarrollo", i: ["React · JavaScript/TypeScript", "Node.js · PostgreSQL · FastAPI", "Git", "Diseño UX/UI en Figma"] },
        { t: "Marcos de referencia", i: ["ISO 27001", "COBIT", "ITIL", "Normativa BCRA"] }
      ]
    },
    experience: {
      title: "Experiencia profesional",
      items: {
        fundacion: { role: "Gestión de procesos y desarrollos", bullets: [
          "Relevo, analizo y documento procesos de empleabilidad y gestión organizacional, identificando circuitos de trabajo, puntos de control y oportunidades de mejora.",
          "Diseño y actualizo procedimientos y manuales; optimizo flujos digitales con ATS Zoho y doy seguimiento a indicadores con las áreas de Empleabilidad, Alianzas e Impacto.",
          "Continúo el desarrollo y la mejora del portal de empleos TalentoIT y de un bot, conectando necesidades funcionales con soluciones digitales."
        ] },
        talentoit: { role: "Proyecto TalentoIT — Feria Virtual de Empleo Tech", bullets: [
          "Desarrollé un portal privado para que las empresas accedieran a CVs mediante magic links con tokens de vencimiento, con controles de acceso y protección de datos personales.",
          "Construí un dashboard con métricas de Google Analytics 4: más de 25.000 visitas, 9.400 registros y 18 empresas participantes.",
          "Stack: React, JavaScript/TypeScript, Node.js, PostgreSQL, Power BI, Python y Git."
        ] },
        gastrobsas: { role: "Auditora Operativa Senior", bullets: [
          "Analicé información operativa y financiera de más de 14 plantas para priorizar riesgos y orientar controles basados en evidencia.",
          "Automaticé la consolidación de hallazgos e indicadores de un equipo de 10 personas y preparé tableros para monitorear acciones correctivas."
        ] },
        marfrig: { role: "Analista de Auditoría y Seguridad SAP", bullets: [
          "Analicé órdenes de compra, pagos, transferencias y conciliaciones para detectar desvíos respecto del gasto autorizado y priorizar controles.",
          "Revisé accesos, roles y Segregación de Deberes (SoD) de usuarios SAP mediante SAP GRC, identificando riesgos y excepciones de control.",
          "Elaboré informes sobre contratos marco, gastos por proveedor y proyectos de ingeniería; detecté oportunidades de recupero con controles preventivos.",
          "Relevé y optimicé procedimientos operativos para mejorar la trazabilidad y reducir tareas redundantes."
        ] },
        vae: { role: "Analista Contable", bullets: ["Realicé conciliaciones y controles de pagos y facturación, y elaboré reportes para cierres y auditorías."] },
        mkind: { role: "Titular / Business Owner", bullets: ["Gestioné métricas de ventas, inventarios y reportes para analizar procesos, resultados y márgenes."] },
        falabella: { role: "Analista Senior — Procesos, Auditoría Interna y Proveedores", bullets: ["Seguimiento de indicadores, control documental de contratos marco y análisis de riesgos y oportunidades de mejora."] },
        arcos: { role: "Gerente de Turno", bullets: ["Administré una unidad de negocio con foco en presupuesto, costos, inventarios y KPIs; coordiné auditorías internas de cumplimiento."] }
      }
    },
    projects: {
      title: "Proyectos",
      intro: "Portales, bots, herramientas de datos y diseños en los que trabajé: de la auditoría al código y al prototipo.",
      filters: { all: "Todos", security: "Seguridad y GRC", web: "Desarrollo web", data: "Datos", design: "UX/UI" },
      items: {
        talentoit: { name: "TalentoIT — Feria Virtual de Empleo Tech", role: "Desarrollo y analítica · Potrero Digital / Fundación Compromiso", desc: "Portal privado donde las empresas acceden a CVs por magic link con token de vencimiento. Dashboard en GA4 con más de 25.000 visitas, 9.400 registros y 18 empresas participantes." },
        potrero: { name: "Potrero Empleos — postulación con IA", role: "Producto y desarrollo full-stack", desc: "Los candidatos suben su CV y una IA precarga el formulario; las empresas filtran, exportan y hacen matching contra sus búsquedas. Cuatro tipos de usuario con JWT y login de candidatos con Google." },
        whatsapp: { name: "Bot de WhatsApp para candidatos", role: "Backend e integración", desc: "Servicio independiente y reutilizable que avisa a los candidatos con consentimiento explícito (opt-in), plantillas aprobadas, webhook de Meta, panel propio y baja de datos a pedido." },
        matcher: { name: "Matcher de CVs", role: "Backend y datos", desc: "Motor que lee los CVs del almacenamiento, extrae el texto, lo guarda en caché y rankea a los candidatos por coincidencia de skills contra cada vacante, sobre toda la base." },
        preciar: { name: "PRECIAR — calculadora de costos y punto de equilibrio", role: "Frontend · InnovaLab", desc: "Calculadora inteligente de costos, precios y punto de equilibrio para emprendedores: carga guiada en 5 pasos, importes con aritmética decimal exacta y manejo visual de casos no viables." },
        novamarket: { name: "NovaMarket PYME", role: "Frontend · Talently Lab", desc: "E-commerce para PyMEs: autenticación y registro, sistema de diseño, documentación de componentes y pruebas end-to-end, trabajando con Jira y pull requests." },
        ecobite: { name: "EcoBite", role: "UX/UI · Talently Lab", desc: "Marketplace de productos sustentables. Wireframes, flujos de usuario, UI Kit, prototipo de alta fidelidad en escritorio y mobile, estados vacíos y de error, en dos células de trabajo." },
        urbanfix: { name: "UrbanFix y NovaMarket (diseño)", role: "UX/UI · Talently Lab", desc: "Diseño de interfaces y prototipos para equipos multidisciplinarios con QA, backend y frontend, coordinando entregables y dailies." },
        teaser: { name: "Teaser y presentación de Potrero Empleos", role: "Comunicación y diseño", desc: "Guion, diapositivas, narración y teaser animado para presentar el sistema de postulación de forma clara a públicos no técnicos." },
        grc: { name: "Tableros de controles y SoD", role: "Auditoría y datos · Marfrig / Gastrobsas", desc: "Revisión de accesos y conflictos de Segregación de Deberes en SAP GRC, y automatización de hallazgos e indicadores para monitorear acciones correctivas." }
      }
    },
    next: {
      title: "Próximamente",
      intro: "Lo que tengo en mente y en el taller. Algunos son ideas, otros ya están en marcha.",
      status: { idea: "Idea", design: "En diseño", building: "En construcción" },
      items: {
        sod: { name: "Auditor de SoD de código abierto", desc: "Herramienta que cruza usuarios, roles y matrices de conflicto para detectar violaciones de Segregación de Deberes y generar un informe listo para auditoría." },
        riskboard: { name: "Tablero de riesgos y controles", desc: "Matriz de riesgos con indicadores por control, hallazgos abiertos y estado de las acciones correctivas, alineada a ISO 27001." },
        soclab: { name: "Laboratorio SOC personal", desc: "Un mini-SOC con SIEM, reglas de detección y casos de investigación documentados, fruto del bootcamp de Analista SOC." },
        botcloud: { name: "Bot de WhatsApp en producción", desc: "Conexión con Meta real, plantillas aprobadas y despliegue en la nube para que otras instituciones puedan reutilizarlo." },
        matcher2: { name: "Matching explicable de CVs", desc: "Próxima versión del matcher: justifica cada puntaje, reduce sesgos y permite auditar por qué un perfil quedó primero." },
        kit: { name: "Kit UX/UI para PyMEs", desc: "Sistema de diseño reutilizable y plantillas en Figma para que un pequeño negocio tenga una interfaz coherente sin empezar de cero." }
      },
      cta: "¿Tenés un desafío parecido? Conversemos."
    },
    education: {
      title: "Formación",
      langsTitle: "Idiomas",
      inProgress: "En curso",
      items: {
        "unsam-lic": "Licenciatura en Gestión y Administración de Empresas (estudiante avanzada)",
        cyber: "Ciberseguridad",
        soc: "Bootcamp Analista SOC Nivel 2",
        qa: "Quality Assurance (QA)",
        data: "Analista de Datos",
        uxui: "Diseño UX/UI",
        rrhh: "Diplomatura en Recursos Humanos",
        mkt: "Tecnicatura en Marketing Integrado",
        pymes: "Tecnicatura en Administración de Pymes",
        utn: "Diseño Gráfico y Multimedial"
      },
      langs: [["Español", "Nativo"], ["Inglés", "B1 · en progreso"]]
    },
    contact: {
      title: "Hablemos",
      lead: "Si buscás a alguien que entienda de controles, de datos y de producto, escribime.",
      email: "Escribir por correo",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV (PDF)",
      cvNote: "El PDF del CV está en español."
    },
    footer: "Hecho con cuidado en Buenos Aires.",
    top: "Volver arriba"
  },

  /* ───────────────────────── ENGLISH ───────────────────────── */
  en: {
    meta: {
      title: "Carina Alejandra Luna — GRC, Systems Audit & Technology Risk",
      desc: "Portfolio of Carina Alejandra Luna: GRC, systems audit, SAP GRC, internal controls, data and digital product development."
    },
    ui: { skip: "Skip to content", menu: "Menu", theme: "Toggle theme", lang: "Language", present: "Present", all: "All", more: "Show more", less: "Show less", visit: "View project" },
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", next: "Coming next", education: "Education", contact: "Contact" },
    hero: {
      kicker: "Hi, I'm",
      role: "GRC · Systems Audit · Technology Risk",
      tagline: "I turn controls, data and processes into clear evidence for decision-making — and build the digital tools that keep them running.",
      cta1: "Get in touch",
      cta2: "Download CV (PDF)",
      badge: "Open to new challenges"
    },
    stats: { years: "years of experience", visits: "visits at the TalentoIT Fair", signups: "sign-ups at the Fair", companies: "participating companies", plants: "plants analysed" },
    about: {
      title: "About",
      lead: "Audit with a product mindset.",
      p1: "I have experience in internal and operational audit, process control and risk analysis, including reviews of access, roles and Segregation of Duties (SoD) in SAP GRC. I analyse transactions and supporting documentation to detect deviations, review controls and provide evidence for decision-making.",
      p2: "I combine this with process documentation, KPI tracking and report automation. Today I work on processes and digital developments for employability at Fundación Compromiso, I am deepening my training in cybersecurity and SOC, and I am aiming to grow in Governance, Risk and Compliance (GRC).",
      facts: [
        ["Focus", "GRC and technology risk"],
        ["Based in", "Gral. San Martín, Buenos Aires"],
        ["Languages", "Spanish (native) · English B1"],
        ["Frameworks", "ISO 27001 · COBIT · ITIL · BCRA"]
      ]
    },
    skills: {
      title: "Key skills",
      groups: [
        { t: "GRC, risk and controls", i: ["Internal and operational audit", "Risk and deviation analysis", "Internal control", "Findings documentation", "Traceability and follow-up of improvements"] },
        { t: "Security and access", i: ["SAP GRC", "Users, roles and access reviews", "Segregation of Duties (SoD)", "Private portal with magic links", "Expiring tokens"] },
        { t: "Process and governance", i: ["Process mapping and improvement", "Procedures and manuals", "Workflows and control points", "Management indicators"] },
        { t: "Data and reporting", i: ["Advanced Excel", "Power BI", "Dashboards and KPIs", "Report automation", "GA4", "Python/pandas and SQL (learning)"] },
        { t: "Product and development", i: ["React · JavaScript/TypeScript", "Node.js · PostgreSQL · FastAPI", "Git", "UX/UI design in Figma"] },
        { t: "Reference frameworks", i: ["ISO 27001", "COBIT", "ITIL", "BCRA regulations"] }
      ]
    },
    experience: {
      title: "Professional experience",
      items: {
        fundacion: { role: "Process and Development Management", bullets: [
          "I map, analyse and document employability and organisational processes, identifying workflows, control points and improvement opportunities.",
          "I design and update procedures and manuals, optimise digital flows with Zoho ATS and track KPIs with the Employability, Partnerships and Impact teams.",
          "I continue developing and improving the TalentoIT job portal and a bot, connecting functional needs with digital solutions."
        ] },
        talentoit: { role: "TalentoIT Project — Virtual Tech Job Fair", bullets: [
          "Built a private portal where companies accessed CVs through magic links with expiring tokens, with access controls and personal-data protection in mind.",
          "Built a Google Analytics 4 dashboard: over 25,000 visits, 9,400 sign-ups and 18 participating companies.",
          "Stack: React, JavaScript/TypeScript, Node.js, PostgreSQL, Power BI, Python and Git."
        ] },
        gastrobsas: { role: "Senior Operational Auditor", bullets: [
          "Analysed operational and financial data from more than 14 plants to prioritise risks and focus controls on evidence.",
          "Automated the consolidation of findings and KPIs for a team of 10 and prepared dashboards to monitor corrective actions."
        ] },
        marfrig: { role: "Audit and SAP Security Analyst", bullets: [
          "Analysed purchase orders, payments, transfers and reconciliations to detect deviations from authorised spend and prioritise controls.",
          "Reviewed SAP user access, roles and Segregation of Duties (SoD) with SAP GRC, identifying risks and control exceptions.",
          "Produced reports on framework contracts, spend by supplier and engineering projects; found recovery opportunities through preventive controls.",
          "Mapped and optimised operating procedures to improve traceability and cut redundant tasks."
        ] },
        vae: { role: "Accounting Analyst", bullets: ["Performed payment and invoicing reconciliations and controls, and prepared reports for closings and audits."] },
        mkind: { role: "Owner / Business Owner", bullets: ["Managed sales, inventory and reporting metrics to analyse processes, results and margins."] },
        falabella: { role: "Senior Analyst — Processes, Internal Audit and Suppliers", bullets: ["KPI tracking, document control of framework contracts, and analysis of risks and improvement opportunities."] },
        arcos: { role: "Shift Manager", bullets: ["Ran a business unit focused on budget, costs, inventory and KPIs; coordinated internal compliance audits."] }
      }
    },
    projects: {
      title: "Projects",
      intro: "Portals, bots, data tools and designs I have worked on: from audit to code to prototype.",
      filters: { all: "All", security: "Security & GRC", web: "Web development", data: "Data", design: "UX/UI" },
      items: {
        talentoit: { name: "TalentoIT — Virtual Tech Job Fair", role: "Development and analytics · Potrero Digital / Fundación Compromiso", desc: "A private portal where companies access CVs via magic links with expiring tokens. GA4 dashboard with over 25,000 visits, 9,400 sign-ups and 18 participating companies." },
        potrero: { name: "Potrero Empleos — AI-assisted applications", role: "Product and full-stack development", desc: "Candidates upload a CV and an AI pre-fills the application form; companies filter, export and match against their openings. Four user types with JWT and Google login for candidates." },
        whatsapp: { name: "WhatsApp bot for candidates", role: "Backend and integration", desc: "A standalone, reusable service that notifies candidates with explicit consent (opt-in), approved templates, a Meta webhook, its own admin panel and data deletion on request." },
        matcher: { name: "CV Matcher", role: "Backend and data", desc: "An engine that reads CVs from storage, extracts the text, caches it and ranks candidates by skill match against each opening, across the entire database." },
        preciar: { name: "PRECIAR — cost and break-even calculator", role: "Frontend · InnovaLab", desc: "A smart calculator for costs, prices and break-even for entrepreneurs: a 5-step guided data entry, exact decimal arithmetic for amounts, and clear handling of non-viable cases." },
        novamarket: { name: "NovaMarket PYME", role: "Frontend · Talently Lab", desc: "E-commerce for small businesses: authentication and sign-up, design system, component documentation and end-to-end tests, working with Jira and pull requests." },
        ecobite: { name: "EcoBite", role: "UX/UI · Talently Lab", desc: "A marketplace for sustainable products. Wireframes, user flows, UI kit, high-fidelity prototype for desktop and mobile, empty and error states, across two working teams." },
        urbanfix: { name: "UrbanFix and NovaMarket (design)", role: "UX/UI · Talently Lab", desc: "Interface design and prototypes for cross-functional teams with QA, backend and frontend, coordinating deliverables and dailies." },
        teaser: { name: "Potrero Empleos teaser and pitch", role: "Communication and design", desc: "Script, slides, narration and an animated teaser to present the application system clearly to non-technical audiences." },
        grc: { name: "Controls and SoD dashboards", role: "Audit and data · Marfrig / Gastrobsas", desc: "Review of access and Segregation of Duties conflicts in SAP GRC, plus automation of findings and KPIs to monitor corrective actions." }
      }
    },
    next: {
      title: "Coming next",
      intro: "What I have in mind and on the workbench. Some are ideas, others are already underway.",
      status: { idea: "Idea", design: "In design", building: "Building" },
      items: {
        sod: { name: "Open-source SoD auditor", desc: "A tool that cross-checks users, roles and conflict matrices to detect Segregation of Duties violations and produce an audit-ready report." },
        riskboard: { name: "Risk and controls dashboard", desc: "A risk matrix with indicators per control, open findings and corrective-action status, aligned with ISO 27001." },
        soclab: { name: "Personal SOC lab", desc: "A mini-SOC with a SIEM, detection rules and documented investigation cases, born from the SOC Analyst bootcamp." },
        botcloud: { name: "WhatsApp bot in production", desc: "Live connection to Meta, approved templates and cloud deployment so other institutions can reuse it." },
        matcher2: { name: "Explainable CV matching", desc: "The next version of the matcher: justifies every score, reduces bias and lets you audit why a profile ranked first." },
        kit: { name: "UX/UI kit for small businesses", desc: "A reusable design system and Figma templates so a small business can have a coherent interface without starting from scratch." }
      },
      cta: "Facing a similar challenge? Let's talk."
    },
    education: {
      title: "Education",
      langsTitle: "Languages",
      inProgress: "In progress",
      items: {
        "unsam-lic": "BA in Business Management and Administration (advanced student)",
        cyber: "Cybersecurity",
        soc: "SOC Analyst Level 2 Bootcamp",
        qa: "Quality Assurance (QA)",
        data: "Data Analyst",
        uxui: "UX/UI Design",
        rrhh: "Diploma in Human Resources",
        mkt: "Technical degree in Integrated Marketing",
        pymes: "Technical degree in SME Administration",
        utn: "Graphic and Multimedia Design"
      },
      langs: [["Spanish", "Native"], ["English", "B1 · in progress"]]
    },
    contact: {
      title: "Let's talk",
      lead: "If you are looking for someone who understands controls, data and product, write to me.",
      email: "Send an email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV (PDF)",
      cvNote: "The CV PDF is in Spanish."
    },
    footer: "Made with care in Buenos Aires.",
    top: "Back to top"
  },

  /* ───────────────────────── FRANÇAIS ───────────────────────── */
  fr: {
    meta: {
      title: "Carina Alejandra Luna — GRC, audit des systèmes et risque technologique",
      desc: "Portfolio de Carina Alejandra Luna : GRC, audit des systèmes, SAP GRC, contrôle interne, données et développement de produits numériques."
    },
    ui: { skip: "Aller au contenu", menu: "Menu", theme: "Changer de thème", lang: "Langue", present: "Aujourd'hui", all: "Tous", more: "Voir plus", less: "Voir moins", visit: "Voir le projet" },
    nav: { about: "Profil", skills: "Compétences", experience: "Expérience", projects: "Projets", next: "À venir", education: "Formation", contact: "Contact" },
    hero: {
      kicker: "Bonjour, je suis",
      role: "GRC · Audit des systèmes · Risque technologique",
      tagline: "Je transforme les contrôles, les données et les processus en preuves claires pour décider — et je construis les outils numériques qui les font vivre.",
      cta1: "Prenons contact",
      cta2: "Télécharger le CV (PDF)",
      badge: "Disponible pour de nouveaux défis"
    },
    stats: { years: "ans d'expérience", visits: "visites à la Foire TalentoIT", signups: "inscriptions à la Foire", companies: "entreprises participantes", plants: "sites analysés" },
    about: {
      title: "Profil",
      lead: "L'audit avec un regard produit.",
      p1: "J'ai de l'expérience en audit interne et opérationnel, en contrôle des processus et en analyse des risques, y compris la revue des accès, des rôles et de la séparation des tâches (SoD) dans SAP GRC. J'analyse les opérations et les pièces justificatives pour repérer les écarts, vérifier les contrôles et apporter des preuves à la prise de décision.",
      p2: "J'y associe la documentation des processus, le suivi des indicateurs et l'automatisation des rapports. Aujourd'hui, je travaille sur des processus et des développements numériques pour l'employabilité à la Fundación Compromiso, je renforce ma formation en cybersécurité et en SOC, et je vise une évolution en gouvernance, risques et conformité (GRC).",
      facts: [
        ["Focus", "GRC et risque technologique"],
        ["Basée à", "Gral. San Martín, Buenos Aires"],
        ["Langues", "Espagnol (langue maternelle) · Anglais B1"],
        ["Référentiels", "ISO 27001 · COBIT · ITIL · BCRA"]
      ]
    },
    skills: {
      title: "Compétences clés",
      groups: [
        { t: "GRC, risques et contrôles", i: ["Audit interne et opérationnel", "Analyse des risques et des écarts", "Contrôle interne", "Documentation des constats", "Traçabilité et suivi des améliorations"] },
        { t: "Sécurité et accès", i: ["SAP GRC", "Revue des utilisateurs, rôles et accès", "Séparation des tâches (SoD)", "Portail privé par lien magique", "Jetons à durée limitée"] },
        { t: "Processus et gouvernance", i: ["Cartographie et amélioration des processus", "Procédures et manuels", "Circuits et points de contrôle", "Indicateurs de gestion"] },
        { t: "Données et reporting", i: ["Excel avancé", "Power BI", "Tableaux de bord et indicateurs", "Automatisation des rapports", "GA4", "Python/pandas et SQL (en formation)"] },
        { t: "Produit et développement", i: ["React · JavaScript/TypeScript", "Node.js · PostgreSQL · FastAPI", "Git", "Design UX/UI sur Figma"] },
        { t: "Référentiels", i: ["ISO 27001", "COBIT", "ITIL", "Réglementation BCRA"] }
      ]
    },
    experience: {
      title: "Expérience professionnelle",
      items: {
        fundacion: { role: "Gestion des processus et des développements", bullets: [
          "Je cartographie, analyse et documente les processus d'employabilité et de gestion organisationnelle, en identifiant les circuits de travail, les points de contrôle et les pistes d'amélioration.",
          "Je conçois et mets à jour procédures et manuels, j'optimise les flux numériques avec l'ATS Zoho et je suis les indicateurs avec les équipes Employabilité, Partenariats et Impact.",
          "Je poursuis le développement et l'amélioration du portail d'emploi TalentoIT et d'un bot, en reliant les besoins fonctionnels à des solutions numériques."
        ] },
        talentoit: { role: "Projet TalentoIT — Foire virtuelle de l'emploi tech", bullets: [
          "J'ai développé un portail privé permettant aux entreprises d'accéder aux CV via des liens magiques à jetons expirables, avec contrôles d'accès et protection des données personnelles.",
          "J'ai construit un tableau de bord Google Analytics 4 : plus de 25 000 visites, 9 400 inscriptions et 18 entreprises participantes.",
          "Technologies : React, JavaScript/TypeScript, Node.js, PostgreSQL, Power BI, Python et Git."
        ] },
        gastrobsas: { role: "Auditrice opérationnelle senior", bullets: [
          "J'ai analysé des données opérationnelles et financières de plus de 14 sites pour prioriser les risques et orienter les contrôles sur la base de preuves.",
          "J'ai automatisé la consolidation des constats et des indicateurs d'une équipe de 10 personnes et préparé des tableaux de bord pour suivre les actions correctives."
        ] },
        marfrig: { role: "Analyste audit et sécurité SAP", bullets: [
          "J'ai analysé bons de commande, paiements, virements et rapprochements pour détecter les écarts par rapport aux dépenses autorisées et prioriser les contrôles.",
          "J'ai revu les accès, les rôles et la séparation des tâches (SoD) des utilisateurs SAP via SAP GRC, en identifiant risques et exceptions de contrôle.",
          "J'ai rédigé des rapports sur les contrats-cadres, les dépenses par fournisseur et les projets d'ingénierie ; j'ai repéré des opportunités de récupération grâce à des contrôles préventifs.",
          "J'ai cartographié et optimisé les procédures opérationnelles pour améliorer la traçabilité et réduire les tâches redondantes."
        ] },
        vae: { role: "Analyste comptable", bullets: ["Rapprochements et contrôles des paiements et de la facturation ; rapports pour les clôtures et les audits."] },
        mkind: { role: "Dirigeante / propriétaire", bullets: ["Gestion des indicateurs de ventes, des stocks et des rapports pour analyser les processus, les résultats et les marges."] },
        falabella: { role: "Analyste senior — Processus, audit interne et fournisseurs", bullets: ["Suivi des indicateurs, contrôle documentaire des contrats-cadres et analyse des risques et des pistes d'amélioration."] },
        arcos: { role: "Responsable de service", bullets: ["Gestion d'une unité commerciale axée sur le budget, les coûts, les stocks et les KPI ; coordination des audits internes de conformité."] }
      }
    },
    projects: {
      title: "Projets",
      intro: "Portails, bots, outils de données et designs sur lesquels j'ai travaillé : de l'audit au code, puis au prototype.",
      filters: { all: "Tous", security: "Sécurité et GRC", web: "Développement web", data: "Données", design: "UX/UI" },
      items: {
        talentoit: { name: "TalentoIT — Foire virtuelle de l'emploi tech", role: "Développement et analytique · Potrero Digital / Fundación Compromiso", desc: "Portail privé où les entreprises accèdent aux CV par lien magique à jeton expirable. Tableau de bord GA4 : plus de 25 000 visites, 9 400 inscriptions et 18 entreprises participantes." },
        potrero: { name: "Potrero Empleos — candidatures assistées par IA", role: "Produit et développement full-stack", desc: "Les candidats déposent leur CV et une IA préremplit le formulaire ; les entreprises filtrent, exportent et font du matching avec leurs offres. Quatre types d'utilisateurs avec JWT et connexion Google pour les candidats." },
        whatsapp: { name: "Bot WhatsApp pour les candidats", role: "Backend et intégration", desc: "Service indépendant et réutilisable qui prévient les candidats avec leur consentement explicite (opt-in), des modèles approuvés, un webhook Meta, un panneau d'administration et la suppression des données sur demande." },
        matcher: { name: "Matcher de CV", role: "Backend et données", desc: "Moteur qui lit les CV du stockage, en extrait le texte, le met en cache et classe les candidats selon la correspondance des compétences avec chaque offre, sur toute la base." },
        preciar: { name: "PRECIAR — calculateur de coûts et de seuil de rentabilité", role: "Frontend · InnovaLab", desc: "Calculateur intelligent de coûts, de prix et de seuil de rentabilité pour les entrepreneurs : saisie guidée en 5 étapes, montants en arithmétique décimale exacte et gestion visuelle des cas non viables." },
        novamarket: { name: "NovaMarket PYME", role: "Frontend · Talently Lab", desc: "E-commerce pour les PME : authentification et inscription, système de design, documentation des composants et tests de bout en bout, avec Jira et des pull requests." },
        ecobite: { name: "EcoBite", role: "UX/UI · Talently Lab", desc: "Marketplace de produits durables. Wireframes, parcours utilisateurs, UI kit, prototype haute fidélité desktop et mobile, états vides et d'erreur, dans deux cellules de travail." },
        urbanfix: { name: "UrbanFix et NovaMarket (design)", role: "UX/UI · Talently Lab", desc: "Conception d'interfaces et de prototypes pour des équipes pluridisciplinaires avec QA, backend et frontend, en coordonnant livrables et dailies." },
        teaser: { name: "Teaser et présentation de Potrero Empleos", role: "Communication et design", desc: "Script, diapositives, narration et teaser animé pour présenter clairement le système de candidature à un public non technique." },
        grc: { name: "Tableaux de bord de contrôles et de SoD", role: "Audit et données · Marfrig / Gastrobsas", desc: "Revue des accès et des conflits de séparation des tâches dans SAP GRC, et automatisation des constats et des indicateurs pour suivre les actions correctives." }
      }
    },
    next: {
      title: "À venir",
      intro: "Ce que j'ai en tête et sur l'établi. Certains sont des idées, d'autres sont déjà en cours.",
      status: { idea: "Idée", design: "En conception", building: "En construction" },
      items: {
        sod: { name: "Auditeur SoD open source", desc: "Un outil qui croise utilisateurs, rôles et matrices de conflits pour détecter les violations de séparation des tâches et produire un rapport prêt pour l'audit." },
        riskboard: { name: "Tableau de bord des risques et contrôles", desc: "Une matrice des risques avec indicateurs par contrôle, constats ouverts et état des actions correctives, alignée sur l'ISO 27001." },
        soclab: { name: "Laboratoire SOC personnel", desc: "Un mini-SOC avec SIEM, règles de détection et cas d'investigation documentés, issu du bootcamp d'analyste SOC." },
        botcloud: { name: "Bot WhatsApp en production", desc: "Connexion à Meta en conditions réelles, modèles approuvés et déploiement dans le cloud pour que d'autres institutions puissent le réutiliser." },
        matcher2: { name: "Matching de CV explicable", desc: "La prochaine version du matcher : elle justifie chaque score, réduit les biais et permet d'auditer pourquoi un profil arrive en premier." },
        kit: { name: "Kit UX/UI pour les PME", desc: "Un système de design réutilisable et des modèles Figma pour qu'une petite entreprise dispose d'une interface cohérente sans repartir de zéro." }
      },
      cta: "Un défi similaire ? Parlons-en."
    },
    education: {
      title: "Formation",
      langsTitle: "Langues",
      inProgress: "En cours",
      items: {
        "unsam-lic": "Licence en gestion et administration des entreprises (étudiante avancée)",
        cyber: "Cybersécurité",
        soc: "Bootcamp Analyste SOC niveau 2",
        qa: "Assurance qualité (QA)",
        data: "Analyste de données",
        uxui: "Design UX/UI",
        rrhh: "Diplôme en ressources humaines",
        mkt: "Diplôme technique en marketing intégré",
        pymes: "Diplôme technique en administration des PME",
        utn: "Design graphique et multimédia"
      },
      langs: [["Espagnol", "Langue maternelle"], ["Anglais", "B1 · en progression"]]
    },
    contact: {
      title: "Parlons-en",
      lead: "Si vous cherchez quelqu'un qui comprend les contrôles, les données et le produit, écrivez-moi.",
      email: "Envoyer un e-mail",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Télécharger le CV (PDF)",
      cvNote: "Le CV en PDF est en espagnol."
    },
    footer: "Fait avec soin à Buenos Aires.",
    top: "Retour en haut"
  },

  /* ───────────────────────── DEUTSCH ───────────────────────── */
  de: {
    meta: {
      title: "Carina Alejandra Luna — GRC, Systemprüfung und Technologierisiko",
      desc: "Portfolio von Carina Alejandra Luna: GRC, Systemprüfung, SAP GRC, interne Kontrollen, Daten und Entwicklung digitaler Produkte."
    },
    ui: { skip: "Zum Inhalt springen", menu: "Menü", theme: "Design wechseln", lang: "Sprache", present: "heute", all: "Alle", more: "Mehr anzeigen", less: "Weniger anzeigen", visit: "Projekt ansehen" },
    nav: { about: "Profil", skills: "Kompetenzen", experience: "Erfahrung", projects: "Projekte", next: "Demnächst", education: "Ausbildung", contact: "Kontakt" },
    hero: {
      kicker: "Hallo, ich bin",
      role: "GRC · Systemprüfung · Technologierisiko",
      tagline: "Ich mache aus Kontrollen, Daten und Prozessen klare Entscheidungsgrundlagen — und baue die digitalen Werkzeuge, die sie tragen.",
      cta1: "Kontakt aufnehmen",
      cta2: "Lebenslauf herunterladen (PDF)",
      badge: "Offen für neue Herausforderungen"
    },
    stats: { years: "Jahre Berufserfahrung", visits: "Besuche auf der TalentoIT-Messe", signups: "Registrierungen auf der Messe", companies: "teilnehmende Unternehmen", plants: "analysierte Standorte" },
    about: {
      title: "Profil",
      lead: "Prüfung mit Produktdenken.",
      p1: "Ich habe Erfahrung in der internen und operativen Revision, in der Prozesskontrolle und der Risikoanalyse, einschließlich der Prüfung von Zugriffen, Rollen und Funktionstrennung (SoD) in SAP GRC. Ich analysiere Vorgänge und Belege, um Abweichungen zu erkennen, Kontrollen zu prüfen und Entscheidungen mit Nachweisen zu untermauern.",
      p2: "Dazu kommen Prozessdokumentation, Kennzahlenverfolgung und die Automatisierung von Berichten. Heute arbeite ich bei der Fundación Compromiso an Prozessen und digitalen Entwicklungen für Beschäftigungsfähigkeit, vertiefe meine Weiterbildung in Cybersicherheit und SOC und möchte im Bereich Governance, Risk und Compliance (GRC) wachsen.",
      facts: [
        ["Fokus", "GRC und Technologierisiko"],
        ["Standort", "Gral. San Martín, Buenos Aires"],
        ["Sprachen", "Spanisch (Muttersprache) · Englisch B1"],
        ["Standards", "ISO 27001 · COBIT · ITIL · BCRA"]
      ]
    },
    skills: {
      title: "Kernkompetenzen",
      groups: [
        { t: "GRC, Risiken und Kontrollen", i: ["Interne und operative Revision", "Risiko- und Abweichungsanalyse", "Internes Kontrollsystem", "Dokumentation von Feststellungen", "Nachvollziehbarkeit und Maßnahmenverfolgung"] },
        { t: "Sicherheit und Zugriffe", i: ["SAP GRC", "Prüfung von Benutzern, Rollen und Zugriffen", "Funktionstrennung (SoD)", "Privates Portal mit Magic Link", "Token mit Ablaufdatum"] },
        { t: "Prozesse und Governance", i: ["Prozessaufnahme und -verbesserung", "Verfahren und Handbücher", "Arbeitsabläufe und Kontrollpunkte", "Steuerungskennzahlen"] },
        { t: "Daten und Reporting", i: ["Excel (fortgeschritten)", "Power BI", "Dashboards und Kennzahlen", "Automatisierung von Berichten", "GA4", "Python/pandas und SQL (in Weiterbildung)"] },
        { t: "Produkt und Entwicklung", i: ["React · JavaScript/TypeScript", "Node.js · PostgreSQL · FastAPI", "Git", "UX/UI-Design in Figma"] },
        { t: "Referenzrahmen", i: ["ISO 27001", "COBIT", "ITIL", "BCRA-Vorschriften"] }
      ]
    },
    experience: {
      title: "Berufserfahrung",
      items: {
        fundacion: { role: "Prozess- und Entwicklungsmanagement", bullets: [
          "Ich nehme Prozesse der Beschäftigungsförderung und der Organisation auf, analysiere und dokumentiere sie und identifiziere Arbeitsabläufe, Kontrollpunkte und Verbesserungspotenziale.",
          "Ich entwerfe und aktualisiere Verfahren und Handbücher, optimiere digitale Abläufe mit dem Zoho-ATS und verfolge Kennzahlen gemeinsam mit den Bereichen Beschäftigung, Allianzen und Wirkung.",
          "Ich entwickle das Jobportal TalentoIT und einen Bot weiter und verbinde fachliche Anforderungen mit digitalen Lösungen."
        ] },
        talentoit: { role: "Projekt TalentoIT — Virtuelle Tech-Jobmesse", bullets: [
          "Ich habe ein privates Portal entwickelt, über das Unternehmen per Magic Link mit ablaufenden Tokens auf Lebensläufe zugreifen, mit Zugriffskontrollen und Datenschutz.",
          "Ich habe ein Dashboard mit Google-Analytics-4-Kennzahlen gebaut: über 25.000 Besuche, 9.400 Registrierungen und 18 teilnehmende Unternehmen.",
          "Technologien: React, JavaScript/TypeScript, Node.js, PostgreSQL, Power BI, Python und Git."
        ] },
        gastrobsas: { role: "Senior Operational Auditor", bullets: [
          "Ich habe operative und finanzielle Daten von mehr als 14 Standorten analysiert, um Risiken zu priorisieren und Kontrollen auf Basis von Nachweisen auszurichten.",
          "Ich habe die Zusammenführung von Feststellungen und Kennzahlen eines zehnköpfigen Teams automatisiert und Dashboards zur Überwachung von Korrekturmaßnahmen erstellt."
        ] },
        marfrig: { role: "Analystin für Revision und SAP-Sicherheit", bullets: [
          "Ich habe Bestellungen, Zahlungen, Überweisungen und Abstimmungen analysiert, um Abweichungen von genehmigten Ausgaben zu erkennen und Kontrollen zu priorisieren.",
          "Ich habe Zugriffe, Rollen und Funktionstrennung (SoD) von SAP-Benutzern mit SAP GRC geprüft und dabei Risiken und Kontrollausnahmen identifiziert.",
          "Ich habe Berichte zu Rahmenverträgen, Ausgaben je Lieferant und Ingenieurprojekten erstellt und durch präventive Kontrollen Rückgewinnungspotenziale aufgedeckt.",
          "Ich habe operative Abläufe aufgenommen und optimiert, um die Nachvollziehbarkeit zu verbessern und redundante Aufgaben zu reduzieren."
        ] },
        vae: { role: "Buchhaltungsanalystin", bullets: ["Abstimmungen und Kontrollen von Zahlungen und Rechnungen sowie Berichte für Abschlüsse und Prüfungen."] },
        mkind: { role: "Inhaberin / Business Owner", bullets: ["Steuerung von Verkaufs-, Bestands- und Berichtskennzahlen zur Analyse von Prozessen, Ergebnissen und Margen."] },
        falabella: { role: "Senior-Analystin — Prozesse, interne Revision und Lieferanten", bullets: ["Kennzahlenverfolgung, Dokumentenkontrolle von Rahmenverträgen sowie Analyse von Risiken und Verbesserungspotenzialen."] },
        arcos: { role: "Schichtleiterin", bullets: ["Leitung einer Geschäftseinheit mit Schwerpunkt Budget, Kosten, Bestände und KPIs; Koordination interner Compliance-Prüfungen."] }
      }
    },
    projects: {
      title: "Projekte",
      intro: "Portale, Bots, Datenwerkzeuge und Designs, an denen ich gearbeitet habe: von der Prüfung über den Code bis zum Prototyp.",
      filters: { all: "Alle", security: "Sicherheit & GRC", web: "Webentwicklung", data: "Daten", design: "UX/UI" },
      items: {
        talentoit: { name: "TalentoIT — Virtuelle Tech-Jobmesse", role: "Entwicklung und Analytik · Potrero Digital / Fundación Compromiso", desc: "Ein privates Portal, in dem Unternehmen per Magic Link mit ablaufendem Token auf Lebensläufe zugreifen. GA4-Dashboard mit über 25.000 Besuchen, 9.400 Registrierungen und 18 teilnehmenden Unternehmen." },
        potrero: { name: "Potrero Empleos — Bewerbung mit KI", role: "Produkt und Full-Stack-Entwicklung", desc: "Kandidaten laden ihren Lebenslauf hoch und eine KI füllt das Formular vor; Unternehmen filtern, exportieren und matchen gegen ihre Stellen. Vier Benutzertypen mit JWT und Google-Login für Kandidaten." },
        whatsapp: { name: "WhatsApp-Bot für Kandidaten", role: "Backend und Integration", desc: "Ein eigenständiger, wiederverwendbarer Dienst, der Kandidaten mit ausdrücklicher Einwilligung (Opt-in) benachrichtigt – mit genehmigten Vorlagen, Meta-Webhook, eigenem Panel und Datenlöschung auf Anfrage." },
        matcher: { name: "CV-Matcher", role: "Backend und Daten", desc: "Eine Engine, die Lebensläufe aus dem Speicher liest, den Text extrahiert, zwischenspeichert und Kandidaten nach Skill-Übereinstimmung mit jeder Stelle über die gesamte Datenbank hinweg einstuft." },
        preciar: { name: "PRECIAR — Kosten- und Break-even-Rechner", role: "Frontend · InnovaLab", desc: "Ein intelligenter Rechner für Kosten, Preise und Break-even für Gründerinnen und Gründer: geführte Eingabe in 5 Schritten, exakte Dezimalarithmetik für Beträge und klare Darstellung nicht tragfähiger Fälle." },
        novamarket: { name: "NovaMarket PYME", role: "Frontend · Talently Lab", desc: "E-Commerce für kleine Unternehmen: Authentifizierung und Registrierung, Designsystem, Komponentendokumentation und End-to-End-Tests, mit Jira und Pull Requests." },
        ecobite: { name: "EcoBite", role: "UX/UI · Talently Lab", desc: "Ein Marktplatz für nachhaltige Produkte. Wireframes, User Flows, UI-Kit, High-Fidelity-Prototyp für Desktop und Mobil, Leer- und Fehlerzustände – in zwei Arbeitsteams." },
        urbanfix: { name: "UrbanFix und NovaMarket (Design)", role: "UX/UI · Talently Lab", desc: "Gestaltung von Oberflächen und Prototypen für interdisziplinäre Teams mit QA, Backend und Frontend, inklusive Koordination von Lieferobjekten und Dailies." },
        teaser: { name: "Teaser und Präsentation von Potrero Empleos", role: "Kommunikation und Design", desc: "Skript, Folien, Vertonung und animierter Teaser, um das Bewerbungssystem verständlich für nicht technisches Publikum vorzustellen." },
        grc: { name: "Dashboards für Kontrollen und SoD", role: "Revision und Daten · Marfrig / Gastrobsas", desc: "Prüfung von Zugriffen und SoD-Konflikten in SAP GRC sowie Automatisierung von Feststellungen und Kennzahlen zur Überwachung von Korrekturmaßnahmen." }
      }
    },
    next: {
      title: "Demnächst",
      intro: "Was ich im Kopf und auf der Werkbank habe. Manches sind Ideen, anderes ist schon in Arbeit.",
      status: { idea: "Idee", design: "In Konzeption", building: "In Arbeit" },
      items: {
        sod: { name: "Open-Source-SoD-Prüfer", desc: "Ein Werkzeug, das Benutzer, Rollen und Konfliktmatrizen abgleicht, SoD-Verstöße erkennt und einen prüfungsfertigen Bericht erzeugt." },
        riskboard: { name: "Dashboard für Risiken und Kontrollen", desc: "Eine Risikomatrix mit Kennzahlen je Kontrolle, offenen Feststellungen und Status der Korrekturmaßnahmen, ausgerichtet an ISO 27001." },
        soclab: { name: "Persönliches SOC-Labor", desc: "Ein Mini-SOC mit SIEM, Erkennungsregeln und dokumentierten Untersuchungsfällen, entstanden aus dem Bootcamp für SOC-Analysten." },
        botcloud: { name: "WhatsApp-Bot im Produktivbetrieb", desc: "Anbindung an das echte Meta, genehmigte Vorlagen und Cloud-Deployment, damit andere Institutionen ihn wiederverwenden können." },
        matcher2: { name: "Erklärbares CV-Matching", desc: "Die nächste Version des Matchers: begründet jede Bewertung, verringert Verzerrungen und macht nachvollziehbar, warum ein Profil an erster Stelle steht." },
        kit: { name: "UX/UI-Kit für kleine Unternehmen", desc: "Ein wiederverwendbares Designsystem mit Figma-Vorlagen, damit ein kleines Unternehmen eine stimmige Oberfläche hat, ohne bei null anzufangen." }
      },
      cta: "Vor einer ähnlichen Aufgabe? Sprechen wir darüber."
    },
    education: {
      title: "Ausbildung",
      langsTitle: "Sprachen",
      inProgress: "Laufend",
      items: {
        "unsam-lic": "Bachelor in Betriebswirtschaft und Unternehmensführung (fortgeschrittenes Studium)",
        cyber: "Cybersicherheit",
        soc: "Bootcamp SOC-Analyst Level 2",
        qa: "Qualitätssicherung (QA)",
        data: "Datenanalystin",
        uxui: "UX/UI-Design",
        rrhh: "Diplom in Personalwesen",
        mkt: "Technische Ausbildung in integriertem Marketing",
        pymes: "Technische Ausbildung in KMU-Verwaltung",
        utn: "Grafik- und Multimediadesign"
      },
      langs: [["Spanisch", "Muttersprache"], ["Englisch", "B1 · in Arbeit"]]
    },
    contact: {
      title: "Sprechen wir",
      lead: "Wenn Sie jemanden suchen, der Kontrollen, Daten und Produkt versteht, schreiben Sie mir.",
      email: "E-Mail schreiben",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Lebenslauf herunterladen (PDF)",
      cvNote: "Der Lebenslauf als PDF ist auf Spanisch."
    },
    footer: "Mit Sorgfalt in Buenos Aires gemacht.",
    top: "Nach oben"
  }
};
