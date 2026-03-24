/* ─── TRANSLATIONS ───────────────────────────────────────────── */
const translations = {
  en: {
    "nav.about":        "About",
    "nav.experience":   "Experience",
    "nav.projects":     "Projects",
    "nav.contact":      "Contact",
    "hero.tag":         "Available for work",
    "hero.sub":         "Building digital experiences that work beautifully.",
    "hero.cv":          "Download CV",
    "hero.contact":     "Contact me",
    "about.label":      "01 — About",
    "about.title":      "Who am I?",
    "about.stat1":      "Years Experience",
    "about.stat2":      "Software Engineering",
    "about.p1":         "I'm a developer who loves turning ideas into working digital products. What started as curiosity became a strong passion for building web applications and understanding how systems work behind the scenes.",
    "about.p2":         "I enjoy designing clean user interfaces, structuring backend logic, and constantly learning new technologies. Development is not only about writing code — it's about solving problems and creating value.",
    "about.p3":         "I'm currently focused on growing as a full-stack developer and contributing to meaningful projects that make an impact.",
    "exp.label":        "02 — Experience",
    "level.advanced":   "Advanced",
    "level.intermediate":"Intermediate",
    "level.basic":      "Basic",
    "proj.label":       "03 — Projects",
    "proj.title":       "Recent Work",
    "proj.demo":        "Live Demo ↗",
    "proj.p1":          "Management system for bowling alleys.",
    "proj.p2":          "University payments management platform.",
    "proj.p3":          "Library management system.",
    "contact.label":    "04 — Contact",
    "contact.title":    "Let's talk.",
    "contact.sub":      "Open to opportunities, collabs & coffee chats.",
  },
  es: {
    "nav.about":        "Sobre mí",
    "nav.experience":   "Experiencia",
    "nav.projects":     "Proyectos",
    "nav.contact":      "Contacto",
    "hero.tag":         "Disponible para trabajar",
    "hero.sub":         "Construyendo experiencias digitales que funcionan y enamoran.",
    "hero.cv":          "Descargar CV",
    "hero.contact":     "Contáctame",
    "about.label":      "01 — Sobre mí",
    "about.title":      "¿Quién soy?",
    "about.stat1":      "Años de experiencia",
    "about.stat2":      "Ingeniería de Software",
    "about.p1":         "Soy un desarrollador apasionado por convertir ideas en productos digitales. Lo que comenzó como curiosidad se convirtió en una fuerte pasión por construir aplicaciones web y entender cómo funcionan los sistemas.",
    "about.p2":         "Disfruto diseñar interfaces limpias, estructurar la lógica del backend y aprender constantemente nuevas tecnologías. Desarrollar no es solo escribir código — es resolver problemas y crear valor.",
    "about.p3":         "Actualmente estoy enfocado en crecer como desarrollador full-stack y contribuir a proyectos con impacto real.",
    "exp.label":        "02 — Experiencia",
    "level.advanced":   "Avanzado",
    "level.intermediate":"Intermedio",
    "level.basic":      "Básico",
    "proj.label":       "03 — Proyectos",
    "proj.title":       "Trabajo reciente",
    "proj.demo":        "Demo en vivo ↗",
    "proj.p1":          "Sistema de gestión para boleras.",
    "proj.p2":          "Plataforma de gestión de pagos universitarios.",
    "proj.p3":          "Sistema de gestión de biblioteca.",
    "contact.label":    "04 — Contacto",
    "contact.title":    "Hablemos.",
    "contact.sub":      "Abierto a oportunidades, colaboraciones y charlas.",
  }
};

/* ─── LANGUAGE STATE ─────────────────────────────────────────── */
let currentLang = localStorage.getItem('nb-lang') || 'en';

function applyLang(lang) {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  // Update toggle button labels & flags
  const isEN = lang === 'en';
  const nextFlag = isEN ? '🇪🇸' : '🇬🇧';
  const nextLabel = isEN ? 'ES' : 'EN';
  ['desk', 'mob'].forEach(id => {
    const flag = document.getElementById(`lang-flag-${id}`);
    const label = document.getElementById(`lang-label-${id}`);
    if (flag)  flag.textContent  = nextFlag;
    if (label) label.textContent = nextLabel;
  });

  // Animate the swap
  document.body.classList.add('lang-transitioning');
  setTimeout(() => document.body.classList.remove('lang-transitioning'), 300);

  document.documentElement.lang = lang;
  localStorage.setItem('nb-lang', lang);
  currentLang = lang;
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
}

/* ─── HAMBURGER ──────────────────────────────────────────────── */
function toggleMenu() {
  document.querySelector('.menu-links').classList.toggle('open');
  document.querySelector('.hamburger-icon').classList.toggle('open');
}

/* ─── CUSTOM CURSOR ──────────────────────────────────────────── */
const cursor   = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top  = e.clientY + 'px';
  }, 80);
});

document.querySelectorAll('a, button, .project-card, .lang-toggle').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('grow');    follower.classList.add('grow'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('grow'); follower.classList.remove('grow'); });
});

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
const revealEls = document.querySelectorAll('section, .project-card, .stat-card, .skill-item');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
revealEls.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

/* ─── INIT ───────────────────────────────────────────────────── */
applyLang(currentLang);
