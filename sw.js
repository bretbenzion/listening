/* ============================================================
   Programme Notes — design tokens
   Palette:
     --ink        #17161A  deep background, like a darkened concert hall
     --ink-raised #201E24  panels/cards
     --ink-line   #2B2933  hairline borders on dark
     --parchment  #EDE6D6  primary text on dark
     --parchment-dim #9C958A  secondary/muted text
     --brass      #C49B54  accent — programme-gold
     --brass-dim  #8C6E3C  brass, recessed
     --burgundy   #8A2F3C  danger / high-attention accent
   Type:
     display — 'Fraunces' (italic used for movement titles & rating marks)
     body    — 'Inter'
     mono    — 'JetBrains Mono' (dates, metadata, dynamics)
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --ink: #17161A;
  --ink-raised: #201E24;
  --ink-raised-2: #26232B;
  --ink-line: #322F39;
  --parchment: #EDE6D6;
  --parchment-dim: #9C958A;
  --brass: #C49B54;
  --brass-dim: #8C6E3C;
  --brass-soft: rgba(196, 155, 84, 0.14);
  --burgundy: #A23B47;
  --burgundy-soft: rgba(162, 59, 71, 0.16);
  --radius: 10px;
  --focus-ring: 0 0 0 3px rgba(196, 155, 84, 0.45);
}

* { box-sizing: border-box; }

html, body {
  height: 100%;
}

body {
  margin: 0;
  background: var(--ink);
  color: var(--parchment);
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

::selection { background: var(--brass-soft); color: var(--parchment); }

button, input, textarea {
  font-family: inherit;
  color: inherit;
}

a { color: var(--brass); }

/* Focus visibility */
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: 6px;
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
}

/* ---------- Staff-line motif ---------- */
.staff-rule {
  height: 14px;
  background-image: repeating-linear-gradient(
    to bottom,
    var(--brass-dim) 0px, var(--brass-dim) 1px,
    transparent 1px, transparent 4px
  );
  opacity: 0.35;
  width: 100%;
}

/* ---------- App shell ---------- */
#app {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 24px 10px;
  border-bottom: 1px solid var(--ink-line);
  flex-shrink: 0;
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.brand-title {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  color: var(--parchment);
  white-space: nowrap;
}

.brand-title small {
  display: block;
  font-family: 'JetBrains Mono', monospace;
  font-style: normal;
  font-size: 0.62rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--brass);
  margin-top: 2px;
}

.topbar-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.btn {
  appearance: none;
  border: 1px solid var(--ink-line);
  background: var(--ink-raised);
  color: var(--parchment);
  padding: 9px 14px;
  border-radius: var(--radius);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: border-color 120ms ease, background 120ms ease, transform 80ms ease;
  white-space: nowrap;
}
.btn:hover { border-color: var(--brass-dim); background: var(--ink-raised-2); }
.btn:active { transform: translateY(1px); }

.btn-primary {
  background: var(--brass);
  border-color: var(--brass);
  color: #1A140A;
  font-weight: 600;
}
.btn-primary:hover { background: #d3a962; border-color: #d3a962; }

.btn-ghost {
  background: transparent;
}

.btn-danger { color: var(--burgundy); border-color: var(--burgundy-soft); background: transparent; }
.btn-danger:hover { background: var(--burgundy-soft); border-color: var(--burgundy); }

.btn-icon {
  width: 34px;
  height: 34px;
  padding: 0;
  justify-content: center;
}

.btn-sm { padding: 6px 10px; font-size: 0.75rem; }

/* ---------- Layout: sidebar + detail ---------- */
.layout {
  flex: 1;
  display: grid;
  grid-template-columns: 340px 1fr;
  min-height: 0;
}

.sidebar {
  border-right: 1px solid var(--ink-line);
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.search-wrap {
  padding: 14px 16px 8px;
}

.search-input {
  width: 100%;
  background: var(--ink-raised);
  border: 1px solid var(--ink-line);
  border-radius: var(--radius);
  padding: 9px 12px;
  font-size: 0.86rem;
}
.search-input::placeholder { color: var(--parchment-dim); }

.tree {
  flex: 1;
  overflow-y: auto;
  padding: 6px 10px 24px;
}

.tree-empty {
  margin: 40px 20px;
  text-align: center;
  color: var(--parchment-dim);
  font-size: 0.88rem;
  line-height: 1.6;
}
.tree-empty .staff-rule { margin: 0 auto 16px; width: 60px; }

.composer-group { margin-bottom: 4px; }

.composer-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 8px;
  cursor: pointer;
  border-radius: 8px;
  user-select: none;
}
.composer-header:hover { background: var(--ink-raised); }

.disclosure {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: var(--brass);
  transition: transform 140ms ease;
}
.composer-group.collapsed .disclosure { transform: rotate(-90deg); }

.composer-name {
  font-weight: 600;
  font-size: 0.92rem;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.composer-count {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--parchment-dim);
}

.piece-list { padding-left: 20px; }
.composer-group.collapsed .piece-list { display: none; }

.piece-group { margin: 2px 0; }

.piece-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 8px;
  cursor: pointer;
  border-radius: 8px;
  color: var(--parchment-dim);
}
.piece-header:hover { background: var(--ink-raised); color: var(--parchment); }

.piece-title {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 0.88rem;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.entry-list { padding-left: 18px; }
.piece-group.collapsed .entry-list { display: none; }

.entry-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  color: var(--parchment-dim);
  border-left: 2px solid transparent;
}
.entry-row:hover { background: var(--ink-raised); color: var(--parchment); }
.entry-row.active {
  background: var(--brass-soft);
  color: var(--parchment);
  border-left-color: var(--brass);
}

