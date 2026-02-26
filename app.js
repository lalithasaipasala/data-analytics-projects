// ── Category order & display config ──────────────────────────────────────

const CATEGORIES = [
  { key: 'Excel',    label: 'Excel Projects',    icon: '📗' },
  { key: 'SQL',      label: 'SQL Projects',       icon: '🗄️' },
  { key: 'Tableau',  label: 'Tableau Projects',   icon: '📈' },
  { key: 'Power BI', label: 'Power BI Projects',  icon: '📊' },
];

// ── Render full portfolio as tables ──────────────────────────────────────

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

    // Table
    const table = document.createElement('table');
    table.className = 'projects-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th class="th-num">#</th>
        <th class="th-title">Project</th>
        <th class="th-desc">Description</th>
        <th class="th-tools">Tools</th>
      </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    list.forEach((project, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="td-num">${i + 1}</td>
        <td class="td-title">
          <a href="${project.detailPage}" class="proj-link" style="color:${project.accent};">
            <span class="proj-icon-small">${project.icon}</span>
            ${project.title}
          </a>
        </td>
        <td class="td-desc">${project.shortDescription}</td>
        <td class="td-tools">${project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}</td>
      `;
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);
    root.appendChild(section);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────

renderPortfolio();
