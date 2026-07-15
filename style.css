/* ==========================================================================
   Ember Roasting Co. — stylesheet
   Design tokens
   ========================================================================== */
:root {
  /* Color */
  --espresso: #2b1d14;      /* primary dark bg */
  --espresso-2: #3a2a1d;    /* dark bg, raised surfaces */
  --parchment: #f1e7d6;     /* primary light bg */
  --parchment-2: #e7d9c2;   /* light bg, raised surfaces */
  --ink: #241a12;           /* body text on light */
  --cream: #f7f1e6;         /* text on dark */
  --amber: #c98a3b;         /* roast amber — primary accent */
  --amber-dim: #a5702c;
  --olive: #4f5d3a;         /* origin green — secondary accent */
  --crack: #8b3a2b;         /* first-crack red — used sparingly */
  --line: rgba(36, 26, 18, 0.14);
  --line-dark: rgba(247, 241, 230, 0.16);

  /* Type */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", -apple-system, Segoe UI, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;

  /* Layout */
  --max-w: 1120px;
  --gutter: clamp(1.25rem, 4vw, 3rem);
  --radius: 3px;
}

@font-face {
  font-family: "Fraunces";
  src: local("Georgia");
  font-display: swap;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--parchment);
  color: var(--ink);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }

a { color: inherit; }

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.12;
  margin: 0 0 0.5em;
  letter-spacing: -0.01em;
}

h1 { font-size: clamp(2.4rem, 5vw, 4rem); }
h2 { font-size: clamp(1.7rem, 3vw, 2.4rem); }
h3 { font-size: 1.2rem; }

p { margin: 0 0 1em; max-width: 62ch; }

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber-dim);
  display: inline-block;
  margin-bottom: 0.9em;
}

.wrap {
  max-width: var(--max-w);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  padding: 0.85em 1.5em;
  border-radius: var(--radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}
.btn-primary {
  background: var(--amber);
  color: var(--espresso);
  font-weight: 600;
}
.btn-primary:hover { background: #dda058; transform: translateY(-1px); }

.btn-ghost {
  background: transparent;
  border-color: var(--line-dark);
  color: var(--cream);
}
.btn-ghost:hover { border-color: var(--amber); color: var(--amber); }

.btn-ghost-dark {
  background: transparent;
  border-color: var(--line);
  color: var(--ink);
}
.btn-ghost-dark:hover { border-color: var(--amber-dim); color: var(--amber-dim); }

/* ---------- Header / Nav ---------- */
.site-header {
  background: var(--espresso);
  color: var(--cream);
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--line-dark);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.1rem;
}
.brand {
  font-family: var(--font-display);
  font-size: 1.3rem;
  text-decoration: none;
  color: var(--cream);
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}
.brand .mark { color: var(--amber); }

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.nav-links a {
  text-decoration: none;
  color: var(--cream);
  opacity: 0.75;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: opacity 0.15s ease, border-color 0.15s ease;
}
.nav-links a:hover,
.nav-links a[aria-current="page"] {
  opacity: 1;
  border-color: var(--amber);
}

.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--line-dark);
  border-radius: var(--radius);
  padding: 0.5em 0.7em;
  color: var(--cream);
  cursor: pointer;
}
.nav-toggle .bar {
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  margin: 4px 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.nav-toggle[aria-expanded="true"] .bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* ---------- Hero ---------- */
.hero {
  background: var(--espresso);
  color: var(--cream);
  padding-block: clamp(3rem, 8vw, 6rem) clamp(2.5rem, 6vw, 4rem);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
.hero p.lede {
  font-size: 1.1rem;
  color: rgba(247, 241, 230, 0.82);
}
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.8rem;
  flex-wrap: wrap;
}

/* Signature element: the roast curve */
.roast-curve-card {
  background: var(--espresso-2);
  border: 1px solid var(--line-dark);
  border-radius: 6px;
  padding: 1.5rem 1.5rem 1rem;
}
.roast-curve-card .curve-label {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: rgba(247, 241, 230, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}
.roast-curve-card svg { width: 100%; height: auto; overflow: visible; }
.curve-path {
  fill: none;
  stroke: var(--amber);
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 520;
  stroke-dashoffset: 520;
  animation: draw-curve 2.2s ease forwards 0.3s;
}
@keyframes draw-curve {
  to { stroke-dashoffset: 0; }
}
.curve-marker { fill: var(--crack); }
.curve-phase-labels text {
  font-family: var(--font-mono);
  font-size: 9px;
  fill: rgba(247, 241, 230, 0.55);
}

/* ---------- Sections ---------- */
section { padding-block: clamp(3rem, 7vw, 5.5rem); }
.section-light { background: var(--parchment); }
.section-alt { background: var(--parchment-2); }
.section-dark { background: var(--espresso); color: var(--cream); }

.section-head {
  max-width: 640px;
  margin-bottom: 2.5rem;
}
.section-dark .eyebrow { color: var(--amber); }

/* ---------- Feature / value grid ---------- */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.card {
  background: var(--parchment);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.75rem;
}
.card h3 { margin-bottom: 0.5rem; }
.card p { margin-bottom: 0; font-size: 0.95rem; }
.card .tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--olive);
  display: inline-block;
  margin-bottom: 0.75rem;
}

