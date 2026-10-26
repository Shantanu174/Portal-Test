/* ===== DSA SHEET JAVASCRIPT ===== */

// ============ DSA DATA ============
const dsaSheet = [
  {
    id: 'arrays', name: 'Arrays & Strings', icon: '📦', color: '#6c63ff',
    problems: [
      { id: 'a1', name: 'Two Sum', difficulty: 'Easy', tags: ['Array','Hash Map'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/two-sum/' },
      { id: 'a2', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', tags: ['Array','Greedy'], companies: ['🔷','🟠','💳'], freq: 5, link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { id: 'a3', name: 'Maximum Subarray (Kadane\'s)', difficulty: 'Medium', tags: ['Array','DP'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 'a4', name: 'Product of Array Except Self', difficulty: 'Medium', tags: ['Array','Prefix Sum'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/product-of-array-except-self/' },
      { id: 'a5', name: 'Maximum Product Subarray', difficulty: 'Medium', tags: ['Array','DP'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/maximum-product-subarray/' },
      { id: 'a6', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', tags: ['Array','Binary Search'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
      { id: 'a7', name: 'Search in Rotated Sorted Array', difficulty: 'Medium', tags: ['Array','Binary Search'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { id: 'a8', name: 'Container With Most Water', difficulty: 'Medium', tags: ['Array','Two Pointer'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/container-with-most-water/' },
      { id: 'a9', name: 'Trapping Rain Water', difficulty: 'Hard', tags: ['Array','Two Pointer','Stack'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { id: 'a10', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', tags: ['String','Sliding Window'], companies: ['🔷','🟠','🪟','🎬'], freq: 5, link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { id: 'a11', name: 'Minimum Window Substring', difficulty: 'Hard', tags: ['String','Sliding Window'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/minimum-window-substring/' },
      { id: 'a12', name: 'Valid Anagram', difficulty: 'Easy', tags: ['String','Hash Map'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/valid-anagram/' },
      { id: 'a13', name: 'Group Anagrams', difficulty: 'Medium', tags: ['String','Hash Map'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/group-anagrams/' },
      { id: 'a14', name: 'Longest Palindromic Substring', difficulty: 'Medium', tags: ['String','DP'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
      { id: 'a15', name: '3Sum', difficulty: 'Medium', tags: ['Array','Two Pointer'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/3sum/' },
    ]
  },
  {
    id: 'linkedlist', name: 'Linked List', icon: '🔗', color: '#00d4aa',
    problems: [
      { id: 'l1', name: 'Reverse Linked List', difficulty: 'Easy', tags: ['Linked List','Recursion'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { id: 'l2', name: 'Detect Cycle in Linked List', difficulty: 'Easy', tags: ['Linked List','Two Pointer'], companies: ['🔷','🟠'], freq: 5, link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { id: 'l3', name: 'Find Start of Cycle', difficulty: 'Medium', tags: ['Linked List','Two Pointer'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
      { id: 'l4', name: 'Merge Two Sorted Lists', difficulty: 'Easy', tags: ['Linked List','Recursion'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { id: 'l5', name: 'Remove Nth Node From End', difficulty: 'Medium', tags: ['Linked List','Two Pointer'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      { id: 'l6', name: 'Reorder List', difficulty: 'Medium', tags: ['Linked List','Two Pointer'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/reorder-list/' },
      { id: 'l7', name: 'LRU Cache', difficulty: 'Medium', tags: ['Design','Hash Map','Linked List'], companies: ['🔷','🟠','🪟','🎬'], freq: 5, link: 'https://leetcode.com/problems/lru-cache/' },
      { id: 'l8', name: 'Add Two Numbers', difficulty: 'Medium', tags: ['Linked List','Math'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/add-two-numbers/' },
      { id: 'l9', name: 'Palindrome Linked List', difficulty: 'Easy', tags: ['Linked List','Two Pointer'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/palindrome-linked-list/' },
      { id: 'l10', name: 'Merge K Sorted Lists', difficulty: 'Hard', tags: ['Linked List','Heap','Divide & Conquer'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
    ]
  },
  {
    id: 'stackqueue', name: 'Stack & Queue', icon: '📚', color: '#ff9f43',
    problems: [
      { id: 'sq1', name: 'Valid Parentheses', difficulty: 'Easy', tags: ['Stack','String'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/valid-parentheses/' },
      { id: 'sq2', name: 'Min Stack', difficulty: 'Medium', tags: ['Stack','Design'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/min-stack/' },
      { id: 'sq3', name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', tags: ['Stack','Array'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
      { id: 'sq4', name: 'Generate Parentheses', difficulty: 'Medium', tags: ['Stack','Backtracking'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/generate-parentheses/' },
      { id: 'sq5', name: 'Daily Temperatures', difficulty: 'Medium', tags: ['Stack','Array','Monotonic'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/daily-temperatures/' },
      { id: 'sq6', name: 'Car Fleet', difficulty: 'Medium', tags: ['Stack','Sorting'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/car-fleet/' },
      { id: 'sq7', name: 'Largest Rectangle in Histogram', difficulty: 'Hard', tags: ['Stack','Array','Monotonic'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
      { id: 'sq8', name: 'Sliding Window Maximum', difficulty: 'Hard', tags: ['Queue','Deque','Sliding Window'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/sliding-window-maximum/' },
    ]
  },
  {
    id: 'trees', name: 'Binary Trees & BST', icon: '🌳', color: '#54a0ff',
    problems: [
      { id: 't1', name: 'Invert Binary Tree', difficulty: 'Easy', tags: ['Tree','BFS','DFS'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/invert-binary-tree/' },
      { id: 't2', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', tags: ['Tree','DFS','BFS'], companies: ['🔷','🟠'], freq: 5, link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { id: 't3', name: 'Diameter of Binary Tree', difficulty: 'Easy', tags: ['Tree','DFS'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
      { id: 't4', name: 'Balanced Binary Tree', difficulty: 'Easy', tags: ['Tree','DFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/balanced-binary-tree/' },
      { id: 't5', name: 'Same Tree', difficulty: 'Easy', tags: ['Tree','DFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/same-tree/' },
      { id: 't6', name: 'Subtree of Another Tree', difficulty: 'Easy', tags: ['Tree','DFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/subtree-of-another-tree/' },
      { id: 't7', name: 'Lowest Common Ancestor of BST', difficulty: 'Medium', tags: ['Tree','BST'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
      { id: 't8', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', tags: ['Tree','BFS'], companies: ['🔷','🟠','🪟','🎬'], freq: 5, link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { id: 't9', name: 'Binary Tree Right Side View', difficulty: 'Medium', tags: ['Tree','BFS'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
      { id: 't10', name: 'Count Good Nodes in Binary Tree', difficulty: 'Medium', tags: ['Tree','DFS'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/' },
      { id: 't11', name: 'Validate Binary Search Tree', difficulty: 'Medium', tags: ['Tree','DFS','BST'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
      { id: 't12', name: 'Kth Smallest Element in BST', difficulty: 'Medium', tags: ['Tree','DFS','BST'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
      { id: 't13', name: 'Construct Binary Tree from Preorder & Inorder', difficulty: 'Medium', tags: ['Tree','Array','Divide & Conquer'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
      { id: 't14', name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', tags: ['Tree','DFS','DP'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
      { id: 't15', name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', tags: ['Tree','BFS','String'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
    ]
  },
  {
    id: 'graphs', name: 'Graphs', icon: '🕸️', color: '#00b894',
    problems: [
      { id: 'g1', name: 'Number of Islands', difficulty: 'Medium', tags: ['Graph','DFS','BFS'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/number-of-islands/' },
      { id: 'g2', name: 'Clone Graph', difficulty: 'Medium', tags: ['Graph','BFS','DFS','Hash Map'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/clone-graph/' },
      { id: 'g3', name: 'Max Area of Island', difficulty: 'Medium', tags: ['Graph','DFS'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/max-area-of-island/' },
      { id: 'g4', name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', tags: ['Graph','DFS','BFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
      { id: 'g5', name: 'Surrounded Regions', difficulty: 'Medium', tags: ['Graph','DFS','BFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/surrounded-regions/' },
      { id: 'g6', name: 'Rotting Oranges', difficulty: 'Medium', tags: ['Graph','BFS'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/rotting-oranges/' },
      { id: 'g7', name: 'Walls and Gates', difficulty: 'Medium', tags: ['Graph','BFS'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/walls-and-gates/' },
      { id: 'g8', name: 'Course Schedule (Topological Sort)', difficulty: 'Medium', tags: ['Graph','DFS','Topological Sort'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/course-schedule/' },
      { id: 'g9', name: 'Course Schedule II', difficulty: 'Medium', tags: ['Graph','Topological Sort'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/course-schedule-ii/' },
      { id: 'g10', name: 'Graph Valid Tree', difficulty: 'Medium', tags: ['Graph','DFS','Union Find'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/graph-valid-tree/' },
      { id: 'g11', name: 'Redundant Connection', difficulty: 'Medium', tags: ['Graph','Union Find'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/redundant-connection/' },
      { id: 'g12', name: 'Word Ladder', difficulty: 'Hard', tags: ['Graph','BFS'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/word-ladder/' },
      { id: 'g13', name: 'Network Delay Time (Dijkstra)', difficulty: 'Medium', tags: ['Graph','Dijkstra','Heap'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/network-delay-time/' },
      { id: 'g14', name: 'Swim in Rising Water', difficulty: 'Hard', tags: ['Graph','Dijkstra','Union Find'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/swim-in-rising-water/' },
      { id: 'g15', name: 'Alien Dictionary', difficulty: 'Hard', tags: ['Graph','Topological Sort'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/alien-dictionary/' },
    ]
  },
  {
    id: 'dp', name: 'Dynamic Programming', icon: '⚡', color: '#fd79a8',
    problems: [
      { id: 'd1', name: 'Climbing Stairs', difficulty: 'Easy', tags: ['DP','Math'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/climbing-stairs/' },
      { id: 'd2', name: 'Min Cost Climbing Stairs', difficulty: 'Easy', tags: ['DP','Array'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/min-cost-climbing-stairs/' },
      { id: 'd3', name: 'House Robber', difficulty: 'Medium', tags: ['DP','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/house-robber/' },
      { id: 'd4', name: 'House Robber II', difficulty: 'Medium', tags: ['DP','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/house-robber-ii/' },
      { id: 'd5', name: 'Longest Palindromic Subsequence', difficulty: 'Medium', tags: ['DP','String'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/longest-palindromic-subsequence/' },
      { id: 'd6', name: 'Decode Ways', difficulty: 'Medium', tags: ['DP','String'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/decode-ways/' },
      { id: 'd7', name: 'Coin Change', difficulty: 'Medium', tags: ['DP','Greedy'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/coin-change/' },
      { id: 'd8', name: 'Maximum Product Subarray', difficulty: 'Medium', tags: ['DP','Array'], companies: ['🔷','🟠','🛒'], freq: 4, link: 'https://leetcode.com/problems/maximum-product-subarray/' },
      { id: 'd9', name: 'Word Break', difficulty: 'Medium', tags: ['DP','Hash Set'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/word-break/' },
      { id: 'd10', name: 'Longest Increasing Subsequence', difficulty: 'Medium', tags: ['DP','Binary Search'], companies: ['🔷','🟠'], freq: 5, link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
      { id: 'd11', name: 'Partition Equal Subset Sum', difficulty: 'Medium', tags: ['DP','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
      { id: 'd12', name: 'Unique Paths', difficulty: 'Medium', tags: ['DP','Grid'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/unique-paths/' },
      { id: 'd13', name: 'Longest Common Subsequence', difficulty: 'Medium', tags: ['DP','String'], companies: ['🔷','🟠'], freq: 5, link: 'https://leetcode.com/problems/longest-common-subsequence/' },
      { id: 'd14', name: 'Edit Distance', difficulty: 'Hard', tags: ['DP','String'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/edit-distance/' },
      { id: 'd15', name: 'Burst Balloons', difficulty: 'Hard', tags: ['DP','Divide & Conquer'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/burst-balloons/' },
    ]
  },
  {
    id: 'heap', name: 'Heaps & Priority Queue', icon: '🏔️', color: '#ff6584',
    problems: [
      { id: 'h1', name: 'Kth Largest Element in Array', difficulty: 'Medium', tags: ['Heap','Sorting'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
      { id: 'h2', name: 'Last Stone Weight', difficulty: 'Easy', tags: ['Heap','Array'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/last-stone-weight/' },
      { id: 'h3', name: 'K Closest Points to Origin', difficulty: 'Medium', tags: ['Heap','Sorting'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
      { id: 'h4', name: 'Task Scheduler', difficulty: 'Medium', tags: ['Heap','Greedy'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/task-scheduler/' },
      { id: 'h5', name: 'Design Twitter', difficulty: 'Medium', tags: ['Heap','Design','Hash Map'], companies: ['🔷','🎬'], freq: 3, link: 'https://leetcode.com/problems/design-twitter/' },
      { id: 'h6', name: 'Find Median from Data Stream', difficulty: 'Hard', tags: ['Heap','Two Heaps'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/find-median-from-data-stream/' },
    ]
  },
  {
    id: 'backtrack', name: 'Recursion & Backtracking', icon: '🔄', color: '#a29bfe',
    problems: [
      { id: 'b1', name: 'Subsets', difficulty: 'Medium', tags: ['Backtracking','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/subsets/' },
      { id: 'b2', name: 'Subsets II (with duplicates)', difficulty: 'Medium', tags: ['Backtracking','Array'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/subsets-ii/' },
      { id: 'b3', name: 'Combination Sum', difficulty: 'Medium', tags: ['Backtracking','Array'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/combination-sum/' },
      { id: 'b4', name: 'Combination Sum II', difficulty: 'Medium', tags: ['Backtracking','Array'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/combination-sum-ii/' },
      { id: 'b5', name: 'Permutations', difficulty: 'Medium', tags: ['Backtracking','Array'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/permutations/' },
      { id: 'b6', name: 'Word Search', difficulty: 'Medium', tags: ['Backtracking','Matrix'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/word-search/' },
      { id: 'b7', name: 'Palindrome Partitioning', difficulty: 'Medium', tags: ['Backtracking','DP'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/palindrome-partitioning/' },
      { id: 'b8', name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', tags: ['Backtracking','String'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
      { id: 'b9', name: 'N-Queens', difficulty: 'Hard', tags: ['Backtracking','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/n-queens/' },
    ]
  },
  {
    id: 'binsearch', name: 'Binary Search', icon: '🔍', color: '#00d4aa',
    problems: [
      { id: 'bs1', name: 'Binary Search', difficulty: 'Easy', tags: ['Binary Search','Array'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/binary-search/' },
      { id: 'bs2', name: 'Guess Number Higher or Lower', difficulty: 'Easy', tags: ['Binary Search'], companies: ['🔷'], freq: 3, link: 'https://leetcode.com/problems/guess-number-higher-or-lower/' },
      { id: 'bs3', name: 'Search a 2D Matrix', difficulty: 'Medium', tags: ['Binary Search','Matrix'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
      { id: 'bs4', name: 'Koko Eating Bananas', difficulty: 'Medium', tags: ['Binary Search'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/koko-eating-bananas/' },
      { id: 'bs5', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', tags: ['Binary Search','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
      { id: 'bs6', name: 'Search in Rotated Sorted Array', difficulty: 'Medium', tags: ['Binary Search','Array'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
      { id: 'bs7', name: 'Time Based Key-Value Store', difficulty: 'Medium', tags: ['Binary Search','Design'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/time-based-key-value-store/' },
      { id: 'bs8', name: 'Find Peak Element', difficulty: 'Medium', tags: ['Binary Search','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/find-peak-element/' },
      { id: 'bs9', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', tags: ['Binary Search','Array'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    ]
  },
  {
    id: 'trie', name: 'Trie', icon: '🌿', color: '#6c63ff',
    problems: [
      { id: 'tr1', name: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', tags: ['Trie','Design'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
      { id: 'tr2', name: 'Design Add and Search Words', difficulty: 'Medium', tags: ['Trie','DFS'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
      { id: 'tr3', name: 'Word Search II', difficulty: 'Hard', tags: ['Trie','Backtracking'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/word-search-ii/' },
    ]
  },
  {
    id: 'greedy', name: 'Greedy & Intervals', icon: '💡', color: '#ff9f43',
    problems: [
      { id: 'gr1', name: 'Maximum Subarray', difficulty: 'Easy', tags: ['Greedy','DP'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 'gr2', name: 'Jump Game', difficulty: 'Medium', tags: ['Greedy','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/jump-game/' },
      { id: 'gr3', name: 'Jump Game II', difficulty: 'Medium', tags: ['Greedy','Array'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/jump-game-ii/' },
      { id: 'gr4', name: 'Insert Interval', difficulty: 'Medium', tags: ['Greedy','Intervals'], companies: ['🔷','🟠','🎬'], freq: 4, link: 'https://leetcode.com/problems/insert-interval/' },
      { id: 'gr5', name: 'Merge Intervals', difficulty: 'Medium', tags: ['Greedy','Sorting','Intervals'], companies: ['🔷','🟠','🪟'], freq: 5, link: 'https://leetcode.com/problems/merge-intervals/' },
      { id: 'gr6', name: 'Non-overlapping Intervals', difficulty: 'Medium', tags: ['Greedy','Intervals'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/non-overlapping-intervals/' },
      { id: 'gr7', name: 'Meeting Rooms', difficulty: 'Easy', tags: ['Greedy','Sorting'], companies: ['🔷','🟠','🎬'], freq: 5, link: 'https://leetcode.com/problems/meeting-rooms/' },
      { id: 'gr8', name: 'Meeting Rooms II', difficulty: 'Medium', tags: ['Greedy','Heap','Intervals'], companies: ['🔷','🟠','🎬'], freq: 5, link: 'https://leetcode.com/problems/meeting-rooms-ii/' },
    ]
  },
  {
    id: 'bitmanip', name: 'Bit Manipulation', icon: '🔀', color: '#a29bfe',
    problems: [
      { id: 'bm1', name: 'Number of 1 Bits', difficulty: 'Easy', tags: ['Bit Manipulation'], companies: ['🔷','🟠'], freq: 4, link: 'https://leetcode.com/problems/number-of-1-bits/' },
      { id: 'bm2', name: 'Counting Bits', difficulty: 'Easy', tags: ['Bit Manipulation','DP'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/counting-bits/' },
      { id: 'bm3', name: 'Reverse Bits', difficulty: 'Easy', tags: ['Bit Manipulation'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/reverse-bits/' },
      { id: 'bm4', name: 'Missing Number', difficulty: 'Easy', tags: ['Bit Manipulation','Array'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/missing-number/' },
      { id: 'bm5', name: 'Single Number', difficulty: 'Easy', tags: ['Bit Manipulation','Array'], companies: ['🔷','🟠'], freq: 5, link: 'https://leetcode.com/problems/single-number/' },
      { id: 'bm6', name: 'Sum of Two Integers (no + operator)', difficulty: 'Medium', tags: ['Bit Manipulation','Math'], companies: ['🔷','🟠'], freq: 3, link: 'https://leetcode.com/problems/sum-of-two-integers/' },
      { id: 'bm7', name: 'Reverse Integer', difficulty: 'Medium', tags: ['Bit Manipulation','Math'], companies: ['🔷','🟠','🪟'], freq: 4, link: 'https://leetcode.com/problems/reverse-integer/' },
    ]
  },
];

// ============ STATE ============
let currentDiffFilter = 'all';
let currentSolvedFilter = 'all';
let currentSearch = '';

// Total count
const totalProblems = dsaSheet.reduce((s, t) => s + t.problems.length, 0);

// ============ PROGRESS ============
function getSolvedSet() { return JSON.parse(localStorage.getItem('dsa_solved_v2') || '[]'); }
function saveSolvedSet(set) { localStorage.setItem('dsa_solved_v2', JSON.stringify(set)); }

function toggleProblem(id, btn) {
  const solved = getSolvedSet();
  const idx = solved.indexOf(id);
  if (idx === -1) {
    solved.push(id);
    btn.classList.add('checked');
    btn.textContent = '✓';
    btn.closest('.problem-row-full').classList.add('solved-row');
    showToast('Problem marked as solved! 🎉', 'success');
  } else {
    solved.splice(idx, 1);
    btn.classList.remove('checked');
    btn.textContent = '';
    btn.closest('.problem-row-full').classList.remove('solved-row');
  }
  saveSolvedSet(solved);
  updateProgressUI();
}

function updateProgressUI() {
  const solved = getSolvedSet();
  const total = totalProblems;
  const pct = Math.round((solved.length / total) * 100);

  // Big ring
  const ring = document.getElementById('progressRingFill');
  const circumference = 414.69;
  if (ring) ring.style.strokeDashoffset = circumference - (circumference * solved.length / total);
  document.getElementById('progressNum')?.setAttribute('textContent', solved.length) || (document.getElementById('progressNum').textContent = solved.length);
  document.getElementById('progressTotal').textContent = `/ ${total}`;

  // Mini stats
  let easy = 0, medium = 0, hard = 0;
  dsaSheet.forEach(topic => {
    topic.problems.forEach(p => {
      if (solved.includes(p.id)) {
        if (p.difficulty === 'Easy') easy++;
        else if (p.difficulty === 'Medium') medium++;
        else hard++;
      }
    });
  });
  document.getElementById('easySolved').textContent = easy;
  document.getElementById('mediumSolved').textContent = medium;
  document.getElementById('hardSolved').textContent = hard;
  document.getElementById('pctSolved').textContent = pct + '%';
  document.getElementById('progressNum').textContent = solved.length;
}

function resetProgress() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    localStorage.removeItem('dsa_solved_v2');
    renderAll();
    updateProgressUI();
    showToast('Progress reset.', 'info');
  }
}

function showStats() {
  const solved = getSolvedSet();
  showToast(`Solved: ${solved.length}/${totalProblems} (${Math.round(solved.length/totalProblems*100)}%)`, 'info');
}

// ============ FILTER ============
function filterDifficulty(diff, el) {
  if (el) {
    document.querySelectorAll('#diffFilter .chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
  currentDiffFilter = diff;
  renderAll();
}

function filterSolved(state, el) {
  document.querySelectorAll('#diffFilter + .filter-chips .chip, .filter-chips:last-child .chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  currentSolvedFilter = state;
  renderAll();
}

function searchProblems() {
  currentSearch = document.getElementById('dsaSearch').value.toLowerCase();
  renderAll();
}

function problemVisible(p) {
  const solved = getSolvedSet();
  const matchDiff = currentDiffFilter === 'all' || p.difficulty.toLowerCase() === currentDiffFilter;
  const matchSolved = currentSolvedFilter === 'all' || (currentSolvedFilter === 'solved' ? solved.includes(p.id) : !solved.includes(p.id));
  const matchSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch) || p.tags.some(t => t.toLowerCase().includes(currentSearch));
  return matchDiff && matchSolved && matchSearch;
}

// ============ RENDER ============
function renderAll() {
  const solved = getSolvedSet();
  const content = document.getElementById('dsaContent');
  const sidebar = document.getElementById('topicSidebarList');
  if (!content) return;

  content.innerHTML = '';
  let sidebarHTML = '';

  dsaSheet.forEach(topic => {
    const visibleProblems = topic.problems.filter(problemVisible);
    const topicSolved = topic.problems.filter(p => solved.includes(p.id)).length;
    const pct = Math.round(topicSolved / topic.problems.length * 100);

    sidebarHTML += `
      <div class="topic-sidebar-item" onclick="document.getElementById('topic-${topic.id}')?.scrollIntoView({behavior:'smooth'})">
        <span>${topic.icon} ${topic.name}</span>
        <span class="topic-progress-sm"><span class="check">${topicSolved > 0 ? '●' : '○'}</span>${topicSolved}/${topic.problems.length}</span>
      </div>
    `;

    if (visibleProblems.length === 0) return;

    const section = document.createElement('div');
    section.className = 'topic-section';
    section.id = `topic-${topic.id}`;
    section.innerHTML = `
      <div class="topic-section-header" onclick="this.classList.toggle('collapsed')">
        <div class="topic-title-area">
          <span class="topic-emoji">${topic.icon}</span>
          <div>
            <div class="topic-name">${topic.name}</div>
            <div class="topic-count">${visibleProblems.length} problems · ${topicSolved} solved</div>
          </div>
        </div>
        <div class="topic-section-stats">
          <div>
            <div class="topic-solved-pct">${pct}% complete</div>
            <div class="topic-header-progress">
              <div class="topic-header-fill" style="width:${pct}%;"></div>
            </div>
          </div>
          <span style="color:var(--text-muted);font-size:0.9rem;margin-left:0.5rem;" id="arrow-${topic.id}">▾</span>
        </div>
      </div>
      <div class="topic-problems-table">
        <div class="problem-table-header">
          <span>#</span>
          <span>Problem</span>
          <span>Difficulty</span>
          <span class="prob-companies">Companies</span>
          <span class="prob-frequency">Frequency</span>
          <span>Actions</span>
        </div>
        ${visibleProblems.map((p, i) => {
          const isSolved = solved.includes(p.id);
          return `
          <div class="problem-row-full ${isSolved ? 'solved-row' : ''}" id="row-${p.id}">
            <div class="prob-check">
              <button class="prob-check-btn ${isSolved ? 'checked' : ''}" id="check-${p.id}" onclick="toggleProblem('${p.id}', this)" title="${isSolved ? 'Mark unsolved' : 'Mark solved'}">${isSolved ? '✓' : ''}</button>
            </div>
            <div class="prob-title">
              <a href="${p.link}" target="_blank" rel="noopener">${p.name}</a>
              <div class="prob-tags-row">${p.tags.map(t => `<span class="prob-tag-sm">${t}</span>`).join('')}</div>
            </div>
            <div>
              <span class="badge ${p.difficulty === 'Easy' ? 'badge-easy' : p.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'}">${p.difficulty}</span>
            </div>
            <div class="prob-companies">
              ${p.companies.map(c => `<div class="company-dot" title="${c}">${c}</div>`).join('')}
            </div>
            <div class="prob-frequency">
              <div class="freq-bar">
                <div class="freq-dots">
                  ${[1,2,3,4,5].map(n => `<div class="freq-dot ${n <= p.freq ? 'lit' : ''}"></div>`).join('')}
                </div>
              </div>
            </div>
            <div class="prob-actions">
              <button class="icon-btn" onclick="openNotes('${p.id}','${p.name.replace(/'/g,"\\'")}')" title="Add Notes">📝</button>
              <a href="${p.link}" target="_blank" rel="noopener" class="icon-btn" title="Open on LeetCode" style="display:flex;align-items:center;justify-content:center;text-decoration:none;">🔗</a>
            </div>
          </div>`;
        }).join('')}
      </div>
    `;
    content.appendChild(section);
  });

  if (sidebar) sidebar.innerHTML = sidebarHTML;
}

// ============ NOTES MODAL ============
function openNotes(id, name) {
  const key = `notes_${id}`;
  const existing = localStorage.getItem(key) || '';
  const content = document.getElementById('notesModalContent');
  content.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;">
      <div class="notes-problem-title">📝 Notes: ${name}</div>
      <button onclick="closeNotes()" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1.4rem;padding:0;">✕</button>
    </div>
    <div class="divider"></div>
    <p class="text-sm text-secondary mb-4" style="line-height:1.6;">Write your notes, approach, or key observations for this problem:</p>
    <textarea class="note-textarea" id="noteTextarea" placeholder="My approach:&#10;1. Use two pointers...&#10;&#10;Time complexity: O(n)&#10;Space: O(1)">${existing}</textarea>
    <div style="display:flex;gap:1rem;justify-content:flex-end;margin-top:1rem;">
      <button class="btn btn-secondary" onclick="closeNotes()">Cancel</button>
      <button class="btn btn-primary" onclick="saveNotes('${id}')">💾 Save Notes</button>
    </div>
  `;
  document.getElementById('notesModal').classList.add('open');
  setTimeout(() => document.getElementById('noteTextarea')?.focus(), 100);
}

function saveNotes(id) {
  const text = document.getElementById('noteTextarea')?.value || '';
  localStorage.setItem(`notes_${id}`, text);
  closeNotes();
  showToast('Notes saved! 💾', 'success');
}

function closeNotes() {
  document.getElementById('notesModal').classList.remove('open');
}

document.getElementById('notesModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeNotes();
});

// ============ PROGRESS RING SVG GRADIENT ============
function injectSVGGradient() {
  const svg = document.querySelector('.progress-ring');
  if (!svg) return;
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
  grad.setAttribute('id', 'progressGradient');
  grad.setAttribute('x1', '0%'); grad.setAttribute('y1', '0%');
  grad.setAttribute('x2', '100%'); grad.setAttribute('y2', '100%');
  const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop1.setAttribute('offset', '0%'); stop1.setAttribute('stop-color', '#6c63ff');
  const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
  stop2.setAttribute('offset', '100%'); stop2.setAttribute('stop-color', '#00d4aa');
  grad.appendChild(stop1); grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.insertBefore(defs, svg.firstChild);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  injectSVGGradient();
  renderAll();
  updateProgressUI();
});
