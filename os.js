/* ══════════════════════════════════════════
   HarishOS — Core Logic
══════════════════════════════════════════ */

// ── State ────────────────────────────────
const state = {
  zBase: 100,
  windows: {},       // id → { el, minimized }
  taskItems: {},     // id → taskbar btn
  termHistory: [],
  termHistoryIdx: -1,
};

// ── Data ─────────────────────────────────
const DATA = {
  name: "Harish Renganathan",
  location: "Stuttgart, Germany",
  phone: "+49 17647365954",
  email: "rharish4444@gmail.com",
  linkedin: "https://www.linkedin.com/in/harish-renganathan-5879b6137/",
  github: "https://github.com/harish4608443",
  bio: `Master's student in Computer Science at Universität Stuttgart, graduating April 2026 and seeking full-time roles from May 2026. Passionate about fullstack development, AI/ML, and data-driven systems.`,
  education: [
    { school: "Universität Stuttgart", degree: "M.Sc. Computer Science", period: "Apr 2023 – Apr 2026" },
    { school: "B.S. Abdur Rahman Crescent University", degree: "B.Tech. Computer Science", period: "Jul 2018 – Jul 2022" },
  ],
  experience: [
    {
      role: "Working Student",
      company: "Mercedes-Benz AG",
      location: "Stuttgart",
      period: "May 2025 – Present",
      bullets: [
        "Developed data-driven backend systems for vehicle fleet applications using Python and SQL.",
        "Worked on machine learning models for route optimization and data analysis.",
        "Improved data processing workflows and system performance.",
      ],
    },
    {
      role: "Intern",
      company: "Mercedes-Benz AG",
      location: "Stuttgart",
      period: "Oct 2024 – Mar 2025",
      bullets: [
        "Developed a Flask-based web application integrated with AWS services (ECS, ECR, ALB).",
        "Built REST APIs and backend logic for data ingestion and processing.",
        "Worked on data transformation and validation pipelines for structured datasets.",
      ],
    },
    {
      role: "Working Student",
      company: "Mercedes-Benz AG",
      location: "Stuttgart",
      period: "Mar 2024 – Sep 2024",
      bullets: [
        "Developed Python and SQL workflows for large-scale data analysis using AWS Athena.",
        "Supported monitoring and debugging of cloud-based applications.",
      ],
    },
    {
      role: "Student Research Assistant",
      company: "ISW & SimTech",
      location: "Stuttgart",
      period: "Aug 2023 – Mar 2024",
      bullets: [
        "Developed Python-based tools and reusable components for research applications.",
        "Contributed to experimentation and prototyping in simulation and robotics systems.",
      ],
    },
  ],
  projects: [
    { name: "American Sign Language Detection", emoji: "🤟", year: "2024", desc: "Real-time computer vision application using OpenCV and ML for gesture recognition." },
    { name: "Automatic Traffic Light Controller", emoji: "🚦", year: "2022", desc: "Real-time object detection system (YOLO) and decision logic for traffic control." },
    { name: "Real Estate Price Prediction", emoji: "🏠", year: "2021", desc: "ML model and data pipeline for real estate trend analysis and price forecasting." },
  ],
  skills: {
    "Programming":       ["Python", "JavaScript", "C++", "Java", "SQL"],
    "Fullstack":         ["REST APIs", "Flask", "Backend Dev", "Frontend"],
    "AI / ML":           ["Machine Learning", "Deep Learning", "Computer Vision"],
    "Data Engineering":  ["ETL Pipelines", "Data Processing", "AWS Athena"],
    "Cloud":             ["AWS ECS", "AWS ECR", "ALB", "Cloud Apps"],
    "Tools":             ["Git", "CI/CD", "Linux", "Docker"],
  },
  languages: [
    { name: "Tamil",   level: "Native" },
    { name: "English", level: "C2" },
    { name: "Hindi",   level: "C1" },
    { name: "German",  level: "B1" },
  ],
};

