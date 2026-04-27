/* ══════════════════════════════════════════
   Harish Renganathan — Scroll Story Logic
══════════════════════════════════════════ */

// ── Data ─────────────────────────────────
const DATA = {
  email:    "rharish4444@gmail.com",
  phone:    "+49 17647365954",
  location: "Stuttgart, Germany",
  github:   "https://github.com/harish4608443",
  linkedin: "https://www.linkedin.com/in/harish-renganathan-5879b6137/",

  education: [
    { year: "2023 — 2026", school: "Universität Stuttgart", degree: "M.Sc. Computer Science", loc: "📍 Stuttgart, Germany", badge: true },
    { year: "2018 — 2022", school: "B.S. Abdur Rahman Crescent University", degree: "B.Tech. Computer Science", loc: "📍 India", badge: false },
  ],

  experience: [
    {
      role: "Working Student",
      company: "Mercedes-Benz AG · Stuttgart",
      date: "May 2025 – Present",
      bullets: [
        "Developed data-driven backend systems for vehicle fleet applications using Python and SQL.",
        "Worked on machine learning models for route optimization and data analysis.",
        "Improved data processing workflows and system performance.",
      ],
    },
    {
      role: "Intern",
      company: "Mercedes-Benz AG · Stuttgart",
      date: "Oct 2024 – Mar 2025",
      bullets: [
        "Developed a Flask-based web application integrated with AWS services (ECS, ECR, ALB).",
        "Built REST APIs and backend logic for data ingestion and processing.",
        "Worked on data transformation and validation pipelines for structured datasets.",
      ],
    },
    {
      role: "Working Student",
      company: "Mercedes-Benz AG · Stuttgart",
      date: "Mar 2024 – Sep 2024",
      bullets: [
        "Developed Python and SQL workflows for large-scale data analysis using AWS Athena.",
        "Supported monitoring and debugging of cloud-based applications.",
      ],
    },
    {
      role: "Student Research Assistant",
      company: "ISW & SimTech · Stuttgart",
      date: "Aug 2023 – Mar 2024",
      bullets: [
        "Developed Python-based tools and reusable components for research applications.",
        "Contributed to experimentation and prototyping in simulation and robotics systems.",
      ],
    },
  ],

  projects: [
    { emoji: "🤟", name: "American Sign Language Detection", year: "2024", desc: "Real-time computer vision app using OpenCV and ML for gesture recognition." },
    { emoji: "🚦", name: "Automatic Traffic Light Controller", year: "2022", desc: "Real-time object detection (YOLO) and decision logic for adaptive traffic control." },
    { emoji: "🏠", name: "Real Estate Price Prediction", year: "2021", desc: "ML model and data pipeline for real estate trend analysis and forecasting." },
  ],

  skills: {
    "Programming":      ["Python", "JavaScript", "C++", "Java", "SQL"],
    "Fullstack":        ["REST APIs", "Flask", "Backend Dev", "Frontend"],
    "AI / ML":          ["Machine Learning", "Deep Learning", "Computer Vision"],
    "Data Engineering": ["ETL Pipelines", "Data Processing", "AWS Athena"],
    "Cloud":            ["AWS ECS", "AWS ECR", "ALB"],
    "Tools":            ["Git", "CI/CD", "Linux"],
  },

  contact: [
    { icon: "📧", label: "rharish4444@gmail.com",     sub: "Email — fastest way to reach me",     href: "mailto:rharish4444@gmail.com" },
    { icon: "🔗", label: "LinkedIn",                  sub: "harish-renganathan-5879b6137",         href: "https://www.linkedin.com/in/harish-renganathan-5879b6137/" },
    { icon: "🐙", label: "GitHub",                    sub: "harish4608443",                        href: "https://github.com/harish4608443" },
    { icon: "📞", label: "+49 17647365954",            sub: "Stuttgart, Germany",                   href: "tel:+4917647365954" },
  ],
};

// ── Typewriter ────────────────────────────
const TW_WORDS = [
  "Software Engineer",
  "Backend Developer",
  "AI / ML Enthusiast",
  "Data Engineer",
  "M.Sc. Computer Science",
];
let twIdx = 0, twChar = 0, twDeleting = false;

function typewriter() {
  const el = document.getElementById("tw");
  if (!el) return;
  const word = TW_WORDS[twIdx];

  if (!twDeleting) {
    twChar++;
    el.textContent = word.slice(0, twChar);
    if (twChar === word.length) {
      twDeleting = true;
      setTimeout(typewriter, 1800);
      return;
    }
    setTimeout(typewriter, 70);
  } else {
    twChar--;
    el.textContent = word.slice(0, twChar);
    if (twChar === 0) {
      twDeleting = false;
      twIdx = (twIdx + 1) % TW_WORDS.length;
      setTimeout(typewriter, 400);
      return;
    }
    setTimeout(typewriter, 38);
  }
}

