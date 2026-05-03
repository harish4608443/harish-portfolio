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
        "Building backend workflows that process real-time fleet data from a large vehicle network — mostly Python pipelines with heavy SQL.",
        "Integrated an ML-based route planning component that feeds into operational decision tools used by internal teams.",
        "Reworked core data processing logic that had accumulated technical debt, which cut processing time noticeably and made the system easier to maintain.",
      ],
    },
    {
      role: "Intern",
      company: "Mercedes-Benz AG · Stuttgart",
      date: "Oct 2024 – Mar 2025",
      bullets: [
        "Developed a Flask backend and deployed it on AWS (ECS, ECR, ALB) — handled everything from writing the application to configuring the cloud infrastructure.",
        "Designed the REST API layer consumed by other internal tools to query and exchange data across system boundaries.",
        "Traced persistent data quality issues back to inconsistencies at ingestion and fixed them at the source, which improved reliability of downstream reports.",
      ],
    },
    {
      role: "Working Student",
      company: "Mercedes-Benz AG · Stuttgart",
      date: "Mar 2024 – Sep 2024",
      bullets: [
        "Wrote Python scripts and SQL queries to process large datasets through AWS Athena — some tables ran into hundreds of millions of rows.",
        "Optimised a set of slow-running queries that were causing timeout failures in monitoring dashboards, cutting execution time significantly.",
        "Supported day-to-day monitoring and helped troubleshoot workflow failures before they escalated.",
      ],
    },
    {
      role: "Student Research Assistant",
      company: "ISW & SimTech · Stuttgart",
      date: "Aug 2023 – Mar 2024",
      bullets: [
        "Wrote Python tooling for robotics and simulation research at two institutes within Universit\u00e4t Stuttgart.",
        "Focused on building things modularly so other researchers could pick up and extend the components without touching the internals.",
      ],
    },
  ],

  projects: [
    { emoji: "🧠", name: "Intelligent View Planning for 3D Scene Reconstruction", year: "2025", desc: "Built a system that recommends where to point the camera next during outdoor 3D capture. Used TSDF volume fusion with ARCore for depth and spatial coverage, and a Barracuda DNN for real-time object detection. Integrated with NeRF and 3D Gaussian Splatting pipelines." },
    { emoji: "🤟", name: "American Sign Language Detection", year: "2024", desc: "Real-time ASL recognition system — detects hand gestures from a live camera feed using OpenCV and a trained ML classifier. Built to work reliably under varied lighting and backgrounds." },
    { emoji: "🚦", name: "Pedestrian-Aware Adaptive Traffic Signal Control", year: "2022", desc: "Vision-based system that detects vehicles and pedestrians in real time using YOLOv5 and dynamically adjusts signal timings based on lane occupancy — rather than running on fixed cycles." },
    { emoji: "🏠", name: "Housing Market Analysis & Price Forecasting", year: "2021", desc: "End-to-end ML pipeline covering data cleaning, feature engineering, and model comparison across Random Forest, XGBoost, and linear regression. Wrapped in a Flask interface for querying price estimates." },
  ],

  skills: {
    "Programming":               ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    "Frameworks & Libraries":    ["Flask", "React", "OpenCV", "scikit-learn", "TensorFlow", "NumPy", "Pandas"],
    "AI / ML":                   ["Machine Learning", "Deep Learning", "Computer Vision"],
    "Cloud":                     ["AWS ECS", "ECR", "ALB", "Route 53", "Athena", "IAM", "CloudWatch", "SageMaker", "Azure"],
    "Containers & Orchestration":["Docker", "Kubernetes"],
    "Tools":                     ["Git", "Linux", "CI/CD"],
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