// ─────────────────────────────────────────
// BOOT SEQUENCE
// ─────────────────────────────────────────
const bootMessages = [
  "[    0.001] HarishOS kernel loading...",
  "[    0.042] Initializing identity module...",
  "[    0.110] Loading experience database...          OK",
  "[    0.195] Mounting project filesystem...          OK",
  "[    0.280] Starting skill indexer...               OK",
  "[    0.391] Connecting to Stuttgart network...      OK",
  "[    0.520] Booting portfolio daemon...             OK",
  "[    0.640] All systems nominal. Welcome.",
];

async function runBoot() {
  const log = document.getElementById("boot-log");
  const bar = document.getElementById("boot-bar");

  for (let i = 0; i < bootMessages.length; i++) {
    await sleep(200 + Math.random() * 180);
    const line = document.createElement("div");
    line.textContent = bootMessages[i];
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
    bar.style.width = ((i + 1) / bootMessages.length * 100) + "%";
  }

  await sleep(500);
  const bs = document.getElementById("boot-screen");
  bs.classList.add("fade-out");
  await sleep(800);
  bs.style.display = "none";
  document.getElementById("desktop").classList.remove("hidden");

  // Start particle canvas
  initCanvas();
  startClock();

  // Auto-open terminal with welcome message after a short delay
  await sleep(300);
  openWindow("terminal");
  await sleep(200);
  printWelcome();

  // Toast hint
  setTimeout(() => toast("Double-click icons or use the ⊞ menu to explore!"), 1200);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─────────────────────────────────────────
// ANIMATED BACKGROUND CANVAS
// ─────────────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx    = canvas.getContext("2d");
  let W, H, particles, animFrame;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.15,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, mkParticle);
  }

  function drawConnections() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(91,141,238,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Background gradient
    const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W, H) * 0.7);
    grad.addColorStop(0,   "rgba(30,37,53,0.4)");
    grad.addColorStop(1,   "rgba(13,15,20,0.9)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawConnections();

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(91,141,238,${p.alpha})`;
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    animFrame = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => { resize(); });
  init();
  draw();
}

// ─────────────────────────────────────────
// CLOCK
// ─────────────────────────────────────────
function startClock() {
  const el = document.getElementById("clock");
  function tick() {
    const now = new Date();
    el.textContent = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  }
  tick();
  setInterval(tick, 10000);
}

// ─────────────────────────────────────────
// START MENU
// ─────────────────────────────────────────
function toggleStartMenu() {
  const sm = document.getElementById("start-menu");
  sm.classList.toggle("hidden");
}
document.addEventListener("click", e => {
  const sm = document.getElementById("start-menu");
  if (!sm.classList.contains("hidden") &&
      !e.target.closest("#start-menu") &&
      !e.target.closest("#start-btn")) {
    sm.classList.add("hidden");
  }
});

// ─────────────────────────────────────────
// WINDOW SYSTEM
// ─────────────────────────────────────────
const WIN_CONFIGS = {
  terminal:   { title: "Terminal — harish@harishos:~", w: 680, h: 460 },
  about:      { title: "About Me",                     w: 580, h: 480 },
  experience: { title: "Experience",                   w: 640, h: 520 },
  projects:   { title: "Projects",                     w: 580, h: 440 },
  skills:     { title: "Technical Skills",             w: 560, h: 400 },
  contact:    { title: "Contact",                      w: 480, h: 380 },
};

function openWindow(id) {
  document.getElementById("start-menu").classList.add("hidden");

  // If already open and not minimized, just focus it
  if (state.windows[id]) {
    const entry = state.windows[id];
    if (entry.minimized) {
      entry.el.classList.remove("minimized");
      entry.minimized = false;
      if (state.taskItems[id]) state.taskItems[id].classList.add("active");
    }
    focusWin(id);
    return;
  }

  const cfg  = WIN_CONFIGS[id] || { title: id, w: 520, h: 400 };
  const win  = document.createElement("div");
  win.classList.add("win");
  win.id = "win-" + id;

  // Position with slight cascade
  const offset = Object.keys(state.windows).length * 24;
  const maxL   = window.innerWidth  - cfg.w  - 40;
  const maxT   = window.innerHeight - cfg.h  - 80;
  win.style.left   = Math.min(100 + offset, maxL) + "px";
  win.style.top    = Math.min(60  + offset, maxT) + "px";
  win.style.width  = cfg.w + "px";
  win.style.height = cfg.h + "px";

  // Title bar
  win.innerHTML = `
    <div class="win-titlebar" data-id="${id}">
      <div class="win-controls">
        <button class="win-btn btn-close"  title="Close"    onclick="closeWin('${id}')"></button>
        <button class="win-btn btn-min"    title="Minimize" onclick="minimizeWin('${id}')"></button>
        <button class="win-btn btn-max"    title="Maximize" onclick="maximizeWin('${id}')"></button>
      </div>
      <div class="win-title">${cfg.title}</div>
    </div>
    <div class="win-content" id="wc-${id}"></div>
    <div class="win-resize" data-id="${id}"></div>
  `;

  document.getElementById("windows-container").appendChild(win);
  state.windows[id] = { el: win, minimized: false, maximized: false, savedRect: null };

  makeDraggable(win, win.querySelector(".win-titlebar"));
  makeResizable(win, win.querySelector(".win-resize"));

  focusWin(id);
  renderWinContent(id);
  addTaskbarItem(id, cfg.title);
}

function closeWin(id) {
  if (!state.windows[id]) return;
  state.windows[id].el.remove();
  delete state.windows[id];
  if (state.taskItems[id]) {
    state.taskItems[id].remove();
    delete state.taskItems[id];
  }
}

function minimizeWin(id) {
  if (!state.windows[id]) return;
  state.windows[id].el.classList.add("minimized");
  state.windows[id].minimized = true;
  if (state.taskItems[id]) state.taskItems[id].classList.remove("active");
}

function maximizeWin(id) {
  const entry = state.windows[id];
  if (!entry) return;
  const win = entry.el;
  if (!entry.maximized) {
    entry.savedRect = { left: win.style.left, top: win.style.top, width: win.style.width, height: win.style.height };
    win.style.left   = "0"; win.style.top = "0";
    win.style.width  = window.innerWidth  + "px";
    win.style.height = (window.innerHeight - 44) + "px";
    win.style.borderRadius = "0";
    entry.maximized = true;
  } else {
    Object.assign(win.style, entry.savedRect);
    win.style.borderRadius = "";
    entry.maximized = false;
  }
}

function focusWin(id) {
  // Remove focused class from all
  Object.keys(state.windows).forEach(k => {
    state.windows[k].el.classList.remove("focused");
    if (state.taskItems[k]) state.taskItems[k].classList.remove("active");
  });
  state.zBase++;
  state.windows[id].el.classList.add("focused");
  state.windows[id].el.style.zIndex = state.zBase;
  if (state.taskItems[id]) state.taskItems[id].classList.add("active");

  // Focus terminal input if terminal
  if (id === "terminal") {
    const inp = document.getElementById("term-input");
    if (inp) setTimeout(() => inp.focus(), 50);
  }
}

// Click anywhere on window → focus it
document.getElementById("windows-container")?.addEventListener("mousedown", e => {
  const win = e.target.closest(".win");
  if (win) {
    const id = win.id.replace("win-", "");
    if (state.windows[id]) focusWin(id);
  }
}, true);

// ─────────────────────────────────────────
// DRAG
// ─────────────────────────────────────────
function makeDraggable(win, handle) {
  let dx = 0, dy = 0, dragging = false;

  handle.addEventListener("mousedown", e => {
    if (e.target.classList.contains("win-btn")) return;
    dragging = true;
    dx = e.clientX - win.offsetLeft;
    dy = e.clientY - win.offsetTop;
    e.preventDefault();
  });
  document.addEventListener("mousemove", e => {
    if (!dragging) return;
    const maxX = window.innerWidth  - win.offsetWidth;
    const maxY = window.innerHeight - win.offsetHeight - 44;
    win.style.left = Math.max(0, Math.min(e.clientX - dx, maxX)) + "px";
    win.style.top  = Math.max(0, Math.min(e.clientY - dy, maxY)) + "px";
  });
  document.addEventListener("mouseup", () => { dragging = false; });
}

// ─────────────────────────────────────────
// RESIZE
// ─────────────────────────────────────────
function makeResizable(win, handle) {
  let resizing = false, startX, startY, startW, startH;
  handle.addEventListener("mousedown", e => {
    resizing = true;
    startX = e.clientX; startY = e.clientY;
    startW = win.offsetWidth; startH = win.offsetHeight;
    e.preventDefault(); e.stopPropagation();
  });
  document.addEventListener("mousemove", e => {
    if (!resizing) return;
    win.style.width  = Math.max(380, startW + e.clientX - startX) + "px";
    win.style.height = Math.max(260, startH + e.clientY - startY) + "px";
  });
  document.addEventListener("mouseup", () => { resizing = false; });
}

// ─────────────────────────────────────────
// TASKBAR ITEMS
// ─────────────────────────────────────────
function addTaskbarItem(id, title) {
  const btn = document.createElement("button");
  btn.classList.add("tb-task", "active");
  btn.textContent = title.split("—")[0].trim().substring(0, 18);
  btn.onclick = () => {
    if (state.windows[id]?.minimized) {
      openWindow(id);
    } else {
      minimizeWin(id);
    }
  };
  document.getElementById("taskbar-center").appendChild(btn);
  state.taskItems[id] = btn;
}

// ─────────────────────────────────────────
// CONTENT RENDERERS
// ─────────────────────────────────────────
function renderWinContent(id) {
  const cont = document.getElementById("wc-" + id);
  if (!cont) return;

  const renderers = { terminal, about, experience, projects, skills, contact };
  if (renderers[id]) renderers[id](cont);
}

// ── TERMINAL ─────────────────────────────
function terminal(cont) {
  cont.style.padding = "0";
  cont.innerHTML = `<div class="terminal-body" id="term-body"></div>`;
  cont.querySelector(".terminal-body").innerHTML = `
    <div id="term-output"></div>
    <div class="term-prompt">
      <span class="term-prompt-text">harish@harishos:~$</span>
      <input id="term-input" class="term-input" autocomplete="off" spellcheck="false" placeholder="type 'help'..." />
    </div>
  `;

  const input = document.getElementById("term-input");
  input.addEventListener("keydown", handleTermKey);
  setTimeout(() => input.focus(), 60);
}

function printWelcome() {
  const lines = [
    { cls: "info", text: "╔══════════════════════════════════════════════╗" },
    { cls: "info", text: "║      Welcome to HarishOS  v1.0.0             ║" },
    { cls: "info", text: "║      Harish Renganathan — Portfolio OS        ║" },
    { cls: "info", text: "╚══════════════════════════════════════════════╝" },
    { cls: "muted", text: "" },
    { cls: "out",  text: "Type 'help' to see available commands." },
    { cls: "muted", text: "" },
  ];
  lines.forEach(l => appendTermLine(l.cls, l.text));
}

function handleTermKey(e) {
  const input = e.target;
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    input.value = "";
    if (cmd) {
      state.termHistory.unshift(cmd);
      state.termHistoryIdx = -1;
      appendTermLine("cmd", `harish@harishos:~$ ${cmd}`);
      runCommand(cmd.toLowerCase());
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (state.termHistoryIdx < state.termHistory.length - 1) {
      state.termHistoryIdx++;
      input.value = state.termHistory[state.termHistoryIdx];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (state.termHistoryIdx > 0) {
      state.termHistoryIdx--;
      input.value = state.termHistory[state.termHistoryIdx];
    } else {
      state.termHistoryIdx = -1;
      input.value = "";
    }
  }
}

function appendTermLine(cls, text) {
  const out = document.getElementById("term-output");
  if (!out) return;
  const div = document.createElement("div");
  div.classList.add("term-line", cls);
  div.textContent = text;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

const CMDS = {
  help: () => {
    const cmds = [
      ["whoami",     "Display identity card"],
      ["about",      "Open About Me window"],
      ["experience", "Open Experience timeline"],
      ["projects",   "Open Projects grid"],
      ["skills",     "Open Skills window"],
      ["contact",    "Open Contact info"],
      ["education",  "Print education history"],
      ["languages",  "List spoken languages"],
      ["ls",         "List all windows"],
      ["clear",      "Clear terminal output"],
      ["github",     "Open GitHub profile"],
      ["linkedin",   "Open LinkedIn profile"],
      ["exit",       "Close terminal"],
    ];
    appendTermLine("info", "Available commands:");
    appendTermLine("muted", "──────────────────────────────");
    cmds.forEach(([c, d]) =>
      appendTermLine("out", `  ${c.padEnd(14)} ${d}`)
    );
    appendTermLine("muted", "──────────────────────────────");
  },

  whoami: () => {
    appendTermLine("info", "");
    appendTermLine("out",  `  Name      : ${DATA.name}`);
    appendTermLine("out",  `  Role      : M.Sc. Computer Science Student`);
    appendTermLine("out",  `  Location  : ${DATA.location}`);
    appendTermLine("out",  `  Email     : ${DATA.email}`);
    appendTermLine("out",  `  Phone     : ${DATA.phone}`);
    appendTermLine("out",  `  GitHub    : ${DATA.github}`);
    appendTermLine("out",  `  Status    : Seeking full-time roles from May 2026`);
    appendTermLine("info", "");
  },

  about:      () => openWindow("about"),
  experience: () => openWindow("experience"),
  projects:   () => openWindow("projects"),
  skills:     () => openWindow("skills"),
  contact:    () => openWindow("contact"),

  education: () => {
    appendTermLine("info", "Education:");
    DATA.education.forEach(e => {
      appendTermLine("out",  `  ${e.school}`);
      appendTermLine("muted",`  ${e.degree}  ·  ${e.period}`);
      appendTermLine("out",  "");
    });
  },

  languages: () => {
    appendTermLine("info", "Spoken Languages:");
    DATA.languages.forEach(l =>
      appendTermLine("out", `  ${l.name.padEnd(12)} ${l.level}`)
    );
  },

  ls: () => {
    const open = Object.keys(state.windows).filter(k => !state.windows[k].minimized);
    if (open.length === 0) appendTermLine("muted", "No windows open.");
    else {
      appendTermLine("out", "Open windows:");
      open.forEach(k => appendTermLine("muted", `  └─ ${k}`));
    }
  },

  clear: () => {
    const out = document.getElementById("term-output");
    if (out) out.innerHTML = "";
  },

  github:   () => { window.open(DATA.github, "_blank");   appendTermLine("muted", "Opening GitHub..."); },
  linkedin: () => { window.open(DATA.linkedin, "_blank"); appendTermLine("muted", "Opening LinkedIn..."); },

  exit: () => closeWin("terminal"),
};

function runCommand(raw) {
  const [cmd, ...args] = raw.split(" ");
  if (CMDS[cmd]) {
    CMDS[cmd](args);
  } else {
    appendTermLine("err", `  bash: ${cmd}: command not found. Type 'help' for commands.`);
  }
}

// ── ABOUT ────────────────────────────────
function about(cont) {
  cont.innerHTML = `
    <div class="win-pad">
      <div class="about-hero">
        <div class="about-avatar">HR</div>
        <div>
          <div class="about-name">${DATA.name}</div>
          <div class="about-title">Software Engineer · AI/ML · Backend Development</div>
          <div class="about-meta">
            📍 ${DATA.location} &nbsp;·&nbsp;
            📧 <a href="mailto:${DATA.email}">${DATA.email}</a> &nbsp;·&nbsp;
            📞 ${DATA.phone}
          </div>
        </div>
      </div>

      <p class="about-bio">${DATA.bio}</p>

      <div class="tag-row">
        <span class="tag">Python</span>
        <span class="tag">Flask</span>
        <span class="tag">SQL</span>
        <span class="tag purple">Machine Learning</span>
        <span class="tag purple">Computer Vision</span>
        <span class="tag green">AWS</span>
        <span class="tag green">CI/CD</span>
        <span class="tag">JavaScript</span>
        <span class="tag">C++</span>
      </div>

      <div style="margin-top: 28px;">
        <div class="section-h">Education</div>
        ${DATA.education.map(e => `
          <div style="margin-bottom:14px;">
            <div style="font-weight:600;font-size:0.88rem;">${e.school}</div>
            <div style="font-size:0.8rem;color:var(--accent);">${e.degree}</div>
            <div style="font-size:0.75rem;color:var(--muted);">${e.period}</div>
          </div>
        `).join("")}
      </div>

      <div style="margin-top: 8px;">
        <div class="section-h">Languages</div>
        <div class="lang-grid">
          ${DATA.languages.map(l => `
            <div class="lang-item">
              <div class="lang-name">${l.name}</div>
              <div class="lang-level">${l.level}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

// ── EXPERIENCE ───────────────────────────
function experience(cont) {
  cont.innerHTML = `
    <div class="win-pad">
      <div class="section-h">Work Experience</div>
      <div class="timeline">
        ${DATA.experience.map(e => `
          <div class="tl-item">
            <div class="tl-line">
              <div class="tl-dot"></div>
              <div class="tl-connector"></div>
            </div>
            <div class="tl-body">
              <div class="tl-company">${e.company} · ${e.location}</div>
              <div class="tl-role">${e.role}</div>
              <div class="tl-date">${e.period}</div>
              <ul class="tl-bullets">
                ${e.bullets.map(b => `<li>${b}</li>`).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// ── PROJECTS ─────────────────────────────
function projects(cont) {
  cont.innerHTML = `
    <div class="win-pad">
      <div class="section-h">Featured Projects</div>
      <div class="proj-grid">
        ${DATA.projects.map(p => `
          <div class="proj-card">
            <div class="proj-emoji">${p.emoji}</div>
            <div class="proj-name">${p.name}</div>
            <div class="proj-desc">${p.desc}</div>
            <div class="proj-year">${p.year}</div>
          </div>
        `).join("")}
        <div class="proj-card" style="cursor:default;opacity:0.5;">
          <div class="proj-emoji">🔒</div>
          <div class="proj-name">More Projects</div>
          <div class="proj-desc">Industry projects at Mercedes-Benz (confidential).</div>
          <div class="proj-year">2024–2025</div>
        </div>
      </div>
    </div>
  `;
}

// ── SKILLS ───────────────────────────────
function skills(cont) {
  cont.innerHTML = `
    <div class="win-pad">
      <div class="section-h">Technical Skills</div>
      <div class="skills-grid">
        ${Object.entries(DATA.skills).map(([cat, items]) => `
          <div>
            <div class="skill-cat-title">${cat}</div>
            <div class="skill-list">
              ${items.map(s => `<span class="skill-pill">${s}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// ── CONTACT ──────────────────────────────
function contact(cont) {
  cont.innerHTML = `
    <div class="win-pad">
      <div class="section-h">Get In Touch</div>
      <div class="contact-links">
        <a class="contact-link" href="mailto:${DATA.email}">
          <span class="contact-icon">📧</span>
          <div>
            <div class="contact-text">${DATA.email}</div>
            <div class="contact-sub">Email — fastest way to reach me</div>
          </div>
        </a>
        <a class="contact-link" href="${DATA.linkedin}" target="_blank" rel="noopener">
          <span class="contact-icon">🔗</span>
          <div>
            <div class="contact-text">LinkedIn</div>
            <div class="contact-sub">harish-renganathan-5879b6137</div>
          </div>
        </a>
        <a class="contact-link" href="${DATA.github}" target="_blank" rel="noopener">
          <span class="contact-icon">🐙</span>
          <div>
            <div class="contact-text">GitHub</div>
            <div class="contact-sub">harish4608443</div>
          </div>
        </a>
        <a class="contact-link" href="tel:${DATA.phone}">
          <span class="contact-icon">📞</span>
          <div>
            <div class="contact-text">${DATA.phone}</div>
            <div class="contact-sub">Stuttgart, Germany</div>
          </div>
        </a>
      </div>
      <div style="margin-top:20px; font-size:0.78rem; color:var(--muted); line-height:1.7;">
        🎓 Graduating April 2026 · Available full-time from May 2026<br/>
        🌍 Open to roles in Germany and internationally
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────
function toast(msg, duration = 4000) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const el = document.createElement("div");
  el.classList.add("toast");
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add("out");
    setTimeout(() => el.remove(), 500);
  }, duration);
}

// ─────────────────────────────────────────
// KEYBOARD SHORTCUT — Ctrl+` opens terminal
// ─────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "`") {
    openWindow("terminal");
    e.preventDefault();
  }
});

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
window.addEventListener("DOMContentLoaded", runBoot);
