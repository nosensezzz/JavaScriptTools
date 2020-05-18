# JavaScriptTools

**A library provides JavaScript algorithm functions for all uses**

- Priority Queue
- coming soon...




---

## Priority Queue Example 

```javascript
let isMinHeapTree = true;
let q = new PriorityQueue(isMinHeapTree); // true => min heap tree, false => max heap tree

q.push(5); // => [ null, 5 ]
q.push(3); // => [ null, 5, 3 ]
q.push(8); // => [ null, 8, 3, 5 ];
q.push(1); // => [ null, 8, 3, 5, 1 ]

q.pop(); // Pop: 8 => [ null, 5, 3, 1 ]
q.pop(); // Pop: 5 => [ null, 3, 1 ]
q.pop(); // Pop: 3 => [ null, 1 ]
q.pop(); // Pop: 1 => [ null ]
q.pop(); // Pop: null => [ null ]
```

---
