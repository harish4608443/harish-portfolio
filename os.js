/* ══════════════════════════════════════
   HARISH — Solar System Portfolio
   os.js — all logic
   ══════════════════════════════════════ */

// ─── DATA ────────────────────────────────────────────────────────────────────
const PLANETS = [
  /* ── About ──────────────────────────── */
  {
    id: 'about',
    label: 'About',
    icon: '🌍',
    orbit: 160,
    size: 58,
    speed: 0.00018,
    phase: 0,
    color: ['#3a7bd5', '#1a4aaa'],
    glow:  'rgba(80,140,255,0.65)',
    glow2: 'rgba(40,80,200,0.30)',
    category: 'Who I Am',
    title: 'Harish Renganathan',
    body: `
      <p>Software Engineer &amp; ML enthusiast based in Stuttgart, Germany. I build data-driven backend systems, machine learning solutions, and love turning complex problems into clean, deployable code.</p>
      <h3>Background</h3>
      <ul>
        <li>Originally from Tamil Nadu, India — living in Stuttgart since 2023</li>
        <li>M.Sc. Computer Science, Universität Stuttgart (Apr 2023 – Apr 2026)</li>
        <li>B.Tech Computer Science, B.S. Abdur Rahman Crescent University (2018–2022)</li>
        <li>Languages: Tamil (native) · English (C2) · Hindi (C1) · German (B1)</li>
        <li>Seeking full-time SWE / ML roles from May 2026</li>
      </ul>`,
    tags: ['M.Sc. CS', 'Stuttgart', 'Open to Work', 'May 2026']
  },

  /* ── Experience 1 ───────────────────── */
  {
    id: 'exp1',
    label: 'Mercedes',
    icon: '⭐',
    orbit: 260,
    size: 52,
    speed: 0.00013,
    phase: 0.4,
    color: ['#c0392b', '#7d1818'],
    glow:  'rgba(220,80,60,0.65)',
    glow2: 'rgba(150,40,30,0.30)',
    category: 'Experience · Present',
    title: 'Working Student',
    body: `
      <p><strong>Mercedes-Benz AG</strong> · May 2025 – Present</p>
      <ul>
        <li>Developing data-driven backend systems for fleet management applications</li>
        <li>Writing efficient Python &amp; SQL pipelines for large-scale operational data</li>
        <li>Building ML models for route optimisation and predictive analytics</li>
      </ul>`,
    tags: ['Python', 'SQL', 'ML', 'Fleet Systems']
  },

  /* ── Experience 2 ───────────────────── */
  {
    id: 'exp2',
    label: 'Intern',
    icon: '🪐',
    orbit: 260,
    size: 44,
    speed: 0.00013,
    phase: 1.5,
    color: ['#e67e22', '#a04000'],
    glow:  'rgba(230,130,50,0.65)',
    glow2: 'rgba(160,80,10,0.30)',
    category: 'Experience · 2024–2025',
    title: 'Intern — Mercedes-Benz AG',
    body: `
      <p><strong>Mercedes-Benz AG</strong> · Oct 2024 – Mar 2025</p>
      <ul>
        <li>Built and deployed a Flask web application using AWS ECS, ECR, and ALB</li>
        <li>Designed RESTful APIs consumed by internal teams</li>
        <li>Created data ingestion &amp; processing pipelines for structured and semi-structured data</li>
      </ul>`,
    tags: ['Flask', 'AWS ECS/ECR/ALB', 'REST APIs', 'Data Pipelines']
  },

  /* ── Experience 3 ───────────────────── */
  {
    id: 'exp3',
    label: 'Data Eng',
    icon: '💫',
    orbit: 260,
    size: 40,
    speed: 0.00013,
    phase: 2.8,
    color: ['#d35400', '#7a2800'],
    glow:  'rgba(200,100,30,0.6)',
    glow2: 'rgba(120,50,0,0.25)',
    category: 'Experience · 2024',
    title: 'Working Student — Data',
    body: `
      <p><strong>Mercedes-Benz AG</strong> · Mar 2024 – Sep 2024</p>
      <ul>
        <li>Large-scale data analysis across multi-terabyte datasets</li>
        <li>Python, SQL, and AWS Athena for efficient query execution</li>
        <li>Delivered structured insights to engineering and product teams</li>
      </ul>`,
    tags: ['AWS Athena', 'Python', 'SQL', 'Analytics']
  },

  /* ── Research ───────────────────────── */
  {
    id: 'research',
    label: 'Research',
    icon: '🔭',
    orbit: 260,
    size: 38,
    speed: 0.00013,
    phase: 4.5,
    color: ['#8e44ad', '#4a1460'],
    glow:  'rgba(160,80,220,0.6)',
    glow2: 'rgba(80,20,140,0.25)',
    category: 'Experience · 2023–2024',
    title: 'Research Assistant',
    body: `
      <p><strong>ISW &amp; SimTech, Universität Stuttgart</strong> · Aug 2023 – Mar 2024</p>
      <ul>
        <li>Developed Python tools supporting simulation and robotics research workflows</li>
        <li>Collaborated across Institut für Steuerungstechnik (ISW) and SimTech cluster</li>
        <li>Automated data preprocessing and result visualisation pipelines</li>
      </ul>`,
    tags: ['Python', 'Simulation', 'Robotics', 'Research']
  },

  /* ── Projects ──────────────────────── */
  {
    id: 'asl',
    label: 'ASL',
    icon: '👁',
    orbit: 370,
    size: 50,
    speed: 0.00009,
    phase: 0,
    color: ['#27ae60', '#145a32'],
    glow:  'rgba(60,200,100,0.6)',
    glow2: 'rgba(20,120,50,0.25)',
    category: 'Project · 2024',
    title: 'ASL Detection System',
    body: `
      <ul>
        <li>Real-time American Sign Language recognition using OpenCV and ML</li>
        <li>Hand landmark detection and gesture classification pipeline</li>
        <li>Robust recognition across varied lighting conditions</li>
      </ul>`,
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision']
  },

  {
    id: 'yolo',
    label: 'Traffic',
    icon: '🚦',
    orbit: 370,
    size: 46,
    speed: 0.00009,
    phase: 2.1,
    color: ['#16a085', '#0a4d3f'],
    glow:  'rgba(30,180,150,0.6)',
    glow2: 'rgba(10,100,80,0.25)',
    category: 'Project · 2022',
    title: 'YOLO Traffic Controller',
    body: `
      <ul>
        <li>Real-time vehicle detection and counting using YOLOv5</li>
        <li>Dynamic signal timing based on lane occupancy density</li>
        <li>Simulated 30%+ reduction in average wait time vs fixed timers</li>
      </ul>`,
    tags: ['YOLO', 'Python', 'Computer Vision', 'IoT']
  },

  {
    id: 'realestate',
    label: 'ML Model',
    icon: '🏠',
    orbit: 370,
    size: 44,
    speed: 0.00009,
    phase: 4.2,
    color: ['#1abc9c', '#0e6655'],
    glow:  'rgba(30,200,170,0.6)',
    glow2: 'rgba(10,120,100,0.25)',
    category: 'Project · 2021',
    title: 'Real Estate Price Predictor',
    body: `
      <ul>
        <li>End-to-end ML pipeline: data cleaning → feature engineering → model training → serving</li>
        <li>Evaluated RF, XGBoost, and Linear regression models with hyperparameter tuning</li>
        <li>Deployed Flask web interface for price queries</li>
      </ul>`,
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Flask']
  },

  /* ── Skills ────────────────────────── */
  {
    id: 'skills-lang',
    label: 'Code',
    icon: '💻',
    orbit: 480,
    size: 48,
    speed: 0.00006,
    phase: 0.6,
    color: ['#2980b9', '#154360'],
    glow:  'rgba(60,150,230,0.6)',
    glow2: 'rgba(20,80,160,0.25)',
    category: 'Skills · Languages',
    title: 'Programming Languages',
    body: `
      <ul>
        <li>Python — primary language, data engineering &amp; backend</li>
        <li>SQL — complex queries, PostgreSQL, AWS Athena</li>
        <li>JavaScript — frontend, scripting, Node</li>
        <li>C++ / Java — algorithms, systems programming</li>
      </ul>`,
    tags: ['Python', 'SQL', 'JavaScript', 'C++', 'Java']
  },

  {
    id: 'skills-ml',
    label: 'ML / AI',
    icon: '🧠',
    orbit: 480,
    size: 50,
    speed: 0.00006,
    phase: 1.9,
    color: ['#8e44ad', '#4a235a'],
    glow:  'rgba(170,90,240,0.6)',
    glow2: 'rgba(100,30,170,0.25)',
    category: 'Skills · ML & AI',
    title: 'Machine Learning & AI',
    body: `
      <ul>
        <li>Machine Learning — regression, classification, clustering</li>
        <li>Deep Learning — CNNs, transfer learning, fine-tuning</li>
        <li>Computer Vision — OpenCV, YOLO, landmark detection</li>
        <li>Tools: Scikit-learn, XGBoost, PyTorch basics</li>
      </ul>`,
    tags: ['ML', 'DL', 'CV', 'OpenCV', 'YOLO', 'PyTorch']
  },

  {
    id: 'skills-cloud',
    label: 'Cloud',
    icon: '☁️',
    orbit: 480,
    size: 46,
    speed: 0.00006,
    phase: 3.5,
    color: ['#2c3e50', '#1a252f'],
    glow:  'rgba(80,120,180,0.6)',
    glow2: 'rgba(40,60,120,0.25)',
    category: 'Skills · Cloud & DevOps',
    title: 'Cloud & Infrastructure',
    body: `
      <ul>
        <li>AWS — ECS, ECR, ALB, S3, Athena</li>
        <li>Docker — containerisation &amp; deployment</li>
        <li>Git — version control, branching, PRs</li>
        <li>CI/CD — automated pipelines, integration testing</li>
        <li>Linux — bash scripting, server administration</li>
      </ul>`,
    tags: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux']
  },

  {
    id: 'skills-backend',
    label: 'Backend',
    icon: '⚙️',
    orbit: 480,
    size: 44,
    speed: 0.00006,
    phase: 5.1,
    color: ['#7f8c8d', '#2c3e50'],
    glow:  'rgba(140,160,180,0.55)',
    glow2: 'rgba(60,80,110,0.25)',
    category: 'Skills · Backend',
    title: 'Backend & APIs',
    body: `
      <ul>
        <li>Flask — REST API design and deployment</li>
        <li>ETL pipelines — data ingestion, transformation, loading</li>
        <li>REST API design principles, versioning, auth</li>
        <li>Data modelling and database design</li>
      </ul>`,
    tags: ['Flask', 'REST APIs', 'ETL', 'Data Pipelines']
  },

  /* ── Contact ────────────────────────── */
  {
    id: 'contact',
    label: 'Contact',
    icon: '✉️',
    orbit: 590,
    size: 54,
    speed: 0.000044,
    phase: 1.0,
    color: ['#f39c12', '#7d5a00'],
    glow:  'rgba(240,170,30,0.65)',
    glow2: 'rgba(160,100,0,0.30)',
    category: 'Get in Touch',
    title: "Let's Connect",
    body: `
      <p>I'm actively seeking full-time Software Engineering and ML Engineering roles starting May 2026.</p>
      <ul>
        <li>📧 <a href="mailto:rharish4444@gmail.com">rharish4444@gmail.com</a></li>
        <li>📞 <a href="tel:+4917647365954">+49 176 47365954</a></li>
        <li>📍 Stuttgart, Germany</li>
        <li>💼 <a href="https://www.linkedin.com/in/harish-renganathan-5879b6137/" target="_blank">LinkedIn</a></li>
        <li>🐙 <a href="https://github.com/harish4608443" target="_blank">GitHub — harish4608443</a></li>
      </ul>`,
    tags: ['Open to Work', 'SWE', 'ML Engineer', 'May 2026']
  }
];