.entry-row .mvt-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.entry-row .mvt-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  color: var(--brass-dim);
  width: 18px;
  flex-shrink: 0;
}

/* ---------- Dynamics rating badge (signature element) ---------- */
.dyn-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}
.dyn-mark {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--brass);
  min-width: 1.6em;
  text-align: right;
}
.dyn-hairpin { display: block; flex-shrink: 0; }
.dyn-hairpin path { stroke: var(--brass); fill: none; stroke-width: 1.6; stroke-linecap: round; }

/* ---------- Detail pane ---------- */
.detail {
  min-height: 0;
  overflow-y: auto;
  padding: 32px 40px 60px;
}

.detail-empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  color: var(--parchment-dim);
  text-align: center;
  padding: 0 20px;
}
.detail-empty .staff-rule { width: 90px; }
.detail-empty h2 {
  font-family: 'Fraunces', serif;
  font-weight: 500;
  font-style: italic;
  color: var(--parchment);
  font-size: 1.3rem;
  margin: 0;
}
.detail-empty p { max-width: 360px; line-height: 1.6; font-size: 0.9rem; margin: 0; }

.entry-header {
  margin-bottom: 6px;
}
.entry-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--brass);
  margin-bottom: 10px;
}
.entry-title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.entry-work {
  font-family: 'Fraunces', serif;
  font-size: 1.9rem;
  font-weight: 500;
  line-height: 1.25;
  margin: 0;
}
.entry-composer {
  font-size: 1rem;
  color: var(--parchment-dim);
  margin: 4px 0 0;
}
.entry-movement {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--brass);
  margin: 10px 0 0;
}

.entry-meta-row {
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 18px 0 6px;
  flex-wrap: wrap;
}
.entry-date {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  color: var(--parchment-dim);
}

.entry-actions {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.detail-staff { margin: 22px 0 26px; }

.entry-notes {
  font-size: 1rem;
  line-height: 1.75;
  white-space: pre-wrap;
  max-width: 68ch;
}
.entry-notes:empty::before {
  content: "No thoughts written down yet.";
  color: var(--parchment-dim);
  font-style: italic;
}

/* ---------- Form (add/edit) ---------- */
.form-grid {
  display: grid;
  gap: 18px;
  max-width: 640px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--parchment-dim);
}
.field input[type="text"],
.field input[type="date"],
.field textarea {
  background: var(--ink-raised);
  border: 1px solid var(--ink-line);
  border-radius: var(--radius);
  padding: 11px 13px;
  font-size: 0.95rem;
  width: 100%;
}
.field input::placeholder, .field textarea::placeholder { color: #665F57; }
.field textarea {
  min-height: 220px;
  resize: vertical;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
}
.field-row { display: flex; gap: 14px; }
.field-row .field { flex: 1; }
.field-hint {
  font-size: 0.78rem;
  color: var(--parchment-dim);
}

.rating-picker {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rating-option {
  border: 1px solid var(--ink-line);
  background: var(--ink-raised);
  border-radius: 8px;
  padding: 8px 14px;
  cursor: pointer;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--parchment-dim);
  display: flex;
  align-items: center;
  gap: 8px;
}
.rating-option:hover { border-color: var(--brass-dim); }
.rating-option.selected {
  border-color: var(--brass);
  background: var(--brass-soft);
  color: var(--parchment);
}
.rating-option .dyn-hairpin path { stroke: var(--parchment-dim); }
.rating-option.selected .dyn-hairpin path { stroke: var(--brass); }

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

datalist {}

/* ---------- Modal (used for add/edit + import) ---------- */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 9, 11, 0.72);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 20px;
  overflow-y: auto;
  z-index: 50;
}
.modal {
  background: var(--ink);
  border: 1px solid var(--ink-line);
  border-radius: 14px;
  width: 100%;
  max-width: 700px;
  padding: 28px 32px 32px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px;
}
.modal-title {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
}
.modal-close {
  background: none;
  border: none;
  color: var(--parchment-dim);
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  padding: 4px;
}
.modal-close:hover { color: var(--parchment); }

.modal-sm { max-width: 460px; }
.modal-sm p { line-height: 1.6; color: var(--parchment-dim); font-size: 0.9rem; }
.modal-choice-row { display: flex; flex-direction: column; gap: 10px; margin-top: 18px; }
.modal-choice {
  border: 1px solid var(--ink-line);
  background: var(--ink-raised);
  border-radius: var(--radius);
  padding: 13px 16px;
  text-align: left;
  cursor: pointer;
}
.modal-choice:hover { border-color: var(--brass-dim); }
.modal-choice strong { display: block; font-size: 0.9rem; margin-bottom: 3px; }
.modal-choice span { font-size: 0.78rem; color: var(--parchment-dim); }

.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--ink-raised);
  border: 1px solid var(--brass-dim);
  color: var(--parchment);
  padding: 11px 20px;
  border-radius: 10px;
  font-size: 0.85rem;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* ---------- Mobile ---------- */
.back-btn { display: none; }

@media (max-width: 820px) {
  .topbar { padding: 14px 16px 8px; }
  .brand-title { font-size: 1.3rem; }
  .btn-label { display: none; }

  .layout { grid-template-columns: 1fr; }
  .sidebar { border-right: none; }
  .detail { padding: 20px 18px 60px; }

  /* Toggle between list and detail like a two-screen stack */
  .layout.showing-detail .sidebar { display: none; }
  .layout:not(.showing-detail) .detail { display: none; }

  .back-btn {
    display: inline-flex;
    margin-bottom: 18px;
  }

  .modal { padding: 22px 18px 26px; }
  .entry-work { font-size: 1.5rem; }
}
