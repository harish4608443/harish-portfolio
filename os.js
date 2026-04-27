/* ══════════════════════════════════════
   HARISH — Card Deck Portfolio  |  os.js
   ══════════════════════════════════════ */

// ─── DATA ────────────────────────────────────────────────────────────────────
const DATA = {
  about: [
    {
      category: "Identity",
      suit: "♠", suitRed: false,
      title: "Hello, I'm Harish",
      subtitle: "Software Engineer & ML enthusiast",
      body: `
        <p>Master's student in Computer Science at Universität Stuttgart, Germany — graduating April 2026.</p>
        <p style="margin-top:10px">I build data-driven backend systems, craft ML solutions, and enjoy turning complex problems into clean, deployable code.</p>
      `,
      tags: ["M.Sc. CS", "Stuttgart", "India → Germany"],
      back: {
        title: "About Me",
        body: `<ul>
          <li>Originally from Tamil Nadu, India — now based in Stuttgart 🇩🇪</li>
          <li>Passionate about the intersection of backend engineering and machine learning</li>
          <li>Strong believer in clean code, reproducible pipelines, and good coffee</li>
          <li>Languages: Tamil (native) · English (C2) · Hindi (C1) · German (B1)</li>
          <li>Looking for full-time SWE / ML roles from May 2026</li>
        </ul>`,
        tags: ["Open to work", "May 2026"]
      }
    },
    {
      category: "Education",
      suit: "♦", suitRed: true,
      title: "Universität Stuttgart",
      subtitle: "M.Sc. Computer Science · Apr 2023 – Apr 2026",
      body: `<p>Focus areas: Machine Learning, Computer Vision, Distributed Systems, Software Engineering.</p>`,
      tags: ["Stuttgart", "Master's"],
      back: {
        title: "Academic Background",
        body: `<ul>
          <li><strong>M.Sc. Computer Science</strong> — Universität Stuttgart, Germany (Apr 2023 – Apr 2026)</li>
          <li><strong>B.Tech Computer Science</strong> — B.S. Abdur Rahman Crescent University, India (Jul 2018 – Jul 2022)</li>
          <li>Research assistant at ISW &amp; SimTech — Python tools for simulation and robotics</li>
        </ul>`,
        tags: ["Thesis in progress", "GPA: ongoing"]
      }
    },
    {
      category: "Personality",
      suit: "♥", suitRed: true,
      title: "What drives me",
      subtitle: "Values & interests",
      body: `<p>I thrive on clean architectures, meaningful data, and shipping things that work reliably at scale.</p>`,
      tags: ["Backend", "ML", "Cloud"],
      back: {
        title: "Interests & Values",
        body: `<ul>
          <li>Deep interest in applied ML — from prototype to production</li>
          <li>Love for elegant system design and well-structured APIs</li>
          <li>Enjoy mentoring, pair programming, and knowledge sharing</li>
          <li>Outside tech: hiking in the Swabian Alps, chess, and reading sci-fi</li>
        </ul>`,
        tags: ["Curious", "Collaborative", "Reliable"]
      }
    }
  ],

  experience: [
    {
      category: "Experience · 1 of 4",
      suit: "♠", suitRed: false,
      title: "Mercedes-Benz AG",
      subtitle: "Working Student · May 2025 – Present",
      body: `<p>Data-driven backend systems for fleet applications using Python and SQL. Building ML models for route optimisation.</p>`,
      tags: ["Python", "SQL", "ML", "Fleet"],
      back: {
        title: "Working Student @ Mercedes-Benz",
        body: `<ul>
          <li>Developing data-driven backend systems for fleet management applications</li>
          <li>Writing efficient Python &amp; SQL pipelines for large-scale operational data</li>
          <li>Implementing ML models for route optimisation and predictive analytics</li>
        </ul>`,
        tags: ["Python", "SQL", "Machine Learning"]
      }
    },
    {
      category: "Experience · 2 of 4",
      suit: "♦", suitRed: true,
      title: "Mercedes-Benz AG",
      subtitle: "Intern · Oct 2024 – Mar 2025",
      body: `<p>Built a Flask web application deployed on AWS (ECS, ECR, ALB). Designed REST APIs and data ingestion pipelines.</p>`,
      tags: ["Flask", "AWS", "REST API"],
      back: {
        title: "Intern @ Mercedes-Benz",
        body: `<ul>
          <li>Built and deployed a Flask web application using AWS ECS, ECR, and ALB</li>
          <li>Designed and implemented RESTful APIs consumed by internal teams</li>
          <li>Created data ingestion &amp; processing pipelines for structured and semi-structured data</li>
        </ul>`,
        tags: ["Flask", "AWS ECS/ECR/ALB", "REST APIs", "Data Pipelines"]
      }
    },
    {
      category: "Experience · 3 of 4",
      suit: "♣", suitRed: false,
      title: "Mercedes-Benz AG",
      subtitle: "Working Student · Mar 2024 – Sep 2024",
      body: `<p>Large-scale data analysis using Python, SQL, and AWS Athena across multi-terabyte datasets.</p>`,
      tags: ["AWS Athena", "Python", "Big Data"],
      back: {
        title: "Working Student @ Mercedes-Benz",
        body: `<ul>
          <li>Conducted large-scale data analysis across multi-terabyte datasets</li>
          <li>Used Python, SQL, and AWS Athena for efficient query execution</li>
          <li>Delivered insights to engineering and product teams via structured reports</li>
        </ul>`,
        tags: ["AWS Athena", "Python", "SQL", "Analytics"]
      }
    },
    {
      category: "Experience · 4 of 4",
      suit: "♥", suitRed: true,
      title: "ISW & SimTech",
      subtitle: "Student Research Assistant · Aug 2023 – Mar 2024",
      body: `<p>Developed Python tools supporting simulation and robotics research at two Stuttgart research institutes.</p>`,
      tags: ["Python", "Research", "Robotics"],
      back: {
        title: "Research @ ISW & SimTech",
        body: `<ul>
          <li>Developed Python-based tooling for simulation and robotics research workflows</li>
          <li>Collaborated with researchers at Institut für Steuerungstechnik (ISW) and SimTech cluster</li>
          <li>Automated data preprocessing and result visualisation pipelines</li>
        </ul>`,
        tags: ["Python", "Simulation", "Robotics", "Research"]
      }
    }
  ],

  projects: [
    {
      category: "Project · 2024",
      suit: "♠", suitRed: false,
      title: "ASL Detection",
      subtitle: "American Sign Language Recognition",
      body: `<p>Real-time gesture recognition using OpenCV and ML models. Detects and classifies hand signs from a live camera feed.</p>`,
      tags: ["OpenCV", "ML", "Computer Vision"],
      back: {
        title: "ASL Detection System",
        body: `<ul>
          <li>Built a real-time American Sign Language detection system using OpenCV and ML</li>
          <li>Implemented hand landmark detection and gesture classification pipeline</li>
          <li>Achieved robust recognition across varied lighting conditions</li>
        </ul>`,
        tags: ["Python", "OpenCV", "Machine Learning", "CV"]
      }
    },
    {
      category: "Project · 2022",
      suit: "♦", suitRed: true,
      title: "YOLO Traffic Light",
      subtitle: "Automatic Traffic Light Controller",
      body: `<p>Real-time traffic density estimation using YOLO object detection to dynamically adjust signal timing.</p>`,
      tags: ["YOLO", "Object Detection", "Real-time"],
      back: {
        title: "Traffic Light Controller",
        body: `<ul>
          <li>Used YOLOv5 to detect and count vehicles in real-time from camera feeds</li>
          <li>Dynamic signal timing algorithm based on lane occupancy density</li>
          <li>Simulated 30%+ reduction in average wait time vs fixed timers</li>
        </ul>`,
        tags: ["YOLO", "Python", "Computer Vision", "IoT"]
      }
    },
    {
      category: "Project · 2021",
      suit: "♣", suitRed: false,
      title: "Price Prediction",
      subtitle: "Real Estate Price Prediction Model",
      body: `<p>ML pipeline for predicting real estate prices with feature engineering, model selection, and a simple web interface.</p>`,
      tags: ["ML", "Regression", "Data Pipeline"],
      back: {
        title: "Real Estate Price Predictor",
        body: `<ul>
          <li>Built end-to-end ML pipeline: data cleaning → feature engineering → model training → serving</li>
          <li>Evaluated multiple regression models (RF, XGBoost, Linear) and tuned hyperparameters</li>
          <li>Deployed simple Flask web interface for price queries</li>
        </ul>`,
        tags: ["Python", "Scikit-learn", "XGBoost", "Flask"]
      }
    }
  ],

  skills: [
    {
      category: "Languages & Backend",
      suit: "♠", suitRed: false,
      title: "Core Stack",
      subtitle: "Languages & Frameworks",
      body: `<p>Primary languages: Python, JavaScript, C++, Java, SQL. Frameworks: Flask, REST APIs, ETL pipelines.</p>`,
      tags: ["Python", "JavaScript", "SQL", "Flask"],
      back: {
        title: "Languages & Backend",
        body: `<ul>
          <li>Python — primary language, data engineering &amp; backend</li>
          <li>SQL — complex queries, Athena, PostgreSQL</li>
          <li>JavaScript — frontend, Node, scripting</li>
          <li>C++ / Java — algorithms, systems programming</li>
          <li>Flask — REST API design &amp; deployment</li>
        </ul>`,
        tags: ["Python", "SQL", "JS", "C++", "Java", "Flask"]
      }
    },
    {
      category: "ML / AI",
      suit: "♦", suitRed: true,
      title: "ML & AI",
      subtitle: "Machine Learning · Deep Learning · CV",
      body: `<p>End-to-end ML: data preprocessing, model training, evaluation, and production deployment.</p>`,
      tags: ["ML", "DL", "Computer Vision", "Scikit-learn"],
      back: {
        title: "ML & AI Skills",
        body: `<ul>
          <li>Machine Learning — regression, classification, clustering</li>
          <li>Deep Learning — CNNs, transfer learning, fine-tuning</li>
          <li>Computer Vision — OpenCV, YOLO, landmark detection</li>
          <li>Tools: Scikit-learn, XGBoost, PyTorch basics</li>
        </ul>`,
        tags: ["ML", "DL", "CV", "OpenCV", "YOLO", "PyTorch"]
      }
    },
    {
      category: "Cloud & DevOps",
      suit: "♣", suitRed: false,
      title: "Cloud & DevOps",
      subtitle: "AWS · CI/CD · Linux",
      body: `<p>AWS ecosystem (ECS, ECR, ALB, Athena), Docker, Git, CI/CD pipelines, Linux server environments.</p>`,
      tags: ["AWS", "Docker", "Git", "CI/CD"],
      back: {
        title: "Cloud & Infrastructure",
        body: `<ul>
          <li>AWS — ECS, ECR, ALB, S3, Athena</li>
          <li>Docker — containerisation &amp; deployment</li>
          <li>Git — version control, branching strategies, PRs</li>
          <li>CI/CD — automated pipelines, integration testing</li>
          <li>Linux — bash scripting, server administration</li>
        </ul>`,
        tags: ["AWS", "Docker", "Git", "CI/CD", "Linux"]
      }
    }
  ],

  contact: [
    {
      category: "Reach out",
      suit: "♥", suitRed: true,
      title: "Let's connect",
      subtitle: "Open to opportunities from May 2026",
      body: `<p>I'm actively looking for full-time SWE and ML engineering roles. Let's talk!</p>`,
      tags: ["Open to work", "May 2026"],
      back: {
        title: "Contact Me",
        body: `<ul>
          <li>📧 <a href="mailto:rharish4444@gmail.com">rharish4444@gmail.com</a></li>
          <li>📞 <a href="tel:+4917647365954">+49 176 47365954</a></li>
          <li>📍 Stuttgart, Germany</li>
          <li>💼 <a href="https://www.linkedin.com/in/harish-renganathan-5879b6137/" target="_blank">LinkedIn</a></li>
          <li>🐙 <a href="https://github.com/harish4608443" target="_blank">GitHub</a></li>
        </ul>`,
        tags: ["SWE", "ML Engineer", "Backend", "May 2026"]
      }
    },
    {
      category: "Social",
      suit: "♠", suitRed: false,
      title: "GitHub",
      subtitle: "harish4608443",
      body: `<p>Check out my projects, contributions, and code on GitHub.</p>`,
      tags: ["Open Source", "Projects"],
      back: {
        title: "GitHub Profile",
        body: `<ul>
          <li>🐙 <a href="https://github.com/harish4608443" target="_blank">github.com/harish4608443</a></li>
          <li>Projects include: ASL detection, traffic controller, price prediction, this portfolio</li>
          <li>Always learning — check latest repos for current interests</li>
        </ul>`,
        tags: ["github.com/harish4608443"]
      }
    }
  ]
};

