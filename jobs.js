/* ===== JOBS PAGE JAVASCRIPT ===== */

const allJobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'Google', logo: '🔷', bg: '#4285f4', type: 'full-time', location: 'Bangalore', mode: 'Hybrid', salary: 45, salaryText: '₹45–80 LPA', tags: ['Python', 'Go', 'Kubernetes', 'ML'], exp: 'Senior (6+ yrs)', posted: '2 days ago', isNew: false, companyType: 'MNC',
    desc: 'Join Google\'s Core Engineering team to build scalable infrastructure that powers billions of users. You\'ll work on distributed systems, cloud platforms, and cutting-edge ML pipelines.',
    requirements: ['5+ years of software engineering experience', 'Proficiency in Python, Go, or C++', 'Experience with distributed systems', 'Strong algorithmic problem-solving skills', 'Experience with cloud platforms (GCP preferred)'],
    responsibilities: ['Design and implement large-scale distributed systems', 'Collaborate with cross-functional teams', 'Mentor junior engineers', 'Conduct code reviews and maintain code quality'] },

  { id: 2, title: 'SDE-2 Backend Engineer', company: 'Amazon', logo: '🟠', bg: '#ff9900', type: 'full-time', location: 'Hyderabad', mode: 'On-site', salary: 35, salaryText: '₹35–60 LPA', tags: ['Java', 'AWS', 'System Design', 'Microservices'], exp: 'Mid (3–6 yrs)', posted: '1 day ago', isNew: true, companyType: 'MNC',
    desc: 'Build and scale Amazon\'s core retail systems that handle millions of transactions per second. This role requires deep expertise in backend systems and AWS cloud services.',
    requirements: ['3+ years of Java/Kotlin experience', 'AWS Certified Developer or similar', 'Experience with microservices architecture', 'Strong understanding of distributed databases', 'OOPs and Design Patterns expertise'],
    responsibilities: ['Architect scalable microservices', 'Optimize backend performance and reliability', 'Drive technical decisions and write design documents', 'Work in agile environment'] },

  { id: 3, title: 'Software Development Engineer', company: 'Microsoft', logo: '🪟', bg: '#00a4ef', type: 'full-time', location: 'Noida', mode: 'Hybrid', salary: 30, salaryText: '₹30–55 LPA', tags: ['C#', 'Azure', '.NET', 'TypeScript'], exp: 'Junior (1–3 yrs)', posted: '3 days ago', isNew: false, companyType: 'MNC',
    desc: 'Join Microsoft\'s Azure team to build cloud services used by enterprises worldwide. You\'ll work on scalable APIs, developer tools, and Azure infrastructure.',
    requirements: ['2+ years of C# or .NET experience', 'Azure fundamentals certification a plus', 'Experience with REST API design', 'Understanding of CI/CD pipelines'],
    responsibilities: ['Build and maintain Azure cloud services', 'Write clean, testable code', 'Participate in on-call rotation', 'Contribute to open-source projects'] },

  { id: 4, title: 'Data Scientist', company: 'Netflix', logo: '🎬', bg: '#e50914', type: 'full-time', location: 'Remote', mode: 'Remote', salary: 40, salaryText: '₹40–70 LPA', tags: ['Python', 'TensorFlow', 'SQL', 'Spark'], exp: 'Mid (3–6 yrs)', posted: '1 day ago', isNew: true, companyType: 'MNC',
    desc: 'Build recommendation systems and A/B testing frameworks that drive Netflix\'s content strategy. Work with petabytes of user data to improve personalization.',
    requirements: ['MS/PhD in Statistics, CS, or related field', '4+ years ML/DS experience', 'Proficiency in Python, R, SQL', 'Experience with distributed computing (Spark/Hadoop)', 'Strong statistics and experimentation background'],
    responsibilities: ['Build content recommendation algorithms', 'Run large-scale A/B experiments', 'Analyze user behavior patterns', 'Present insights to leadership'] },

  { id: 5, title: 'Product Engineer', company: 'Flipkart', logo: '🛒', bg: '#2874f0', type: 'full-time', location: 'Bangalore', mode: 'On-site', salary: 18, salaryText: '₹18–35 LPA', tags: ['React', 'Node.js', 'MongoDB', 'Redis'], exp: 'Junior (1–3 yrs)', posted: '5 hours ago', isNew: true, companyType: 'Product Company',
    desc: 'Join Flipkart\'s supply chain tech team to build products that power India\'s largest e-commerce platform. Work on high-impact features used by 200M+ users.',
    requirements: ['2+ years full-stack experience', 'React + Node.js proficiency', 'Understanding of REST APIs', 'MongoDB/PostgreSQL experience'],
    responsibilities: ['Develop new product features', 'Optimize frontend performance', 'Collaborate with product managers', 'Code review and QA'] },

  { id: 6, title: 'Frontend Engineer', company: 'Razorpay', logo: '💳', bg: '#3d5afe', type: 'full-time', location: 'Bangalore', mode: 'Hybrid', salary: 15, salaryText: '₹15–28 LPA', tags: ['React', 'TypeScript', 'GraphQL', 'Webpack'], exp: 'Junior (1–3 yrs)', posted: '12 hours ago', isNew: true, companyType: 'Startup',
    desc: 'Build the payment dashboard and developer tools used by 8 million businesses in India. Own the complete frontend architecture of Razorpay\'s dashboard products.',
    requirements: ['2+ years React/TypeScript experience', 'Strong CSS/HTML fundamentals', 'GraphQL or REST API integration', 'Testing experience (Jest, Cypress)'],
    responsibilities: ['Build interactive payment dashboards', 'Improve core web vitals', 'Create reusable component library', 'Write unit and integration tests'] },

  { id: 7, title: 'DevOps Engineer', company: 'Zomato', logo: '🍕', bg: '#e23744', type: 'full-time', location: 'Gurugram', mode: 'On-site', salary: 20, salaryText: '₹20–38 LPA', tags: ['Kubernetes', 'Terraform', 'AWS', 'Docker'], exp: 'Mid (3–6 yrs)', posted: '2 days ago', isNew: false, companyType: 'Startup',
    desc: 'Manage Zomato\'s cloud infrastructure that serves 15M+ daily active users. Build automation pipelines, improve deployment reliability, and scale our platform.',
    requirements: ['3+ years DevOps/SRE experience', 'Kubernetes and Helm expertise', 'Terraform/Infrastructure as Code', 'Linux administration', 'AWS/GCP/Azure experience'],
    responsibilities: ['Manage container orchestration with K8s', 'Build CI/CD pipelines', 'Monitor and maintain system reliability', 'Reduce infrastructure costs'] },

  { id: 8, title: 'Android Developer', company: 'PhonePe', logo: '📱', bg: '#5f259f', type: 'full-time', location: 'Bangalore', mode: 'Hybrid', salary: 25, salaryText: '₹25–45 LPA', tags: ['Kotlin', 'Android', 'MVVM', 'Jetpack Compose'], exp: 'Mid (3–6 yrs)', posted: '4 days ago', isNew: false, companyType: 'Startup',
    desc: 'Build the PhonePe Android app used by 500M+ users for digital payments. Work on performance optimization, new features, and maintaining the app\'s 4.9 star rating.',
    requirements: ['3+ years Android development', 'Kotlin proficiency', 'Jetpack Compose experience', 'MVVM/Clean Architecture', 'Understanding of payment systems'],
    responsibilities: ['Develop new payment features', 'Optimize app performance', 'Maintain 99.9% crash-free rate', 'Integrate payment APIs'] },

  { id: 9, title: 'Machine Learning Engineer', company: 'Swiggy', logo: '🛵', bg: '#fc8019', type: 'full-time', location: 'Bangalore', mode: 'Hybrid', salary: 30, salaryText: '₹30–55 LPA', tags: ['Python', 'PyTorch', 'MLOps', 'Feature Engineering'], exp: 'Mid (3–6 yrs)', posted: '3 days ago', isNew: false, companyType: 'Startup',
    desc: 'Build ML models for food delivery ETA prediction, demand forecasting, and restaurant recommendations at Swiggy. Work with massive real-time datasets.',
    requirements: ['MS/PhD in ML or equivalent experience', '3+ years ML engineering', 'PyTorch/TensorFlow expertise', 'MLOps tools experience', 'Experience with real-time ML systems'],
    responsibilities: ['Build and deploy ML models', 'Improve ETA prediction accuracy', 'Design feature stores', 'Monitor model performance'] },

  { id: 10, title: 'Software Engineer (Fresher)', company: 'Infosys', logo: '💼', bg: '#007cc3', type: 'full-time', location: 'Pune', mode: 'On-site', salary: 3, salaryText: '₹3.6–6.5 LPA', tags: ['Java', 'Python', 'SQL', 'Spring Boot'], exp: 'Fresher (0–1 yr)', posted: '1 day ago', isNew: true, companyType: 'MNC',
    desc: 'Join Infosys as a fresh graduate and kick-start your tech career. You\'ll receive comprehensive training in software development and be placed in various client projects.',
    requirements: ['BE/B.Tech/MCA 2024/2025 graduate', '60%+ throughout academics', 'No active backlogs', 'Good communication skills'],
    responsibilities: ['Complete 3-month training program', 'Work on client projects', 'Learn agile methodology', 'Develop software solutions'] },

  { id: 11, title: 'Cybersecurity Analyst', company: 'CRED', logo: '💎', bg: '#1a1a2e', type: 'full-time', location: 'Bangalore', mode: 'Hybrid', salary: 18, salaryText: '₹18–32 LPA', tags: ['Penetration Testing', 'SIEM', 'Python', 'Security Auditing'], exp: 'Junior (1–3 yrs)', posted: '6 days ago', isNew: false, companyType: 'Startup',
    desc: 'Protect CRED\'s platform and financial data from cyber threats. Conduct security audits, vulnerability assessments, and implement security best practices.',
    requirements: ['2+ years cybersecurity experience', 'CEH or OSCP certification', 'Experience with SIEM tools', 'Python scripting', 'Knowledge of OWASP Top 10'],
    responsibilities: ['Conduct penetration testing', 'Monitor security incidents', 'Review security configurations', 'Train development teams on security'] },

  { id: 12, title: 'Summer Internship — SDE', company: 'Google', logo: '🔷', bg: '#4285f4', type: 'internship', location: 'Bangalore', mode: 'Hybrid', salary: 2, salaryText: '₹2L/month stipend', tags: ['Python', 'Algorithms', 'Data Structures'], exp: 'Fresher (0–1 yr)', posted: '1 week ago', isNew: false, companyType: 'MNC',
    desc: 'Join Google as a summer intern and work on real products used by billions. Learn from world-class engineers and experience Google\'s culture firsthand.',
    requirements: ['Currently pursuing B.Tech/M.Tech', '2nd or 3rd year preferred', 'Strong DSA fundamentals', 'Knowledge of at least one programming language'],
    responsibilities: ['Work on a 10-week project', 'Present work to team', 'Contribute to real codebase', 'Attend tech talks and workshops'] },

  { id: 13, title: 'Full Stack Developer', company: 'Ola', logo: '🚗', bg: '#3ebb4b', type: 'full-time', location: 'Bangalore', mode: 'On-site', salary: 22, salaryText: '₹22–40 LPA', tags: ['React', 'Go', 'PostgreSQL', 'Redis'], exp: 'Mid (3–6 yrs)', posted: '5 days ago', isNew: false, companyType: 'Startup',
    desc: 'Build Ola\'s ride-sharing platform and driver app features. Work on real-time mapping, dynamic pricing algorithms, and scalable APIs.',
    requirements: ['3+ years full-stack experience', 'React + Go or Node.js', 'PostgreSQL and caching systems', 'Real-time websocket experience'],
    responsibilities: ['Build driver and rider features', 'Implement real-time tracking', 'Optimize database queries', 'Design APIs for mobile apps'] },

  { id: 14, title: 'QA Automation Engineer', company: 'Paytm', logo: '💰', bg: '#00baf2', type: 'full-time', location: 'Noida', mode: 'On-site', salary: 10, salaryText: '₹10–20 LPA', tags: ['Selenium', 'TestNG', 'Python', 'Jenkins'], exp: 'Junior (1–3 yrs)', posted: '3 days ago', isNew: false, companyType: 'Product Company',
    desc: 'Ensure the quality and reliability of Paytm\'s payment products through automated testing. Build test frameworks that catch bugs before they reach production.',
    requirements: ['2+ years QA automation experience', 'Selenium WebDriver expertise', 'Java or Python test automation', 'CI/CD integration experience'],
    responsibilities: ['Develop automated test suites', 'Integrate tests in CI/CD pipeline', 'Perform API testing', 'Report and track bugs'] },

  { id: 15, title: 'Associate Software Engineer', company: 'TCS', logo: '🏢', bg: '#0080ff', type: 'full-time', location: 'Multiple Cities', mode: 'On-site', salary: 3, salaryText: '₹3.36–7 LPA', tags: ['Java', '.NET', 'Python', 'SQL'], exp: 'Fresher (0–1 yr)', posted: '2 days ago', isNew: true, companyType: 'MNC',
    desc: 'Join TCS as a fresh engineer and build a strong foundation for your career in one of the world\'s largest IT companies. Work on diverse client projects across industries.',
    requirements: ['B.E./B.Tech any branch 2025 graduate', '60%+ in 10th, 12th, and graduation', 'No gaps in education', 'Good aptitude and analytical skills'],
    responsibilities: ['Complete TCS iON training', 'Work on client delivery', 'Learn industry best practices', 'Contribute to tech projects'] },
];

