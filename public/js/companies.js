// ---- Companies Page Client Script ----
const companySearchInput = document.getElementById('companySearchInput');
const companyFilterChips = document.querySelectorAll('#companyFilterChips .chip');
const companyCards = document.querySelectorAll('.featured-company-card');
const companyModal = document.getElementById('companyModal');
const companyModalBody = document.getElementById('companyModalBody');

let currentCompanyCategory = 'all';

function filterCompanies() {
  const query = companySearchInput ? companySearchInput.value.toLowerCase().trim() : '';

  companyCards.forEach(card => {
    const name = card.dataset.name || '';
    const cat = card.dataset.category || '';

    const matchesSearch = !query || name.includes(query);
    const matchesCat = currentCompanyCategory === 'all' || cat.includes(currentCompanyCategory);

    card.style.display = matchesSearch && matchesCat ? 'block' : 'none';
  });
}

if (companySearchInput) companySearchInput.addEventListener('input', filterCompanies);

companyFilterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    companyFilterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentCompanyCategory = chip.dataset.filter;
    filterCompanies();
  });
});

window.openCompanyModal = async function(id) {
  try {
    const res = await fetch(`/api/companies/${id}`);
    const data = await res.json();
    if (data.success && data.company) {
      const c = data.company;
      companyModalBody.innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:1.5rem;">
          <div style="width:64px;height:64px;border-radius:12px;background:${c.bg}25;border:1px solid ${c.bg}50;display:flex;align-items:center;justify-content:center;font-size:2rem;">
            ${c.logo}
          </div>
          <div>
            <h2 style="font-size:1.5rem;font-weight:800;color:var(--text-primary);">${c.name}</h2>
            <div style="color:var(--text-muted);font-size:0.85rem;">HQ: ${c.hq} · Founded: ${c.founded} · ${c.employees} Employees</div>
          </div>
        </div>

        <p style="color:var(--text-secondary);font-size:0.95rem;line-height:1.6;margin-bottom:1.5rem;">${c.description}</p>

        <!-- ELIGIBILITY -->
        <div style="background:var(--bg-glass);padding:1rem;border-radius:var(--radius-md);margin-bottom:1.5rem;border:1px solid var(--border-color);">
          <h4 style="font-size:0.85rem;text-transform:uppercase;color:var(--accent-teal);letter-spacing:1px;margin-bottom:8px;">Eligibility Criteria</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85rem;color:var(--text-secondary);">
            <div><strong>CGPA:</strong> ${c.eligibility.cgpa}</div>
            <div><strong>Backlogs:</strong> ${c.eligibility.backlogs}</div>
            <div><strong>Branches:</strong> ${c.eligibility.branch}</div>
            <div><strong>Degree:</strong> ${c.eligibility.degree}</div>
          </div>
        </div>

        <!-- HIRING ROUNDS -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.85rem;text-transform:uppercase;color:var(--accent-primary);letter-spacing:1px;margin-bottom:12px;">Hiring Process & Rounds</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${c.rounds.map((r, i) => `
              <div style="display:flex;gap:12px;background:var(--bg-card);padding:12px;border-radius:var(--radius-sm);border:1px solid var(--border-color);">
                <div style="width:24px;height:24px;border-radius:50%;background:var(--gradient-primary);color:white;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">
                  ${i+1}
                </div>
                <div>
                  <div style="font-weight:700;font-size:0.9rem;color:var(--text-primary);margin-bottom:2px;">${r.name}</div>
                  <div style="font-size:0.82rem;color:var(--text-secondary);">${r.desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SYLLABUS -->
        <div>
          <h4 style="font-size:0.85rem;text-transform:uppercase;color:var(--accent-orange);letter-spacing:1px;margin-bottom:8px;">Exam Syllabus & Key Topics</h4>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${c.syllabus.map(s => `<span class="badge badge-primary">${s}</span>`).join('')}
          </div>
        </div>
      `;
      companyModal.classList.add('open');
    }
  } catch (err) {
    console.error(err);
  }
};

window.closeCompanyModal = function() {
  if (companyModal) companyModal.classList.remove('open');
};

if (companyModal) {
  companyModal.addEventListener('click', (e) => {
    if (e.target === companyModal) closeCompanyModal();
  });
}