// ─── SUITS per deck ───────────────────────────────────────────────────────────
const DECK_SUITS = {
  about:      ['♠','♦','♥','♣','♠'],
  experience: ['♠','♦','♣','♥','♠'],
  projects:   ['♠','♦','♣','♥','♠'],
  skills:     ['♠','♦','♣','♥','♠'],
  contact:    ['♥','♠','♦','♣','♥'],
};
const RED_SUITS = new Set(['♥','♦']);

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
const ROLES = [
  'Software Engineer',
  'ML Enthusiast',
  'Backend Developer',
  'Data Engineer',
  'M.Sc. CS · Stuttgart',
];
let twIdx = 0, twPos = 0, twDir = 1;
const twEl = document.getElementById('tw-text');

function typewriter() {
  const word = ROLES[twIdx];
  if (twDir === 1) {
    twPos++;
    twEl.textContent = word.slice(0, twPos);
    if (twPos >= word.length) { twDir = -1; setTimeout(typewriter, 1800); return; }
  } else {
    twPos--;
    twEl.textContent = word.slice(0, twPos);
    if (twPos <= 0) {
      twDir = 1;
      twIdx = (twIdx + 1) % ROLES.length;
      setTimeout(typewriter, 300); return;
    }
  }
  setTimeout(typewriter, twDir === 1 ? 75 : 38);
}
typewriter();

