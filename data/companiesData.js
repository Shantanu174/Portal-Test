module.exports = [
  {
    id: 'google',
    name: 'Google',
    logo: '🔷',
    bg: '#4285f4',
    gradient: 'linear-gradient(135deg,#4285f4,#34a853)',
    tagline: 'Organize the world’s information and make it universally accessible.',
    category: ['product', 'mnc'],
    founded: '1998',
    employees: '182,000+',
    hq: 'Mountain View, CA',
    openRoles: 234,
    difficulty: 'Very Hard',
    difficultyDots: 5,
    featured: true,
    description: 'Google is a multinational tech giant specializing in search, cloud, AI, Android, and hardware. Known for its world-class engineering standards and rigorous interview rounds.',
    eligibility: {
      cgpa: '7.0+ CGPA preferred (No minimum for off-campus)',
      branch: 'CS, IT, ECE, EEE (All branches eligible with strong coding)',
      backlogs: 'Zero active backlogs at time of joining',
      degree: 'B.E. / B.Tech / M.Tech / MCA / Ph.D.'
    },
    rounds: [
      { name: '1. Online Assessment (OA)', desc: '2 coding problems on HackerRank / internal platform (90 mins). Typically LeetCode Medium/Hard.' },
      { name: '2. Technical Phone Screen', desc: '45-minute live coding session with a Google Engineer using Google Docs / CoderPad.' },
      { name: '3. Virtual Onsite Rounds (3–4 rounds)', desc: 'Algorithms & Data Structures (2 rounds), System Design or Architecture (1 round), Googliness & Leadership (1 round).' },
      { name: '4. Hiring Committee (HC)', desc: 'Independent committee reviews all feedback and decides candidate level & hire status.' }
    ],
    syllabus: ['Arrays & Sliding Window', 'Trees, BST & Graphs', 'Dynamic Programming', 'Tries & Disjoint Sets', 'System Design & Scalability', 'OOP & Concurrency'],
    tips: [
      'Think out loud: interviewers grade your thought process and communication just as much as your code.',
      'Always start by clarifying edge cases (null inputs, duplicate numbers, size limits).',
      'Analyze Time and Space complexity proactively before coding.'
    ]
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '🟠',
    bg: '#ff9900',
    gradient: 'linear-gradient(135deg,#ff9900,#ff5252)',
    tagline: 'Earth’s Most Customer-Centric Company.',
    category: ['product', 'mnc'],
    founded: '1994',
    employees: '1,500,000+',
    hq: 'Seattle, WA',
    openRoles: 512,
    difficulty: 'Hard',
    difficultyDots: 4,
    featured: true,
    description: 'Amazon is a global leader in e-commerce, cloud computing (AWS), digital streaming, and artificial intelligence.',
    eligibility: {
      cgpa: '6.5+ CGPA',
      branch: 'CS/IT/ECE preferred',
      backlogs: 'No active backlogs',
      degree: 'B.Tech / M.Tech / MCA'
    },
    rounds: [
      { name: '1. Online Assessment (OA1 & OA2)', desc: 'Part 1: 2 Coding questions (90 mins). Part 2: Work Simulation & Amazon Leadership Principles assessment.' },
      { name: '2. Technical Phone Screen', desc: '1 DSA problem + deep dive into 2-3 Amazon Leadership Principles.' },
      { name: '3. The Loop (4–5 Virtual Onsite Rounds)', desc: 'DSA (2 rounds), System Design / LLD (1 round), Bar Raiser round focusing heavily on culture and high standards.' }
    ],
    syllabus: ['Trees & Graphs (BFS/DFS)', 'Priority Queues & Heaps', 'Dynamic Programming', 'Low Level Design (LLD/OOP)', 'High Level Design (HLD)', 'Amazon 16 Leadership Principles'],
    tips: [
      'Prepare 2-3 stories using the STAR method (Situation, Task, Action, Result) for every Leadership Principle.',
      'Customer Obsession and Bias for Action are tested repeatedly in every round.',
      'Clean modular object-oriented code is expected for design rounds.'
    ]
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '🪟',
    bg: '#00a4ef',
    gradient: 'linear-gradient(135deg,#00a4ef,#7fba00)',
    tagline: 'Empower every person and every organization on the planet to achieve more.',
    category: ['product', 'mnc'],
    founded: '1975',
    employees: '221,000+',
    hq: 'Redmond, WA',
    openRoles: 380,
    difficulty: 'Hard',
    difficultyDots: 4,
    featured: true,
    description: 'Microsoft develops computer software, consumer electronics, personal computers, Azure cloud infrastructure, and AI tools.',
    eligibility: {
      cgpa: '7.0+ CGPA',
      branch: 'CS, IT, ECE, EEE',
      backlogs: 'No standing arrears',
      degree: 'B.Tech / M.Tech'
    },
    rounds: [
      { name: '1. Online Coding Round', desc: '3 coding questions on Codility (90 minutes).' },
      { name: '2. Technical Round 1', desc: 'Data structures, linked lists, trees, recursion, and project walkthrough.' },
      { name: '3. Technical Round 2', desc: 'System design, operating system internals, multithreading, and complex algorithmic problems.' },
      { name: '4. AA / Techno-HR Round', desc: 'As Appropriate (Director/Partner interview) testing vision, adaptability, and culture fit.' }
    ],
    syllabus: ['Linked Lists & Arrays', 'Binary Trees & Traversals', 'String Manipulation', 'Operating Systems & Concurrency', 'System Design & Microservices'],
    tips: [
      'Be ready to discuss past projects deeply — technologies used, bottlenecks faced, and trade-offs made.',
      'Microsoft values maintainable, well-commented, and robust production-ready code.'
    ]
  },
  {
    id: 'tcs',
    name: 'TCS (Tata Consultancy Services)',
    logo: '💼',
    bg: '#002060',
    gradient: 'linear-gradient(135deg,#002060,#1e3c72)',
    tagline: 'Building on belief.',
    category: ['service', 'mnc'],
    founded: '1968',
    employees: '614,000+',
    hq: 'Mumbai, India',
    openRoles: 1400,
    difficulty: 'Medium',
    difficultyDots: 3,
    featured: true,
    description: 'TCS is India’s largest IT services and consulting organization, offering entry profiles: Ninja (₹3.6 LPA), Digital (₹7.5 LPA), and Prime (₹9–11.5 LPA).',
    eligibility: {
      cgpa: '60% or 6.0 CGPA throughout 10th, 12th, and Degree',
      branch: 'All engineering disciplines eligible',
      backlogs: 'Maximum 1 active backlog permitted at assessment time',
      degree: 'B.E. / B.Tech / M.Tech / MCA'
    },
    rounds: [
      { name: '1. TCS NQT (National Qualifier Test)', desc: 'Cognitive (Numerical, Verbal, Reasoning) + Advanced Coding (2 problems in C/C++/Java/Python).' },
      { name: '2. Technical Interview', desc: 'Core CS fundamentals (OOPs, SQL queries, basic DSA, project discussion).' },
      { name: '3. HR & Managerial Round', desc: 'Relocation willingness, shift flexibility, communication, and background check.' }
    ],
    syllabus: ['Quantitative Aptitude', 'Logical Reasoning & Data Interpretation', 'Basic Programming & Dry Runs', 'SQL Queries & Joins', 'OOPs Concepts'],
    tips: [
      'Speed matters in Section 1 (Cognitive); negative marking policy must be kept in mind.',
      'Strong performance in Advanced Coding automatically upgrades you to the Digital or Prime tier interview.'
    ]
  }
];
