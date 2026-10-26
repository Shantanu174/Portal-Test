/* ===== COMPANIES PAGE JAVASCRIPT ===== */

const companiesData = [
  {
    id: 'google', name: 'Google', logo: '🔷', bg: '#4285f4', gradient: 'linear-gradient(135deg,#4285f4,#34a853)',
    tagline: 'Think big. Change the world.', category: ['product','mnc'],
    founded: '1998', employees: '182,000+', hq: 'Mountain View, CA', openRoles: 234, difficulty: 'Very Hard',
    difficultyDots: 5, featured: true,
    description: 'Google is a multinational tech company specializing in search, cloud computing, AI, and software. Known for its innovative culture, competitive compensation, and rigorous interview process.',
    eligibility: { cgpa: '7.0+ CGPA', branch: 'CS/IT/ECE/EEE preferred, all branches can apply', backlogs: 'No active backlogs', degree: 'B.E./B.Tech/M.Tech/MCA' },
    rounds: [
      { name: 'Online Coding Assessment (90 min)', desc: '2 medium-to-hard coding problems on HackerRank. Focuses on algorithms, data structures, time complexity optimization.' },
      { name: 'Technical Phone Screen (45–60 min)', desc: 'One engineer, one coding problem + discussion. Tests problem solving, code quality, edge cases.' },
      { name: 'Virtual Onsite — 4 Technical Rounds (45 min each)', desc: 'Coding (2 rounds), System Design (1 round), Behavioral/Googleyness (1 round). Very competitive.' },
      { name: 'Hiring Committee Review', desc: 'Your interview feedback is reviewed by a committee. They decide on level and compensation, not the interviewers directly.' },
      { name: 'Offer & Negotiation', desc: 'If selected, recruiter provides offer. Negotiate based on competing offers and market data.' },
    ],
    syllabus: ['Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'System Design', 'OOP & Design Patterns', 'Sorting & Searching', 'Recursion & Backtracking', 'Database Design', 'Operating Systems basics', 'Probability & Math'],
    tips: [
      'Master LC Medium/Hard problems — aim for 200+ problems',
      'Think aloud always — Googlers value your thought process more than perfect code',
      'Practice mock interviews on Pramp or Interviewing.io',
      'For system design: practice designing YouTube, Google Maps, Gmail',
      'Behavioral: prepare 5-6 STAR stories covering leadership, conflict, failure',
      'Optimize for time and space complexity — discuss tradeoffs',
    ],
    examPattern: { type: 'Coding Assessment + Virtual Onsite', duration: '3–6 weeks total', platform: 'HackerRank / Google Meet', difficulty: 'Very Hard' },
    tags: ['FAANG', 'Product', 'DSA Heavy', 'System Design'],
    salary: '₹45–80 LPA',
  },
  {
    id: 'amazon', name: 'Amazon', logo: '🟠', bg: '#ff9900', gradient: 'linear-gradient(135deg,#ff9900,#ff4500)',
    tagline: 'Work hard. Have fun. Make history.', category: ['product','mnc','service'],
    founded: '1994', employees: '1,500,000+', hq: 'Seattle, WA', openRoles: 412, difficulty: 'Hard',
    difficultyDots: 4, featured: true,
    description: 'Amazon is the world\'s largest e-commerce and cloud (AWS) company. Amazon\'s interview process is unique due to its focus on 16 Leadership Principles alongside technical skills.',
    eligibility: { cgpa: '6.5+ CGPA', branch: 'CS/IT/ECE preferred', backlogs: 'No active backlogs', degree: 'B.E./B.Tech/M.Tech/MCA/MBA (for non-tech roles)' },
    rounds: [
      { name: 'Online Assessment — 2 Coding Problems (70 min)', desc: '2 coding problems (easy to medium), 2 work style surveys based on Leadership Principles. Don\'t skip surveys!' },
      { name: 'Technical Phone Screen / Loop (1–2 rounds)', desc: 'Coding problem + LP (Leadership Principle) behavioral questions. Expect "Tell me about a time..." every round.' },
      { name: 'Virtual Onsite Loop — 4–5 Rounds', desc: 'Coding (2 rounds), System Design, Behavioral LP (every round has LP questions). Bar Raiser round is included.' },
    ],
    syllabus: ['Data Structures (Arrays, Trees, Graphs)', 'Dynamic Programming', 'System Design & Scalability', 'Amazon Leadership Principles (all 16)', 'Database & SQL', 'OOP', 'APIs & Web Services'],
    tips: [
      'Learn all 16 Amazon Leadership Principles — every round has LP questions',
      'Prepare STAR stories for each LP (Customer Obsession, Ownership, Invent & Simplify...)',
      'Amazon values pragmatic solutions — explain why your approach is best',
      'System design: practice scaling for millions of users',
      'The Bar Raiser can veto any hire — impress them on both tech AND LP',
      'Write clean, modular code even in interviews',
    ],
    examPattern: { type: 'OA + Virtual Loop', duration: '2–4 weeks', platform: 'HackerRank / Amazon Chime', difficulty: 'Hard' },
    tags: ['FAANG', 'Leadership Principles', 'System Design', 'LP Heavy'],
    salary: '₹35–60 LPA',
  },
  {
    id: 'microsoft', name: 'Microsoft', logo: '🪟', bg: '#00a4ef', gradient: 'linear-gradient(135deg,#00a4ef,#7fba00)',
    tagline: 'Empower every person and organization.', category: ['product','mnc'],
    founded: '1975', employees: '220,000+', hq: 'Redmond, WA', openRoles: 189, difficulty: 'Hard',
    difficultyDots: 4, featured: true,
    description: 'Microsoft is a leading technology company known for Windows, Office 365, Azure, and Xbox. Known for a collaborative interview culture with growth mindset emphasis.',
    eligibility: { cgpa: '7.0+ CGPA', branch: 'CS/IT/ECE/MCA', backlogs: 'No active backlogs', degree: 'B.E./B.Tech/M.Tech/MCA' },
    rounds: [
      { name: 'Online Coding Test', desc: '2–3 coding problems on HackerEarth/Microsoft platform. Medium difficulty, basic DSA focus.' },
      { name: 'Technical Round 1 (Data Structures)', desc: 'Arrays, Strings, Linked Lists, Trees. May include puzzles. 45–60 minutes.' },
      { name: 'Technical Round 2 (Design + Advanced DSA)', desc: 'System design concepts, advanced algorithms. May ask to write actual code.' },
      { name: 'Technical Round 3 (Problem Solving)', desc: 'Complex problems, optimization, sometimes asks about past projects in detail.' },
      { name: 'HR / Culture Fit Round', desc: 'Growth mindset questions, career goals, why Microsoft, leadership examples.' },
    ],
    syllabus: ['Arrays, Strings, Linked Lists', 'Trees, Heaps, Graphs', 'Dynamic Programming', 'System Design basics', 'OOP and Design Patterns', 'DBMS fundamentals', 'Puzzles and Brain Teasers'],
    tips: [
      'Microsoft values code correctness first — test your code with examples',
      'Explain your approach before coding',
      'Practice on HackerEarth (Microsoft\'s preferred platform)',
      'Dress professionally — even for virtual interviews',
      'Research Microsoft\'s recent innovations (Azure AI, Copilot, etc.)',
      'Show growth mindset — talk about learning from failures',
    ],
    examPattern: { type: 'Online Test + 3 Tech + 1 HR', duration: '3–5 weeks', platform: 'HackerEarth / Teams', difficulty: 'Hard' },
    tags: ['FAANG', 'Product', 'Growth Mindset', 'Azure'],
    salary: '₹30–55 LPA',
  },
  {
    id: 'flipkart', name: 'Flipkart', logo: '🛒', bg: '#2874f0', gradient: 'linear-gradient(135deg,#2874f0,#00b9f2)',
    tagline: 'India\'s homegrown e-commerce giant.', category: ['product','startup'],
    founded: '2007', employees: '30,000+', hq: 'Bangalore, India', openRoles: 89, difficulty: 'Medium-Hard',
    difficultyDots: 3, featured: false,
    description: 'Flipkart is India\'s largest e-commerce marketplace. Great company for engineers who want to build at massive scale for Indian users with exposure to unique challenges.',
    eligibility: { cgpa: '7.0+ CGPA', branch: 'CS/IT preferred, all branches', backlogs: 'No active backlogs', degree: 'B.E./B.Tech from Tier-1/Tier-2' },
    rounds: [
      { name: 'Online Coding Round', desc: '2 medium problems — DSA focused. Time limit 90 min. Platform: HackerRank.' },
      { name: 'Technical Interview 1', desc: 'DSA + problem solving. Linked Lists, Trees, DP, Graphs.' },
      { name: 'Technical Interview 2 (System Design)', desc: 'Design Flipkart\'s features: search, cart, recommendations. Expected for SDE-2+.' },
      { name: 'Culture/Managerial Round', desc: 'Past experience, situational questions, why Flipkart, teamwork scenarios.' },
    ],
    syllabus: ['Data Structures', 'Algorithms', 'Low-Level Design (OOP)', 'High-Level System Design', 'SQL Basics', 'Product Sense'],
    tips: [
      'Focus on Indian-scale problems in system design',
      'Be familiar with distributed systems, Kafka, microservices',
      'Show enthusiasm for building products for India',
      'Practice designing Flipkart features yourself before the interview',
    ],
    examPattern: { type: 'Online Test + 2 Tech + 1 Managerial', duration: '2–3 weeks', platform: 'HackerRank', difficulty: 'Medium-Hard' },
    tags: ['Product', 'E-commerce', 'Scale', 'India'],
    salary: '₹18–40 LPA',
  },
  {
    id: 'tcs', name: 'TCS', logo: '🏢', bg: '#0080ff', gradient: 'linear-gradient(135deg,#0080ff,#00c3a5)',
    tagline: 'Building a better future with technology.', category: ['service','mnc'],
    founded: '1968', employees: '600,000+', hq: 'Mumbai, India', openRoles: 3421, difficulty: 'Easy',
    difficultyDots: 2, featured: false,
    description: 'TCS is India\'s largest IT services company and one of the world\'s top IT employers. Hires in bulk through TCS NQT every year.',
    eligibility: { cgpa: '60%+ in 10th, 12th, and graduation', branch: 'Any engineering/science branch', backlogs: 'No active backlogs, no education gaps', degree: 'B.E./B.Tech/B.Sc./BCA/M.Tech/MCA' },
    rounds: [
      { name: 'TCS NQT (National Qualifier Test)', desc: 'Online test: Numerical Ability, Verbal Ability, Reasoning Ability, Programming Logic, Coding (2 problems). 180 minutes total.' },
      { name: 'Technical Interview', desc: 'Core concepts: DBMS, OS, CN, OOPS, one programming language, resume-based questions.' },
      { name: 'Managerial Round', desc: 'Project discussion, situational questions, flexibility about work location.' },
      { name: 'HR Round', desc: 'Background verification, salary discussion, bond (if applicable), relocation discussion.' },
    ],
    syllabus: ['Quantitative Aptitude', 'Verbal Ability', 'Logical Reasoning', 'Coding (C/Java/Python)', 'DBMS', 'OS', 'Computer Networks', 'OOP Concepts'],
    tips: [
      'Practice TCS NQT previous papers — pattern is consistent',
      'NQT coding section: 2 problems, medium difficulty',
      'Technical: be strong in your favorite language and core CS',
      'Always be clear about your location preference',
      'TCS hires in large numbers — clearing cutoff is primary challenge',
    ],
    examPattern: { type: 'TCS NQT + Technical + HR', duration: '1–2 months (campus)', platform: 'TCS iON', difficulty: 'Easy-Medium' },
    tags: ['Mass Recruiter', 'Service', 'Fresher Friendly', 'NQT'],
    salary: '₹3.36–7 LPA',
  },
  {
    id: 'infosys', name: 'Infosys', logo: '💼', bg: '#007cc3', gradient: 'linear-gradient(135deg,#007cc3,#00b4d8)',
    tagline: 'Navigate your next.', category: ['service','mnc'],
    founded: '1981', employees: '350,000+', hq: 'Bangalore, India', openRoles: 2134, difficulty: 'Easy-Medium',
    difficultyDots: 2, featured: false,
    description: 'Infosys is a global IT services and consulting company. Hires freshers through InfyTQ and campus placements with a focus on aptitude and communication.',
    eligibility: { cgpa: '60%+ in 10th, 12th, and graduation', branch: 'All engineering/science branches', backlogs: 'No backlogs', degree: 'B.E./B.Tech/B.Sc./MCA' },
    rounds: [
      { name: 'InfyTQ Certification / HackWithInfy', desc: 'Online aptitude + coding test. InfyTQ platform certification is recommended.' },
      { name: 'Online Assessment (Aptitude + Coding)', desc: 'Quantitative, Logical, Verbal + 2 coding problems (easy to medium).' },
      { name: 'Technical Interview', desc: 'Core CS fundamentals, one programming language, resume walkthrough, project discussion.' },
      { name: 'HR Interview', desc: 'Relocation, work ethics, strengths/weaknesses, salary discussion.' },
    ],
    syllabus: ['Aptitude (Quantitative, Logical, Verbal)', 'DSA basics', 'DBMS', 'OS Basics', 'Programming (Java/Python/C)', 'Project discussion'],
    tips: [
      'Get InfyTQ certified before placements — it gives priority',
      'Practice aptitude: TCS NQT and InfosysYS mock tests',
      'HR round is important — be confident and clear',
      'Know your resume projects inside-out',
    ],
    examPattern: { type: 'Online Test + Tech + HR', duration: '1–2 months', platform: 'InfyTQ / Mettl', difficulty: 'Easy-Medium' },
    tags: ['Mass Recruiter', 'Service', 'InfyTQ', 'Fresher Friendly'],
    salary: '₹3.6–9 LPA',
  },
  {
    id: 'razorpay', name: 'Razorpay', logo: '💳', bg: '#3d5afe', gradient: 'linear-gradient(135deg,#3d5afe,#651fff)',
    tagline: 'Powering India\'s payments revolution.', category: ['startup','fintech'],
    founded: '2014', employees: '2,800+', hq: 'Bangalore, India', openRoles: 54, difficulty: 'Hard',
    difficultyDots: 4, featured: false,
    description: 'Razorpay is India\'s leading payment gateway startup. Great place for engineers who want to build impactful fintech products at scale.',
    eligibility: { cgpa: 'No strict cutoff', branch: 'CS/IT preferred', backlogs: 'Not strictly checked for experienced', degree: 'Any technical degree or equivalent experience' },
    rounds: [
      { name: 'Coding Round (90 min)', desc: '2 medium/hard problems — DSA and problem solving focused.' },
      { name: 'Technical Round 1 (DSA + CS Fundamentals)', desc: 'Linked Lists, Trees, DP, DBMS, OS concepts, one in-depth coding problem.' },
      { name: 'Technical Round 2 (System Design)', desc: 'Design payment systems, rate limiters, webhooks. Focus on consistency, reliability, idempotency.' },
      { name: 'Managerial Round', desc: 'Past experience, impact, why fintech, culture fit.' },
    ],
    syllabus: ['Core DSA', 'System Design', 'Database Design', 'Payment Systems basics', 'Distributed Systems', 'Low-level Design'],
    tips: [
      'Understand how payment gateways work (PCI DSS, idempotency, retries)',
      'System design focus: build for consistency and reliability',
      'Show enthusiasm for fintech and payments',
      'Startup culture: show ownership and impact mindset',
    ],
    examPattern: { type: 'Coding + 2 Tech + Managerial', duration: '2–3 weeks', platform: 'HackerRank / Internal', difficulty: 'Hard' },
    tags: ['Startup', 'Fintech', 'System Design', 'Payments'],
    salary: '₹15–30 LPA',
  },
  {
    id: 'wipro', name: 'Wipro', logo: '⚙️', bg: '#341c64', gradient: 'linear-gradient(135deg,#341c64,#00c3a5)',
    tagline: 'Applying thought.', category: ['service','mnc'],
    founded: '1945', employees: '250,000+', hq: 'Bangalore, India', openRoles: 1987, difficulty: 'Easy',
    difficultyDots: 1, featured: false,
    description: 'Wipro is a global IT, consulting and business process services company. A great starting point for freshers entering the IT services industry.',
    eligibility: { cgpa: '60%+ in 10th, 12th, and graduation', branch: 'Any branch', backlogs: 'No active backlogs', degree: 'B.E./B.Tech/B.Sc./MCA' },
    rounds: [
      { name: 'Wipro National Talent Hunt (WNTH)', desc: 'Online aptitude test: Quantitative, Verbal, Logical + Written Communication.' },
      { name: 'Technical Interview', desc: 'Basic CS concepts, favorite language, project discussion, DBMS, OS basics.' },
      { name: 'HR Round', desc: 'Standard HR questions, relocation, career goals, company knowledge.' },
    ],
    syllabus: ['Basic Aptitude', 'Verbal English', 'Logical Reasoning', 'C/Java/Python basics', 'DBMS basics', 'Written Communication'],
    tips: [
      'Practice WritePro (Wipro\'s essay writing round carefully)',
      'Know your resume projects thoroughly',
      'Basic aptitude is sufficient — focus on speed and accuracy',
    ],
    examPattern: { type: 'WNTH + Technical + HR', duration: '1–2 months', platform: 'Wipro / Cocubes', difficulty: 'Easy' },
    tags: ['Mass Recruiter', 'Service', 'Fresher', 'WritePro'],
    salary: '₹3.5–6.5 LPA',
  },
  {
    id: 'zomato', name: 'Zomato', logo: '🍕', bg: '#e23744', gradient: 'linear-gradient(135deg,#e23744,#ff6b6b)',
    tagline: 'Feeding India, one order at a time.', category: ['startup'],
    founded: '2008', employees: '10,000+', hq: 'Gurugram, India', openRoles: 78, difficulty: 'Medium',
    difficultyDots: 3, featured: false,
    description: 'Zomato is India\'s leading food delivery and restaurant discovery platform. Known for a fast-paced startup culture and high-impact engineering problems.',
    eligibility: { cgpa: 'No strict cutoff', branch: 'CS/IT preferred', backlogs: 'Generally not checked', degree: 'Any technical degree' },
    rounds: [
      { name: 'Online Coding Test', desc: 'HackerRank test — 2 problems (easy to medium), 90 minutes.' },
      { name: 'Technical Round 1', desc: 'DSA problem solving, coding on Google Docs, time & space complexity discussion.' },
      { name: 'Technical Round 2 (Design)', desc: 'Design Zomato\'s features: order tracking, recommendation engine, etc.' },
      { name: 'Managerial Round', desc: 'Culture fit, past projects, why startups, handling ambiguity.' },
    ],
    syllabus: ['DSA (Arrays, Trees, Graphs, DP)', 'System Design', 'Database Design', 'Low-Level Design', 'Product Thinking'],
    tips: [
      'Show passion for food tech and consumer products',
      'System design: practice designing delivery tracking, search',
      'Startup culture: demonstrate ability to handle ambiguity',
    ],
    examPattern: { type: 'OA + 2 Tech + Managerial', duration: '2–3 weeks', platform: 'HackerRank', difficulty: 'Medium' },
    tags: ['Startup', 'Product', 'Food Tech'],
    salary: '₹20–40 LPA',
  },
  {
    id: 'paytm', name: 'Paytm', logo: '💰', bg: '#00baf2', gradient: 'linear-gradient(135deg,#00baf2,#0d47a1)',
    tagline: 'Karo Badlao.', category: ['startup','fintech'],
    founded: '2010', employees: '12,000+', hq: 'Noida, India', openRoles: 145, difficulty: 'Medium',
    difficultyDots: 3, featured: false,
    description: 'Paytm is India\'s largest digital payments company. It operates in payments, banking, financial services, and commerce.',
    eligibility: { cgpa: '6.5+ preferred', branch: 'CS/IT/ECE preferred', backlogs: 'No active backlogs', degree: 'B.E./B.Tech/M.Tech' },
    rounds: [
      { name: 'Online Test', desc: 'Aptitude + coding (2 problems). 90 minutes on HackerEarth.' },
      { name: 'Technical Interview 1', desc: 'DSA, OOPS, DBMS, project discussion.' },
      { name: 'Technical Interview 2', desc: 'System design, API design, scalability for payment systems.' },
      { name: 'HR Round', desc: 'Cultural fit, salary, relocation for Noida.' },
    ],
    syllabus: ['DSA', 'DBMS', 'OS', 'System Design', 'Payment Concepts', 'API Design'],
    tips: ['Understand digital payment concepts (UPI, wallets, NEFT)', 'Strong DBMS is must', 'Show knowledge of Paytm products'],
    examPattern: { type: 'OA + 2 Tech + HR', duration: '2–3 weeks', platform: 'HackerEarth', difficulty: 'Medium' },
    tags: ['Fintech', 'Startup', 'Payments', 'India'],
    salary: '₹10–25 LPA',
  },
];

let filteredCompanies = [...companiesData];

// ---- RENDER FEATURED ----
function renderFeaturedCompanies() {
  const grid = document.getElementById('featuredCompaniesGrid');
  if (!grid) return;
  const featured = companiesData.filter(c => c.featured);
  grid.innerHTML = featured.map(c => `
    <div class="featured-company-card" style="--company-gradient:${c.gradient};" onclick="openCompanyModal('${c.id}')">
      <div class="company-logo-lg" style="background:${c.bg}20;">${c.logo}</div>
      <div class="fc-name">${c.name}</div>
      <div class="fc-tagline">${c.tagline}</div>
      <div class="fc-stats">
        <div class="fc-stat">
          <div class="fc-stat-val" style="color:var(--accent-primary);">${c.openRoles}</div>
          <div class="fc-stat-label">Open Roles</div>
        </div>
        <div class="fc-stat">
          <div class="fc-stat-val" style="color:var(--accent-teal);">${c.salary}</div>
          <div class="fc-stat-label">Avg Package</div>
        </div>
        <div class="fc-stat">
          <div class="fc-stat-val" style="color:var(--accent-orange);">${c.employees}</div>
          <div class="fc-stat-label">Employees</div>
        </div>
      </div>
      <div class="fc-tags">
        ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="fc-difficulty">
        <span style="font-size:0.78rem;color:var(--text-muted);">Interview Difficulty</span>
        <div style="display:flex;align-items:center;gap:8px;">
          <div class="difficulty-meter">
            ${Array(5).fill(0).map((_, i) => `<div class="diff-dot ${i < c.difficultyDots ? (c.difficultyDots <= 2 ? 'filled-easy' : c.difficultyDots <= 3 ? 'filled-medium' : 'filled-hard') : ''}"></div>`).join('')}
          </div>
          <span style="font-size:0.78rem;font-weight:600;color:${c.difficultyDots <= 2 ? 'var(--accent-green)' : c.difficultyDots <= 3 ? 'var(--accent-orange)' : 'var(--accent-secondary)'};">${c.difficulty}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- RENDER ALL COMPANIES ----
function renderAllCompanies(companies = filteredCompanies) {
  const grid = document.getElementById('allCompaniesGrid');
  const count = document.getElementById('companiesCount');
  if (!grid) return;
  if (count) count.textContent = `${companies.length} companies`;
  grid.innerHTML = companies.map(c => `
    <div class="company-card-sm" onclick="openCompanyModal('${c.id}')">
      <div class="company-logo-md" style="background:${c.bg}20;">${c.logo}</div>
      <div class="cs-info">
        <div class="cs-name">${c.name}</div>
        <div class="cs-meta">${c.openRoles} jobs · ${c.difficulty}</div>
      </div>
      <div class="cs-arrow">→</div>
    </div>
  `).join('');
}

// ---- FILTER ----
function filterCompanies(cat, el) {
  document.querySelectorAll('#companyCategoryFilter .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filteredCompanies = cat === 'all' ? [...companiesData] : companiesData.filter(c => c.category.includes(cat));
  renderAllCompanies(filteredCompanies);
}

function searchCompanies() {
  const q = document.getElementById('companySearch').value.toLowerCase();
  const active = document.querySelector('#companyCategoryFilter .chip.active')?.dataset.cat || 'all';
  let base = active === 'all' ? companiesData : companiesData.filter(c => c.category.includes(active));
  filteredCompanies = base.filter(c => c.name.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q)));
  renderAllCompanies(filteredCompanies);
}

// ---- COMPANY MODAL ----
function openCompanyModal(id) {
  const c = companiesData.find(x => x.id === id);
  if (!c) return;
  const content = document.getElementById('companyModalContent');
  content.innerHTML = `
    <div class="company-modal-banner" style="background:${c.gradient};">
      <div class="company-modal-logo">${c.logo}</div>
    </div>
    <div style="margin-top:2rem;display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem;">
      <div style="flex:1;">
        <div class="modal-company-name">${c.name}</div>
        <div style="color:var(--text-muted);font-size:0.875rem;margin-bottom:0.75rem;">${c.tagline}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <button onclick="closeCompanyModal()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.4rem;padding:0;flex-shrink:0;">✕</button>
    </div>
    
    <p class="modal-company-desc">${c.description}</p>
    <div class="divider"></div>

    <!-- INFO GRID -->
    <div class="info-grid mb-6">
      <div class="info-item">
        <div class="info-label">📋 Eligibility</div>
        <div class="info-value"><b>CGPA:</b> ${c.eligibility.cgpa}<br><b>Branch:</b> ${c.eligibility.branch}<br><b>Backlogs:</b> ${c.eligibility.backlogs}</div>
      </div>
      <div class="info-item">
        <div class="info-label">📊 Exam Pattern</div>
        <div class="info-value"><b>Type:</b> ${c.examPattern.type}<br><b>Duration:</b> ${c.examPattern.duration}<br><b>Platform:</b> ${c.examPattern.platform}</div>
      </div>
      <div class="info-item">
        <div class="info-label">💰 Compensation</div>
        <div class="info-value"><b>Package:</b> ${c.salary}<br><b>HQ:</b> ${c.hq}<br><b>Employees:</b> ${c.employees}</div>
      </div>
      <div class="info-item">
        <div class="info-label">⚡ Interview Difficulty</div>
        <div class="info-value">
          <div class="difficulty-meter" style="gap:6px;margin-bottom:6px;">
            ${Array(5).fill(0).map((_, i) => `<div class="diff-dot" style="width:12px;height:12px;${i < c.difficultyDots ? `background:${c.difficultyDots <= 2 ? 'var(--accent-green)' : c.difficultyDots <= 3 ? 'var(--accent-orange)' : 'var(--accent-secondary)'}` : ''}"></div>`).join('')}
          </div>
          <strong>${c.difficulty}</strong>
        </div>
      </div>
    </div>

    <!-- HIRING PROCESS -->
    <div class="font-bold mb-4" style="font-size:1rem;">🔄 Hiring Process</div>
    <div class="process-steps mb-6">
      ${c.rounds.map((r, i) => `
        <div class="process-step">
          <div class="step-num">${i+1}</div>
          <div class="step-content">
            <div class="step-title">${r.name}</div>
            <div class="step-desc">${r.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- SYLLABUS -->
    <div class="font-bold mb-4" style="font-size:1rem;">📚 Exam Syllabus</div>
    <div class="syllabus-grid mb-6">
      ${c.syllabus.map(s => `<div class="syllabus-item">${s}</div>`).join('')}
    </div>

    <!-- TIPS -->
    <div class="font-bold mb-4" style="font-size:1rem;">💡 Insider Tips</div>
    <div class="tips-list mb-6">
      ${c.tips.map(t => `<div class="tip-item">${t}</div>`).join('')}
    </div>

    <div style="display:flex;gap:1rem;justify-content:flex-end;flex-wrap:wrap;">
      <button class="btn btn-secondary" onclick="closeCompanyModal()">Close</button>
      <a href="jobs.html" class="btn btn-ghost">View Jobs →</a>
      <button class="btn btn-primary" onclick="showToast('${c.name} added to watchlist!','success');closeCompanyModal()">⭐ Watch Company</button>
    </div>
  `;
  document.getElementById('companyModal').classList.add('open');
}

function closeCompanyModal() {
  document.getElementById('companyModal').classList.remove('open');
}

document.getElementById('companyModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeCompanyModal();
});

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedCompanies();
  renderAllCompanies();
});