// ─── BUILD DECKS ─────────────────────────────────────────────────────────────
function buildDecks() {
  document.querySelectorAll('.deck[data-deck]').forEach(deckEl => {
    const key = deckEl.dataset.deck;
    const cards = DATA[key] || [];
    const suits = DECK_SUITS[key] || ['♠','♦','♣','♥','♠'];
    const count = Math.min(cards.length, 5);
    for (let i = 0; i < count; i++) {
      const suit = suits[i] || '♠';
      const red  = RED_SUITS.has(suit);
      const sc = document.createElement('div');
      sc.className = 'stack-card';
      sc.innerHTML = `
        <div class="card-back-pattern"></div>
        <div class="card-suit" style="color:${red ? '#8b1a1a' : '#1a1510'}">${suit}</div>
      `;
      deckEl.appendChild(sc);
    }
    // Pad to 5 if fewer cards
    for (let i = count; i < 5; i++) {
      const sc = document.createElement('div');
      sc.className = 'stack-card';
      sc.innerHTML = `<div class="card-back-pattern"></div><div class="card-suit">♠</div>`;
      deckEl.appendChild(sc);
    }

    // Click → open viewer
    deckEl.addEventListener('click', () => openViewer(key));
  });
}

// ─── VIEWER ───────────────────────────────────────────────────────────────────
let viewerDeck = null;
let viewerIdx  = 0;
let viewerFlipped = false;