// ─── STARFIELD ────────────────────────────────────────────────────────────────
(function initStars() {
  const canvas = document.getElementById('stars');
  const ctx    = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); makeStars(); });

  function makeStars() {
    stars = [];
    const count = Math.floor((W * H) / 3500);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.005,
        twinkleSpeed: 0.003 + Math.random() * 0.006
      });
    }
  }
  makeStars();

  // A few brighter nebula blobs
  function drawNebula() {
    const blobs = [
      { x: W*0.15, y: H*0.2,  r: 200, c: 'rgba(60,20,120,0.15)' },
      { x: W*0.8,  y: H*0.7,  r: 240, c: 'rgba(10,60,130,0.12)' },
      { x: W*0.55, y: H*0.15, r: 160, c: 'rgba(80,10,80,0.10)'  },
    ];
    blobs.forEach(b => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, b.c);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function tick(ts) {
    ctx.clearRect(0, 0, W, H);
    drawNebula();
    stars.forEach(s => {
      s.a += s.da;
      if (s.a < 0.1 || s.a > 1) s.da *= -1;
      ctx.globalAlpha = s.a * 0.8;
      ctx.fillStyle = '#e8e0ff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
const ROLES = [
  'Software Engineer',
  'ML Enthusiast',
  'Backend Developer',
  'Data Engineer',
];
let twIdx = 0, twPos = 0, twDir = 1;
const twEl = document.getElementById('tw-text');

function typewriter() {
  const word = ROLES[twIdx];
  twEl.textContent = word.slice(0, twPos);
  if (twDir === 1) {
    twPos++;
    if (twPos > word.length) { twDir = -1; setTimeout(typewriter, 1600); return; }
  } else {
    twPos--;
    if (twPos < 0) {
      twDir = 1; twPos = 0;
      twIdx = (twIdx + 1) % ROLES.length;
      setTimeout(typewriter, 300); return;
    }
  }
  setTimeout(typewriter, twDir === 1 ? 72 : 36);
}
typewriter();

// ─── BUILD ORBITS & PLANETS ───────────────────────────────────────────────────
const orbitsEl = document.getElementById('orbits');
const cx = () => window.innerWidth  / 2;
const cy = () => window.innerHeight / 2;

// Track angle per planet
const angles = {};

// Group planets by orbit radius → draw one ring per unique orbit
const orbitRadii = [...new Set(PLANETS.map(p => p.orbit))];

orbitRadii.forEach(r => {
  const ring = document.createElement('div');
  ring.className = 'orbit-ring';
  ring.style.cssText = `width:${r*2}px; height:${r*2}px; margin-left:-${r}px; margin-top:-${r}px;`;
  ring.dataset.orbit = r;
  orbitsEl.appendChild(ring);
});

// Create planet elements
const planetEls = {};
PLANETS.forEach(p => {
  angles[p.id] = p.phase;

  const wrap = document.createElement('div');
  wrap.className = 'planet-wrap';
  wrap.id = `pw-${p.id}`;

  const planet = document.createElement('div');
  planet.className = 'planet';
  planet.id = `planet-${p.id}`;
  planet.style.cssText = `
    --size: ${p.size}px;
    --glow:  ${p.glow};
    --glow2: ${p.glow2};
    width: ${p.size}px; height: ${p.size}px;
    background: radial-gradient(circle at 35% 30%, ${p.color[0]}, ${p.color[1]});
    box-shadow: 0 0 20px ${p.glow}, 0 0 40px ${p.glow2};
  `;

  planet.innerHTML = `
    <span class="planet-icon">${p.icon}</span>
    <span class="planet-label">${p.label}</span>
    <div class="planet-tooltip">
      <div class="planet-tooltip-title">${p.title}</div>
      <div class="planet-tooltip-sub">${p.category}</div>
    </div>
  `;

  planet.addEventListener('click', (e) => {
    e.stopPropagation();
    openPanel(p);
    // Highlight orbit ring
    document.querySelectorAll('.orbit-ring').forEach(r => r.classList.remove('active'));
    const ring = document.querySelector(`.orbit-ring[data-orbit="${p.orbit}"]`);
    if (ring) ring.classList.add('active');
  });

  wrap.appendChild(planet);
  orbitsEl.appendChild(wrap);
  planetEls[p.id] = { wrap, planet };
});

// ─── ANIMATION LOOP ───────────────────────────────────────────────────────────
let lastTs = 0;

function animate(ts) {
  const dt = ts - lastTs;
  lastTs = ts;

  const ox = cx();
  const oy = cy();

  PLANETS.forEach(p => {
    angles[p.id] += p.speed * dt;
    const a  = angles[p.id];
    // Slight ellipse: x wider than y
    const px = ox + Math.cos(a) * p.orbit * 1.55;
    const py = oy + Math.sin(a) * p.orbit * 0.62;

    const { wrap } = planetEls[p.id];
    wrap.style.transform = `translate(${px - ox}px, ${py - oy}px)`;
  });

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// ─── PANEL ────────────────────────────────────────────────────────────────────
const panel = document.getElementById('panel');

function openPanel(p) {
  document.getElementById('panel-icon').style.cssText =
    `background: radial-gradient(circle at 35% 30%, ${p.color[0]}, ${p.color[1]});
     box-shadow: 0 0 20px ${p.glow};`;
  document.getElementById('panel-icon').textContent = p.icon;
  document.getElementById('panel-category').textContent = p.category;
  document.getElementById('panel-title').textContent   = p.title;
  document.getElementById('panel-body').innerHTML       = p.body;

  const tagsEl = document.getElementById('panel-tags');
  tagsEl.innerHTML = (p.tags || []).map(t => `<span>${t}</span>`).join('');

  panel.classList.remove('hidden');
}

document.getElementById('panel-close').addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });
document.getElementById('solar').addEventListener('click', e => {
  if (e.target === document.getElementById('solar') || e.target === orbitsEl) closePanel();
});

function closePanel() {
  panel.classList.add('hidden');
  document.querySelectorAll('.orbit-ring').forEach(r => r.classList.remove('active'));
}