let displayedJobs = 8;
let currentFilteredJobs = [...allJobs];

const allSkills = ['Python', 'Java', 'React', 'Node.js', 'Go', 'TypeScript', 'AWS', 'Kubernetes', 'ML/AI', 'SQL', 'C++', 'Kotlin'];

// ---- RENDER SKILLS FILTER ----
function renderSkillsFilter() {
  const container = document.getElementById('skillsFilter');
  if (!container) return;
  container.innerHTML = allSkills.map(skill => `
    <span class="chip" data-skill="${skill}" onclick="toggleSkillFilter(this)">${skill}</span>
  `).join('');
}

let activeSkills = [];
function toggleSkillFilter(el) {
  const skill = el.dataset.skill;
  if (activeSkills.includes(skill)) {
    activeSkills = activeSkills.filter(s => s !== skill);
    el.classList.remove('active');
  } else {
    activeSkills.push(skill);
    el.classList.add('active');
  }
  filterJobs();
}

// ---- FILTER JOBS ----
function filterJobs() {
  const q = (document.getElementById('jobSearchInput')?.value || '').toLowerCase().trim();
  const loc = (document.getElementById('locationInput')?.value || '').toLowerCase().trim();
  const sort = document.getElementById('sortSelect')?.value || 'relevance';

  // Active type chip
  const activeChip = document.querySelector('#jobTypeFilter .chip.active');
  const typeFilter = activeChip?.dataset.filter || 'all';

  // Filter
  currentFilteredJobs = allJobs.filter(job => {
    const matchQ = !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.tags.some(t => t.toLowerCase().includes(q));
    const matchLoc = !loc || job.location.toLowerCase().includes(loc) || job.mode.toLowerCase().includes(loc);
    const matchType = typeFilter === 'all' || (typeFilter === 'fresher' ? job.exp.includes('Fresher') : job.type === typeFilter || (typeFilter === 'remote' && job.mode === 'Remote'));
    const matchSkills = activeSkills.length === 0 || activeSkills.every(s => job.tags.some(t => t.toLowerCase().includes(s.toLowerCase())));
    return matchQ && matchLoc && matchType && matchSkills;
  });

  // Sort
  if (sort === 'newest') currentFilteredJobs.sort((a, b) => a.id > b.id ? -1 : 1);
  else if (sort === 'salary-high') currentFilteredJobs.sort((a, b) => b.salary - a.salary);
  else if (sort === 'salary-low') currentFilteredJobs.sort((a, b) => a.salary - b.salary);

  displayedJobs = 8;
  renderJobs();
}

