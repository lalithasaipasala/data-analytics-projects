// ── Category order & display config ──────────────────────────────────────

const CATEGORIES = [
  { key: 'Excel',    label: 'Excel Projects',    icon: '📗' },
  { key: 'SQL',      label: 'SQL Projects',       icon: '🗄️' },
  { key: 'Tableau',  label: 'Tableau Projects',   icon: '📈' },
  { key: 'Power BI', label: 'Power BI Projects',  icon: '📊' },
];

// ── Render full portfolio ─────────────────────────────────────────────────

function renderPortfolio() {
  const root = document.getElementById('portfolioRoot');
  root.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const list = projects.filter(p => p.category === cat.key);
    if (list.length === 0) return;

    // Section wrapper
    const section = document.createElement('section');
    section.className = 'category-section';

    // Section heading
    const heading = document.createElement('div');
    heading.className = 'category-heading';
    heading.innerHTML = `<span class="cat-icon">${cat.icon}</span>${cat.label}`;
    section.appendChild(heading);

    // Cards grid
    const grid = document.createElement('div');
    grid.className = 'category-grid';

    list.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Open ${project.title} details`);

      const iconBg = project.accent + '22';

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon" style="background:${iconBg}; color:${project.accent};">
            ${project.icon}
          </div>
          <div class="card-meta">
            <div class="card-category" style="color:${project.accent};">${project.category}</div>
            <div class="card-title">${project.title}</div>
          </div>
        </div>
        <p class="card-description">${project.problem}</p>
        <div class="card-tools">
          ${project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
        </div>
        <div class="card-cta" style="color:${project.accent};">
          View Full Story <span>→</span>
        </div>
      `;

      card.addEventListener('click', () => openDetail(project));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(project); }
      });

      grid.appendChild(card);
    });

    section.appendChild(grid);
    root.appendChild(section);
  });
}

// ── Open the detail overlay ───────────────────────────────────────────────

function openDetail(project) {
  const overlay = document.getElementById('detailOverlay');
  const iconBg  = project.accent + '22';

  // Header
  document.getElementById('detailIcon').textContent     = project.icon;
  document.getElementById('detailIcon').style.cssText   = `background:${iconBg}; color:${project.accent};`;
  document.getElementById('detailCategory').textContent = project.category;
  document.getElementById('detailCategory').style.color = project.accent;
  document.getElementById('detailTitle').textContent    = project.title;

  // Tools
  document.getElementById('detailTools').innerHTML =
    project.tools.map(t => `<span class="detail-tool-tag">${t}</span>`).join('');

  // Problem, Dataset & Conclusion
  document.getElementById('detailProblem').textContent    = project.problem;
  document.getElementById('detailDataset').textContent    = project.dataset;
  document.getElementById('detailConclusion').textContent = project.conclusion;

  // Dashboard stats
  document.getElementById('detailDashboard').innerHTML = project.dashboard.map(s => `
    <div class="stat-card">
      <div class="stat-card-bar" style="position:absolute;bottom:0;left:0;right:0;height:3px;background:${project.accent};"></div>
      <div class="stat-value" style="color:${project.accent};">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  // Image
  const wrap = document.getElementById('detailImageWrap');
  wrap.innerHTML = `
    <img class="detail-image" id="detailImage" src="${project.image}" alt="${project.title} dashboard preview"
         onerror="this.parentElement.innerHTML='<div class=\\'image-fallback\\'><span style=\\'font-size:2.5rem\\'>🖼️</span><span>Dashboard image not available</span></div>';" />
  `;

  // Show overlay
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('detailPanel').scrollTop = 0;
  overlay.scrollTop = 0;
}

// ── Close the detail overlay ──────────────────────────────────────────────

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Event listeners ───────────────────────────────────────────────────────

document.getElementById('closeBtn').addEventListener('click', closeDetail);

document.getElementById('detailOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeDetail();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

// ── Init ──────────────────────────────────────────────────────────────────

renderPortfolio();
