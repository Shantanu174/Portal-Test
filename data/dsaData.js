module.exports = [
  {
    id: 'arrays',
    name: 'Arrays & Strings',
    icon: '📦',
    color: '#6c63ff',
    problems: [
      { id: 'a1', name: 'Two Sum', difficulty: 'Easy', tags: ['Array', 'Hash Map'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/two-sum/' },
      { id: 'a2', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', tags: ['Array', 'Greedy'], companies: ['🔷', '🟠', '💳'], freq: 5, link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
      { id: 'a3', name: 'Maximum Subarray (Kadane’s Algorithm)', difficulty: 'Medium', tags: ['Array', 'DP'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/maximum-subarray/' },
      { id: 'a4', name: 'Product of Array Except Self', difficulty: 'Medium', tags: ['Array', 'Prefix Sum'], companies: ['🔷', '🟠'], freq: 4, link: 'https://leetcode.com/problems/product-of-array-except-self/' },
      { id: 'a5', name: 'Container With Most Water', difficulty: 'Medium', tags: ['Array', 'Two Pointer'], companies: ['🔷', '🟠'], freq: 4, link: 'https://leetcode.com/problems/container-with-most-water/' },
      { id: 'a6', name: 'Trapping Rain Water', difficulty: 'Hard', tags: ['Array', 'Two Pointer', 'Stack'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/trapping-rain-water/' },
      { id: 'a7', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', tags: ['String', 'Sliding Window'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { id: 'a8', name: 'Valid Anagram', difficulty: 'Easy', tags: ['String', 'Hash Map'], companies: ['🔷', '🟠'], freq: 3, link: 'https://leetcode.com/problems/valid-anagram/' }
    ]
  },
  {
    id: 'linkedlist',
    name: 'Linked List',
    icon: '🔗',
    color: '#00d4aa',
    problems: [
      { id: 'l1', name: 'Reverse Linked List', difficulty: 'Easy', tags: ['Linked List', 'Recursion'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/reverse-linked-list/' },
      { id: 'l2', name: 'Detect Cycle in Linked List', difficulty: 'Easy', tags: ['Linked List', 'Two Pointer'], companies: ['🔷', '🟠'], freq: 5, link: 'https://leetcode.com/problems/linked-list-cycle/' },
      { id: 'l3', name: 'Merge Two Sorted Lists', difficulty: 'Easy', tags: ['Linked List', 'Recursion'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
      { id: 'l4', name: 'Remove Nth Node From End', difficulty: 'Medium', tags: ['Linked List', 'Two Pointer'], companies: ['🔷', '🟠'], freq: 4, link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
      { id: 'l5', name: 'LRU Cache', difficulty: 'Medium', tags: ['Design', 'Hash Map', 'Linked List'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/lru-cache/' }
    ]
  },
  {
    id: 'trees',
    name: 'Trees & BST',
    icon: '🌳',
    color: '#ff9f43',
    problems: [
      { id: 't1', name: 'Invert Binary Tree', difficulty: 'Easy', tags: ['Tree', 'BFS', 'DFS'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/invert-binary-tree/' },
      { id: 't2', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', tags: ['Tree', 'DFS'], companies: ['🔷', '🟠'], freq: 5, link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
      { id: 't3', name: 'Lowest Common Ancestor of BST', difficulty: 'Medium', tags: ['Tree', 'BST'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
      { id: 't4', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', tags: ['Tree', 'BFS'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
      { id: 't5', name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', tags: ['Tree', 'Design'], companies: ['🔷', '🟠'], freq: 4, link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' }
    ]
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    icon: '⚡',
    color: '#ff6584',
    problems: [
      { id: 'dp1', name: 'Climbing Stairs', difficulty: 'Easy', tags: ['DP', 'Math'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/climbing-stairs/' },
      { id: 'dp2', name: 'Coin Change', difficulty: 'Medium', tags: ['DP', 'BFS'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://leetcode.com/problems/coin-change/' },
      { id: 'dp3', name: 'Longest Increasing Subsequence', difficulty: 'Medium', tags: ['DP', 'Binary Search'], companies: ['🔷', '🟠'], freq: 5, link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
      { id: 'dp4', name: '0/1 Knapsack Problem', difficulty: 'Medium', tags: ['DP'], companies: ['🔷', '🟠', '🪟'], freq: 5, link: 'https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1' },
      { id: 'dp5', name: 'Edit Distance', difficulty: 'Hard', tags: ['DP', 'String'], companies: ['🔷', '🟠', '🪟'], freq: 4, link: 'https://leetcode.com/problems/edit-distance/' }
    ]
  }
];