function resetFilters() {
  document.getElementById('jobSearchInput').value = '';
  document.getElementById('locationInput').value = '';
  document.querySelectorAll('#jobTypeFilter .chip').forEach((c, i) => c.classList.toggle('active', i === 0));
  activeSkills = [];
  document.querySelectorAll('#skillsFilter .chip').forEach(c => c.classList.remove('active'));
  currentFilteredJobs = [...allJobs];
  displayedJobs = 8;
  renderJobs();
}

// ---- RENDER JOBS ----
function renderJobs() {
  const container = document.getElementById('jobsGrid');
  const countEl = document.getElementById('jobsCount');
  if (!container) return;

  const jobs = currentFilteredJobs.slice(0, displayedJobs);
  countEl.textContent = `Showing ${jobs.length} of ${currentFilteredJobs.length} jobs`;

  if (jobs.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:4rem;color:var(--text-muted);">
      <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
      <div style="font-size:1.1rem;font-weight:600;margin-bottom:0.5rem;">No jobs found</div>
      <div style="font-size:0.875rem;">Try adjusting your search filters</div>
    </div>`;
    return;
  }

  container.innerHTML = jobs.map(job => `
    <div class="job-card-full" onclick="openJobModal(${job.id})">
      <div class="jcf-header">
        <div class="jcf-main">
          <div class="company-logo" style="background:${job.bg}20;">${job.logo}</div>
          <div>
            <div class="jcf-title">${job.title} ${job.isNew ? '<span class="new-badge">New</span>' : ''}</div>
            <div class="jcf-company">
              <span style="color:var(--text-secondary);font-weight:500;">${job.company}</span>
              <span>·</span>
              <span class="badge ${job.type === 'internship' ? 'badge-orange' : 'badge-primary'}">${job.type === 'internship' ? '🎓 Internship' : '💼 ' + job.type.charAt(0).toUpperCase() + job.type.slice(1)}</span>
            </div>
          </div>
        </div>
        <button class="btn btn-sm" style="background:${isBookmarked(job.id,'jobs')?'rgba(108,99,255,0.2)':'transparent'};border:1px solid var(--border-accent);color:var(--accent-primary);border-radius:var(--radius-sm);flex-shrink:0;" 
          onclick="event.stopPropagation();const saved=toggleBookmark(${job.id},'jobs');this.style.background=saved?'rgba(108,99,255,0.2)':'transparent';">
          ${isBookmarked(job.id, 'jobs') ? '🔖' : '🔖'}
        </button>
      </div>
      <div class="jcf-meta">
        <span class="jcf-meta-item">📍 ${job.location}</span>
        <span class="jcf-meta-item">${job.mode === 'Remote' ? '🌐' : job.mode === 'Hybrid' ? '🔀' : '🏢'} ${job.mode}</span>
        <span class="jcf-meta-item">📊 ${job.exp}</span>
        <span class="jcf-meta-item">🕒 ${job.posted}</span>
      </div>
      <div class="jcf-tags">
        ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="jcf-footer">
        <div class="jcf-salary">${job.salaryText}</div>
        <div class="jcf-actions">
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation();openJobModal(${job.id})">View Details</button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();showToast('Application submitted! ✅','success')">Apply Now</button>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('loadMoreBtn').style.display = displayedJobs >= currentFilteredJobs.length ? 'none' : '';
}

function loadMoreJobs() {
  displayedJobs += 5;
  renderJobs();
}

// ---- JOB MODAL ----
function openJobModal(id) {
  const job = allJobs.find(j => j.id === id);
  if (!job) return;
  const modal = document.getElementById('jobModal');
  const content = document.getElementById('jobModalContent');
  content.innerHTML = `
    <div class="job-detail-header">
      <div style="display:flex;align-items:flex-start;gap:1rem;">
        <div class="job-detail-logo" style="background:${job.bg}20;">${job.logo}</div>
        <div>
          <div class="job-detail-title">${job.title}</div>
          <div style="color:var(--text-muted);font-size:0.875rem;margin-bottom:0.5rem;">${job.company} · ${job.location} · ${job.mode}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <span class="badge badge-primary">${job.type}</span>
            <span class="badge badge-teal">${job.salaryText}</span>
            <span class="badge badge-orange">${job.exp}</span>
          </div>
        </div>
      </div>
      <button onclick="closeJobModal()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.4rem;padding:0;flex-shrink:0;">✕</button>
    </div>
    <div class="divider"></div>
    <div class="job-detail-section">
      <div class="job-detail-section-title">About the Role</div>
      <div class="job-detail-desc">${job.desc}</div>
    </div>
    <div class="job-detail-section">
      <div class="job-detail-section-title">Requirements</div>
      <div class="req-list">${job.requirements.map(r => `<div class="req-item">${r}</div>`).join('')}</div>
    </div>
    <div class="job-detail-section">
      <div class="job-detail-section-title">Responsibilities</div>
      <div class="req-list">${job.responsibilities.map(r => `<div class="req-item">${r}</div>`).join('')}</div>
    </div>
    <div class="job-detail-section">
      <div class="job-detail-section-title">Skills Required</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">${job.tags.map(t => `<span class="badge badge-primary">${t}</span>`).join('')}</div>
    </div>
    <div class="divider"></div>
    <div style="display:flex;gap:1rem;justify-content:flex-end;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="closeJobModal()">Close</button>
      <button class="btn btn-ghost" onclick="toggleBookmark(${job.id},'jobs');showToast('Saved to bookmarks!','success')">🔖 Save Job</button>
      <button class="btn btn-primary" onclick="showToast('Application submitted! ✅','success');closeJobModal()">Apply Now →</button>
    </div>
  `;
  modal.classList.add('open');
}

function closeJobModal() {
  document.getElementById('jobModal').classList.remove('open');
}

document.getElementById('jobModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeJobModal();
});

// ---- FILTER CHIPS ----
document.querySelectorAll('#jobTypeFilter .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#jobTypeFilter .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    filterJobs();
  });
});

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderSkillsFilter();
  renderJobs();
});
