// ── Render project cards ──────────────────────────────────────────────────

function renderCards(filter) {
  const grid = document.getElementById('projectsGrid');
  const list = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 24px;color:var(--muted);">
        <div style="font-size:3rem;margin-bottom:16px;">📂</div>
        <div style="font-size:1.1rem;font-weight:600;margin-bottom:8px;">No projects yet</div>
        <div style="font-size:0.875rem;">Add your projects to <code>projects.js</code> to get started.</div>
      </div>`;
    return;
  }

  list.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open ${project.title} details`);

    // Tinted icon background using the accent colour
    const iconBg = project.accent + '22'; // 13% opacity hex

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
        View Details <span>→</span>
      </div>
    `;

    // Open detail on click or keyboard
    card.addEventListener('click', () => openDetail(project));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(project); }
    });

    grid.appendChild(card);
  });
}

// ── Open the detail overlay ───────────────────────────────────────────────

function openDetail(project) {
  const overlay  = document.getElementById('detailOverlay');
  const iconBg   = project.accent + '22';

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
  const img = document.getElementById('detailImage');
  const wrap = document.getElementById('detailImageWrap');
  // Reset in case previous load left a fallback div
  wrap.innerHTML = `
    <img class="detail-image" id="detailImage" src="${project.image}" alt="${project.title} dashboard preview"
         onerror="this.parentElement.innerHTML='<div class=\\'image-fallback\\'><span style=\\'font-size:2.5rem\\'>🖼️</span><span>Dashboard image not available</span></div>';" />
  `;

  // Show overlay
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll panel to top
  document.getElementById('detailPanel').scrollTop = 0;
  overlay.scrollTop = 0;
}

// ── Close the detail overlay ─────────────────────────────────────────────

function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Event listeners ───────────────────────────────────────────────────────

document.getElementById('closeBtn').addEventListener('click', closeDetail);

// Close when clicking the dark backdrop (outside the panel)
document.getElementById('detailOverlay').addEventListener('click', function (e) {
  if (e.target === this) closeDetail();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

// ── Filter buttons ────────────────────────────────────────────────────────

document.getElementById('filterBar').addEventListener('click', function (e) {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  this.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCards(btn.dataset.cat);
});

// ── Init ──────────────────────────────────────────────────────────────────

renderCards('All');
