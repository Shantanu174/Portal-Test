// ---- Job Portal Client-side Logic ----
let jobsList = [];

// Fetch latest jobs from Node.js backend API
async function loadJobs() {
  try {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    if (data.success) {
      jobsList = data.jobs;
    }
  } catch (err) {
    console.error('Failed to load jobs from API', err);
  }
}
loadJobs();

// Search & Filtering
const searchInput = document.getElementById('jobSearchInput');
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const expFilter = document.getElementById('expFilter');
const companyTypeFilter = document.getElementById('companyTypeFilter');
const filterChips = document.querySelectorAll('#filterChips .chip');
const jobCards = document.querySelectorAll('.job-card-full');
const jobCountEl = document.getElementById('jobCount');

let currentTypeFilter = 'all';

function filterJobs() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const locQuery = locationInput ? locationInput.value.toLowerCase().trim() : '';
  const expQuery = expFilter ? expFilter.value : 'all';
  const companyQuery = companyTypeFilter ? companyTypeFilter.value : 'all';

  let visibleCount = 0;

  jobCards.forEach(card => {
    const title = card.dataset.title || '';
    const company = card.dataset.company || '';
    const type = card.dataset.type || '';

    let matchesSearch = !query || title.includes(query) || company.includes(query);
    let matchesType = currentTypeFilter === 'all' || type === currentTypeFilter;

    if (matchesSearch && matchesType) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (jobCountEl) jobCountEl.textContent = visibleCount;
}

if (searchInput) searchInput.addEventListener('input', filterJobs);
if (locationInput) locationInput.addEventListener('input', filterJobs);
if (searchBtn) searchBtn.addEventListener('click', filterJobs);

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentTypeFilter = chip.dataset.filter;
    filterJobs();
  });
});

const resetBtn = document.getElementById('resetFiltersBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (locationInput) locationInput.value = '';
    if (expFilter) expFilter.value = 'all';
    if (companyTypeFilter) companyTypeFilter.value = 'all';
    filterChips.forEach(c => c.classList.remove('active'));
    if (filterChips[0]) filterChips[0].classList.add('active');
    currentTypeFilter = 'all';
    filterJobs();
    showToast('Filters reset', 'info');
  });
}

// Modal
const jobModal = document.getElementById('jobModal');
const modalBody = document.getElementById('modalBody');

window.openJobModal = async function(id) {
  try {
    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();
    if (data.success && data.job) {
      const job = data.job;
      modalBody.innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:1.5rem;">
          <div style="width:56px;height:56px;border-radius:12px;background:${job.bg}25;border:1px solid ${job.bg}50;display:flex;align-items:center;justify-content:center;font-size:2rem;">
            ${job.logo}
          </div>
          <div>
            <h2 style="font-size:1.3rem;font-weight:800;color:var(--text-primary);margin-bottom:4px;">${job.title}</h2>
            <div style="color:var(--text-muted);font-size:0.85rem;">${job.company} · 📍 ${job.location} (${job.mode})</div>
          </div>
        </div>
        <div style="margin-bottom:1rem;font-size:1.1rem;font-weight:800;color:var(--accent-teal);">${job.salaryText}</div>
        <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6;margin-bottom:1.25rem;">${job.desc}</p>
        <div style="margin-bottom:1.25rem;">
          <h4 style="font-size:0.85rem;text-transform:uppercase;color:var(--accent-primary);margin-bottom:8px;">Requirements</h4>
          <ul style="padding-left:1.2rem;color:var(--text-secondary);font-size:0.85rem;display:flex;flex-direction:column;gap:4px;">
            ${job.requirements.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 style="font-size:0.85rem;text-transform:uppercase;color:var(--accent-teal);margin-bottom:8px;">Responsibilities</h4>
          <ul style="padding-left:1.2rem;color:var(--text-secondary);font-size:0.85rem;display:flex;flex-direction:column;gap:4px;">
            ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `;
      jobModal.classList.add('open');
    }
  } catch (err) {
    console.error(err);
  }
};

window.closeJobModal = function() {
  if (jobModal) jobModal.classList.remove('open');
};

if (jobModal) {
  jobModal.addEventListener('click', (e) => {
    if (e.target === jobModal) closeJobModal();
  });
}