const viewer    = document.getElementById('viewer');
const vcFront   = document.getElementById('vc-front');
const vcBack    = document.getElementById('vc-back');
const vcCard    = document.getElementById('viewer-card');
const navPos    = document.getElementById('nav-pos');

function openViewer(deckKey) {
  viewerDeck = deckKey;
  viewerIdx  = 0;
  renderViewerCard();
  viewer.classList.remove('hidden');
  viewer.classList.remove('fade-out');
}

function closeViewer() {
  viewer.classList.add('fade-out');
  setTimeout(() => viewer.classList.add('hidden'), 300);
}

function renderViewerCard() {
  const cards = DATA[viewerDeck] || [];
  const card  = cards[viewerIdx];
  if (!card) return;

  viewerFlipped = false;
  vcCard.classList.remove('flipped');

  const red = RED_SUITS.has(card.suit);

  // Front
  vcFront.innerHTML = `
    <span class="vc-category">${card.category}</span>
    <span class="vc-suit-corner ${red ? 'red' : ''}">${card.suit}</span>
    <div class="vc-title">${card.title}</div>
    <div class="vc-subtitle">${card.subtitle}</div>
    <div class="vc-divider"></div>
    <div class="vc-body">${card.body}</div>
    ${card.tags ? `<div class="vc-tags">${card.tags.map(t=>`<span class="vc-tag">${t}</span>`).join('')}</div>` : ''}
    <div class="vc-flip-hint">Flip to read more</div>
  `;

  // Back
  const b = card.back;
  vcBack.innerHTML = `
    <div class="vc-back-category">${card.category}</div>
    <div class="vc-back-title">${b.title}</div>
    <div class="vc-back-body">${b.body}</div>
    ${b.tags ? `<div class="vc-back-tags">${b.tags.map(t=>`<span class="vc-back-tag">${t}</span>`).join('')}</div>` : ''}
    <div class="vc-back-ornament">◆ ◇ ◆</div>
  `;

  const total = cards.length;
  navPos.textContent = `${viewerIdx + 1} / ${total}`;
}

// Flip on card click
vcCard.addEventListener('click', () => {
  viewerFlipped = !viewerFlipped;
  vcCard.classList.toggle('flipped', viewerFlipped);
});

// Nav
document.getElementById('nav-prev').addEventListener('click', () => {
  const cards = DATA[viewerDeck] || [];
  viewerIdx = (viewerIdx - 1 + cards.length) % cards.length;
  renderViewerCard();
});
document.getElementById('nav-next').addEventListener('click', () => {
  const cards = DATA[viewerDeck] || [];
  viewerIdx = (viewerIdx + 1) % cards.length;
  renderViewerCard();
});
document.getElementById('viewer-close').addEventListener('click', closeViewer);

// Keyboard nav
document.addEventListener('keydown', e => {
  if (viewer.classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') document.getElementById('nav-next').click();
  if (e.key === 'ArrowLeft')  document.getElementById('nav-prev').click();
  if (e.key === 'Escape')     closeViewer();
  if (e.key === ' ' || e.key === 'f') vcCard.click();
});

// Click backdrop to close
viewer.addEventListener('click', e => {
  if (e.target === viewer) closeViewer();
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
buildDecks();
