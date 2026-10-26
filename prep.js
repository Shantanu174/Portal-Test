/* ===== PREPARATION PAGE JAVASCRIPT ===== */

// ============ DATA ============
const aptitudeTopics = [
  { id: 'apt-1', name: 'Number System', icon: '🔢', bg: 'linear-gradient(135deg,#6c63ff,#a29bfe)', category: 'quantitative', problems: 45, difficulty: 'Medium',
    notes: ['LCM and HCF: LCM × HCF = Product of two numbers', 'Divisibility rules: 2(last digit even), 3(sum divisible by 3), 4(last 2 digits), 5(ends 0 or 5), 9(sum divisible by 9)', 'Remainder theorem: If f(x) is divided by (x-a), remainder = f(a)', 'Cyclicity of numbers: Unit digits follow a pattern in powers (1,2,3,4 cycle for base 2)', 'Prime numbers up to 100: 2,3,5,7,11,13,...,97 (25 primes total)'],
    formulae: ['HCF(a,b) × LCM(a,b) = a × b', 'Sum of 1 to n = n(n+1)/2', 'Sum of squares = n(n+1)(2n+1)/6'],
    practiceProblems: [
      { name: 'Find LCM of 12, 18, 24', difficulty: 'Easy' }, { name: 'Find remainder when 2^100 is divided by 7', difficulty: 'Medium' },
      { name: 'Which is largest? √2, ∛3, ⁴√5', difficulty: 'Hard' }, { name: 'If a number is divisible by both 12 and 35...', difficulty: 'Easy' },
      { name: 'Find the unit digit of 7^205', difficulty: 'Medium' }
    ]
  },
  { id: 'apt-2', name: 'Percentage', icon: '📊', bg: 'linear-gradient(135deg,#00d4aa,#00b894)', category: 'quantitative', problems: 38, difficulty: 'Easy',
    notes: ['% = (Part/Whole) × 100', 'Successive percentage change: If +a% then -b%: Net change = a - b - ab/100', 'Percentage increase: (New-Old)/Old × 100', 'Population formula: P(1 ± r/100)^n'],
    formulae: ['New value = Old × (1 + r/100)', 'Net % change = x + y + xy/100', 'x% of y = y% of x'],
    practiceProblems: [
      { name: 'A price increased by 20% and then decreased by 20%', difficulty: 'Easy' },
      { name: 'If A is 25% more than B, then B is what % less than A?', difficulty: 'Medium' },
      { name: 'Population grew 10% per year for 2 years from 10,000...', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-3', name: 'Profit & Loss', icon: '💹', bg: 'linear-gradient(135deg,#54a0ff,#0984e3)', category: 'quantitative', problems: 42, difficulty: 'Easy',
    notes: ['Profit = SP - CP', 'Loss = CP - SP', 'Profit % = (Profit/CP) × 100', 'SP = CP × (100 + P%)/100 for profit', 'SP = CP × (100 - L%)/100 for loss', 'Marked Price: If discount d% on MP, SP = MP × (100-d)/100'],
    formulae: ['SP = CP × (100 ± P/L%) / 100', 'Equivalent discount = x + y - xy/100', 'If goods sold at x% profit: SP/CP = (100+x)/100'],
    practiceProblems: [
      { name: 'A sold at 20% profit to B, B at 25% loss to C...', difficulty: 'Medium' },
      { name: 'Two articles sold at same price, one at 10% profit...', difficulty: 'Hard' },
    ]
  },
  { id: 'apt-4', name: 'Time & Work', icon: '⏱️', bg: 'linear-gradient(135deg,#fd79a8,#e84393)', category: 'quantitative', problems: 35, difficulty: 'Medium',
    notes: ['If A does work in n days, work/day = 1/n', 'Work done = Time × Rate', 'Pipes: Inlet fills, outlet empties', 'Efficiency: If A is twice efficient as B, A takes half the time'],
    formulae: ['Combined work = 1/A + 1/B', 'Time together = AB/(A+B)', 'Work remaining = 1 - Work done'],
    practiceProblems: [
      { name: 'A does work in 12 days, B in 18 days. Together in?', difficulty: 'Easy' },
      { name: 'Pipe A fills tank in 6hr, B empties in 8hr...', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-5', name: 'Ratio & Proportion', icon: '⚖️', bg: 'linear-gradient(135deg,#ff9f43,#ee5a24)', category: 'quantitative', problems: 30, difficulty: 'Easy',
    notes: ['Ratio a:b = a/b', 'Proportion: a:b :: c:d → ad = bc (product of extremes = product of means)', 'Compound ratio: a:b and c:d → ac:bd', 'Inverse proportion: xy = k (constant)'],
    formulae: ['a:b:c = x:y:z → a/(x), b/(y), c/(z) all equal', 'Mixture rule (alligation): Cheaper:Dearer = (Mean-Cheaper):(Dearer-Mean)'],
    practiceProblems: [
      { name: 'Divide ₹1200 in ratio 3:4:5', difficulty: 'Easy' },
      { name: 'If 3/5 of A = 2/3 of B, then A:B?', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-6', name: 'Speed, Distance & Time', icon: '🚀', bg: 'linear-gradient(135deg,#00d4aa,#6c63ff)', category: 'quantitative', problems: 40, difficulty: 'Medium',
    notes: ['Speed = Distance/Time', 'Average speed = 2xy/(x+y) when equal distances', 'Relative speed: Same dir = |s1-s2|, Opposite = s1+s2', 'Train crossing: Time = (L1+L2)/(S1±S2)'],
    formulae: ['D = S × T', 'Average speed = Total Distance / Total Time', 'Relative speed (opposite) = v1 + v2'],
    practiceProblems: [
      { name: 'A train 200m long crosses a platform 300m in 25s', difficulty: 'Easy' },
      { name: 'Two trains approach each other from 600km...', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-7', name: 'Probability', icon: '🎲', bg: 'linear-gradient(135deg,#a29bfe,#fd79a8)', category: 'quantitative', problems: 28, difficulty: 'Hard',
    notes: ['P(A) = Favorable / Total outcomes', '0 ≤ P(A) ≤ 1', 'P(A∪B) = P(A) + P(B) - P(A∩B)', 'P(A|B) = P(A∩B)/P(B)', 'Binomial: P(X=r) = nCr × p^r × q^(n-r)'],
    formulae: ['P(A\'') = 1 - P(A)', 'P(A∩B) = P(A) × P(B) if independent', 'nCr = n! / (r! × (n-r)!)'],
    practiceProblems: [
      { name: 'Two dice rolled. P(sum=7)?', difficulty: 'Easy' },
      { name: '5 red, 3 blue balls. Draw 2. P(both red)?', difficulty: 'Medium' },
      { name: 'P(at least one head in 3 coin tosses)', difficulty: 'Easy' },
    ]
  },
  { id: 'apt-8', name: 'Permutation & Combination', icon: '🧮', bg: 'linear-gradient(135deg,#ff6584,#ff9f43)', category: 'quantitative', problems: 32, difficulty: 'Hard',
    notes: ['Permutation = Arrangement (order matters)', 'Combination = Selection (order doesn\'t matter)', 'nPr = n!/(n-r)!', 'nCr = n!/(r!(n-r)!)', 'Circular arrangement: (n-1)!'],
    formulae: ['nPr = n! / (n-r)!', 'nCr = nPr / r!', 'nC0 = nCn = 1'],
    practiceProblems: [
      { name: 'Arrange 5 people in a row — how many ways?', difficulty: 'Easy' },
      { name: 'Choose 3 from 10 to form a committee', difficulty: 'Easy' },
      { name: '8 people sit at circular table — ways?', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-9', name: 'Logical Reasoning', icon: '🧠', bg: 'linear-gradient(135deg,#6c63ff,#00d4aa)', category: 'logical', problems: 50, difficulty: 'Medium',
    notes: ['Syllogisms: All/Some/No statements with conclusions', 'Blood Relations: Draw family tree', 'Seating Arrangements: Make grid/circle', 'Coding-Decoding: Find pattern (position shift, mirror, etc)', 'Statement & Assumptions: Assumption must be implicit'],
    formulae: ['Syllogism rules: A+A=A, A+E=E, I+A=I, E+A=O (reverse)'],
    practiceProblems: [
      { name: 'All birds are animals. Some animals are mammals...', difficulty: 'Medium' },
      { name: 'Code MANGO as NZMHN, what is APPLE?', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-10', name: 'Data Interpretation', icon: '📈', bg: 'linear-gradient(135deg,#00b894,#6c63ff)', category: 'di', problems: 60, difficulty: 'Medium',
    notes: ['Read all given data carefully before solving', 'Pie chart: % = (angle/360) × 100', 'Bar graph: Compare absolute values', 'Line graph: Identify trends', 'Always calculate % change: (New-Old)/Old × 100'],
    formulae: ['% of total = (Part/Total) × 100', '% change = [(New - Old) / Old] × 100'],
    practiceProblems: [
      { name: 'Sales data: Q1=400, Q2=600. % growth?', difficulty: 'Easy' },
      { name: 'Pie chart: Revenue split across 5 products...', difficulty: 'Medium' },
    ]
  },
  { id: 'apt-11', name: 'Reading Comprehension', icon: '📖', bg: 'linear-gradient(135deg,#fd79a8,#6c63ff)', category: 'verbal', problems: 45, difficulty: 'Medium',
    notes: ['Read the question first, then the passage', 'Main idea is usually in 1st or last paragraph', 'Vocabulary in context: use surrounding sentences', 'Inference questions: Don\'t go beyond what\'s stated', 'Tone questions: Look for emotional language'],
    formulae: [],
    practiceProblems: [
      { name: 'RC Passage: Environmental Impact of AI', difficulty: 'Medium' },
      { name: 'RC Passage: History of Silicon Valley', difficulty: 'Hard' },
    ]
  },
  { id: 'apt-12', name: 'Sentence Completion', icon: '✍️', bg: 'linear-gradient(135deg,#a29bfe,#00d4aa)', category: 'verbal', problems: 30, difficulty: 'Easy',
    notes: ['Context clues in surrounding words', 'Elimination: Remove options that don\'t fit tone', 'Look for contrast/support words (but, although, however)', 'Check grammatical consistency (singular/plural)'],
    formulae: [],
    practiceProblems: [
      { name: 'The scientist was _____ by the unexpected results...', difficulty: 'Easy' },
      { name: 'Despite his initial _____, he eventually agreed...', difficulty: 'Medium' },
    ]
  },
];

const dsaTopics = [
  { id: 'dsa-1', name: 'Arrays & Strings', icon: '📦', bg: 'linear-gradient(135deg,#6c63ff,#a29bfe)', category: 'data-structures', problems: 60, difficulty: 'Easy',
    notes: ['Array: contiguous memory, O(1) access, O(n) insert/delete', 'Two Pointer technique for pair problems', 'Sliding Window for subarray problems', 'Prefix Sum for range queries', 'String: immutable in Java/Python'],
    formulae: ['Sliding window time: O(n)', 'Two pointer: O(n) space O(1)'],
    practiceProblems: [
      { name: 'Two Sum', difficulty: 'Easy' }, { name: 'Maximum Subarray (Kadane\'s)', difficulty: 'Easy' },
      { name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' },
      { name: 'Trapping Rain Water', difficulty: 'Hard' }, { name: 'Rotate Array', difficulty: 'Medium' },
    ]
  },
  { id: 'dsa-2', name: 'Linked List', icon: '🔗', bg: 'linear-gradient(135deg,#00d4aa,#00b894)', category: 'data-structures', problems: 40, difficulty: 'Medium',
    notes: ['Singly: next pointer only', 'Doubly: next + prev pointers', 'Circular: last node → head', 'Fast & Slow pointer for cycle detection', 'Reverse: iterative vs recursive'],
    formulae: ['Cycle detection: Floyd\'s algorithm', 'Middle element: slow=1, fast=2 steps'],
    practiceProblems: [
      { name: 'Reverse a Linked List', difficulty: 'Easy' }, { name: 'Detect Cycle in Linked List', difficulty: 'Medium' },
      { name: 'Merge Two Sorted Lists', difficulty: 'Easy' }, { name: 'LRU Cache', difficulty: 'Hard' },
      { name: 'Find Middle of Linked List', difficulty: 'Easy' },
    ]
  },
  { id: 'dsa-3', name: 'Stack & Queue', icon: '📚', bg: 'linear-gradient(135deg,#ff9f43,#ee5a24)', category: 'data-structures', problems: 35, difficulty: 'Medium',
    notes: ['Stack: LIFO. Push/Pop O(1)', 'Queue: FIFO. Enqueue/Dequeue O(1)', 'Monotonic Stack: maintains increasing/decreasing order', 'Deque: operations from both ends', 'Expression evaluation: infix → postfix'],
    formulae: ['Monotonic stack: O(n) for Next Greater Element'],
    practiceProblems: [
      { name: 'Valid Parentheses', difficulty: 'Easy' }, { name: 'Next Greater Element', difficulty: 'Medium' },
      { name: 'Largest Rectangle in Histogram', difficulty: 'Hard' }, { name: 'Min Stack', difficulty: 'Medium' },
    ]
  },
  { id: 'dsa-4', name: 'Binary Trees', icon: '🌳', bg: 'linear-gradient(135deg,#54a0ff,#0984e3)', category: 'data-structures', problems: 50, difficulty: 'Medium',
    notes: ['Traversals: Inorder (L-Root-R), Preorder (Root-L-R), Postorder (L-R-Root)', 'Height = max(left, right) + 1', 'BST: left < root < right', 'BFS with queue, DFS with recursion/stack', 'Complete binary tree: all levels filled except last'],
    formulae: ['Height of balanced tree: O(log n)', 'Nodes in complete binary tree: 2^h to 2^(h+1)-1'],
    practiceProblems: [
      { name: 'Inorder Traversal', difficulty: 'Easy' }, { name: 'Maximum Depth of Binary Tree', difficulty: 'Easy' },
      { name: 'Lowest Common Ancestor', difficulty: 'Medium' }, { name: 'Binary Tree Level Order', difficulty: 'Medium' },
      { name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard' },
    ]
  },
  { id: 'dsa-5', name: 'Dynamic Programming', icon: '⚡', bg: 'linear-gradient(135deg,#fd79a8,#e84393)', category: 'algorithms', problems: 55, difficulty: 'Hard',
    notes: ['Identify overlapping subproblems', 'Define state clearly', 'Memoization: top-down, Tabulation: bottom-up', 'DP on strings: LCS, LIS, Edit Distance', 'DP on trees, DP on grids'],
    formulae: ['Fibonacci: dp[n] = dp[n-1] + dp[n-2]', 'LCS: dp[i][j] = dp[i-1][j-1]+1 if match, else max(dp[i-1][j], dp[i][j-1])'],
    practiceProblems: [
      { name: 'Climbing Stairs', difficulty: 'Easy' }, { name: 'Longest Common Subsequence', difficulty: 'Medium' },
      { name: '0/1 Knapsack', difficulty: 'Medium' }, { name: 'Edit Distance', difficulty: 'Hard' },
      { name: 'Matrix Chain Multiplication', difficulty: 'Hard' },
    ]
  },
  { id: 'dsa-6', name: 'Graphs', icon: '🕸️', bg: 'linear-gradient(135deg,#00b894,#00d4aa)', category: 'algorithms', problems: 45, difficulty: 'Hard',
    notes: ['BFS: level-by-level, queue, shortest path in unweighted', 'DFS: deep exploration, stack/recursion', 'Dijkstra: shortest path weighted (no negative edges)', 'Topological Sort: DAG (DFS based or Kahn\'s BFS)', 'Union-Find: connected components, cycle detection'],
    formulae: ['BFS: O(V+E)', 'Dijkstra: O((V+E) log V) with min-heap'],
    practiceProblems: [
      { name: 'Number of Islands', difficulty: 'Medium' }, { name: 'Clone Graph', difficulty: 'Medium' },
      { name: 'Course Schedule (Topological Sort)', difficulty: 'Medium' },
      { name: 'Dijkstra\'s Shortest Path', difficulty: 'Hard' }, { name: 'Word Ladder', difficulty: 'Hard' },
    ]
  },
  { id: 'dsa-7', name: 'Sorting & Searching', icon: '🔍', bg: 'linear-gradient(135deg,#a29bfe,#6c63ff)', category: 'algorithms', problems: 38, difficulty: 'Medium',
    notes: ['Binary Search: O(log n), only on sorted arrays', 'Merge Sort: O(n log n), stable', 'Quick Sort: O(n log n) avg, O(n²) worst', 'Counting Sort: O(n+k) for integer range', 'Search in rotated array: modified binary search'],
    formulae: ['Binary Search: mid = low + (high-low)/2', 'Merge Sort: T(n) = 2T(n/2) + O(n)'],
    practiceProblems: [
      { name: 'Binary Search', difficulty: 'Easy' }, { name: 'Search in Rotated Sorted Array', difficulty: 'Medium' },
      { name: 'Find Kth Largest Element', difficulty: 'Medium' }, { name: 'Merge Intervals', difficulty: 'Medium' },
    ]
  },
  { id: 'dsa-8', name: 'Heaps & Priority Queue', icon: '🏔️', bg: 'linear-gradient(135deg,#ff6584,#ff9f43)', category: 'data-structures', problems: 28, difficulty: 'Medium',
    notes: ['Min Heap: root is minimum', 'Max Heap: root is maximum', 'Heapify: O(n), insert/delete: O(log n)', 'Top K elements: use min-heap of size K', 'Merge K sorted lists: use min-heap'],
    formulae: ['Heapify: O(n)', 'Heap sort: O(n log n)'],
    practiceProblems: [
      { name: 'Kth Largest Element in Stream', difficulty: 'Easy' }, { name: 'Merge K Sorted Lists', difficulty: 'Hard' },
      { name: 'Find Median from Data Stream', difficulty: 'Hard' },
    ]
  },
  { id: 'dsa-9', name: 'Recursion & Backtracking', icon: '🔄', bg: 'linear-gradient(135deg,#6c63ff,#fd79a8)', category: 'algorithms', problems: 42, difficulty: 'Hard',
    notes: ['Recursion: function calls itself with smaller subproblem', 'Base case: termination condition (mandatory!)', 'Backtracking: try all paths, backtrack on dead end', 'N-Queens, Sudoku, Subset Sum use backtracking', 'Recursion vs Iteration: recursion uses call stack'],
    formulae: ['T(n) = T(n-1) + O(1) → O(n)', 'T(n) = 2T(n/2) + O(n) → O(n log n)'],
    practiceProblems: [
      { name: 'Subsets', difficulty: 'Medium' }, { name: 'N-Queens', difficulty: 'Hard' },
      { name: 'Combination Sum', difficulty: 'Medium' }, { name: 'Sudoku Solver', difficulty: 'Hard' },
    ]
  },
  { id: 'dsa-10', name: 'Bit Manipulation', icon: '🔀', bg: 'linear-gradient(135deg,#00d4aa,#a29bfe)', category: 'advanced', problems: 20, difficulty: 'Medium',
    notes: ['AND (&), OR (|), XOR (^), NOT (~)', 'Left shift (<<) = multiply by 2, Right shift (>>) = divide by 2', 'Check bit: (n >> i) & 1', 'Set bit: n | (1 << i)', 'Clear bit: n & ~(1 << i)', 'XOR trick: a ^ a = 0, a ^ 0 = a'],
    formulae: ['Count set bits: n & (n-1) removes lowest set bit', 'n & (-n) isolates lowest set bit'],
    practiceProblems: [
      { name: 'Number of 1 Bits', difficulty: 'Easy' }, { name: 'Single Number', difficulty: 'Easy' },
      { name: 'Reverse Bits', difficulty: 'Easy' }, { name: 'Power of Two', difficulty: 'Easy' },
    ]
  },
];

const techTopics = [
  { id: 'tech-1', name: 'Operating Systems', icon: '🖥️', bg: 'linear-gradient(135deg,#6c63ff,#a29bfe)', category: 'Core CS', problems: 80,
    notes: ['Process vs Thread: Process is heavy-weight, Thread is light-weight and share memory', 'Scheduling: FCFS, SJF, Round Robin, Priority', 'Deadlock conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait', 'Paging vs Segmentation', 'Virtual Memory: allows programs larger than RAM'],
    practiceProblems: [
      { name: 'What is a deadlock? How to prevent it?', difficulty: 'Medium' },
      { name: 'Explain paging and page faults', difficulty: 'Medium' },
      { name: 'Difference between process and thread', difficulty: 'Easy' },
      { name: 'What is thrashing?', difficulty: 'Medium' },
    ]
  },
  { id: 'tech-2', name: 'DBMS & SQL', icon: '🗄️', bg: 'linear-gradient(135deg,#00d4aa,#00b894)', category: 'Database', problems: 90,
    notes: ['ACID: Atomicity, Consistency, Isolation, Durability', 'Normalization: 1NF→2NF→3NF→BCNF eliminates redundancy', 'Indexing: B-Tree (default), Hash Index', 'Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS', 'Transactions: BEGIN, COMMIT, ROLLBACK'],
    practiceProblems: [
      { name: 'Write SQL to find 2nd highest salary', difficulty: 'Medium' },
      { name: 'Explain INNER vs LEFT JOIN with example', difficulty: 'Easy' },
      { name: 'What is indexing? When to avoid it?', difficulty: 'Medium' },
      { name: 'Design schema for e-commerce database', difficulty: 'Hard' },
    ]
  },
  { id: 'tech-3', name: 'Computer Networks', icon: '🌐', bg: 'linear-gradient(135deg,#54a0ff,#0984e3)', category: 'Core CS', problems: 70,
    notes: ['OSI 7 Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application', 'TCP vs UDP: TCP reliable, UDP faster', 'HTTP methods: GET, POST, PUT, DELETE, PATCH', 'DNS: Domain Name System maps names to IPs', 'Subnetting: /24 = 256 hosts, /16 = 65536 hosts'],
    practiceProblems: [
      { name: 'What happens when you type google.com?', difficulty: 'Medium' },
      { name: 'TCP vs UDP — when to use which?', difficulty: 'Easy' },
      { name: 'Explain the 3-way handshake', difficulty: 'Medium' },
    ]
  },
  { id: 'tech-4', name: 'System Design', icon: '🏗️', bg: 'linear-gradient(135deg,#ff9f43,#ee5a24)', category: 'System Design', problems: 30,
    notes: ['Start with requirements clarification', 'Capacity estimation: QPS, storage, bandwidth', 'Components: Load Balancer, Cache, CDN, Database, Message Queue', 'CAP Theorem: can\'t have Consistency+Availability+Partition tolerance all at once', 'Horizontal vs Vertical scaling'],
    practiceProblems: [
      { name: 'Design URL Shortener (like bit.ly)', difficulty: 'Medium' },
      { name: 'Design Twitter Feed', difficulty: 'Hard' },
      { name: 'Design a Rate Limiter', difficulty: 'Medium' },
      { name: 'Design WhatsApp Messaging System', difficulty: 'Hard' },
    ]
  },
  { id: 'tech-5', name: 'OOP Concepts', icon: '🧱', bg: 'linear-gradient(135deg,#fd79a8,#e84393)', category: 'Core CS', problems: 50,
    notes: ['Encapsulation: data hiding via private fields', 'Inheritance: IS-A relationship, code reuse', 'Polymorphism: Compile-time (overloading) and Runtime (overriding)', 'Abstraction: hide implementation, show interface', 'SOLID Principles: Single Resp, Open/Close, Liskov, Interface Segregation, Dependency Inversion'],
    practiceProblems: [
      { name: 'Difference between abstract class and interface', difficulty: 'Medium' },
      { name: 'Explain method overloading vs overriding', difficulty: 'Easy' },
      { name: 'Design Parking Lot using OOP', difficulty: 'Hard' },
    ]
  },
  { id: 'tech-6', name: 'Web Development', icon: '🌍', bg: 'linear-gradient(135deg,#00b894,#6c63ff)', category: 'Web Dev', problems: 60,
    notes: ['REST vs GraphQL: REST uses multiple endpoints, GraphQL uses single', 'HTTP Status codes: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error', 'Authentication: JWT, Session-based, OAuth', 'CORS: Cross-Origin Resource Sharing', 'Caching: Browser cache, Redis, CDN cache'],
    practiceProblems: [
      { name: 'Explain REST API principles', difficulty: 'Medium' },
      { name: 'How does JWT authentication work?', difficulty: 'Medium' },
      { name: 'What is CORS and how to handle it?', difficulty: 'Medium' },
    ]
  },
  { id: 'tech-7', name: 'Cloud & DevOps', icon: '☁️', bg: 'linear-gradient(135deg,#a29bfe,#00d4aa)', category: 'System Design', problems: 40,
    notes: ['IaaS vs PaaS vs SaaS', 'Docker: containerization, Dockerfile, docker-compose', 'Kubernetes: container orchestration, pods, services, deployments', 'CI/CD: Continuous Integration + Continuous Delivery/Deployment', 'AWS services: EC2, S3, RDS, Lambda, EKS, CloudFront'],
    practiceProblems: [
      { name: 'Difference between Docker and VM', difficulty: 'Easy' },
      { name: 'Explain CI/CD pipeline with example', difficulty: 'Medium' },
      { name: 'When would you use Lambda vs EC2?', difficulty: 'Medium' },
    ]
  },
  { id: 'tech-8', name: 'Programming Languages', icon: '💾', bg: 'linear-gradient(135deg,#ff6584,#a29bfe)', category: 'Core CS', problems: 45,
    notes: ['Java: JVM, garbage collection, multithreading, generics', 'Python: GIL, duck typing, generators, decorators', 'C++: pointers, memory management, STL', 'Garbage Collection: Mark & Sweep, Reference Counting', 'Compiled vs Interpreted languages'],
    practiceProblems: [
      { name: 'What is the GIL in Python?', difficulty: 'Medium' },
      { name: 'Explain Java memory model (heap vs stack)', difficulty: 'Medium' },
      { name: 'Pointers in C++ with examples', difficulty: 'Hard' },
    ]
  },
];

const hrData = [
  { category: 'Self Introduction', icon: '👤', questions: [
    { q: 'Tell me about yourself.', tip: 'Use the Past-Present-Future formula. Past: education/background. Present: current role/skills. Future: what you want to achieve. Keep it to 2 minutes.' },
    { q: 'Walk me through your resume.', tip: 'Focus on key highlights, quantify achievements (e.g., "improved performance by 40%"), and connect your experience to the role.' },
    { q: 'What are your strengths and weaknesses?', tip: 'For strengths: pick 2-3 relevant to the job with examples. For weakness: pick a real one but show you\'re working to improve it.' },
  ]},
  { category: 'Behavioral Questions (STAR Method)', icon: '🎯', questions: [
    { q: 'Tell me about a time you faced a challenging situation.', tip: 'Use STAR: Situation (context), Task (your responsibility), Action (what you did), Result (outcome with metrics). Be specific and quantify results.' },
    { q: 'Describe a time you worked in a team.', tip: 'Highlight collaboration, conflict resolution, and your specific contribution. Show you can both lead and follow.' },
    { q: 'Tell me about a time you failed.', tip: 'Don\'t say "I never fail." Pick a real failure, explain what you learned, and how you applied that learning. Shows self-awareness.' },
    { q: 'Describe a time you exceeded expectations.', tip: 'Quantify the impact. "I delivered the project 2 weeks ahead of schedule, saving ₹5L" is much stronger than "I worked hard."' },
  ]},
  { category: 'Career Goals & Motivation', icon: '🚀', questions: [
    { q: 'Where do you see yourself in 5 years?', tip: 'Align your goals with the company\'s direction. Show ambition but also commitment to growth within the organization.' },
    { q: 'Why do you want to join this company?', tip: 'Research the company! Mention specific products, values, or recent news. Show genuine interest, not just that "it\'s a good company."' },
    { q: 'Why should we hire you?', tip: 'Summarize your 3 strongest differentiators: skills, experience, and cultural fit. Make it about value you bring, not what you want.' },
    { q: 'What motivates you at work?', tip: 'Be authentic. Common genuine answers: solving complex problems, learning new tech, seeing user impact, mentoring others.' },
  ]},
  { category: 'Salary & Negotiation', icon: '💰', questions: [
    { q: 'What are your salary expectations?', tip: 'Research market rates. Give a range based on research (e.g., ₹12–16 LPA). Say "I\'m open to discussion based on the complete package."' },
    { q: 'Do you have any other offers?', tip: 'Be honest but strategic. If you have offers, mention them — it creates leverage. Don\'t lie, it will backfire.' },
    { q: 'Would you accept a lower salary to join us?', tip: 'Don\'t immediately agree. Ask about growth trajectory, bonus, equity, learning opportunities. Negotiate the complete package.' },
  ]},
  { category: 'Questions to Ask the Interviewer', icon: '❓', questions: [
    { q: 'What does a typical day look like for this role?', tip: 'This shows you\'re serious about the job and want to understand expectations.' },
    { q: 'What are the biggest challenges the team is currently facing?', tip: 'Shows strategic thinking and that you want to contribute meaningfully.' },
    { q: 'What does career growth look like here?', tip: 'Shows you\'re thinking long-term and are interested in staying and growing.' },
    { q: 'How do you measure success for this role in the first 90 days?', tip: 'Shows you\'re goal-oriented and want clarity on expectations.' },
  ]},
];

// ============ RENDER FUNCTIONS ============
function renderAptitudeTopics(topics = aptitudeTopics) {
  const grid = document.getElementById('aptTopicsGrid');
  if (!grid) return;
  grid.innerHTML = topics.map(t => `
    <div class="topic-card" onclick="openTopicModal('apt', '${t.id}')">
      <div class="topic-card-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="topic-icon" style="background:${t.bg};">${t.icon}</div>
          <div>
            <h4>${t.name}</h4>
            <div class="text-xs text-muted">${t.category}</div>
          </div>
        </div>
        <span class="badge ${t.difficulty === 'Easy' ? 'badge-easy' : t.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'}">${t.difficulty}</span>
      </div>
      <div class="topic-card-footer">
        <span class="topic-problems">📝 ${t.problems} problems</span>
        <button class="btn btn-ghost btn-sm">Study →</button>
      </div>
    </div>
  `).join('');
  renderAptTopicNav();
}

function renderAptTopicNav() {
  const nav = document.getElementById('aptTopicNav');
  if (!nav) return;
  nav.innerHTML = aptitudeTopics.map(t => `
    <div class="topic-nav-item" onclick="openTopicModal('apt','${t.id}')">
      <span>${t.icon} ${t.name}</span>
      <span class="topic-nav-count">${t.problems}</span>
    </div>
  `).join('');
}

function renderDSATopics(topics = dsaTopics) {
  const grid = document.getElementById('dsaTopicsGrid');
  if (!grid) return;
  grid.innerHTML = topics.map(t => `
    <div class="topic-card" onclick="openTopicModal('dsa','${t.id}')">
      <div class="topic-card-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="topic-icon" style="background:${t.bg};">${t.icon}</div>
          <div>
            <h4>${t.name}</h4>
            <div class="text-xs text-muted">${t.category}</div>
          </div>
        </div>
        <span class="badge ${t.difficulty === 'Easy' ? 'badge-easy' : t.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'}">${t.difficulty}</span>
      </div>
      <div class="topic-card-footer">
        <span class="topic-problems">🧩 ${t.problems} problems</span>
        <button class="btn btn-ghost btn-sm">Study →</button>
      </div>
    </div>
  `).join('');
  const nav = document.getElementById('dsaTopicNav');
  if (nav) nav.innerHTML = dsaTopics.map(t => `
    <div class="topic-nav-item" onclick="openTopicModal('dsa','${t.id}')">${t.icon} ${t.name}<span class="topic-nav-count">${t.problems}</span></div>
  `).join('');
}

function renderTechTopics() {
  const grid = document.getElementById('techTopicsGrid');
  if (!grid) return;
  grid.innerHTML = techTopics.map(t => `
    <div class="topic-card" onclick="openTopicModal('tech','${t.id}')">
      <div class="topic-card-header">
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="topic-icon" style="background:${t.bg};">${t.icon}</div>
          <div>
            <h4>${t.name}</h4>
            <div class="text-xs text-muted">${t.category}</div>
          </div>
        </div>
        <span class="badge badge-blue">${t.category}</span>
      </div>
      <div class="topic-card-footer">
        <span class="topic-problems">📋 ${t.problems} questions</span>
        <button class="btn btn-ghost btn-sm">Study →</button>
      </div>
    </div>
  `).join('');
  const nav = document.getElementById('techTopicNav');
  if (nav) nav.innerHTML = techTopics.map(t => `
    <div class="topic-nav-item" onclick="openTopicModal('tech','${t.id}')">${t.icon} ${t.name}<span class="topic-nav-count">${t.problems}</span></div>
  `).join('');
}

function renderHRContent() {
  const container = document.getElementById('hrContent');
  if (!container) return;
  container.innerHTML = hrData.map((cat, idx) => `
    <div class="hr-category">
      <div class="hr-category-header" onclick="toggleHR(${idx})">
        <div class="hr-category-title"><span>${cat.icon}</span>${cat.category}</div>
        <span id="hr-arrow-${idx}" style="transition:var(--transition-fast);color:var(--text-muted);">▼</span>
      </div>
      <div class="hr-category-body" id="hr-body-${idx}">
        ${cat.questions.map(q => `
          <div class="hr-question-item">
            <div class="hr-question">${q.q}</div>
            <div class="hr-tips">💡 ${q.tip}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleHR(idx) {
  const body = document.getElementById(`hr-body-${idx}`);
  const arrow = document.getElementById(`hr-arrow-${idx}`);
  if (body.classList.contains('open')) {
    body.classList.remove('open');
    arrow.style.transform = '';
  } else {
    body.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
  }
}

// ============ TAB SWITCHING ============
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.prep-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`tab-${tab}`)?.classList.remove('hidden');
  btn.classList.add('active');
}

// ============ FILTER FUNCTIONS ============
function filterApt(cat, el) {
  document.querySelectorAll('#tab-aptitude .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const filtered = cat === 'all' ? aptitudeTopics : aptitudeTopics.filter(t => t.category === cat);
  renderAptitudeTopics(filtered);
}

function filterDsa(cat, el) {
  document.querySelectorAll('#tab-dsa .chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const filtered = cat === 'all' ? dsaTopics : dsaTopics.filter(t => t.category === cat);
  renderDSATopics(filtered);
}

function searchTopics(type) {
  const q = document.getElementById(`${type}Search`)?.value.toLowerCase() || '';
  if (type === 'apt') renderAptitudeTopics(aptitudeTopics.filter(t => t.name.toLowerCase().includes(q)));
  else if (type === 'dsa') renderDSATopics(dsaTopics.filter(t => t.name.toLowerCase().includes(q)));
}

// ============ TOPIC MODAL ============
function openTopicModal(type, id) {
  const allTopics = { apt: aptitudeTopics, dsa: dsaTopics, tech: techTopics };
  const topic = allTopics[type]?.find(t => t.id === id);
  if (!topic) return;

  const content = document.getElementById('topicModalContent');
  content.innerHTML = `
    <div class="topic-modal-header">
      <div class="topic-modal-icon" style="background:${topic.bg};">${topic.icon}</div>
      <div style="flex:1;">
        <div class="topic-modal-title">${topic.name}</div>
        <div class="text-sm text-muted">${topic.category} · ${topic.problems} problems</div>
      </div>
      <button onclick="closeTopicModal()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.4rem;padding:0;">✕</button>
    </div>
    <div class="divider"></div>
    <div class="notes-section">
      <div class="notes-title">📌 Key Notes & Concepts</div>
      ${topic.notes.map(n => `<div class="note-item">${n}</div>`).join('')}
    </div>
    ${topic.formulae && topic.formulae.length > 0 ? `
    <div class="notes-section">
      <div class="notes-title">📐 Formulae</div>
      ${topic.formulae.map(f => `<div class="formula-box">${f}</div>`).join('')}
    </div>` : ''}
    <div class="notes-section">
      <div class="notes-title">🧩 Practice Problems</div>
      <div class="problems-list">
        ${topic.practiceProblems.map((p, i) => `
          <div class="problem-row">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="font-size:0.75rem;color:var(--text-muted);width:20px;">${i+1}.</span>
              <span class="problem-name">${p.name}</span>
            </div>
            <div class="problem-meta">
              <span class="badge ${p.difficulty === 'Easy' ? 'badge-easy' : p.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'}">${p.difficulty}</span>
              <button class="btn btn-sm btn-ghost" onclick="showToast('Opening problem...','info')" style="padding:4px 10px;font-size:0.75rem;">Solve →</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div style="display:flex;gap:1rem;justify-content:flex-end;margin-top:1rem;">
      <button class="btn btn-secondary" onclick="closeTopicModal()">Close</button>
      <button class="btn btn-primary" onclick="showToast('Added to practice list!','success')">📝 Add to Practice</button>
    </div>
  `;
  document.getElementById('topicModal').classList.add('open');
}

function closeTopicModal() {
  document.getElementById('topicModal').classList.remove('open');
}
document.getElementById('topicModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeTopicModal();
});

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderAptitudeTopics();
  renderDSATopics();
  renderTechTopics();
  renderHRContent();

  // Open HR category 0 by default
  toggleHR(0);

  // Handle URL hash for tab
  const hash = window.location.hash;
  if (hash === '#dsa') { document.querySelector('[data-tab="dsa"]')?.click(); }
  else if (hash === '#technical') { document.querySelector('[data-tab="technical"]')?.click(); }
  else if (hash === '#hr') { document.querySelector('[data-tab="hr"]')?.click(); }
});
