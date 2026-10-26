/* ===== INDEX PAGE JAVASCRIPT ===== */

// ---- DATA ----
const featuredJobsData = [
  { id: 1, title: 'Senior Software Engineer', company: 'Google', logo: '🔷', bg: '#4285f4', type: 'Full-time', location: 'Bangalore · Hybrid', salary: '₹45–80 LPA', tags: ['Python', 'Go', 'ML'], posted: '2d ago' },
  { id: 2, title: 'SDE-2 Backend Engineer', company: 'Amazon', logo: '🟠', bg: '#ff9900', type: 'Full-time', location: 'Hyderabad · On-site', salary: '₹35–60 LPA', tags: ['Java', 'AWS', 'System Design'], posted: '1d ago' },
  { id: 3, title: 'Software Development Engineer', company: 'Microsoft', logo: '🪟', bg: '#00a4ef', type: 'Full-time', location: 'Noida · Hybrid', salary: '₹30–55 LPA', tags: ['C#', 'Azure', '.NET'], posted: '3d ago' },
  { id: 4, title: 'Data Scientist', company: 'Netflix', logo: '🎬', bg: '#e50914', type: 'Full-time', location: 'Remote', salary: '₹40–70 LPA', tags: ['Python', 'TensorFlow', 'SQL'], posted: '1d ago' },
  { id: 5, title: 'Product Engineer', company: 'Flipkart', logo: '🛒', bg: '#2874f0', type: 'Full-time', location: 'Bangalore · On-site', salary: '₹18–35 LPA', tags: ['React', 'Node.js', 'MongoDB'], posted: '5h ago' },
  { id: 6, title: 'Frontend Engineer', company: 'Razorpay', logo: '💳', bg: '#3d5afe', type: 'Full-time', location: 'Bangalore · Hybrid', salary: '₹15–28 LPA', tags: ['React', 'TypeScript', 'GraphQL'], posted: '12h ago' },
];

const prepTracksData = [
  { icon: '🔢', title: 'Aptitude Mastery', desc: '500+ problems', bg: 'linear-gradient(135deg,#6c63ff,#a29bfe)', progress: 35, topics: 12, href: 'preparation.html#aptitude' },
  { icon: '🧩', title: 'DSA Fundamentals', desc: '450 problems', bg: 'linear-gradient(135deg,#00d4aa,#00b894)', progress: 62, topics: 20, href: 'dsa-sheet.html' },
  { icon: '💻', title: 'Technical Interviews', desc: 'Core CS subjects', bg: 'linear-gradient(135deg,#54a0ff,#0984e3)', progress: 28, topics: 8, href: 'preparation.html#technical' },
  { icon: '🤝', title: 'HR & Soft Skills', desc: 'Behavioral prep', bg: 'linear-gradient(135deg,#fd79a8,#e84393)', progress: 80, topics: 6, href: 'preparation.html#hr' },
];

const companiesData = [
  { name: 'Google', logo: '🔷', jobs: 234 },
  { name: 'Amazon', logo: '🟠', jobs: 412 },
  { name: 'Microsoft', logo: '🪟', jobs: 189 },
  { name: 'Meta', logo: '🔵', jobs: 156 },
  { name: 'Netflix', logo: '🎬', jobs: 67 },
  { name: 'Apple', logo: '🍎', jobs: 143 },
  { name: 'Flipkart', logo: '🛒', jobs: 89 },
  { name: 'Paytm', logo: '💰', jobs: 145 },
  { name: 'Zomato', logo: '🍕', jobs: 78 },
  { name: 'Swiggy', logo: '🛵', jobs: 92 },
  { name: 'Razorpay', logo: '💳', jobs: 54 },
  { name: 'CRED', logo: '💎', jobs: 38 },
  { name: 'PhonePe', logo: '📱', jobs: 67 },
  { name: 'Ola', logo: '🚗', jobs: 123 },
  { name: 'Uber', logo: '🚕', jobs: 88 },
  { name: 'Infosys', logo: '💼', jobs: 2134 },
  { name: 'TCS', logo: '🏢', jobs: 3421 },
  { name: 'Wipro', logo: '⚙️', jobs: 1987 },
];

// ---- RENDER FEATURED JOBS ----
function renderFeaturedJobs() {
  const container = document.getElementById('featuredJobs');
  if (!container) return;
  container.innerHTML = featuredJobsData.map(job => `
    <div class="job-card" data-title="${job.title}" data-company="${job.company}" onclick="window.location.href='jobs.html'">
      <div class="job-card-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="company-logo-sm" style="background:${job.bg}20;color:${job.bg};font-size:1.4rem;">${job.logo}</div>
          <div>
            <div class="job-title">${job.title}</div>
            <div class="company-name-sm">${job.company} · <span style="color:var(--accent-teal)">${job.type}</span></div>
          </div>
        </div>
        <button class="btn btn-sm" style="background:rgba(108,99,255,0.1);border:1px solid var(--border-accent);color:var(--accent-primary);border-radius:var(--radius-sm);" 
          onclick="event.stopPropagation();toggleBookmark(${job.id},'jobs');this.textContent=isBookmarked(${job.id},'jobs')?'🔖':'🔖'">🔖</button>
      </div>
      <div class="job-tags">
        ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="job-footer">
        <div class="salary">${job.salary}</div>
        <div style="display:flex;align-items:center;gap:1rem;">
          <div class="location-sm">📍 ${job.location}</div>
          <div style="font-size:0.75rem;color:var(--text-muted);">🕒 ${job.posted}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- RENDER PREP TRACKS ----
function renderPrepTracks() {
  const container = document.getElementById('prepTracks');
  if (!container) return;
  container.innerHTML = prepTracksData.map(track => `
    <a href="${track.href}" class="prep-track-card">
      <div class="track-icon" style="background:${track.bg};">${track.icon}</div>
      <div>
        <div class="track-title">${track.title}</div>
        <div class="track-meta">${track.topics} Topics · ${track.desc}</div>
      </div>
      <div class="track-progress">
        <div class="track-progress-label">
          <span>Progress</span>
          <span>${track.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${track.progress}%;background:${track.bg};"></div>
        </div>
      </div>
    </a>
  `).join('');
}

// ---- RENDER COMPANIES MARQUEE ----
function renderCompaniesMarquee() {
  const container = document.getElementById('companiesMarquee');
  if (!container) return;
  // Duplicate for seamless loop
  const html = [...companiesData, ...companiesData].map(c => `
    <div class="company-pill" onclick="window.location.href='companies.html'">
      <span class="logo">${c.logo}</span>
      <span class="name">${c.name}</span>
      <span class="jobs-count">${c.jobs.toLocaleString()} jobs</span>
    </div>
  `).join('');
  container.innerHTML = html;
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedJobs();
  renderPrepTracks();
  renderCompaniesMarquee();
});
