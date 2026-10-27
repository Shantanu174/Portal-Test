module.exports = {
  aptitude: [
    {
      id: 'apt-1',
      name: 'Quantitative Aptitude',
      icon: '🔢',
      topics: [
        { name: 'Number System & Divisibility', keyNotes: 'HCF × LCM = Product of two numbers. Last digit cycle of powers.', problemsCount: 45 },
        { name: 'Percentages & Profit/Loss', keyNotes: 'Net % change = x + y + (xy/100). Profit% = (Profit / CP) × 100.', problemsCount: 52 },
        { name: 'Time, Speed & Distance', keyNotes: 'Relative speed in same direction = (u - v); opposite direction = (u + v).', problemsCount: 40 },
        { name: 'Time & Work / Pipes & Cisterns', keyNotes: 'Work = Efficiency × Time. Unitary method is fastest.', problemsCount: 38 },
        { name: 'Permutation, Combination & Probability', keyNotes: 'nPr = n!/(n-r)!, nCr = n!/(r!(n-r)!). P(A) = favorable / total.', problemsCount: 35 }
      ]
    },
    {
      id: 'apt-2',
      name: 'Logical Reasoning',
      icon: '🧠',
      topics: [
        { name: 'Seating Arrangements (Linear & Circular)', keyNotes: 'Start from definitive positions (e.g. A sits 3rd to right of B).', problemsCount: 40 },
        { name: 'Syllogisms & Venn Diagrams', keyNotes: 'Draw minimal overlap Venn diagrams. Check possibility vs definite conclusions.', problemsCount: 30 },
        { name: 'Blood Relations & Family Tree', keyNotes: 'Use + for Male, - for Female, double lines for spouses, vertical for generations.', problemsCount: 25 },
        { name: 'Coding-Decoding & Series Completion', keyNotes: 'Number letters A=1 to Z=26 and opposite pair sum = 27 (A-Z, B-Y).', problemsCount: 35 }
      ]
    }
  ],
  technical: [
    {
      subject: 'Operating Systems (OS)',
      icon: '💻',
      keyConcepts: [
        'Process vs Thread: Process has independent memory space; threads share address space within a process.',
        'Deadlock Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait (Coffman Conditions).',
        'Virtual Memory & Paging: Page tables, TLB (Translation Lookaside Buffer), Page fault handling, LRU replacement.',
        'CPU Scheduling: FCFS, SJF, Round Robin (Quantum), Priority scheduling, Preemptive vs Non-preemptive.'
      ],
      sampleQuestions: [
        'What is the difference between a process and a thread?',
        'How does virtual memory work and what happens during a page fault?',
        'Explain Banker\'s algorithm for deadlock avoidance.'
      ]
    },
    {
      subject: 'Database Management Systems (DBMS & SQL)',
      icon: '🗄️',
      keyConcepts: [
        'ACID Properties: Atomicity, Consistency, Isolation, Durability.',
        'Normalization: 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF.',
        'Indexing: B-Tree and B+ Tree indexes, Clustered vs Non-Clustered index, composite index selectivity.',
        'SQL Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS JOIN.'
      ],
      sampleQuestions: [
        'Write a query to find the 2nd highest salary from an Employee table.',
        'Explain the difference between optimistic and pessimistic locking.',
        'Why are B+ trees preferred over binary search trees in database indexes?'
      ]
    },
    {
      subject: 'Computer Networks (CN)',
      icon: '🌐',
      keyConcepts: [
        'OSI Model (7 Layers): Physical, Data Link, Network, Transport, Session, Presentation, Application.',
        'TCP vs UDP: TCP is connection-oriented, reliable, with 3-way handshake; UDP is connectionless, fast.',
        'DNS Resolution: Browser cache -> OS cache -> Router -> ISP Recursive resolver -> Root/TLD servers.',
        'HTTP vs HTTPS: HTTPS uses SSL/TLS handshake for symmetric encryption with asymmetric key exchange.'
      ],
      sampleQuestions: [
        'What happens step-by-step when you type https://google.com into your browser?',
        'Explain TCP 3-way handshake and 4-way termination.',
        'What is the difference between TCP congestion control and flow control?'
      ]
    },
    {
      subject: 'Object Oriented Programming (OOP)',
      icon: '🧱',
      keyConcepts: [
        '4 Pillars: Encapsulation (data hiding), Abstraction (interfaces), Inheritance, Polymorphism (compile-time & runtime).',
        'SOLID Principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',
        'Design Patterns: Singleton, Factory, Observer, Builder, Strategy patterns.'
      ],
      sampleQuestions: [
        'Explain runtime polymorphism with code examples.',
        'What is the Diamond Problem in multiple inheritance and how do languages solve it?',
        'What are SOLID principles and why are they critical in production software?'
      ]
    }
  ],
  hr: [
    {
      title: 'Top HR Interview Questions',
      icon: '🤝',
      questions: [
        {
          q: 'Tell me about yourself.',
          framework: 'Present -> Past -> Future. Give a concise 90-second summary: current education/role, key projects & achievements, and why this specific role excites you.'
        },
        {
          q: 'What is your greatest strength and weakness?',
          framework: 'Strength: Back it up with a real project example. Weakness: Pick a genuine area of improvement, and immediately explain the active steps you are taking to master it.'
        },
        {
          q: 'Tell me about a time you faced a technical conflict in a team.',
          framework: 'Use the STAR method: Situation -> Task -> Action -> Result. Focus on constructive communication, data-driven decisions, and empathy.'
        },
        {
          q: 'Why do you want to join our company?',
          framework: 'Connect their company mission, tech stack, or engineering culture with your own learning goals and career trajectory. Show that you researched their products.'
        }
      ]
    }
  ]
};