/* ---------- Coffee list (About/Services page) ---------- */
.coffee-list { display: flex; flex-direction: column; }
.coffee-row {
  display: grid;
  grid-template-columns: 1.4fr 0.7fr 0.7fr 1fr;
  gap: 1rem;
  align-items: baseline;
  padding-block: 1.25rem;
  border-top: 1px solid var(--line);
}
.coffee-row:last-child { border-bottom: 1px solid var(--line); }
.coffee-row h3 { margin: 0; font-size: 1.1rem; }
.coffee-row .origin {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--olive);
}
.roast-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.3em 0.6em;
  border-radius: 999px;
  justify-self: start;
  border: 1px solid var(--line);
}
.roast-tag.light { color: var(--amber-dim); border-color: var(--amber-dim); }
.roast-tag.medium { color: var(--crack); border-color: var(--crack); }
.roast-tag.dark { color: var(--espresso); background: var(--espresso); color: var(--cream); }
.coffee-row .notes { font-size: 0.9rem; margin: 0; color: rgba(36,26,18,0.75); }

/* ---------- Process steps (About page) ---------- */
.process {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.process-step {
  border-top: 2px solid var(--amber);
  padding-top: 1rem;
}
.process-step .phase-time {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--amber-dim);
  display: block;
  margin-bottom: 0.4rem;
}

/* ---------- Contact page ---------- */
.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(2rem, 5vw, 4rem);
}
.contact-info dl {
  margin: 1.5rem 0 0;
}
.contact-info dt {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--olive);
  margin-top: 1.25rem;
}
.contact-info dd { margin: 0.2rem 0 0; }

form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.field { display: flex; flex-direction: column; gap: 0.4rem; }
.field label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.field input,
.field select,
.field textarea {
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.75em 0.9em;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--parchment);
  color: var(--ink);
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--amber);
  outline-offset: 1px;
}
.field textarea { resize: vertical; min-height: 120px; }
.field .error-msg {
  font-size: 0.8rem;
  color: var(--crack);
  min-height: 1em;
}
.field.has-error input,
.field.has-error select,
.field.has-error textarea {
  border-color: var(--crack);
}
.form-status {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  padding: 0.9em 1em;
  border-radius: var(--radius);
  display: none;
}
.form-status.visible { display: block; }
.form-status.success {
  background: rgba(79, 93, 58, 0.14);
  color: var(--olive);
  display: block;
}
.form-status.failure {
  background: rgba(139, 58, 43, 0.12);
  color: var(--crack);
  display: block;
}

/* ---------- Footer ---------- */
.site-footer {
  background: var(--espresso);
  color: rgba(247, 241, 230, 0.7);
  padding-block: 2.5rem;
  font-size: 0.85rem;
}
.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer-grid a { text-decoration: none; opacity: 0.85; }
.footer-grid a:hover { opacity: 1; color: var(--amber); }
.footer-links { display: flex; gap: 1.5rem; list-style: none; padding: 0; margin: 0; }

/* ---------- Utility ---------- */
.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  background: var(--amber);
  color: var(--espresso);
  padding: 0.6em 1em;
  z-index: 100;
}
.skip-link:focus { left: var(--gutter); }

@media (prefers-reduced-motion: reduce) {
  .curve-path { animation: none; stroke-dashoffset: 0; }
  html { scroll-behavior: auto; }
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .grid-3 { grid-template-columns: 1fr; }
  .grid-2 { grid-template-columns: 1fr; }
  .process { grid-template-columns: repeat(2, 1fr); }
  .hero-grid { grid-template-columns: 1fr; }
  .contact-layout { grid-template-columns: 1fr; }
  .coffee-row { grid-template-columns: 1fr; gap: 0.35rem; }
  .roast-tag { justify-self: start; }
}

@media (max-width: 720px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--espresso);
    flex-direction: column;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
    border-bottom: 1px solid var(--line-dark);
  }
  .nav-links.open { max-height: 300px; }
  .nav-links li { border-top: 1px solid var(--line-dark); }
  .nav-links a { display: block; padding: 1rem var(--gutter); }
  .nav-toggle { display: inline-block; }
}