// ── Render Dynamic Content ────────────────
function renderEducation() {
  const el = document.getElementById("edu-grid");
  if (!el) return;
  el.innerHTML = DATA.education.map((e, i) => `
    <div class="edu-card" data-anim="${i % 2 === 0 ? 'fade-right' : 'fade-left'}" data-delay="${200 + i * 150}">
      <div class="edu-year">${e.year}</div>
      <div class="edu-school">${e.school}</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-loc">${e.loc}</div>
      ${e.badge ? '<div class="edu-badge">Current</div>' : ''}
    </div>
  `).join('');
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  if (!el) return;
  el.innerHTML = DATA.experience.map((e, i) => `
    <div class="tl-card" data-anim="fade-up" data-delay="${200 + i * 120}">
      <div class="tl-header">
        <div class="tl-role">${e.role}</div>
        <div class="tl-date">${e.date}</div>
      </div>
      <div class="tl-company">${e.company}</div>
      <ul class="tl-bullets">
        ${e.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects() {
  const el = document.getElementById("proj-grid");
  if (!el) return;
  el.innerHTML = DATA.projects.map((p, i) => `
    <div class="proj-card" data-anim="scale-in" data-delay="${200 + i * 100}">
      <span class="proj-emoji">${p.emoji}</span>
      <div class="proj-name">${p.name}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-year">${p.year}</div>
    </div>
  `).join('');
}

function renderSkills() {
  const el = document.getElementById("skills-body");
  if (!el) return;
  let delay = 200;
  el.innerHTML = Object.entries(DATA.skills).map(([cat, pills]) => {
    const groupDelay = delay;
    delay += 80;
    return `
      <div class="skill-group" data-anim="fade-up" data-delay="${groupDelay}">
        <div class="skill-cat">${cat}</div>
        <div class="skill-pills">
          ${pills.map((p, i) => `<span class="skill-pill" style="transition-delay:${groupDelay + 30 + i * 30}ms">${p}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderContact() {
  const el = document.getElementById("contact-list");
  if (!el) return;
  el.innerHTML = DATA.contact.map((c, i) => `
    <a class="contact-row" href="${c.href}" target="${c.href.startsWith('http') ? '_blank' : '_self'}"
       rel="${c.href.startsWith('http') ? 'noopener noreferrer' : ''}"
       data-anim="fade-up" data-delay="${200 + i * 80}">
      <span class="contact-icon">${c.icon}</span>
      <div>
        <div class="contact-label">${c.label}</div>
        <div class="contact-sub">${c.sub}</div>
      </div>
    </a>
  `).join('');
}

// ── Progress Bar ──────────────────────────
function updateProgress() {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  const pct      = total > 0 ? (scrolled / total) * 100 : 0;
  document.getElementById("progress-bar").style.width = pct + "%";
}

// ── Floating Nav ──────────────────────────
function updateFloatNav() {
  const hero = document.getElementById("hero");
  const nav  = document.getElementById("float-nav");
  if (!hero || !nav) return;
  if (window.scrollY > hero.offsetHeight * 0.6) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
}

// ── Side Dots ─────────────────────────────
const SECTIONS = ["hero", "education", "experience", "projects", "skills", "contact"];

function updateSideDots() {
  const scrollMid = window.scrollY + window.innerHeight / 2;
  let active = SECTIONS[0];
  for (const id of SECTIONS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollMid) active = id;
  }
  document.querySelectorAll(".sdot").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.target === active);
  });
}

function initSideDots() {
  document.querySelectorAll(".sdot").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ── Scroll Animations (Intersection Observer) ──
function initScrollAnimations() {
  const els = document.querySelectorAll("[data-anim]");

  // Apply transition-delay from data-delay attribute
  els.forEach(el => {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = delay + "ms";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ── Smooth anchor links ───────────────────
function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ── Hero entry animation ──────────────────
function runHeroAnimations() {
  // Trigger all hero [data-anim] elements in sequence using their delays
  const heroEls = document.querySelectorAll("#hero [data-anim]");
  heroEls.forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => el.classList.add("revealed"), delay + 100);
  });

  // Start typewriter after hero role appears
  setTimeout(typewriter, 600);
}

// ── Init ─────────────────────────────────
function init() {
  // Render all dynamic content first
  renderEducation();
  renderTimeline();
  renderProjects();
  renderSkills();
  renderContact();

  // Re-observe any newly added [data-anim] elements
  initScrollAnimations();
  initSideDots();
  initSmoothLinks();

  // Scroll events
  window.addEventListener("scroll", () => {
    updateProgress();
    updateFloatNav();
    updateSideDots();
  }, { passive: true });

  // Hero entrance
  runHeroAnimations();
}

window.addEventListener("DOMContentLoaded", init);
