const quizData = {

  dsa: {
    1: [
{
question: "Which data structure follows FIFO?",
options: ["Stack", "Queue", "Tree", "Graph"],
answer: "Queue"
},
{
question: "Which data structure follows LIFO?",
options: ["Queue", "Stack", "Tree", "Heap"],
answer: "Stack"
},
{
question: "Time complexity of accessing an array element?",
options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
answer: "O(1)"
},
{
question: "Which traversal visits Root-Left-Right?",
options: ["Inorder", "Postorder", "Preorder", "Level Order"],
answer: "Preorder"
},
{
question: "Which data structure is used in BFS?",
options: ["Stack", "Queue", "Heap", "Tree"],
answer: "Queue"
},
{
question: "Worst case search in unsorted array?",
options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
answer: "O(n)"
},
{
question: "Which data structure stores key-value pairs?",
options: ["Array", "Stack", "Hash Map", "Queue"],
answer: "Hash Map"
},
{
question: "Heap is generally implemented using?",
options: ["Array", "Linked List", "Stack", "Queue"],
answer: "Array"
},
{
question: "Which traversal gives sorted output in BST?",
options: ["Preorder", "Postorder", "Inorder", "Level Order"],
answer: "Inorder"
},
{
question: "Tree is a ______ structure.",
options: ["Linear", "Hierarchical", "Circular", "Sequential"],
answer: "Hierarchical"
}
],
2: [
{
question: "Which data structure is best for recursion?",
options: ["Queue", "Array", "Stack", "Tree"],
answer: "Stack"
},
{
question: "What is the maximum number of children in a binary tree node?",
options: ["1", "2", "3", "Unlimited"],
answer: "2"
},
{
question: "What is the root node?",
options: ["Last node", "Leaf node", "Topmost node", "Middle node"],
answer: "Topmost node"
},
{
question: "Linear search complexity?",
options: ["O(log n)", "O(1)", "O(n)", "O(n²)"],
answer: "O(n)"
},
{
question: "Binary search requires?",
options: ["Hashing", "Sorting", "Recursion", "Queue"],
answer: "Sorting"
},
{
question: "Queue insertion operation is called?",
options: ["Push", "Insert", "Enqueue", "Append"],
answer: "Enqueue"
},
{
question: "Queue deletion operation is called?",
options: ["Delete", "Pop", "Dequeue", "Remove"],
answer: "Dequeue"
},
{
question: "Stack insertion operation?",
options: ["Push", "Pop", "Enqueue", "Delete"],
answer: "Push"
},
{
question: "Stack deletion operation?",
options: ["Insert", "Push", "Pop", "Append"],
answer: "Pop"
},
{
question: "Which structure uses nodes and pointers?",
options: ["Array", "Linked List", "Matrix", "Heap"],
answer: "Linked List"
}
],
3: [
{
question: "Binary search complexity?",
options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
answer: "O(log n)"
},
{
question: "Linked list insertion at beginning complexity?",
options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
answer: "O(1)"
},
{
question: "Height of a single node tree?",
options: ["0", "1", "2", "-1"],
answer: "0"
},
{
question: "Which traversal is Left-Root-Right?",
options: ["Inorder", "Preorder", "Postorder", "BFS"],
answer: "Inorder"
},
{
question: "Which traversal is Left-Right-Root?",
options: ["Inorder", "Preorder", "Postorder", "DFS"],
answer: "Postorder"
},
{
question: "DFS commonly uses?",
options: ["Queue", "Stack", "Heap", "Array"],
answer: "Stack"
},
{
question: "Graph consists of?",
options: ["Nodes only", "Edges only", "Vertices and Edges", "Arrays"],
answer: "Vertices and Edges"
},
{
question: "A tree with N nodes has how many edges?",
options: ["N", "N+1", "N-1", "2N"],
answer: "N-1"
},
{
question: "Circular queue solves?",
options: ["Sorting", "Memory wastage", "Searching", "Traversal"],
answer: "Memory wastage"
},
{
question: "Array size is?",
options: ["Dynamic", "Fixed", "Random", "Infinite"],
answer: "Fixed"
}
],
4: [
{
question: "Which sorting algorithm has average complexity O(n log n)?",
options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
answer: "Merge Sort"
},
{
question: "Which sorting algorithm is in-place?",
options: ["Merge Sort", "Quick Sort", "Counting Sort", "Radix Sort"],
answer: "Quick Sort"
},
{
question: "Worst case complexity of Bubble Sort?",
options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
answer: "O(n²)"
},
{
question: "Which sorting algorithm repeatedly selects minimum element?",
options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
answer: "Selection Sort"
},
{
question: "Merge Sort uses which technique?",
options: ["Greedy", "Divide and Conquer", "DP", "Backtracking"],
answer: "Divide and Conquer"
},
{
question: "Best case complexity of Insertion Sort?",
options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
answer: "O(n)"
},
{
question: "Quick Sort pivot divides array into?",
options: ["3 parts", "2 parts", "4 parts", "1 part"],
answer: "2 parts"
},
{
question: "Which sorting algorithm is stable?",
options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
answer: "Merge Sort"
},
{
question: "Heap Sort is based on?",
options: ["BST", "Heap", "Trie", "Graph"],
answer: "Heap"
},
{
question: "Time complexity of Merge Sort?",
options: ["O(n²)", "O(log n)", "O(n log n)", "O(n)"],
answer: "O(n log n)"
}
],
5: [
{
question: "AVL Tree is a?",
options: ["Balanced BST", "Heap", "Graph", "Trie"],
answer: "Balanced BST"
},
{
question: "Balance factor of AVL Tree is?",
options: ["0", "-1 to 1", "0 to 2", "1 to 3"],
answer: "-1 to 1"
},
{
question: "Heap property in Max Heap?",
options: ["Parent ≤ Child", "Parent ≥ Child", "Child ≥ Parent", "None"],
answer: "Parent ≥ Child"
},
{
question: "BST search complexity (average)?",
options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
answer: "O(log n)"
},
{
question: "Leaf nodes have how many children?",
options: ["0", "1", "2", "3"],
answer: "0"
},
{
question: "Which traversal uses queue?",
options: ["DFS", "Inorder", "Level Order", "Preorder"],
answer: "Level Order"
},
{
question: "Heap insertion complexity?",
options: ["O(log n)", "O(n)", "O(1)", "O(n²)"],
answer: "O(log n)"
},
{
question: "BST left subtree values are?",
options: ["Greater", "Smaller", "Equal", "Random"],
answer: "Smaller"
},
{
question: "Complete Binary Tree is used in?",
options: ["Heap", "Graph", "Trie", "Stack"],
answer: "Heap"
},
{
question: "Root node level is?",
options: ["0", "1", "2", "-1"],
answer: "0"
}
],
6: [
{
question: "Graph stored using?",
options: ["Adjacency List", "Stack", "Queue", "Heap"],
answer: "Adjacency List"
},
{
question: "BFS complexity?",
options: ["O(V+E)", "O(V²)", "O(E²)", "O(log n)"],
answer: "O(V+E)"
},
{
question: "DFS complexity?",
options: ["O(V+E)", "O(V²)", "O(E²)", "O(n)"],
answer: "O(V+E)"
},
{
question: "BFS uses?",
options: ["Stack", "Queue", "Heap", "Array"],
answer: "Queue"
},
{
question: "DFS uses?",
options: ["Queue", "Stack", "Heap", "Array"],
answer: "Stack"
},
{
question: "A graph without cycles is?",
options: ["DAG", "Tree", "Forest", "All of these"],
answer: "DAG"
},
{
question: "Topological sorting works on?",
options: ["Undirected Graph", "DAG", "Tree", "BST"],
answer: "DAG"
},
{
question: "Graph with weighted edges?",
options: ["Weighted Graph", "Tree", "DAG", "Heap"],
answer: "Weighted Graph"
},
{
question: "Connected graph means?",
options: ["All nodes reachable", "No cycles", "Directed", "Weighted"],
answer: "All nodes reachable"
},
{
question: "Minimum edges in tree with n nodes?",
options: ["n", "n-1", "n+1", "2n"],
answer: "n-1"
}
],
7: [
{
question: "Dijkstra algorithm finds?",
options: ["MST", "Shortest Path", "Cycle", "Traversal"],
answer: "Shortest Path"
},
{
question: "Dijkstra works with?",
options: ["Negative weights", "Positive weights", "Cycles only", "Trees"],
answer: "Positive weights"
},
{
question: "Kruskal algorithm finds?",
options: ["MST", "Shortest Path", "DFS", "BFS"],
answer: "MST"
},
{
question: "Prim algorithm is used for?",
options: ["Sorting", "MST", "Searching", "Hashing"],
answer: "MST"
},
{
question: "Union-Find is used in?",
options: ["Kruskal", "Prim", "DFS", "BFS"],
answer: "Kruskal"
},
{
question: "MST stands for?",
options: ["Minimum Spanning Tree", "Maximum Spanning Tree", "Minimum Search Tree", "Maximum Search Tree"],
answer: "Minimum Spanning Tree"
},
{
question: "Bellman Ford handles?",
options: ["Negative weights", "Only positive", "Trees", "BST"],
answer: "Negative weights"
},
{
question: "Kruskal uses sorting on?",
options: ["Vertices", "Edges", "Nodes", "Paths"],
answer: "Edges"
},
{
question: "Priority Queue used in?",
options: ["Dijkstra", "DFS", "BFS", "Binary Search"],
answer: "Dijkstra"
},
{
question: "Prim starts from?",
options: ["Any node", "Root", "Leaf", "Last node"],
answer: "Any node"
}
],
8: [
{
question: "DP stands for?",
options: ["Dynamic Programming", "Data Processing", "Dual Programming", "Dynamic Process"],
answer: "Dynamic Programming"
},
{
question: "DP avoids?",
options: ["Recursion", "Repeated Computation", "Sorting", "Searching"],
answer: "Repeated Computation"
},
{
question: "Memoization stores?",
options: ["Inputs", "Outputs", "Nodes", "Edges"],
answer: "Outputs"
},
{
question: "Tabulation is?",
options: ["Bottom-Up", "Top-Down", "Recursive", "Greedy"],
answer: "Bottom-Up"
},
{
question: "Fibonacci DP complexity?",
options: ["O(n)", "O(n²)", "O(log n)", "O(2ⁿ)"],
answer: "O(n)"
},
{
question: "0/1 Knapsack uses?",
options: ["DP", "Greedy", "DFS", "BFS"],
answer: "DP"
},
{
question: "LCS stands for?",
options: ["Longest Common Subsequence", "Largest Common String", "Longest Continuous Sequence", "Least Common Subsequence"],
answer: "Longest Common Subsequence"
},
{
question: "DP usually optimizes?",
options: ["Space/Time", "Input", "Output", "Sorting"],
answer: "Space/Time"
},
{
question: "Memoization approach is?",
options: ["Top-Down", "Bottom-Up", "Greedy", "Iterative"],
answer: "Top-Down"
},
{
question: "Coin Change is a?",
options: ["DP Problem", "Graph Problem", "Sorting Problem", "Heap Problem"],
answer: "DP Problem"
}
],
9: [
{
question: "Trie is mainly used for?",
options: ["Strings", "Graphs", "Trees", "Sorting"],
answer: "Strings"
},
{
question: "Segment Tree query complexity?",
options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
answer: "O(log n)"
},
{
question: "Fenwick Tree is also called?",
options: ["BIT", "BST", "AVL", "Trie"],
answer: "BIT"
},
{
question: "Trie search complexity?",
options: ["O(length)", "O(n)", "O(log n)", "O(n²)"],
answer: "O(length)"
},
{
question: "Segment Tree supports?",
options: ["Range Queries", "Sorting", "Searching", "Hashing"],
answer: "Range Queries"
},
{
question: "Fenwick Tree is used for?",
options: ["Prefix Sum", "Sorting", "Graph", "DFS"],
answer: "Prefix Sum"
},
{
question: "Trie node contains?",
options: ["Characters", "Integers", "Edges", "Weights"],
answer: "Characters"
},
{
question: "BIT stands for?",
options: ["Binary Indexed Tree", "Balanced Indexed Tree", "Binary Interval Tree", "Balanced Interval Tree"],
answer: "Binary Indexed Tree"
},
{
question: "Segment Tree build complexity?",
options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
answer: "O(n)"
},
{
question: "Trie is useful in?",
options: ["Autocomplete", "Sorting", "MST", "DP"],
answer: "Autocomplete"
}
],
10: [
{
question: "KMP algorithm is used for?",
options: ["Pattern Matching", "Sorting", "Searching BST", "MST"],
answer: "Pattern Matching"
},
{
question: "KMP complexity?",
options: ["O(n+m)", "O(n²)", "O(log n)", "O(n log n)"],
answer: "O(n+m)"
},
{
question: "Rabin-Karp uses?",
options: ["Hashing", "Heap", "DP", "Graph"],
answer: "Hashing"
},
{
question: "Union Find solves?",
options: ["Connectivity", "Sorting", "Traversal", "Searching"],
answer: "Connectivity"
},
{
question: "Path Compression improves?",
options: ["Union Find", "Heap", "Trie", "BST"],
answer: "Union Find"
},
{
question: "Disjoint Set operations are?",
options: ["Union & Find", "Push & Pop", "Insert & Delete", "BFS & DFS"],
answer: "Union & Find"
},
{
question: "Rabin-Karp average complexity?",
options: ["O(n+m)", "O(n²)", "O(log n)", "O(n log n)"],
answer: "O(n+m)"
},
{
question: "KMP preprocessing builds?",
options: ["LPS Array", "Heap", "Trie", "BIT"],
answer: "LPS Array"
},
{
question: "Union Find is useful in?",
options: ["Cycle Detection", "Sorting", "Traversal", "Searching"],
answer: "Cycle Detection"
},
{
question: "Which is an advanced string matching algorithm?",
options: ["KMP", "Bubble Sort", "DFS", "Heapify"],
answer: "KMP"
}
]
  },
oops: {
  1: [
    {
      question: "What does OOP stand for?",
      options: [
        "Object Oriented Programming",
        "Object Ordered Programming",
        "Only Object Programming",
        "Object Optimized Programming"
      ],
      answer: "Object Oriented Programming"
    },
    {
      question: "Which language supports OOP?",
      options: [
        "C",
        "Java",
        "Assembly",
        "HTML"
      ],
      answer: "Java"
    },
    {
      question: "Which of the following is a class?",
      options: [
        "Car",
        "BMW",
        "Engine No. 123",
        "MyCar"
      ],
      answer: "Car"
    },
    {
      question: "An object is an instance of?",
      options: [
        "Method",
        "Class",
        "Function",
        "Variable"
      ],
      answer: "Class"
    },
    {
      question: "Which keyword is used to create an object in Java?",
      options: [
        "create",
        "new",
        "object",
        "class"
      ],
      answer: "new"
    },
    {
      question: "Which OOP concept binds data and methods together?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
      ],
      answer: "Encapsulation"
    },
    {
      question: "Which access modifier allows access everywhere?",
      options: [
        "private",
        "protected",
        "public",
        "default"
      ],
      answer: "public"
    },
    {
      question: "Which feature allows code reuse?",
      options: [
        "Inheritance",
        "Abstraction",
        "Compilation",
        "Overloading"
      ],
      answer: "Inheritance"
    },
    {
      question: "What is the blueprint of an object called?",
      options: [
        "Class",
        "Method",
        "Function",
        "Interface"
      ],
      answer: "Class"
    },
    {
      question: "Which of the following is NOT an OOP concept?",
      options: [
        "Encapsulation",
        "Polymorphism",
        "Compilation",
        "Inheritance"
      ],
      answer: "Compilation"
    }
  ],
  2: [
  {
    question: "What is a constructor?",
    options: [
      "A special member function used to initialize objects",
      "A function used to destroy objects",
      "A function used to copy objects",
      "A normal member function"
    ],
    answer: "A special member function used to initialize objects"
  },
  {
    question: "What is the name of a constructor?",
    options: [
      "Same as class name",
      "Any valid identifier",
      "Starts with init",
      "Same as object name"
    ],
    answer: "Same as class name"
  },
  {
    question: "When is a constructor called?",
    options: [
      "When an object is created",
      "When an object is deleted",
      "When a method is called",
      "When a class is inherited"
    ],
    answer: "When an object is created"
  },
  {
    question: "Which constructor takes no arguments?",
    options: [
      "Default Constructor",
      "Parameterized Constructor",
      "Copy Constructor",
      "Virtual Constructor"
    ],
    answer: "Default Constructor"
  },
  {
    question: "Which access specifier makes members accessible only within the same class?",
    options: [
      "public",
      "protected",
      "private",
      "default"
    ],
    answer: "private"
  },
  {
    question: "Which access specifier allows access from derived classes?",
    options: [
      "private",
      "public",
      "protected",
      "friend"
    ],
    answer: "protected"
  },
  {
    question: "What is the default access specifier in a C++ class?",
    options: [
      "public",
      "private",
      "protected",
      "friend"
    ],
    answer: "private"
  },
  {
    question: "What is a static data member?",
    options: [
      "Shared by all objects of a class",
      "Created separately for each object",
      "Can only be accessed by constructors",
      "Can only be private"
    ],
    answer: "Shared by all objects of a class"
  },
  {
    question: "What does the 'this' pointer refer to?",
    options: [
      "Current object",
      "Parent class object",
      "Static member",
      "Derived class object"
    ],
    answer: "Current object"
  },
  {
    question: "Which keyword is used to access the current object inside a class?",
    options: [
      "self",
      "current",
      "this",
      "object"
    ],
    answer: "this"
  }
],
3: [
  {
    question: "What is inheritance in OOP?",
    options: [
      "Process of acquiring properties of another class",
      "Process of hiding data",
      "Process of creating objects",
      "Process of overloading functions"
    ],
    answer: "Process of acquiring properties of another class"
  },
  {
    question: "Which class inherits properties from another class?",
    options: [
      "Base Class",
      "Parent Class",
      "Derived Class",
      "Friend Class"
    ],
    answer: "Derived Class"
  },
  {
    question: "The class whose properties are inherited is called?",
    options: [
      "Derived Class",
      "Child Class",
      "Sub Class",
      "Base Class"
    ],
    answer: "Base Class"
  },
  {
    question: "Which type of inheritance has one base class and one derived class?",
    options: [
      "Multiple Inheritance",
      "Single Inheritance",
      "Hierarchical Inheritance",
      "Hybrid Inheritance"
    ],
    answer: "Single Inheritance"
  },
  {
    question: "Which inheritance involves one derived class inheriting from multiple base classes?",
    options: [
      "Multilevel Inheritance",
      "Single Inheritance",
      "Multiple Inheritance",
      "Hierarchical Inheritance"
    ],
    answer: "Multiple Inheritance"
  },
  {
    question: "Which inheritance forms a chain of classes?",
    options: [
      "Hierarchical Inheritance",
      "Hybrid Inheritance",
      "Multiple Inheritance",
      "Multilevel Inheritance"
    ],
    answer: "Multilevel Inheritance"
  },
  {
    question: "In which inheritance do multiple derived classes inherit from one base class?",
    options: [
      "Hierarchical Inheritance",
      "Multiple Inheritance",
      "Multilevel Inheritance",
      "Hybrid Inheritance"
    ],
    answer: "Hierarchical Inheritance"
  },
  {
    question: "What is the main advantage of inheritance?",
    options: [
      "Code Reusability",
      "Data Hiding",
      "Compilation",
      "Memory Allocation"
    ],
    answer: "Code Reusability"
  },
  {
    question: "Which access mode keeps public members of the base class public in the derived class?",
    options: [
      "Private Inheritance",
      "Protected Inheritance",
      "Public Inheritance",
      "Friend Inheritance"
    ],
    answer: "Public Inheritance"
  },
  {
    question: "Which inheritance combines two or more types of inheritance?",
    options: [
      "Single Inheritance",
      "Hybrid Inheritance",
      "Multiple Inheritance",
      "Hierarchical Inheritance"
    ],
    answer: "Hybrid Inheritance"
  }
],
4: [
  {
    question: "What is polymorphism?",
    options: [
      "One interface, multiple implementations",
      "Data hiding",
      "Code duplication",
      "Memory allocation"
    ],
    answer: "One interface, multiple implementations"
  },
  {
    question: "Function overloading is an example of?",
    options: [
      "Runtime Polymorphism",
      "Compile Time Polymorphism",
      "Inheritance",
      "Abstraction"
    ],
    answer: "Compile Time Polymorphism"
  },
  {
    question: "Function overloading means?",
    options: [
      "Multiple functions with same name but different parameters",
      "Multiple classes with same name",
      "Overriding constructors",
      "Creating many objects"
    ],
    answer: "Multiple functions with same name but different parameters"
  },
  {
    question: "Operator overloading is used to?",
    options: [
      "Redefine behavior of operators",
      "Create operators",
      "Delete operators",
      "Hide operators"
    ],
    answer: "Redefine behavior of operators"
  },
  {
    question: "Method overriding occurs when?",
    options: [
      "Derived class provides its own implementation",
      "Functions have different names",
      "Functions are static",
      "Functions are overloaded"
    ],
    answer: "Derived class provides its own implementation"
  },
  {
    question: "Overriding is associated with?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Constructor",
      "Destructor"
    ],
    answer: "Inheritance"
  },
  {
    question: "Which keyword is commonly used for virtual functions in C++?",
    options: [
      "virtual",
      "override",
      "extends",
      "friend"
    ],
    answer: "virtual"
  },
  {
    question: "Which polymorphism is resolved during execution?",
    options: [
      "Runtime Polymorphism",
      "Compile Time Polymorphism",
      "Static Binding",
      "Function Overloading"
    ],
    answer: "Runtime Polymorphism"
  },
  {
    question: "Which of these is runtime polymorphism?",
    options: [
      "Function Overloading",
      "Operator Overloading",
      "Method Overriding",
      "Constructor Overloading"
    ],
    answer: "Method Overriding"
  },
  {
    question: "Polymorphism improves?",
    options: [
      "Flexibility",
      "Code Duplication",
      "Compilation Time",
      "Memory Usage Only"
    ],
    answer: "Flexibility"
  }
],

5: [
  {
    question: "What is abstraction?",
    options: [
      "Showing only essential details",
      "Hiding methods",
      "Creating classes",
      "Deleting data"
    ],
    answer: "Showing only essential details"
  },
  {
    question: "Abstraction focuses on?",
    options: [
      "What an object does",
      "How memory is allocated",
      "Compiler design",
      "Object size"
    ],
    answer: "What an object does"
  },
  {
    question: "Which OOP concept hides implementation details?",
    options: [
      "Abstraction",
      "Inheritance",
      "Constructor",
      "Destructor"
    ],
    answer: "Abstraction"
  },
  {
    question: "An abstract class is a class that?",
    options: [
      "Cannot be instantiated",
      "Has no methods",
      "Has no variables",
      "Can only contain static members"
    ],
    answer: "Cannot be instantiated"
  },
  {
    question: "A pure virtual function is declared using?",
    options: [
      "= 0",
      "= 1",
      "virtual only",
      "abstract"
    ],
    answer: "= 0"
  },
  {
    question: "Which class contains at least one pure virtual function?",
    options: [
      "Abstract Class",
      "Derived Class",
      "Static Class",
      "Friend Class"
    ],
    answer: "Abstract Class"
  },
  {
    question: "What is an interface in OOP?",
    options: [
      "A contract defining behavior",
      "A constructor",
      "A variable",
      "A destructor"
    ],
    answer: "A contract defining behavior"
  },
  {
    question: "Can objects of an abstract class be created?",
    options: [
      "No",
      "Yes",
      "Only once",
      "Only in Java"
    ],
    answer: "No"
  },
  {
    question: "Abstraction reduces?",
    options: [
      "Complexity",
      "Inheritance",
      "Compilation",
      "Objects"
    ],
    answer: "Complexity"
  },
  {
    question: "Which concept provides security by hiding implementation?",
    options: [
      "Abstraction",
      "Constructor",
      "Inheritance",
      "Friend Function"
    ],
    answer: "Abstraction"
  }
],

6: [
  {
    question: "Runtime polymorphism is achieved through?",
    options: [
      "Method Overriding",
      "Function Overloading",
      "Constructors",
      "Friend Functions"
    ],
    answer: "Method Overriding"
  },
  {
    question: "Compile-time polymorphism is achieved through?",
    options: [
      "Function Overloading",
      "Virtual Functions",
      "Inheritance",
      "Abstract Classes"
    ],
    answer: "Function Overloading"
  },
  {
    question: "A virtual function allows?",
    options: [
      "Dynamic Binding",
      "Static Binding",
      "Data Hiding",
      "Memory Allocation"
    ],
    answer: "Dynamic Binding"
  },
  {
    question: "Binding means?",
    options: [
      "Associating function call with function body",
      "Creating objects",
      "Deleting objects",
      "Hiding variables"
    ],
    answer: "Associating function call with function body"
  },
  {
    question: "Static binding occurs at?",
    options: [
      "Compile Time",
      "Run Time",
      "Execution End",
      "Linking Only"
    ],
    answer: "Compile Time"
  },
  {
    question: "Dynamic binding occurs at?",
    options: [
      "Run Time",
      "Compile Time",
      "Loading Time",
      "Preprocessing"
    ],
    answer: "Run Time"
  },
  {
    question: "Upcasting means?",
    options: [
      "Derived object referred by base class reference",
      "Base object referred by derived class reference",
      "Deleting an object",
      "Creating an object"
    ],
    answer: "Derived object referred by base class reference"
  },
  {
    question: "Downcasting means?",
    options: [
      "Converting base reference to derived reference",
      "Converting derived to base",
      "Deleting objects",
      "Creating classes"
    ],
    answer: "Converting base reference to derived reference"
  },
  {
    question: "Which concept enables late binding?",
    options: [
      "Virtual Functions",
      "Constructors",
      "Static Methods",
      "Friend Functions"
    ],
    answer: "Virtual Functions"
  },
  {
    question: "Which polymorphism is more flexible?",
    options: [
      "Runtime Polymorphism",
      "Compile Time Polymorphism",
      "Neither",
      "Both are same"
    ],
    answer: "Runtime Polymorphism"
  }
],
7: [
  {
    question: "What is a friend function?",
    options: [
      "A function that can access private members of a class",
      "A member function",
      "A constructor",
      "A virtual function"
    ],
    answer: "A function that can access private members of a class"
  },
  {
    question: "Which keyword is used to declare a friend function?",
    options: [
      "friend",
      "virtual",
      "static",
      "public"
    ],
    answer: "friend"
  },
  {
    question: "Is a friend function a member of the class?",
    options: [
      "No",
      "Yes",
      "Sometimes",
      "Only in Java"
    ],
    answer: "No"
  },
  {
    question: "A friend class can?",
    options: [
      "Access private and protected members",
      "Access only public members",
      "Access only protected members",
      "Access only static members"
    ],
    answer: "Access private and protected members"
  },
  {
    question: "What is a copy constructor?",
    options: [
      "Constructor that initializes an object using another object",
      "Constructor that deletes objects",
      "Constructor that creates arrays",
      "Default constructor"
    ],
    answer: "Constructor that initializes an object using another object"
  },
  {
    question: "When is a copy constructor called?",
    options: [
      "When one object is initialized from another",
      "When object is deleted",
      "When class is inherited",
      "When function is overloaded"
    ],
    answer: "When one object is initialized from another"
  },
  {
    question: "What is shallow copy?",
    options: [
      "Copies memory addresses",
      "Copies complete objects independently",
      "Copies only methods",
      "Copies constructors"
    ],
    answer: "Copies memory addresses"
  },
  {
    question: "What is deep copy?",
    options: [
      "Copies actual data to new memory",
      "Copies references only",
      "Copies methods only",
      "Copies class definitions"
    ],
    answer: "Copies actual data to new memory"
  },
  {
    question: "Deep copy helps avoid?",
    options: [
      "Shared memory issues",
      "Inheritance",
      "Compilation errors",
      "Abstraction"
    ],
    answer: "Shared memory issues"
  },
  {
    question: "Which constructor is automatically generated by the compiler if not provided?",
    options: [
      "Copy Constructor",
      "Parameterized Constructor",
      "Friend Constructor",
      "Static Constructor"
    ],
    answer: "Copy Constructor"
  }
],

8: [
  {
    question: "What is exception handling?",
    options: [
      "Handling runtime errors",
      "Handling compile-time errors",
      "Creating classes",
      "Managing memory"
    ],
    answer: "Handling runtime errors"
  },
  {
    question: "Which block is used to monitor code for exceptions?",
    options: [
      "try",
      "catch",
      "throw",
      "finally"
    ],
    answer: "try"
  },
  {
    question: "Which keyword is used to generate an exception?",
    options: [
      "throw",
      "try",
      "catch",
      "error"
    ],
    answer: "throw"
  },
  {
    question: "Which block handles an exception?",
    options: [
      "catch",
      "throw",
      "try",
      "final"
    ],
    answer: "catch"
  },
  {
    question: "What happens if an exception is not caught?",
    options: [
      "Program terminates",
      "Program continues normally",
      "Compiler fixes it",
      "Exception is ignored"
    ],
    answer: "Program terminates"
  },
  {
    question: "Why is exception handling useful?",
    options: [
      "Prevents abnormal termination",
      "Increases compilation speed",
      "Reduces memory usage",
      "Creates objects automatically"
    ],
    answer: "Prevents abnormal termination"
  },
  {
    question: "Can multiple catch blocks be used with one try block?",
    options: [
      "Yes",
      "No",
      "Only two",
      "Only in Java"
    ],
    answer: "Yes"
  },
  {
    question: "Which block executes whether an exception occurs or not? (Java)",
    options: [
      "finally",
      "catch",
      "throw",
      "try"
    ],
    answer: "finally"
  },
  {
    question: "What type of errors are typically handled using exceptions?",
    options: [
      "Runtime Errors",
      "Syntax Errors",
      "Logical Errors",
      "Compilation Errors"
    ],
    answer: "Runtime Errors"
  },
  {
    question: "Exception handling improves?",
    options: [
      "Program Reliability",
      "Inheritance",
      "Polymorphism",
      "Encapsulation"
    ],
    answer: "Program Reliability"
  }
],
9: [
  {
    question: "What does SOLID stand for?",
    options: [
      "Five object-oriented design principles",
      "Programming language",
      "Database concept",
      "Operating system principle"
    ],
    answer: "Five object-oriented design principles"
  },
  {
    question: "What does 'S' in SOLID represent?",
    options: [
      "Single Responsibility Principle",
      "Simple Responsibility Principle",
      "Static Responsibility Principle",
      "Secure Responsibility Principle"
    ],
    answer: "Single Responsibility Principle"
  },
  {
    question: "According to SRP, a class should have?",
    options: [
      "Only one reason to change",
      "Multiple responsibilities",
      "Unlimited methods",
      "Only static methods"
    ],
    answer: "Only one reason to change"
  },
  {
    question: "What does 'O' in SOLID stand for?",
    options: [
      "Open-Closed Principle",
      "Object-Oriented Principle",
      "Optimized Code Principle",
      "Open Code Principle"
    ],
    answer: "Open-Closed Principle"
  },
  {
    question: "Open-Closed Principle states that software entities should be?",
    options: [
      "Open for extension, closed for modification",
      "Open for modification, closed for extension",
      "Open for both",
      "Closed for both"
    ],
    answer: "Open for extension, closed for modification"
  },
  {
    question: "What does 'L' in SOLID represent?",
    options: [
      "Liskov Substitution Principle",
      "Logical Substitution Principle",
      "Linear Substitution Principle",
      "Linked Substitution Principle"
    ],
    answer: "Liskov Substitution Principle"
  },
  {
    question: "Liskov Substitution Principle says?",
    options: [
      "Derived classes should replace base classes without affecting correctness",
      "Classes should not inherit",
      "Objects should not be substituted",
      "Methods should be static"
    ],
    answer: "Derived classes should replace base classes without affecting correctness"
  },
  {
    question: "What does 'I' in SOLID stand for?",
    options: [
      "Interface Segregation Principle",
      "Interface Security Principle",
      "Implementation Segregation Principle",
      "Inheritance Segregation Principle"
    ],
    answer: "Interface Segregation Principle"
  },
  {
    question: "Interface Segregation Principle suggests?",
    options: [
      "Clients should not depend on interfaces they do not use",
      "Use one large interface",
      "Avoid interfaces",
      "Interfaces should be static"
    ],
    answer: "Clients should not depend on interfaces they do not use"
  },
  {
    question: "What does 'D' in SOLID stand for?",
    options: [
      "Dependency Inversion Principle",
      "Data Inversion Principle",
      "Design Inheritance Principle",
      "Dynamic Inversion Principle"
    ],
    answer: "Dependency Inversion Principle"
  }
],

10: [
  {
    question: "What is a design pattern?",
    options: [
      "Reusable solution to common software design problems",
      "Programming language",
      "Database schema",
      "Compiler optimization"
    ],
    answer: "Reusable solution to common software design problems"
  },
  {
    question: "Which design pattern ensures only one instance of a class exists?",
    options: [
      "Singleton",
      "Factory",
      "Observer",
      "Adapter"
    ],
    answer: "Singleton"
  },
  {
    question: "What is the primary purpose of the Singleton pattern?",
    options: [
      "Restrict object creation to one instance",
      "Create multiple objects",
      "Improve inheritance",
      "Handle exceptions"
    ],
    answer: "Restrict object creation to one instance"
  },
  {
    question: "Which design pattern creates objects without specifying exact classes?",
    options: [
      "Factory",
      "Singleton",
      "Observer",
      "Decorator"
    ],
    answer: "Factory"
  },
  {
    question: "Factory Pattern belongs to which category?",
    options: [
      "Creational Pattern",
      "Structural Pattern",
      "Behavioral Pattern",
      "Architectural Pattern"
    ],
    answer: "Creational Pattern"
  },
  {
    question: "Observer Pattern is mainly used for?",
    options: [
      "One-to-many dependency between objects",
      "Object creation",
      "Data hiding",
      "Inheritance"
    ],
    answer: "One-to-many dependency between objects"
  },
  {
    question: "Which application commonly uses Observer Pattern?",
    options: [
      "Notification Systems",
      "Compilers",
      "Databases",
      "Operating Systems"
    ],
    answer: "Notification Systems"
  },
  {
    question: "MVC stands for?",
    options: [
      "Model View Controller",
      "Model Virtual Controller",
      "Main View Controller",
      "Model View Component"
    ],
    answer: "Model View Controller"
  },
  {
    question: "In MVC, which component handles user interface?",
    options: [
      "View",
      "Model",
      "Controller",
      "Database"
    ],
    answer: "View"
  },
  {
    question: "What is the main benefit of design patterns?",
    options: [
      "Reusable and maintainable code",
      "Faster internet",
      "Less memory always",
      "No need for testing"
    ],
    answer: "Reusable and maintainable code"
  }
]
},
os: {
  1: [
    {
      question: "What is an Operating System?",
      options: [
        "System software that manages computer resources",
        "A programming language",
        "A database",
        "An application software"
      ],
      answer: "System software that manages computer resources"
    },
    {
      question: "Which of the following is an Operating System?",
      options: [
        "Windows",
        "Chrome",
        "MySQL",
        "Python"
      ],
      answer: "Windows"
    },
    {
      question: "What is the primary function of an OS?",
      options: [
        "Manage hardware and software resources",
        "Write programs",
        "Create databases",
        "Design websites"
      ],
      answer: "Manage hardware and software resources"
    },
    {
      question: "Which OS is open source?",
      options: [
        "Linux",
        "Windows",
        "macOS",
        "MS-DOS"
      ],
      answer: "Linux"
    },
    {
      question: "The OS acts as an interface between?",
      options: [
        "User and Hardware",
        "CPU and RAM",
        "Keyboard and Mouse",
        "Monitor and Printer"
      ],
      answer: "User and Hardware"
    },
    {
      question: "Which of the following is not an OS?",
      options: [
        "Oracle",
        "Linux",
        "Windows",
        "Android"
      ],
      answer: "Oracle"
    },
    {
      question: "Android is based on which kernel?",
      options: [
        "Linux",
        "Windows",
        "UNIX",
        "DOS"
      ],
      answer: "Linux"
    },
    {
      question: "Which OS allows multiple users to use the system simultaneously?",
      options: [
        "Multi-user OS",
        "Single-user OS",
        "Batch OS",
        "Embedded OS"
      ],
      answer: "Multi-user OS"
    },
    {
      question: "What does GUI stand for?",
      options: [
        "Graphical User Interface",
        "General User Interface",
        "Graph Utility Interface",
        "Global User Internet"
      ],
      answer: "Graphical User Interface"
    },
    {
      question: "Which component of OS manages files?",
      options: [
        "File System",
        "Compiler",
        "Scheduler",
        "Kernel"
      ],
      answer: "File System"
    }
  ],
  2: [
  {
    question: "What is a process?",
    options: [
      "A program in execution",
      "A program stored on disk",
      "A compiler",
      "A scheduler"
    ],
    answer: "A program in execution"
  },
  {
    question: "Which of the following best describes a program?",
    options: [
      "Passive entity",
      "Active entity",
      "Running process",
      "CPU task"
    ],
    answer: "Passive entity"
  },
  {
    question: "Which of the following is an active entity?",
    options: [
      "Process",
      "Program",
      "File",
      "Compiler"
    ],
    answer: "Process"
  },
  {
    question: "What does PCB stand for?",
    options: [
      "Process Control Block",
      "Program Control Block",
      "Process Communication Buffer",
      "Program Communication Block"
    ],
    answer: "Process Control Block"
  },
  {
    question: "PCB stores information about?",
    options: [
      "A process",
      "A file",
      "A user",
      "A compiler"
    ],
    answer: "A process"
  },
  {
    question: "Which process state indicates a process is currently executing?",
    options: [
      "Running",
      "Ready",
      "Waiting",
      "Terminated"
    ],
    answer: "Running"
  },
  {
    question: "Which state indicates a process is waiting for CPU allocation?",
    options: [
      "Ready",
      "Running",
      "Blocked",
      "Exit"
    ],
    answer: "Ready"
  },
  {
    question: "A process waiting for I/O operation is in which state?",
    options: [
      "Waiting",
      "Running",
      "Ready",
      "New"
    ],
    answer: "Waiting"
  },
  {
    question: "What is context switching?",
    options: [
      "Switching CPU from one process to another",
      "Deleting a process",
      "Creating a process",
      "Allocating memory"
    ],
    answer: "Switching CPU from one process to another"
  },
  {
    question: "Context switching overhead occurs because?",
    options: [
      "CPU must save and restore process state",
      "Memory is deleted",
      "Processes are terminated",
      "Files are copied"
    ],
    answer: "CPU must save and restore process state"
  }
],
3: [
  {
    question: "What is CPU Scheduling?",
    options: [
      "Selecting a process for CPU execution",
      "Allocating memory",
      "Managing files",
      "Handling interrupts"
    ],
    answer: "Selecting a process for CPU execution"
  },
  {
    question: "Which scheduling algorithm follows FIFO order?",
    options: [
      "FCFS",
      "SJF",
      "Round Robin",
      "Priority"
    ],
    answer: "FCFS"
  },
  {
    question: "FCFS stands for?",
    options: [
      "First Come First Serve",
      "Fast Come Fast Serve",
      "First CPU First Schedule",
      "File Come File Serve"
    ],
    answer: "First Come First Serve"
  },
  {
    question: "Which scheduling algorithm gives CPU to the shortest job first?",
    options: [
      "SJF",
      "FCFS",
      "Priority",
      "Round Robin"
    ],
    answer: "SJF"
  },
  {
    question: "Which scheduling algorithm is preemptive by nature?",
    options: [
      "Round Robin",
      "FCFS",
      "Non-preemptive SJF",
      "FIFO"
    ],
    answer: "Round Robin"
  },
  {
    question: "Round Robin scheduling uses?",
    options: [
      "Time Quantum",
      "Priority Queue",
      "Stacks",
      "Virtual Memory"
    ],
    answer: "Time Quantum"
  },
  {
    question: "Which scheduling algorithm may cause starvation?",
    options: [
      "Priority Scheduling",
      "FCFS",
      "Round Robin",
      "FIFO"
    ],
    answer: "Priority Scheduling"
  },
  {
    question: "What is Turnaround Time?",
    options: [
      "Completion Time - Arrival Time",
      "Burst Time - Arrival Time",
      "Waiting Time + Arrival Time",
      "Completion Time + Arrival Time"
    ],
    answer: "Completion Time - Arrival Time"
  },
  {
    question: "What is Waiting Time?",
    options: [
      "Time spent in ready queue",
      "CPU execution time",
      "Completion time",
      "Arrival time"
    ],
    answer: "Time spent in ready queue"
  },
  {
    question: "Which scheduling algorithm is best for time-sharing systems?",
    options: [
      "Round Robin",
      "FCFS",
      "SJF",
      "Priority"
    ],
    answer: "Round Robin"
  }
],
4: [
  {
    question: "A thread is?",
    options: [
      "Smallest unit of CPU execution",
      "A file",
      "A process scheduler",
      "A memory block"
    ],
    answer: "Smallest unit of CPU execution"
  },
  {
    question: "A process can contain?",
    options: [
      "Multiple threads",
      "Only one thread",
      "No threads",
      "Only two threads"
    ],
    answer: "Multiple threads"
  },
  {
    question: "Threads within the same process share?",
    options: [
      "Memory space",
      "Program counter",
      "Registers",
      "Stack"
    ],
    answer: "Memory space"
  },
  {
    question: "Which is lighter than a process?",
    options: [
      "Thread",
      "Kernel",
      "File",
      "Scheduler"
    ],
    answer: "Thread"
  },
  {
    question: "Multithreading improves?",
    options: [
      "Responsiveness",
      "Disk Usage",
      "Compilation Time",
      "File Size"
    ],
    answer: "Responsiveness"
  },
  {
    question: "Each thread has its own?",
    options: [
      "Stack",
      "Code Segment",
      "Heap",
      "Global Variables"
    ],
    answer: "Stack"
  },
  {
    question: "Context switching between threads is generally?",
    options: [
      "Faster than processes",
      "Slower than processes",
      "Same as processes",
      "Impossible"
    ],
    answer: "Faster than processes"
  },
  {
    question: "Multithreading is useful for?",
    options: [
      "Concurrent execution",
      "Memory deletion",
      "Disk scheduling",
      "File compression"
    ],
    answer: "Concurrent execution"
  },
  {
    question: "Which thread model maps many user threads to one kernel thread?",
    options: [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "One-to-Many"
    ],
    answer: "Many-to-One"
  },
  {
    question: "Which thread model provides true parallelism?",
    options: [
      "One-to-One",
      "Many-to-One",
      "Single Thread",
      "Batch Thread"
    ],
    answer: "One-to-One"
  }
],
5: [
  {
    question: "What is Process Synchronization?",
    options: [
      "Coordination of processes sharing resources",
      "CPU Scheduling",
      "Memory Allocation",
      "File Management"
    ],
    answer: "Coordination of processes sharing resources"
  },
  {
    question: "Synchronization is needed to prevent?",
    options: [
      "Race Condition",
      "Compilation Error",
      "Syntax Error",
      "Memory Leak"
    ],
    answer: "Race Condition"
  },
  {
    question: "A race condition occurs when?",
    options: [
      "Multiple processes access shared data simultaneously",
      "CPU runs too fast",
      "Memory becomes full",
      "Disk scheduling fails"
    ],
    answer: "Multiple processes access shared data simultaneously"
  },
  {
    question: "The critical section is?",
    options: [
      "Part of code accessing shared resources",
      "Memory segment",
      "Process state",
      "CPU queue"
    ],
    answer: "Part of code accessing shared resources"
  },
  {
    question: "Which problem does synchronization solve?",
    options: [
      "Critical Section Problem",
      "Scheduling Problem",
      "Paging Problem",
      "Deadlock Problem"
    ],
    answer: "Critical Section Problem"
  },
  {
    question: "Which mechanism is used for synchronization?",
    options: [
      "Semaphore",
      "Compiler",
      "Linker",
      "Loader"
    ],
    answer: "Semaphore"
  },
  {
    question: "Who introduced semaphores?",
    options: [
      "Dijkstra",
      "Dennis Ritchie",
      "Alan Turing",
      "Linus Torvalds"
    ],
    answer: "Dijkstra"
  },
  {
    question: "A binary semaphore can take values?",
    options: [
      "0 and 1",
      "0 to n",
      "-1 and 1",
      "Any integer"
    ],
    answer: "0 and 1"
  },
  {
    question: "Mutex stands for?",
    options: [
      "Mutual Exclusion",
      "Multiple Execution",
      "Memory Exclusion",
      "Mutual Execution"
    ],
    answer: "Mutual Exclusion"
  },
  {
    question: "The Producer-Consumer problem is an example of?",
    options: [
      "Synchronization Problem",
      "Memory Management",
      "CPU Scheduling",
      "Disk Scheduling"
    ],
    answer: "Synchronization Problem"
  }
],
6: [
  {
    question: "What is a deadlock?",
    options: [
      "A situation where processes wait indefinitely for resources",
      "A scheduling algorithm",
      "A memory management technique",
      "A file system error"
    ],
    answer: "A situation where processes wait indefinitely for resources"
  },
  {
    question: "How many necessary conditions are required for deadlock?",
    options: [
      "4",
      "2",
      "3",
      "5"
    ],
    answer: "4"
  },
  {
    question: "Which is NOT a deadlock condition?",
    options: [
      "Preemption",
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait"
    ],
    answer: "Preemption"
  },
  {
    question: "Mutual Exclusion means?",
    options: [
      "Only one process can use a resource at a time",
      "Multiple processes share resources freely",
      "Resources can be duplicated",
      "Processes never wait"
    ],
    answer: "Only one process can use a resource at a time"
  },
  {
    question: "Hold and Wait means?",
    options: [
      "A process holds resources while waiting for others",
      "A process releases all resources",
      "No process waits",
      "Resources are preempted"
    ],
    answer: "A process holds resources while waiting for others"
  },
  {
    question: "Circular Wait occurs when?",
    options: [
      "Processes form a circular chain waiting for resources",
      "Processes terminate",
      "CPU becomes idle",
      "Memory is full"
    ],
    answer: "Processes form a circular chain waiting for resources"
  },
  {
    question: "Which algorithm is used for deadlock avoidance?",
    options: [
      "Banker's Algorithm",
      "Round Robin",
      "FCFS",
      "SJF"
    ],
    answer: "Banker's Algorithm"
  },
  {
    question: "Who proposed Banker's Algorithm?",
    options: [
      "Dijkstra",
      "Turing",
      "Ritchie",
      "Torvalds"
    ],
    answer: "Dijkstra"
  },
  {
    question: "Deadlock prevention works by?",
    options: [
      "Breaking one of the necessary conditions",
      "Increasing memory",
      "Reducing CPU speed",
      "Using virtual memory"
    ],
    answer: "Breaking one of the necessary conditions"
  },
  {
    question: "Deadlock detection is followed by?",
    options: [
      "Recovery",
      "Compilation",
      "Scheduling",
      "Paging"
    ],
    answer: "Recovery"
  }
],

7: [
  {
    question: "What is memory management?",
    options: [
      "Managing allocation and deallocation of memory",
      "Managing CPU",
      "Managing files",
      "Managing threads"
    ],
    answer: "Managing allocation and deallocation of memory"
  },
  {
    question: "Which memory is fastest?",
    options: [
      "Register",
      "Cache",
      "RAM",
      "Hard Disk"
    ],
    answer: "Register"
  },
  {
    question: "What is fragmentation?",
    options: [
      "Wastage of memory space",
      "CPU idle state",
      "File corruption",
      "Thread switching"
    ],
    answer: "Wastage of memory space"
  },
  {
    question: "Internal fragmentation occurs when?",
    options: [
      "Allocated memory is larger than required",
      "Memory is not allocated",
      "Processes wait for CPU",
      "Files are deleted"
    ],
    answer: "Allocated memory is larger than required"
  },
  {
    question: "External fragmentation occurs when?",
    options: [
      "Free memory is scattered in small blocks",
      "Memory is completely full",
      "CPU is idle",
      "Threads are blocked"
    ],
    answer: "Free memory is scattered in small blocks"
  },
  {
    question: "Which memory allocation strategy chooses the first suitable block?",
    options: [
      "First Fit",
      "Best Fit",
      "Worst Fit",
      "Next Fit"
    ],
    answer: "First Fit"
  },
  {
    question: "Which strategy chooses the smallest suitable block?",
    options: [
      "Best Fit",
      "First Fit",
      "Worst Fit",
      "Round Robin"
    ],
    answer: "Best Fit"
  },
  {
    question: "Which strategy chooses the largest available block?",
    options: [
      "Worst Fit",
      "Best Fit",
      "First Fit",
      "Next Fit"
    ],
    answer: "Worst Fit"
  },
  {
    question: "What is swapping?",
    options: [
      "Moving processes between memory and disk",
      "Deleting processes",
      "Scheduling processes",
      "Creating threads"
    ],
    answer: "Moving processes between memory and disk"
  },
  {
    question: "Compaction is used to reduce?",
    options: [
      "External Fragmentation",
      "Internal Fragmentation",
      "Deadlock",
      "Paging"
    ],
    answer: "External Fragmentation"
  }
],

8: [
  {
    question: "What is virtual memory?",
    options: [
      "Memory management technique using disk as extension of RAM",
      "Physical RAM",
      "Cache memory",
      "CPU register"
    ],
    answer: "Memory management technique using disk as extension of RAM"
  },
  {
    question: "Paging divides memory into?",
    options: [
      "Pages and Frames",
      "Segments and Frames",
      "Files and Blocks",
      "Processes and Threads"
    ],
    answer: "Pages and Frames"
  },
  {
    question: "A page is stored in?",
    options: [
      "Frame",
      "Register",
      "Cache",
      "Stack"
    ],
    answer: "Frame"
  },
  {
    question: "What is a page fault?",
    options: [
      "Page not found in main memory",
      "Disk crash",
      "CPU failure",
      "Thread termination"
    ],
    answer: "Page not found in main memory"
  },
  {
    question: "Which table stores page mappings?",
    options: [
      "Page Table",
      "Process Table",
      "File Table",
      "Memory Table"
    ],
    answer: "Page Table"
  },
  {
    question: "What is demand paging?",
    options: [
      "Loading pages only when required",
      "Loading all pages at startup",
      "Deleting pages",
      "Compressing pages"
    ],
    answer: "Loading pages only when required"
  },
  {
    question: "Which page replacement algorithm replaces the oldest page?",
    options: [
      "FIFO",
      "LRU",
      "Optimal",
      "Round Robin"
    ],
    answer: "FIFO"
  },
  {
    question: "LRU stands for?",
    options: [
      "Least Recently Used",
      "Last Recently Used",
      "Least Required Unit",
      "Last Required Unit"
    ],
    answer: "Least Recently Used"
  },
  {
    question: "Which page replacement algorithm gives the best theoretical performance?",
    options: [
      "Optimal",
      "FIFO",
      "LRU",
      "FCFS"
    ],
    answer: "Optimal"
  },
  {
    question: "The main purpose of virtual memory is to?",
    options: [
      "Run programs larger than physical memory",
      "Increase CPU speed",
      "Reduce files",
      "Prevent deadlocks"
    ],
    answer: "Run programs larger than physical memory"
  }
],
9: [
  {
    question: "What is a file system?",
    options: [
      "Method used by OS to organize and manage files",
      "CPU scheduling algorithm",
      "Memory allocation technique",
      "Disk scheduling method"
    ],
    answer: "Method used by OS to organize and manage files"
  },
  {
    question: "Which file system is commonly used in Linux?",
    options: [
      "ext4",
      "NTFS",
      "FAT32",
      "HFS+"
    ],
    answer: "ext4"
  },
  {
    question: "Which file system is commonly used in Windows?",
    options: [
      "NTFS",
      "ext4",
      "FAT",
      "UFS"
    ],
    answer: "NTFS"
  },
  {
    question: "A directory is used to?",
    options: [
      "Organize files",
      "Schedule processes",
      "Allocate memory",
      "Manage threads"
    ],
    answer: "Organize files"
  },
  {
    question: "What is a file attribute?",
    options: [
      "Metadata about a file",
      "File content",
      "CPU information",
      "Memory address"
    ],
    answer: "Metadata about a file"
  },
  {
    question: "Which of the following is a file attribute?",
    options: [
      "File Size",
      "CPU Burst Time",
      "Page Number",
      "Time Quantum"
    ],
    answer: "File Size"
  },
  {
    question: "What is file access control used for?",
    options: [
      "Managing permissions",
      "Scheduling tasks",
      "Allocating memory",
      "Handling interrupts"
    ],
    answer: "Managing permissions"
  },
  {
    question: "What does FAT stand for?",
    options: [
      "File Allocation Table",
      "File Access Table",
      "Fast Allocation Table",
      "File Arrangement Table"
    ],
    answer: "File Allocation Table"
  },
  {
    question: "Which file allocation method stores file blocks sequentially?",
    options: [
      "Contiguous Allocation",
      "Linked Allocation",
      "Indexed Allocation",
      "Random Allocation"
    ],
    answer: "Contiguous Allocation"
  },
  {
    question: "Indexed allocation uses?",
    options: [
      "An index block containing pointers",
      "A linked list only",
      "Sequential storage only",
      "No pointers"
    ],
    answer: "An index block containing pointers"
  }
],

10: [
  {
    question: "Disk scheduling is used to?",
    options: [
      "Reduce disk access time",
      "Increase RAM",
      "Schedule processes",
      "Allocate memory"
    ],
    answer: "Reduce disk access time"
  },
  {
    question: "Which disk scheduling algorithm serves requests in arrival order?",
    options: [
      "FCFS",
      "SCAN",
      "LOOK",
      "SSTF"
    ],
    answer: "FCFS"
  },
  {
    question: "SSTF stands for?",
    options: [
      "Shortest Seek Time First",
      "Shortest Service Time First",
      "System Seek Time First",
      "Seek Service Task First"
    ],
    answer: "Shortest Seek Time First"
  },
  {
    question: "Which disk scheduling algorithm chooses the nearest request?",
    options: [
      "SSTF",
      "FCFS",
      "SCAN",
      "C-SCAN"
    ],
    answer: "SSTF"
  },
  {
    question: "SCAN algorithm is also known as?",
    options: [
      "Elevator Algorithm",
      "Priority Algorithm",
      "Round Robin",
      "FIFO Algorithm"
    ],
    answer: "Elevator Algorithm"
  },
  {
    question: "C-SCAN stands for?",
    options: [
      "Circular SCAN",
      "Complete SCAN",
      "Continuous SCAN",
      "Central SCAN"
    ],
    answer: "Circular SCAN"
  },
  {
    question: "LOOK scheduling differs from SCAN because?",
    options: [
      "It moves only as far as the last request",
      "It uses priority",
      "It uses paging",
      "It uses FCFS"
    ],
    answer: "It moves only as far as the last request"
  },
  {
    question: "What is seek time?",
    options: [
      "Time taken to move disk head to a track",
      "Time taken to read memory",
      "CPU execution time",
      "File creation time"
    ],
    answer: "Time taken to move disk head to a track"
  },
  {
    question: "Which scheduling algorithm generally provides the best average seek time?",
    options: [
      "SSTF",
      "FCFS",
      "FIFO",
      "Round Robin"
    ],
    answer: "SSTF"
  },
  {
    question: "The kernel is?",
    options: [
      "Core component of an operating system",
      "A disk scheduling algorithm",
      "A file system",
      "A compiler"
    ],
    answer: "Core component of an operating system"
  }
]
},
cn: {

1: [
  {
    question: "What is a computer network?",
    options: [
      "A collection of interconnected computers",
      "A programming language",
      "A database system",
      "An operating system"
    ],
    answer: "A collection of interconnected computers"
  },
  {
    question: "Which device connects computers in a network?",
    options: [
      "Switch",
      "Compiler",
      "Interpreter",
      "Assembler"
    ],
    answer: "Switch"
  },
  {
    question: "What is the Internet?",
    options: [
      "A global network of networks",
      "A local network",
      "A database",
      "An operating system"
    ],
    answer: "A global network of networks"
  },
  {
    question: "LAN stands for?",
    options: [
      "Local Area Network",
      "Large Area Network",
      "Long Area Network",
      "Limited Area Network"
    ],
    answer: "Local Area Network"
  },
  {
    question: "WAN stands for?",
    options: [
      "Wide Area Network",
      "Wireless Area Network",
      "Web Area Network",
      "World Area Network"
    ],
    answer: "Wide Area Network"
  },
  {
    question: "Which network covers a city?",
    options: [
      "MAN",
      "LAN",
      "PAN",
      "VPN"
    ],
    answer: "MAN"
  },
  {
    question: "PAN stands for?",
    options: [
      "Personal Area Network",
      "Private Area Network",
      "Public Area Network",
      "Protected Area Network"
    ],
    answer: "Personal Area Network"
  },
  {
    question: "Which topology connects all devices to a central hub?",
    options: [
      "Star",
      "Bus",
      "Ring",
      "Mesh"
    ],
    answer: "Star"
  },
  {
    question: "Which topology forms a closed loop?",
    options: [
      "Ring",
      "Star",
      "Bus",
      "Tree"
    ],
    answer: "Ring"
  },
  {
    question: "Which topology uses a single backbone cable?",
    options: [
      "Bus",
      "Ring",
      "Star",
      "Mesh"
    ],
    answer: "Bus"
  }
],

2: [
  {
    question: "How many layers are there in the OSI model?",
    options: [
      "7",
      "5",
      "6",
      "4"
    ],
    answer: "7"
  },
  {
    question: "Which layer is responsible for routing?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Physical Layer"
    ],
    answer: "Network Layer"
  },
  {
    question: "Which layer handles end-to-end communication?",
    options: [
      "Transport Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer"
    ],
    answer: "Transport Layer"
  },
  {
    question: "Which layer is closest to the user?",
    options: [
      "Application Layer",
      "Physical Layer",
      "Network Layer",
      "Transport Layer"
    ],
    answer: "Application Layer"
  },
  {
    question: "Which layer converts data into bits?",
    options: [
      "Physical Layer",
      "Application Layer",
      "Session Layer",
      "Transport Layer"
    ],
    answer: "Physical Layer"
  },
  {
    question: "Which layer is responsible for framing?",
    options: [
      "Data Link Layer",
      "Transport Layer",
      "Session Layer",
      "Application Layer"
    ],
    answer: "Data Link Layer"
  },
  {
    question: "Which layer establishes and terminates sessions?",
    options: [
      "Session Layer",
      "Network Layer",
      "Physical Layer",
      "Application Layer"
    ],
    answer: "Session Layer"
  },
  {
    question: "Which layer provides encryption and compression?",
    options: [
      "Presentation Layer",
      "Transport Layer",
      "Data Link Layer",
      "Network Layer"
    ],
    answer: "Presentation Layer"
  },
  {
    question: "Which layer provides services like HTTP and FTP?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Network Layer",
      "Data Link Layer"
    ],
    answer: "Application Layer"
  },
  {
    question: "OSI stands for?",
    options: [
      "Open Systems Interconnection",
      "Operating System Interface",
      "Open Software Interface",
      "Online System Integration"
    ],
    answer: "Open Systems Interconnection"
  }
],

3: [
  {
    question: "What is an IP address?",
    options: [
      "Unique address assigned to a device",
      "MAC address",
      "Password",
      "Protocol"
    ],
    answer: "Unique address assigned to a device"
  },
  {
    question: "IPv4 address consists of how many bits?",
    options: [
      "32",
      "64",
      "128",
      "16"
    ],
    answer: "32"
  },
  {
    question: "IPv6 address consists of how many bits?",
    options: [
      "128",
      "64",
      "32",
      "256"
    ],
    answer: "128"
  },
  {
    question: "Which protocol is connection-oriented?",
    options: [
      "TCP",
      "UDP",
      "IP",
      "ARP"
    ],
    answer: "TCP"
  },
  {
    question: "Which protocol is connectionless?",
    options: [
      "UDP",
      "TCP",
      "FTP",
      "HTTP"
    ],
    answer: "UDP"
  },
  {
    question: "What is the full form of TCP?",
    options: [
      "Transmission Control Protocol",
      "Transfer Communication Protocol",
      "Transport Control Process",
      "Transmission Connection Process"
    ],
    answer: "Transmission Control Protocol"
  },
  {
    question: "What is the full form of UDP?",
    options: [
      "User Datagram Protocol",
      "Universal Data Protocol",
      "User Data Package",
      "Uniform Datagram Process"
    ],
    answer: "User Datagram Protocol"
  },
  {
    question: "Which protocol is used to map IP to MAC address?",
    options: [
      "ARP",
      "RARP",
      "TCP",
      "FTP"
    ],
    answer: "ARP"
  },
  {
    question: "Which protocol is responsible for error reporting?",
    options: [
      "ICMP",
      "ARP",
      "HTTP",
      "SMTP"
    ],
    answer: "ICMP"
  },
  {
    question: "What does DNS do?",
    options: [
      "Converts domain names to IP addresses",
      "Transfers files",
      "Sends emails",
      "Provides security"
    ],
    answer: "Converts domain names to IP addresses"
  }
],

4: [
  {
    question: "What is a MAC address?",
    options: [
      "Physical address of a device",
      "IP address",
      "Port number",
      "Protocol"
    ],
    answer: "Physical address of a device"
  },
  {
    question: "MAC address operates at which OSI layer?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Physical Layer"
    ],
    answer: "Data Link Layer"
  },
  {
    question: "How many bits are there in a MAC address?",
    options: [
      "48",
      "32",
      "64",
      "128"
    ],
    answer: "48"
  },
  {
    question: "Which device works at the Data Link Layer?",
    options: [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    answer: "Switch"
  },
  {
    question: "Which device works at the Network Layer?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Bridge"
    ],
    answer: "Router"
  },
  {
    question: "What is framing?",
    options: [
      "Dividing data into frames",
      "Assigning IP addresses",
      "Encrypting data",
      "Compressing files"
    ],
    answer: "Dividing data into frames"
  },
  {
    question: "Which protocol is used for automatic IP assignment?",
    options: [
      "DHCP",
      "DNS",
      "HTTP",
      "FTP"
    ],
    answer: "DHCP"
  },
  {
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Hardware Communication Protocol",
      "Data Host Configuration Protocol",
      "Distributed Host Configuration Process"
    ],
    answer: "Dynamic Host Configuration Protocol"
  },
  {
    question: "Which address is used for broadcasting?",
    options: [
      "Broadcast Address",
      "MAC Address",
      "Loopback Address",
      "Private Address"
    ],
    answer: "Broadcast Address"
  },
  {
    question: "Which device simply forwards signals without filtering?",
    options: [
      "Hub",
      "Router",
      "Switch",
      "Bridge"
    ],
    answer: "Hub"
  }
],
5: [
  {
    question: "Which layer is responsible for process-to-process communication?",
    options: ["Transport Layer", "Network Layer", "Physical Layer", "Data Link Layer"],
    answer: "Transport Layer"
  },
  {
    question: "TCP provides?",
    options: ["Reliable communication", "Unreliable communication", "Routing", "Encryption"],
    answer: "Reliable communication"
  },
  {
    question: "UDP provides?",
    options: ["Unreliable communication", "Reliable communication", "Error correction", "Flow control"],
    answer: "Unreliable communication"
  },
  {
    question: "Which protocol uses a three-way handshake?",
    options: ["TCP", "UDP", "IP", "ARP"],
    answer: "TCP"
  },
  {
    question: "What is the first step of TCP handshake?",
    options: ["SYN", "ACK", "FIN", "RST"],
    answer: "SYN"
  },
  {
    question: "Which protocol is faster?",
    options: ["UDP", "TCP", "HTTP", "FTP"],
    answer: "UDP"
  },
  {
    question: "Which protocol is used for video streaming?",
    options: ["UDP", "TCP", "SMTP", "FTP"],
    answer: "UDP"
  },
  {
    question: "What is a port number used for?",
    options: ["Identifying applications", "Identifying devices", "Routing packets", "Assigning IPs"],
    answer: "Identifying applications"
  },
  {
    question: "HTTP commonly uses port?",
    options: ["80", "21", "25", "53"],
    answer: "80"
  },
  {
    question: "HTTPS commonly uses port?",
    options: ["443", "80", "21", "53"],
    answer: "443"
  }
],
6: [
  {
    question: "What is routing?",
    options: [
      "Finding path for packet delivery",
      "Assigning MAC address",
      "Encrypting data",
      "Error checking"
    ],
    answer: "Finding path for packet delivery"
  },
  {
    question: "Which device performs routing?",
    options: ["Router", "Switch", "Hub", "Repeater"],
    answer: "Router"
  },
  {
    question: "Routing occurs at which OSI layer?",
    options: ["Network Layer", "Transport Layer", "Physical Layer", "Application Layer"],
    answer: "Network Layer"
  },
  {
    question: "Which routing algorithm finds shortest path?",
    options: ["Dijkstra", "Bubble Sort", "DFS", "BFS"],
    answer: "Dijkstra"
  },
  {
    question: "What is a routing table?",
    options: [
      "Table containing route information",
      "Table containing files",
      "MAC table",
      "Port table"
    ],
    answer: "Table containing route information"
  },
  {
    question: "Static routing means?",
    options: [
      "Routes are manually configured",
      "Routes update automatically",
      "No routing",
      "Wireless routing"
    ],
    answer: "Routes are manually configured"
  },
  {
    question: "Dynamic routing means?",
    options: [
      "Routes update automatically",
      "Routes never change",
      "Manual routing",
      "Fixed routing"
    ],
    answer: "Routes update automatically"
  },
  {
    question: "Which protocol is a routing protocol?",
    options: ["RIP", "HTTP", "FTP", "SMTP"],
    answer: "RIP"
  },
  {
    question: "OSPF stands for?",
    options: [
      "Open Shortest Path First",
      "Optimal Shortest Path First",
      "Open Secure Path Framework",
      "Operating System Path Finder"
    ],
    answer: "Open Shortest Path First"
  },
  {
    question: "Routers use routing tables to?",
    options: [
      "Forward packets",
      "Store files",
      "Assign MAC addresses",
      "Create networks"
    ],
    answer: "Forward packets"
  }
],
7: [
  {
    question: "HTTP stands for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Process",
      "Host Transfer Protocol",
      "Host Text Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "HTTPS is?",
    options: [
      "Secure version of HTTP",
      "Faster HTTP",
      "HTTP for FTP",
      "Wireless HTTP"
    ],
    answer: "Secure version of HTTP"
  },
  {
    question: "Which protocol is used to transfer web pages?",
    options: ["HTTP", "FTP", "SMTP", "DNS"],
    answer: "HTTP"
  },
  {
    question: "FTP stands for?",
    options: [
      "File Transfer Protocol",
      "Fast Transfer Protocol",
      "File Transmission Program",
      "File Tracking Protocol"
    ],
    answer: "File Transfer Protocol"
  },
  {
    question: "FTP is used for?",
    options: [
      "File transfer",
      "Sending emails",
      "Routing",
      "DNS resolution"
    ],
    answer: "File transfer"
  },
  {
    question: "SMTP stands for?",
    options: [
      "Simple Mail Transfer Protocol",
      "Secure Mail Transfer Protocol",
      "System Mail Transfer Protocol",
      "Simple Message Transfer Process"
    ],
    answer: "Simple Mail Transfer Protocol"
  },
  {
    question: "SMTP is used for?",
    options: [
      "Sending emails",
      "Receiving emails",
      "Routing packets",
      "File transfer"
    ],
    answer: "Sending emails"
  },
  {
    question: "Which protocol secures web communication?",
    options: ["HTTPS", "HTTP", "FTP", "SMTP"],
    answer: "HTTPS"
  },
  {
    question: "Which protocol uses SSL/TLS?",
    options: ["HTTPS", "FTP", "DNS", "ARP"],
    answer: "HTTPS"
  },
  {
    question: "FTP typically uses port?",
    options: ["21", "80", "443", "53"],
    answer: "21"
  }
],
8: [
  {
    question: "Flow control prevents?",
    options: [
      "Sender overwhelming receiver",
      "Packet routing",
      "IP conflicts",
      "DNS errors"
    ],
    answer: "Sender overwhelming receiver"
  },
  {
    question: "Congestion occurs when?",
    options: [
      "Network traffic exceeds capacity",
      "No packets exist",
      "Only one device is connected",
      "Network is idle"
    ],
    answer: "Network traffic exceeds capacity"
  },
  {
    question: "TCP uses which flow control mechanism?",
    options: [
      "Sliding Window",
      "Paging",
      "Segmentation",
      "Routing"
    ],
    answer: "Sliding Window"
  },
  {
    question: "Congestion control improves?",
    options: [
      "Network performance",
      "Disk speed",
      "CPU frequency",
      "RAM size"
    ],
    answer: "Network performance"
  },
  {
    question: "Packet loss often indicates?",
    options: [
      "Congestion",
      "Security",
      "Encryption",
      "Addressing"
    ],
    answer: "Congestion"
  },
  {
    question: "Which protocol performs congestion control?",
    options: ["TCP", "UDP", "ARP", "DNS"],
    answer: "TCP"
  },
  {
    question: "Window size determines?",
    options: [
      "Amount of data sent before ACK",
      "IP address",
      "Packet size",
      "MAC address"
    ],
    answer: "Amount of data sent before ACK"
  },
  {
    question: "ACK stands for?",
    options: [
      "Acknowledgement",
      "Access Key",
      "Accepted Kernel",
      "Address Key"
    ],
    answer: "Acknowledgement"
  },
  {
    question: "Flow control works between?",
    options: [
      "Sender and Receiver",
      "Router and Switch",
      "Client and DNS",
      "Hub and Switch"
    ],
    answer: "Sender and Receiver"
  },
  {
    question: "TCP congestion control helps avoid?",
    options: [
      "Network overload",
      "File corruption",
      "Memory leaks",
      "Deadlocks"
    ],
    answer: "Network overload"
  }
],
9: [
  {
    question: "What is a firewall?",
    options: [
      "Security system that monitors network traffic",
      "Routing protocol",
      "File server",
      "Switch"
    ],
    answer: "Security system that monitors network traffic"
  },
  {
    question: "What is encryption?",
    options: [
      "Converting data into unreadable form",
      "Deleting data",
      "Routing packets",
      "Compressing files"
    ],
    answer: "Converting data into unreadable form"
  },
  {
    question: "HTTPS provides?",
    options: [
      "Secure communication",
      "Routing",
      "Addressing",
      "Compression"
    ],
    answer: "Secure communication"
  },
  {
    question: "What is malware?",
    options: [
      "Malicious software",
      "Network protocol",
      "Router type",
      "Database"
    ],
    answer: "Malicious software"
  },
  {
    question: "What is phishing?",
    options: [
      "Fraudulent attempt to steal information",
      "Routing process",
      "Data compression",
      "Packet switching"
    ],
    answer: "Fraudulent attempt to steal information"
  },
  {
    question: "Antivirus software is used to?",
    options: [
      "Detect and remove malware",
      "Route packets",
      "Assign IP addresses",
      "Manage files"
    ],
    answer: "Detect and remove malware"
  },
  {
    question: "VPN stands for?",
    options: [
      "Virtual Private Network",
      "Virtual Public Network",
      "Verified Private Network",
      "Virtual Packet Network"
    ],
    answer: "Virtual Private Network"
  },
  {
    question: "VPN provides?",
    options: [
      "Secure communication over public networks",
      "Faster CPU",
      "More RAM",
      "File compression"
    ],
    answer: "Secure communication over public networks"
  },
  {
    question: "SSL/TLS is used for?",
    options: [
      "Secure communication",
      "Routing",
      "Addressing",
      "Disk management"
    ],
    answer: "Secure communication"
  },
  {
    question: "Strong passwords improve?",
    options: [
      "Security",
      "Routing",
      "Bandwidth",
      "Latency"
    ],
    answer: "Security"
  }
],
10: [
  {
    question: "What is latency?",
    options: [
      "Delay in data transmission",
      "Data size",
      "Storage capacity",
      "IP address"
    ],
    answer: "Delay in data transmission"
  },
  {
    question: "Bandwidth refers to?",
    options: [
      "Maximum data transfer rate",
      "Delay",
      "Packet size",
      "Memory size"
    ],
    answer: "Maximum data transfer rate"
  },
  {
    question: "Which device connects different networks?",
    options: [
      "Router",
      "Hub",
      "Switch",
      "Repeater"
    ],
    answer: "Router"
  },
  {
    question: "Which protocol is used for remote login?",
    options: [
      "SSH",
      "FTP",
      "DNS",
      "ARP"
    ],
    answer: "SSH"
  },
  {
    question: "What is packet switching?",
    options: [
      "Breaking data into packets for transmission",
      "Encrypting data",
      "Assigning IPs",
      "Scheduling packets"
    ],
    answer: "Breaking data into packets for transmission"
  },
  {
    question: "What is DNS primarily used for?",
    options: [
      "Domain name resolution",
      "File transfer",
      "Email transfer",
      "Routing"
    ],
    answer: "Domain name resolution"
  },
  {
    question: "Which layer is responsible for logical addressing?",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Physical Layer",
      "Session Layer"
    ],
    answer: "Network Layer"
  },
  {
    question: "What is subnetting?",
    options: [
      "Dividing a network into smaller networks",
      "Combining networks",
      "Routing packets",
      "Encrypting traffic"
    ],
    answer: "Dividing a network into smaller networks"
  },
  {
    question: "Which protocol translates domain names into IP addresses?",
    options: [
      "DNS",
      "DHCP",
      "ARP",
      "ICMP"
    ],
    answer: "DNS"
  },
  {
    question: "What is the main purpose of Computer Networks?",
    options: [
      "Resource and information sharing",
      "Increasing CPU speed",
      "Increasing RAM",
      "Creating databases"
    ],
    answer: "Resource and information sharing"
  }
]
},
dbms: {

1: [
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Mapping System",
      "Data Business Management System"
    ],
    answer: "Database Management System"
  },
  {
    question: "What is a database?",
    options: [
      "Organized collection of data",
      "Programming language",
      "Operating system",
      "Network protocol"
    ],
    answer: "Organized collection of data"
  },
  {
    question: "Which of the following is a DBMS?",
    options: [
      "MySQL",
      "Linux",
      "Python",
      "HTTP"
    ],
    answer: "MySQL"
  },
  {
    question: "DBMS helps in?",
    options: [
      "Managing data efficiently",
      "Creating hardware",
      "Scheduling CPU",
      "Managing networks"
    ],
    answer: "Managing data efficiently"
  },
  {
    question: "Which language is commonly used with DBMS?",
    options: [
      "SQL",
      "HTML",
      "CSS",
      "C"
    ],
    answer: "SQL"
  },
  {
    question: "DBMS reduces?",
    options: [
      "Data redundancy",
      "RAM size",
      "CPU speed",
      "Network bandwidth"
    ],
    answer: "Data redundancy"
  },
  {
    question: "Which database model is most commonly used today?",
    options: [
      "Relational Model",
      "Hierarchical Model",
      "Network Model",
      "Object Model"
    ],
    answer: "Relational Model"
  },
  {
    question: "Data in a relational database is stored in?",
    options: [
      "Tables",
      "Trees",
      "Graphs",
      "Stacks"
    ],
    answer: "Tables"
  },
  {
    question: "A row in a table is called?",
    options: [
      "Tuple",
      "Attribute",
      "Relation",
      "Key"
    ],
    answer: "Tuple"
  },
  {
    question: "A column in a table is called?",
    options: [
      "Attribute",
      "Tuple",
      "Relation",
      "Record"
    ],
    answer: "Attribute"
  }
],

2: [
  {
    question: "What is a Primary Key?",
    options: [
      "Uniquely identifies each record",
      "Stores duplicate values",
      "Connects databases",
      "Deletes records"
    ],
    answer: "Uniquely identifies each record"
  },
  {
    question: "Can a primary key contain NULL values?",
    options: [
      "No",
      "Yes",
      "Sometimes",
      "Only one NULL"
    ],
    answer: "No"
  },
  {
    question: "What is a Foreign Key?",
    options: [
      "References primary key of another table",
      "Unique key",
      "Candidate key",
      "Composite key"
    ],
    answer: "References primary key of another table"
  },
  {
    question: "Which key can uniquely identify a record?",
    options: [
      "Candidate Key",
      "Foreign Key",
      "Secondary Key",
      "Alternate Record"
    ],
    answer: "Candidate Key"
  },
  {
    question: "A table can have how many primary keys?",
    options: [
      "One",
      "Two",
      "Unlimited",
      "Zero only"
    ],
    answer: "One"
  },
  {
    question: "What is a Composite Key?",
    options: [
      "Combination of multiple columns",
      "Single column key",
      "Foreign key",
      "Duplicate key"
    ],
    answer: "Combination of multiple columns"
  },
  {
    question: "Which constraint prevents duplicate values?",
    options: [
      "UNIQUE",
      "NOT NULL",
      "DEFAULT",
      "CHECK"
    ],
    answer: "UNIQUE"
  },
  {
    question: "Which constraint prevents NULL values?",
    options: [
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "DEFAULT"
    ],
    answer: "NOT NULL"
  },
  {
    question: "What is Referential Integrity?",
    options: [
      "Consistency between related tables",
      "Data backup",
      "Query optimization",
      "Indexing"
    ],
    answer: "Consistency between related tables"
  },
  {
    question: "Foreign keys help establish?",
    options: [
      "Relationships between tables",
      "Indexes",
      "Queries",
      "Views"
    ],
    answer: "Relationships between tables"
  }
],

3: [
  {
    question: "What does ER stand for?",
    options: [
      "Entity Relationship",
      "Extended Relation",
      "Entity Record",
      "External Relation"
    ],
    answer: "Entity Relationship"
  },
  {
    question: "What is an Entity?",
    options: [
      "Real-world object",
      "Database query",
      "SQL command",
      "Relationship"
    ],
    answer: "Real-world object"
  },
  {
    question: "What is an Attribute?",
    options: [
      "Property of an entity",
      "Table",
      "Key",
      "Relationship"
    ],
    answer: "Property of an entity"
  },
  {
    question: "What is a Relationship?",
    options: [
      "Association between entities",
      "Primary key",
      "Table",
      "Attribute"
    ],
    answer: "Association between entities"
  },
  {
    question: "Which shape represents an Entity in ER diagrams?",
    options: [
      "Rectangle",
      "Diamond",
      "Oval",
      "Circle"
    ],
    answer: "Rectangle"
  },
  {
    question: "Which shape represents Attributes?",
    options: [
      "Oval",
      "Rectangle",
      "Diamond",
      "Square"
    ],
    answer: "Oval"
  },
  {
    question: "Which shape represents Relationships?",
    options: [
      "Diamond",
      "Rectangle",
      "Oval",
      "Triangle"
    ],
    answer: "Diamond"
  },
  {
    question: "One-to-Many relationship means?",
    options: [
      "One record related to many records",
      "One record related to one record",
      "Many records related to one record only",
      "No relationship"
    ],
    answer: "One record related to many records"
  },
  {
    question: "Many-to-Many relationships are usually resolved using?",
    options: [
      "Junction Table",
      "Primary Key",
      "Index",
      "View"
    ],
    answer: "Junction Table"
  },
  {
    question: "ER diagrams are used during?",
    options: [
      "Database Design",
      "Compilation",
      "Networking",
      "Scheduling"
    ],
    answer: "Database Design"
  }
],
4: [
  {
    question: "Who proposed the Relational Model?",
    options: [
      "E.F. Codd",
      "Dennis Ritchie",
      "Alan Turing",
      "Dijkstra"
    ],
    answer: "E.F. Codd"
  },
  {
    question: "A relation in DBMS is?",
    options: [
      "A table",
      "A key",
      "A query",
      "An index"
    ],
    answer: "A table"
  },
  {
    question: "A tuple represents?",
    options: [
      "A row",
      "A column",
      "A table",
      "A key"
    ],
    answer: "A row"
  },
  {
    question: "An attribute represents?",
    options: [
      "A column",
      "A row",
      "A table",
      "A relation"
    ],
    answer: "A column"
  },
  {
    question: "The degree of a relation is?",
    options: [
      "Number of attributes",
      "Number of rows",
      "Number of keys",
      "Number of tables"
    ],
    answer: "Number of attributes"
  },
  {
    question: "The cardinality of a relation is?",
    options: [
      "Number of rows",
      "Number of columns",
      "Number of keys",
      "Number of attributes"
    ],
    answer: "Number of rows"
  },
  {
    question: "A domain refers to?",
    options: [
      "Set of allowed values",
      "Primary key",
      "Table name",
      "Query result"
    ],
    answer: "Set of allowed values"
  },
  {
    question: "Which operation selects rows?",
    options: [
      "Selection",
      "Projection",
      "Join",
      "Union"
    ],
    answer: "Selection"
  },
  {
    question: "Which operation selects columns?",
    options: [
      "Projection",
      "Selection",
      "Join",
      "Difference"
    ],
    answer: "Projection"
  },
  {
    question: "Join operation combines?",
    options: [
      "Two relations",
      "Two attributes",
      "Two keys",
      "Two databases"
    ],
    answer: "Two relations"
  }
],
5: [
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Language",
      "Sequential Query Language"
    ],
    answer: "Structured Query Language"
  },
  {
    question: "Which SQL command retrieves data?",
    options: [
      "SELECT",
      "INSERT",
      "DELETE",
      "UPDATE"
    ],
    answer: "SELECT"
  },
  {
    question: "Which command adds a new row?",
    options: [
      "INSERT",
      "UPDATE",
      "ALTER",
      "SELECT"
    ],
    answer: "INSERT"
  },
  {
    question: "Which command modifies existing data?",
    options: [
      "UPDATE",
      "INSERT",
      "DELETE",
      "DROP"
    ],
    answer: "UPDATE"
  },
  {
    question: "Which command removes rows from a table?",
    options: [
      "DELETE",
      "SELECT",
      "ALTER",
      "CREATE"
    ],
    answer: "DELETE"
  },
  {
    question: "Which command creates a table?",
    options: [
      "CREATE",
      "INSERT",
      "UPDATE",
      "SELECT"
    ],
    answer: "CREATE"
  },
  {
    question: "Which clause filters records?",
    options: [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "HAVING"
    ],
    answer: "WHERE"
  },
  {
    question: "Which clause sorts data?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "HAVING",
      "WHERE"
    ],
    answer: "ORDER BY"
  },
  {
    question: "Which function counts rows?",
    options: [
      "COUNT()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    answer: "COUNT()"
  },
  {
    question: "Which SQL statement removes an entire table?",
    options: [
      "DROP TABLE",
      "DELETE",
      "TRUNCATE",
      "REMOVE"
    ],
    answer: "DROP TABLE"
  }
],
6: [
  {
    question: "What is a JOIN used for?",
    options: [
      "Combine data from multiple tables",
      "Delete tables",
      "Create indexes",
      "Sort data"
    ],
    answer: "Combine data from multiple tables"
  },
  {
    question: "Which JOIN returns matching records from both tables?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN"
    ],
    answer: "INNER JOIN"
  },
  {
    question: "Which JOIN returns all rows from left table?",
    options: [
      "LEFT JOIN",
      "INNER JOIN",
      "RIGHT JOIN",
      "CROSS JOIN"
    ],
    answer: "LEFT JOIN"
  },
  {
    question: "Which JOIN returns all rows from right table?",
    options: [
      "RIGHT JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "SELF JOIN"
    ],
    answer: "RIGHT JOIN"
  },
  {
    question: "Which JOIN returns all rows from both tables?",
    options: [
      "FULL OUTER JOIN",
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN"
    ],
    answer: "FULL OUTER JOIN"
  },
  {
    question: "What is a SELF JOIN?",
    options: [
      "A table joined with itself",
      "Joining two databases",
      "Joining three tables",
      "A recursive query"
    ],
    answer: "A table joined with itself"
  },
  {
    question: "GROUP BY is used to?",
    options: [
      "Group rows with same values",
      "Sort rows",
      "Delete rows",
      "Join tables"
    ],
    answer: "Group rows with same values"
  },
  {
    question: "HAVING clause is used with?",
    options: [
      "GROUP BY",
      "WHERE",
      "ORDER BY",
      "JOIN"
    ],
    answer: "GROUP BY"
  },
  {
    question: "Which keyword removes duplicate rows?",
    options: [
      "DISTINCT",
      "UNIQUE",
      "GROUP BY",
      "ORDER BY"
    ],
    answer: "DISTINCT"
  },
  {
    question: "Which query finds the maximum salary?",
    options: [
      "MAX(salary)",
      "TOP(salary)",
      "HIGH(salary)",
      "PEAK(salary)"
    ],
    answer: "MAX(salary)"
  }
],
7: [
  {
    question: "Normalization is used to?",
    options: [
      "Reduce data redundancy",
      "Increase duplication",
      "Speed up CPU",
      "Manage networks"
    ],
    answer: "Reduce data redundancy"
  },
  {
    question: "The first normal form is called?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "1NF"
  },
  {
    question: "1NF requires?",
    options: [
      "Atomic values",
      "Primary key",
      "Foreign key",
      "Index"
    ],
    answer: "Atomic values"
  },
  {
    question: "2NF removes?",
    options: [
      "Partial dependency",
      "Transitive dependency",
      "Duplicate keys",
      "Indexes"
    ],
    answer: "Partial dependency"
  },
  {
    question: "3NF removes?",
    options: [
      "Transitive dependency",
      "Partial dependency",
      "Foreign keys",
      "Relations"
    ],
    answer: "Transitive dependency"
  },
  {
    question: "BCNF is stronger than?",
    options: [
      "3NF",
      "2NF",
      "1NF",
      "None"
    ],
    answer: "3NF"
  },
  {
    question: "Normalization improves?",
    options: [
      "Data consistency",
      "CPU speed",
      "RAM size",
      "Network bandwidth"
    ],
    answer: "Data consistency"
  },
  {
    question: "Denormalization is used for?",
    options: [
      "Improving query performance",
      "Reducing storage",
      "Removing keys",
      "Creating tables"
    ],
    answer: "Improving query performance"
  },
  {
    question: "Which normal form removes repeating groups?",
    options: [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    answer: "1NF"
  },
  {
    question: "Normalization mainly reduces?",
    options: [
      "Data anomalies",
      "RAM usage",
      "CPU usage",
      "Network traffic"
    ],
    answer: "Data anomalies"
  }
],
8: [
  {
    question: "A transaction is?",
    options: [
      "A logical unit of work",
      "A table",
      "A query result",
      "An index"
    ],
    answer: "A logical unit of work"
  },
  {
    question: "ACID stands for?",
    options: [
      "Atomicity Consistency Isolation Durability",
      "Accuracy Consistency Integrity Durability",
      "Atomicity Control Isolation Durability",
      "Atomicity Consistency Index Durability"
    ],
    answer: "Atomicity Consistency Isolation Durability"
  },
  {
    question: "Atomicity means?",
    options: [
      "All or nothing execution",
      "Fast execution",
      "Secure execution",
      "Parallel execution"
    ],
    answer: "All or nothing execution"
  },
  {
    question: "Consistency ensures?",
    options: [
      "Database remains valid",
      "Data is encrypted",
      "Queries run faster",
      "Indexes are updated"
    ],
    answer: "Database remains valid"
  },
  {
    question: "Isolation means?",
    options: [
      "Transactions execute independently",
      "Transactions are deleted",
      "Transactions are merged",
      "Transactions are encrypted"
    ],
    answer: "Transactions execute independently"
  },
  {
    question: "Durability means?",
    options: [
      "Changes persist after commit",
      "Queries execute faster",
      "Data remains encrypted",
      "Indexes are rebuilt"
    ],
    answer: "Changes persist after commit"
  },
  {
    question: "Which command permanently saves changes?",
    options: [
      "COMMIT",
      "ROLLBACK",
      "SAVEPOINT",
      "DELETE"
    ],
    answer: "COMMIT"
  },
  {
    question: "Which command undoes changes?",
    options: [
      "ROLLBACK",
      "COMMIT",
      "UPDATE",
      "ALTER"
    ],
    answer: "ROLLBACK"
  },
  {
    question: "A SAVEPOINT is used to?",
    options: [
      "Create rollback points",
      "Create tables",
      "Delete records",
      "Create indexes"
    ],
    answer: "Create rollback points"
  },
  {
    question: "Dirty Read occurs when?",
    options: [
      "Reading uncommitted data",
      "Reading deleted data",
      "Reading duplicate data",
      "Reading encrypted data"
    ],
    answer: "Reading uncommitted data"
  }
],
9: [
  {
    question: "An index is used to?",
    options: [
      "Speed up data retrieval",
      "Store data",
      "Delete records",
      "Encrypt tables"
    ],
    answer: "Speed up data retrieval"
  },
  {
    question: "Which data structure is commonly used in DBMS indexes?",
    options: [
      "B-Tree",
      "Stack",
      "Queue",
      "Graph"
    ],
    answer: "B-Tree"
  },
  {
    question: "Primary index is built on?",
    options: [
      "Primary key",
      "Foreign key",
      "Any column",
      "View"
    ],
    answer: "Primary key"
  },
  {
    question: "Dense index contains?",
    options: [
      "Entry for every record",
      "Entry for some records",
      "No entries",
      "Only primary keys"
    ],
    answer: "Entry for every record"
  },
  {
    question: "Sparse index contains?",
    options: [
      "Entries for selected records",
      "Entry for every record",
      "Only duplicate records",
      "Only foreign keys"
    ],
    answer: "Entries for selected records"
  },
  {
    question: "Query optimization aims to?",
    options: [
      "Reduce query execution time",
      "Increase redundancy",
      "Delete indexes",
      "Reduce storage"
    ],
    answer: "Reduce query execution time"
  },
  {
    question: "Full table scan means?",
    options: [
      "Scanning every row",
      "Scanning every database",
      "Scanning indexes only",
      "Scanning keys only"
    ],
    answer: "Scanning every row"
  },
  {
    question: "Clustered index determines?",
    options: [
      "Physical order of data",
      "Database size",
      "Query language",
      "Transaction order"
    ],
    answer: "Physical order of data"
  },
  {
    question: "Non-clustered index stores?",
    options: [
      "Pointers to records",
      "Actual records only",
      "Foreign keys only",
      "Views only"
    ],
    answer: "Pointers to records"
  },
  {
    question: "Too many indexes can?",
    options: [
      "Slow inserts and updates",
      "Increase security",
      "Reduce storage",
      "Prevent joins"
    ],
    answer: "Slow inserts and updates"
  }
],
10: [
  {
    question: "What is a View?",
    options: [
      "Virtual table",
      "Physical table",
      "Index",
      "Transaction"
    ],
    answer: "Virtual table"
  },
  {
    question: "What is a Stored Procedure?",
    options: [
      "Saved SQL program",
      "Index",
      "Table",
      "Constraint"
    ],
    answer: "Saved SQL program"
  },
  {
    question: "What is a Trigger?",
    options: [
      "Automatically executed procedure",
      "Primary key",
      "Index",
      "View"
    ],
    answer: "Automatically executed procedure"
  },
  {
    question: "Which command removes all rows but keeps table structure?",
    options: [
      "TRUNCATE",
      "DROP",
      "DELETE DATABASE",
      "REMOVE"
    ],
    answer: "TRUNCATE"
  },
  {
    question: "Difference between DELETE and TRUNCATE?",
    options: [
      "DELETE logs rows individually",
      "Both are identical",
      "TRUNCATE is slower",
      "DELETE removes table"
    ],
    answer: "DELETE logs rows individually"
  },
  {
    question: "What is a Cursor?",
    options: [
      "Database object for row-by-row processing",
      "Primary key",
      "View",
      "Index"
    ],
    answer: "Database object for row-by-row processing"
  },
  {
    question: "What is Sharding?",
    options: [
      "Splitting database across servers",
      "Creating indexes",
      "Joining tables",
      "Backing up database"
    ],
    answer: "Splitting database across servers"
  },
  {
    question: "What is Replication?",
    options: [
      "Copying data across databases",
      "Deleting duplicate data",
      "Indexing tables",
      "Query optimization"
    ],
    answer: "Copying data across databases"
  },
  {
    question: "Which SQL clause is executed after GROUP BY?",
    options: [
      "HAVING",
      "WHERE",
      "SELECT",
      "FROM"
    ],
    answer: "HAVING"
  },
  {
    question: "Which DBMS topic is asked most in interviews?",
    options: [
      "Normalization and Joins",
      "Colors",
      "Operating Systems",
      "HTML"
    ],
    answer: "Normalization and Joins"
  }
]
},
 html: {
  1: [
{
  question: "What does HTML stand for?",
  options: [
    "HyperText Markup Language",
    "HyperText Markdown Language",
    "HighText Markup Language",
    "Hyper Transfer Markup Language"
  ],
  answer: "HyperText Markup Language"
},
{
  question: "Which tag is used to create the largest heading?",
  options: ["<h1>", "<h6>", "<head>", "<heading>"],
  answer: "<h1>"
},
{
  question: "Which HTML tag creates a paragraph?",
  options: ["<p>", "<para>", "<text>", "<paragraph>"],
  answer: "<p>"
},
{
  question: "Which tag inserts a line break?",
  options: ["<br>", "<break>", "<lb>", "<newline>"],
  answer: "<br>"
},
{
  question: "Which tag is used for hyperlinks?",
  options: ["<a>", "<link>", "<href>", "<url>"],
  answer: "<a>"
},
{
  question: "Which attribute specifies a link destination?",
  options: ["href", "src", "link", "url"],
  answer: "href"
},
{
  question: "Which tag displays an image?",
  options: ["<img>", "<image>", "<picture>", "<src>"],
  answer: "<img>"
},
{
  question: "HTML files usually have extension?",
  options: [".html", ".ht", ".web", ".xml"],
  answer: ".html"
},
{
  question: "Which tag contains page title?",
  options: ["<title>", "<head>", "<meta>", "<body>"],
  answer: "<title>"
},
{
  question: "Which tag contains visible page content?",
  options: ["<body>", "<main>", "<html>", "<head>"],
  answer: "<body>"
}
],
2: [
{
  question: "Which attribute provides alternate text for images?",
  options: ["alt", "title", "src", "name"],
  answer: "alt"
},
{
  question: "Which attribute uniquely identifies an element?",
  options: ["id", "class", "name", "key"],
  answer: "id"
},
{
  question: "Which attribute groups elements together?",
  options: ["class", "id", "group", "type"],
  answer: "class"
},
{
  question: "Which tag creates an unordered list?",
  options: ["<ul>", "<ol>", "<li>", "<list>"],
  answer: "<ul>"
},
{
  question: "Which tag creates an ordered list?",
  options: ["<ol>", "<ul>", "<li>", "<order>"],
  answer: "<ol>"
},
{
  question: "Which tag represents a list item?",
  options: ["<li>", "<ul>", "<ol>", "<item>"],
  answer: "<li>"
},
{
  question: "Which attribute opens a link in new tab?",
  options: ["target='_blank'", "new='tab'", "open='new'", "target='new'"],
  answer: "target='_blank'"
},
{
  question: "Which tag is used for horizontal line?",
  options: ["<hr>", "<line>", "<br>", "<divider>"],
  answer: "<hr>"
},
{
  question: "Which tag makes text bold?",
  options: ["<b>", "<strong>", "Both", "<bold>"],
  answer: "Both"
},
{
  question: "Which tag makes text italic?",
  options: ["<i>", "<italic>", "<em>", "Both <i> and <em>"],
  answer: "Both <i> and <em>"
}
],
3: [
{
  question: "What is the output of <h1>Hello</h1>?",
  options: [
    "Large heading Hello",
    "Normal text Hello",
    "Error",
    "Italic Hello"
  ],
  answer: "Large heading Hello"
},
{
  question: "What is displayed by <p>Hello<br>World</p>?",
  options: [
    "Hello and World on separate lines",
    "HelloWorld",
    "Error",
    "World Hello"
  ],
  answer: "Hello and World on separate lines"
},
{
  question: "Which tag creates a clickable image?",
  options: [
    "<a><img></a>",
    "<img><a></a>",
    "<link><img>",
    "<picture>"
  ],
  answer: "<a><img></a>"
},
{
  question: "What does <hr> display?",
  options: [
    "Horizontal line",
    "Heading",
    "Hyperlink",
    "Image"
  ],
  answer: "Horizontal line"
},
{
  question: "Which tag displays code snippets?",
  options: ["<code>", "<snippet>", "<program>", "<precode>"],
  answer: "<code>"
},
{
  question: "Which tag preserves spaces and line breaks?",
  options: ["<pre>", "<p>", "<space>", "<code>"],
  answer: "<pre>"
},
{
  question: "What is output of <strong>Hello</strong>?",
  options: [
    "Bold text",
    "Italic text",
    "Underlined text",
    "Normal text"
  ],
  answer: "Bold text"
},
{
  question: "What is output of <em>Hello</em>?",
  options: [
    "Italic text",
    "Bold text",
    "Underline",
    "Normal text"
  ],
  answer: "Italic text"
},
{
  question: "Which tag creates a checkbox?",
  options: [
    "<input type='checkbox'>",
    "<checkbox>",
    "<input checkbox>",
    "<check>"
  ],
  answer: "<input type='checkbox'>"
},
{
  question: "Which tag creates a button?",
  options: [
    "<button>",
    "<btn>",
    "<click>",
    "<inputbutton>"
  ],
  answer: "<button>"
}
],
4: [
{
  question: "Which tag is used to create a form?",
  options: ["<form>", "<input>", "<fieldset>", "<label>"],
  answer: "<form>"
},
{
  question: "Which input type hides entered characters?",
  options: ["password", "text", "hidden", "email"],
  answer: "password"
},
{
  question: "Which input type is used for email validation?",
  options: ["email", "mail", "text", "validate"],
  answer: "email"
},
{
  question: "Which tag associates text with a form field?",
  options: ["<label>", "<span>", "<caption>", "<legend>"],
  answer: "<label>"
},
{
  question: "Which attribute makes a field mandatory?",
  options: ["required", "mandatory", "validate", "mustfill"],
  answer: "required"
},
{
  question: "Which input type allows selecting a date?",
  options: ["date", "calendar", "datetime", "time"],
  answer: "date"
},
{
  question: "Which input type allows only one option selection?",
  options: ["radio", "checkbox", "select", "option"],
  answer: "radio"
},
{
  question: "Which input type allows multiple selections?",
  options: ["checkbox", "radio", "option", "select"],
  answer: "checkbox"
},
{
  question: "Which tag creates a dropdown list?",
  options: ["<select>", "<option>", "<dropdown>", "<list>"],
  answer: "<select>"
},
{
  question: "Which button submits a form?",
  options: ["type='submit'", "type='button'", "type='send'", "type='click'"],
  answer: "type='submit'"
}
],
5: [
{
  question: "Which tag creates a table?",
  options: ["<table>", "<tr>", "<td>", "<tab>"],
  answer: "<table>"
},
{
  question: "Which tag creates a table row?",
  options: ["<tr>", "<row>", "<td>", "<th>"],
  answer: "<tr>"
},
{
  question: "Which tag creates a table cell?",
  options: ["<td>", "<tr>", "<th>", "<cell>"],
  answer: "<td>"
},
{
  question: "Which tag creates a table header?",
  options: ["<th>", "<thead>", "<head>", "<td>"],
  answer: "<th>"
},
{
  question: "Which tag groups table headers?",
  options: ["<thead>", "<th>", "<tbody>", "<table>"],
  answer: "<thead>"
},
{
  question: "Which tag groups table body rows?",
  options: ["<tbody>", "<thead>", "<tfoot>", "<tr>"],
  answer: "<tbody>"
},
{
  question: "Which attribute merges columns?",
  options: ["colspan", "rowspan", "merge", "span"],
  answer: "colspan"
},
{
  question: "Which attribute merges rows?",
  options: ["rowspan", "colspan", "merge", "rows"],
  answer: "rowspan"
},
{
  question: "Which tag adds a table caption?",
  options: ["<caption>", "<title>", "<label>", "<head>"],
  answer: "<caption>"
},
{
  question: "Which section appears at the bottom of a table?",
  options: ["<tfoot>", "<tbody>", "<thead>", "<tr>"],
  answer: "<tfoot>"
}
],
6: [
{
  question: "Semantic HTML means?",
  options: [
    "Using meaningful tags",
    "Using CSS",
    "Using JavaScript",
    "Using IDs"
  ],
  answer: "Using meaningful tags"
},
{
  question: "Which tag represents page navigation?",
  options: ["<nav>", "<menu>", "<header>", "<section>"],
  answer: "<nav>"
},
{
  question: "Which tag represents main content?",
  options: ["<main>", "<body>", "<section>", "<article>"],
  answer: "<main>"
},
{
  question: "Which tag represents independent content?",
  options: ["<article>", "<section>", "<main>", "<aside>"],
  answer: "<article>"
},
{
  question: "Which tag represents a section?",
  options: ["<section>", "<article>", "<div>", "<aside>"],
  answer: "<section>"
},
{
  question: "Which tag represents side content?",
  options: ["<aside>", "<section>", "<main>", "<footer>"],
  answer: "<aside>"
},
{
  question: "Which tag represents footer content?",
  options: ["<footer>", "<bottom>", "<end>", "<section>"],
  answer: "<footer>"
},
{
  question: "Which semantic tag improves SEO?",
  options: [
    "Semantic tags",
    "div",
    "span",
    "font"
  ],
  answer: "Semantic tags"
},
{
  question: "Which tag represents introductory content?",
  options: ["<header>", "<head>", "<intro>", "<title>"],
  answer: "<header>"
},
{
  question: "Which tag is non-semantic?",
  options: ["<div>", "<article>", "<section>", "<nav>"],
  answer: "<div>"
}
],
7: [
{
  question: "Which tag embeds audio?",
  options: ["<audio>", "<music>", "<sound>", "<media>"],
  answer: "<audio>"
},
{
  question: "Which tag embeds video?",
  options: ["<video>", "<movie>", "<media>", "<play>"],
  answer: "<video>"
},
{
  question: "Which attribute displays video controls?",
  options: ["controls", "play", "show", "media"],
  answer: "controls"
},
{
  question: "Which tag specifies media source?",
  options: ["<source>", "<src>", "<media>", "<file>"],
  answer: "<source>"
},
{
  question: "Which attribute starts media automatically?",
  options: ["autoplay", "auto", "play", "start"],
  answer: "autoplay"
},
{
  question: "Which attribute repeats media?",
  options: ["loop", "repeat", "replay", "again"],
  answer: "loop"
},
{
  question: "Which attribute mutes media?",
  options: ["muted", "silent", "mute", "off"],
  answer: "muted"
},
{
  question: "Which tag embeds another webpage?",
  options: ["<iframe>", "<frame>", "<embed>", "<object>"],
  answer: "<iframe>"
},
{
  question: "YouTube videos are commonly embedded using?",
  options: ["iframe", "video", "audio", "embed"],
  answer: "iframe"
},
{
  question: "Which element is HTML5 multimedia support?",
  options: [
    "audio and video",
    "flash",
    "java applet",
    "silverlight"
  ],
  answer: "audio and video"
}
],
8: [
{
  question: "Why is alt text important?",
  options: [
    "Accessibility",
    "Styling",
    "Animation",
    "Database"
  ],
  answer: "Accessibility"
},
{
  question: "Screen readers use?",
  options: [
    "Semantic structure",
    "CSS colors",
    "JavaScript",
    "Fonts"
  ],
  answer: "Semantic structure"
},
{
  question: "Which element improves form accessibility?",
  options: ["label", "div", "span", "br"],
  answer: "label"
},
{
  question: "What is ARIA?",
  options: [
    "Accessibility attributes",
    "CSS framework",
    "Database",
    "Browser API"
  ],
  answer: "Accessibility attributes"
},
{
  question: "Good accessibility helps?",
  options: [
    "Users with disabilities",
    "Only developers",
    "Servers",
    "Databases"
  ],
  answer: "Users with disabilities"
},
{
  question: "Which tag helps navigation accessibility?",
  options: ["nav", "div", "span", "b"],
  answer: "nav"
},
{
  question: "Images should have?",
  options: ["alt text", "CSS", "IDs", "classes"],
  answer: "alt text"
},
{
  question: "Keyboard navigation improves?",
  options: [
    "Accessibility",
    "Storage",
    "Bandwidth",
    "Database"
  ],
  answer: "Accessibility"
},
{
  question: "Which heading order is best practice?",
  options: [
    "h1 → h2 → h3",
    "h1 → h4 → h2",
    "h3 → h1",
    "Any order"
  ],
  answer: "h1 → h2 → h3"
},
{
  question: "Accessibility is important for?",
  options: [
    "All users",
    "Only blind users",
    "Only developers",
    "Only designers"
  ],
  answer: "All users"
}
],
9: [
{
  question: "Which HTML5 feature stores data in browser?",
  options: [
    "Local Storage",
    "Cookies only",
    "FTP",
    "SQL"
  ],
  answer: "Local Storage"
},
{
  question: "localStorage data persists after?",
  options: [
    "Browser restart",
    "Page refresh only",
    "Logout only",
    "Session end"
  ],
  answer: "Browser restart"
},
{
  question: "sessionStorage lasts until?",
  options: [
    "Tab closes",
    "Browser reinstall",
    "System restart",
    "Forever"
  ],
  answer: "Tab closes"
},
{
  question: "Which API gets user location?",
  options: [
    "Geolocation API",
    "Storage API",
    "Canvas API",
    "Media API"
  ],
  answer: "Geolocation API"
},
{
  question: "Canvas is used for?",
  options: [
    "Drawing graphics",
    "Database storage",
    "Networking",
    "Forms"
  ],
  answer: "Drawing graphics"
},
{
  question: "Which element creates graphics?",
  options: [
    "<canvas>",
    "<graphic>",
    "<draw>",
    "<paint>"
  ],
  answer: "<canvas>"
},
{
  question: "Web Storage consists of?",
  options: [
    "localStorage and sessionStorage",
    "Cookies and cache",
    "HTML and CSS",
    "Forms and tables"
  ],
  answer: "localStorage and sessionStorage"
},
{
  question: "Drag and Drop is introduced in?",
  options: [
    "HTML5",
    "HTML4",
    "CSS3",
    "XML"
  ],
  answer: "HTML5"
},
{
  question: "Offline web applications became easier with?",
  options: [
    "HTML5",
    "HTML3",
    "CSS",
    "Bootstrap"
  ],
  answer: "HTML5"
},
{
  question: "Canvas graphics are drawn using?",
  options: [
    "JavaScript",
    "CSS",
    "SQL",
    "PHP"
  ],
  answer: "JavaScript"
}
],
10: [
{
  question: "Difference between div and span?",
  options: [
    "div is block, span is inline",
    "Both are same",
    "span is block",
    "div is inline"
  ],
  answer: "div is block, span is inline"
},
{
  question: "Which element is block-level?",
  options: ["div", "span", "a", "img"],
  answer: "div"
},
{
  question: "Which element is inline?",
  options: ["span", "div", "section", "article"],
  answer: "span"
},
{
  question: "Why use semantic HTML?",
  options: [
    "SEO and accessibility",
    "Increase RAM",
    "Increase CPU",
    "Database optimization"
  ],
  answer: "SEO and accessibility"
},
{
  question: "What is the purpose of meta tags?",
  options: [
    "Provide page metadata",
    "Style page",
    "Create database",
    "Handle events"
  ],
  answer: "Provide page metadata"
},
{
  question: "Viewport meta tag is mainly used for?",
  options: [
    "Responsive design",
    "SEO only",
    "Storage",
    "Animation"
  ],
  answer: "Responsive design"
},
{
  question: "Which tag is most important for SEO?",
  options: [
    "<title>",
    "<div>",
    "<span>",
    "<br>"
  ],
  answer: "<title>"
},
{
  question: "What does defer do in script tag?",
  options: [
    "Loads script after HTML parsing",
    "Stops script execution",
    "Loads CSS",
    "Creates module"
  ],
  answer: "Loads script after HTML parsing"
},
{
  question: "What does async do?",
  options: [
    "Loads script independently",
    "Makes page synchronous",
    "Loads CSS",
    "Creates animation"
  ],
  answer: "Loads script independently"
},
{
  question: "Which HTML topic is most asked in frontend interviews?",
  options: [
    "Semantic HTML and Forms",
    "Marquee tag",
    "Frameset",
    "Applet"
  ],
  answer: "Semantic HTML and Forms"
}
]
 },
 css : {
  1: [
{
  question: "What does CSS stand for?",
  options: [
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Creative Style Sheets",
    "Colorful Style Sheets"
  ],
  answer: "Cascading Style Sheets"
},
{
  question: "Which tag is used to link an external CSS file?",
  options: [
    "<link>",
    "<style>",
    "<css>",
    "<script>"
  ],
  answer: "<link>"
},
{
  question: "Which attribute is used to apply inline CSS?",
  options: [
    "style",
    "css",
    "class",
    "id"
  ],
  answer: "style"
},
{
  question: "Which CSS property changes text color?",
  options: [
    "color",
    "text-color",
    "font-color",
    "foreground"
  ],
  answer: "color"
},
{
  question: "Which CSS property changes background color?",
  options: [
    "background-color",
    "bgcolor",
    "color",
    "background"
  ],
  answer: "background-color"
},
{
  question: "Which symbol is used for class selector?",
  options: [
    ".",
    "#",
    "*",
    "@"
  ],
  answer: "."
},
{
  question: "Which symbol is used for id selector?",
  options: [
    "#",
    ".",
    "*",
    "@"
  ],
  answer: "#"
},
{
  question: "Which property changes font size?",
  options: [
    "font-size",
    "text-size",
    "size",
    "font-style"
  ],
  answer: "font-size"
},
{
  question: "Which property makes text bold?",
  options: [
    "font-weight",
    "font-style",
    "text-weight",
    "bold"
  ],
  answer: "font-weight"
},
{
  question: "Which property centers text?",
  options: [
    "text-align",
    "align",
    "center",
    "justify"
  ],
  answer: "text-align"
}
],
2: [
{
  question: "Which selector selects all elements?",
  options: [
    "*",
    ".",
    "#",
    "&"
  ],
  answer: "*"
},
{
  question: "Which selector selects all p tags?",
  options: [
    "p",
    ".p",
    "#p",
    "*p"
  ],
  answer: "p"
},
{
  question: "Which selector targets an element with id='box'?",
  options: [
    "#box",
    ".box",
    "box",
    "*box"
  ],
  answer: "#box"
},
{
  question: "Which selector targets class='container'?",
  options: [
    ".container",
    "#container",
    "container",
    "*container"
  ],
  answer: ".container"
},
{
  question: "Which selector selects child elements?",
  options: [
    ">",
    "+",
    "~",
    "*"
  ],
  answer: ">"
},
{
  question: "Which selector selects adjacent sibling?",
  options: [
    "+",
    ">",
    "~",
    "."
  ],
  answer: "+"
},
{
  question: "Which pseudo-class is used for hover effect?",
  options: [
    ":hover",
    ":focus",
    ":active",
    ":visit"
  ],
  answer: ":hover"
},
{
  question: "Which pseudo-class targets focused input?",
  options: [
    ":focus",
    ":hover",
    ":visited",
    ":target"
  ],
  answer: ":focus"
},
{
  question: "Which selector targets visited links?",
  options: [
    ":visited",
    ":hover",
    ":focus",
    ":link"
  ],
  answer: ":visited"
},
{
  question: "Which pseudo-class targets first child?",
  options: [
    ":first-child",
    ":nth-child",
    ":first",
    ":child"
  ],
  answer: ":first-child"
}
],
3: [
{
  question: "The CSS box model consists of?",
  options: [
    "Content, Padding, Border, Margin",
    "Content, Border",
    "Padding, Margin",
    "Width, Height"
  ],
  answer: "Content, Padding, Border, Margin"
},
{
  question: "Which property creates space inside border?",
  options: [
    "padding",
    "margin",
    "spacing",
    "gap"
  ],
  answer: "padding"
},
{
  question: "Which property creates space outside border?",
  options: [
    "margin",
    "padding",
    "gap",
    "space"
  ],
  answer: "margin"
},
{
  question: "Which property changes border thickness?",
  options: [
    "border-width",
    "border-size",
    "width",
    "thickness"
  ],
  answer: "border-width"
},
{
  question: "Which property rounds corners?",
  options: [
    "border-radius",
    "radius",
    "corner-radius",
    "round"
  ],
  answer: "border-radius"
},
{
  question: "Default box-sizing value is?",
  options: [
    "content-box",
    "border-box",
    "padding-box",
    "margin-box"
  ],
  answer: "content-box"
},
{
  question: "Which box-sizing includes border and padding in width?",
  options: [
    "border-box",
    "content-box",
    "padding-box",
    "inherit"
  ],
  answer: "border-box"
},
{
  question: "What does width:100% mean?",
  options: [
    "Take full parent width",
    "Full screen width",
    "100px",
    "100vw"
  ],
  answer: "Take full parent width"
},
{
  question: "Which property changes element height?",
  options: [
    "height",
    "size",
    "length",
    "max-height"
  ],
  answer: "height"
},
{
  question: "Which property changes element width?",
  options: [
    "width",
    "size",
    "length",
    "max-width"
  ],
  answer: "width"
}
],
4: [
{
  question: "Default position value is?",
  options: [
    "static",
    "relative",
    "absolute",
    "fixed"
  ],
  answer: "static"
},
{
  question: "Which position keeps element relative to itself?",
  options: [
    "relative",
    "absolute",
    "fixed",
    "sticky"
  ],
  answer: "relative"
},
{
  question: "Absolute positioned element is relative to?",
  options: [
    "Nearest positioned ancestor",
    "Body always",
    "Viewport",
    "Parent width"
  ],
  answer: "Nearest positioned ancestor"
},
{
  question: "Which position stays fixed during scrolling?",
  options: [
    "fixed",
    "absolute",
    "relative",
    "sticky"
  ],
  answer: "fixed"
},
{
  question: "Which position behaves like relative until scrolling?",
  options: [
    "sticky",
    "fixed",
    "absolute",
    "static"
  ],
  answer: "sticky"
},
{
  question: "Which property controls stacking order?",
  options: [
    "z-index",
    "stack",
    "layer",
    "order"
  ],
  answer: "z-index"
},
{
  question: "Higher z-index means?",
  options: [
    "Appears on top",
    "Appears behind",
    "Becomes larger",
    "Moves right"
  ],
  answer: "Appears on top"
},
{
  question: "top property works with?",
  options: [
    "Positioned elements",
    "Static elements",
    "Tables",
    "Forms"
  ],
  answer: "Positioned elements"
},
{
  question: "left property moves element?",
  options: [
    "Horizontally",
    "Vertically",
    "Diagonally",
    "Nowhere"
  ],
  answer: "Horizontally"
},
{
  question: "Fixed navbar generally uses?",
  options: [
    "position: fixed",
    "position: static",
    "position: relative",
    "position: inherit"
  ],
  answer: "position: fixed"
}
],
5: [
{
  question: "Which property enables Flexbox?",
  options: [
    "display: flex",
    "flex: true",
    "display: block",
    "display: grid"
  ],
  answer: "display: flex"
},
{
  question: "Main axis direction is controlled by?",
  options: [
    "flex-direction",
    "justify-content",
    "align-items",
    "flex-wrap"
  ],
  answer: "flex-direction"
},
{
  question: "Default flex-direction is?",
  options: [
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ],
  answer: "row"
},
{
  question: "Which property aligns items horizontally?",
  options: [
    "justify-content",
    "align-items",
    "align-content",
    "gap"
  ],
  answer: "justify-content"
},
{
  question: "Which property aligns items vertically?",
  options: [
    "align-items",
    "justify-content",
    "order",
    "gap"
  ],
  answer: "align-items"
},
{
  question: "Which value places items at center horizontally?",
  options: [
    "center",
    "flex-start",
    "flex-end",
    "space-between"
  ],
  answer: "center"
},
{
  question: "Which property allows items to move to next line?",
  options: [
    "flex-wrap",
    "flex-grow",
    "overflow",
    "wrap-content"
  ],
  answer: "flex-wrap"
},
{
  question: "Which property controls spacing between flex items?",
  options: [
    "gap",
    "margin",
    "padding",
    "space"
  ],
  answer: "gap"
},
{
  question: "Which property changes order of flex items?",
  options: [
    "order",
    "position",
    "z-index",
    "sequence"
  ],
  answer: "order"
},
{
  question: "Which property makes an item grow?",
  options: [
    "flex-grow",
    "flex-wrap",
    "grow",
    "expand"
  ],
  answer: "flex-grow"
}
],
6: [
{
  question: "Which property enables Grid layout?",
  options: [
    "display: grid",
    "display: flex",
    "grid: true",
    "layout: grid"
  ],
  answer: "display: grid"
},
{
  question: "Which property defines columns?",
  options: [
    "grid-template-columns",
    "grid-columns",
    "column-template",
    "columns"
  ],
  answer: "grid-template-columns"
},
{
  question: "Which property defines rows?",
  options: [
    "grid-template-rows",
    "grid-rows",
    "rows-template",
    "rows"
  ],
  answer: "grid-template-rows"
},
{
  question: "Which unit represents fraction of available space?",
  options: [
    "fr",
    "%",
    "px",
    "rem"
  ],
  answer: "fr"
},
{
  question: "Which property adds spacing between grid items?",
  options: [
    "gap",
    "margin",
    "padding",
    "space"
  ],
  answer: "gap"
},
{
  question: "How many columns in grid-template-columns: 1fr 1fr 1fr?",
  options: [
    "3",
    "2",
    "1",
    "4"
  ],
  answer: "3"
},
{
  question: "Which property places an item across columns?",
  options: [
    "grid-column",
    "column-span",
    "grid-span",
    "column"
  ],
  answer: "grid-column"
},
{
  question: "Which property places an item across rows?",
  options: [
    "grid-row",
    "row-span",
    "grid-span",
    "row"
  ],
  answer: "grid-row"
},
{
  question: "Grid is best suited for?",
  options: [
    "Two-dimensional layouts",
    "One-dimensional layouts",
    "Animations",
    "Forms only"
  ],
  answer: "Two-dimensional layouts"
},
{
  question: "Flexbox is mainly used for?",
  options: [
    "One-dimensional layouts",
    "Two-dimensional layouts",
    "Animations",
    "Typography"
  ],
  answer: "One-dimensional layouts"
}
],
7: [
{
  question: "Which feature makes websites responsive?",
  options: [
    "Media Queries",
    "Animations",
    "Selectors",
    "Pseudo-elements"
  ],
  answer: "Media Queries"
},
{
  question: "Media queries use which keyword?",
  options: [
    "@media",
    "@responsive",
    "@screen",
    "@mobile"
  ],
  answer: "@media"
},
{
  question: "Which unit is relative to viewport width?",
  options: [
    "vw",
    "vh",
    "px",
    "rem"
  ],
  answer: "vw"
},
{
  question: "Which unit is relative to viewport height?",
  options: [
    "vh",
    "vw",
    "%",
    "em"
  ],
  answer: "vh"
},
{
  question: "Which meta tag is important for responsiveness?",
  options: [
    "viewport",
    "charset",
    "description",
    "author"
  ],
  answer: "viewport"
},
{
  question: "Which breakpoint commonly targets tablets?",
  options: [
    "768px",
    "120px",
    "200px",
    "1500px"
  ],
  answer: "768px"
},
{
  question: "Which CSS property makes images responsive?",
  options: [
    "max-width:100%",
    "width:1000px",
    "height:auto only",
    "display:block"
  ],
  answer: "max-width:100%"
},
{
  question: "Bootstrap is primarily used for?",
  options: [
    "Responsive UI",
    "Database",
    "Backend",
    "Networking"
  ],
  answer: "Responsive UI"
},
{
  question: "Which layout adapts best to screen sizes?",
  options: [
    "Flexbox/Grid",
    "Tables",
    "Frames",
    "Inline CSS"
  ],
  answer: "Flexbox/Grid"
},
{
  question: "Mobile-first design means?",
  options: [
    "Design for mobile then scale up",
    "Desktop only",
    "Tablet only",
    "Ignore mobile"
  ],
  answer: "Design for mobile then scale up"
}
],
8: [
{
  question: "Which property creates smooth changes?",
  options: [
    "transition",
    "animation",
    "transform",
    "effect"
  ],
  answer: "transition"
},
{
  question: "Which property rotates an element?",
  options: [
    "transform",
    "rotate",
    "transition",
    "spin"
  ],
  answer: "transform"
},
{
  question: "Which function rotates an element?",
  options: [
    "rotate()",
    "spin()",
    "turn()",
    "move()"
  ],
  answer: "rotate()"
},
{
  question: "Which function scales an element?",
  options: [
    "scale()",
    "resize()",
    "grow()",
    "expand()"
  ],
  answer: "scale()"
},
{
  question: "Which function moves an element?",
  options: [
    "translate()",
    "move()",
    "shift()",
    "position()"
  ],
  answer: "translate()"
},
{
  question: "Which rule defines animations?",
  options: [
    "@keyframes",
    "@animation",
    "@frames",
    "@motion"
  ],
  answer: "@keyframes"
},
{
  question: "Which property assigns animation name?",
  options: [
    "animation-name",
    "animation",
    "name",
    "keyframe"
  ],
  answer: "animation-name"
},
{
  question: "Which property controls animation duration?",
  options: [
    "animation-duration",
    "duration",
    "speed",
    "animation-time"
  ],
  answer: "animation-duration"
},
{
  question: "transition: all 0.3s means?",
  options: [
    "Animate changes over 0.3 seconds",
    "Delay by 3 seconds",
    "Instant change",
    "Disable animation"
  ],
  answer: "Animate changes over 0.3 seconds"
},
{
  question: "Hover animations commonly use?",
  options: [
    "transition",
    "float",
    "media query",
    "position"
  ],
  answer: "transition"
}
],
9: [
{
  question: "Which selector has highest specificity?",
  options: [
    "#id",
    ".class",
    "element",
    "*"
  ],
  answer: "#id"
},
{
  question: "Which has higher specificity?",
  options: [
    ".class",
    "div",
    "*",
    "body"
  ],
  answer: ".class"
},
{
  question: "Which keyword overrides most styles?",
  options: [
    "!important",
    "override",
    "priority",
    "force"
  ],
  answer: "!important"
},
{
  question: "Pseudo-element for first letter?",
  options: [
    "::first-letter",
    ":first-letter",
    "::letter",
    ":letter"
  ],
  answer: "::first-letter"
},
{
  question: "Pseudo-element for inserting content before element?",
  options: [
    "::before",
    "::start",
    "::prepend",
    "::front"
  ],
  answer: "::before"
},
{
  question: "Pseudo-element for inserting content after element?",
  options: [
    "::after",
    "::append",
    "::end",
    "::last"
  ],
  answer: "::after"
},
{
  question: "Which property creates shadow around text?",
  options: [
    "text-shadow",
    "shadow",
    "font-shadow",
    "box-shadow"
  ],
  answer: "text-shadow"
},
{
  question: "Which property creates shadow around box?",
  options: [
    "box-shadow",
    "shadow",
    "container-shadow",
    "text-shadow"
  ],
  answer: "box-shadow"
},
{
  question: "Which CSS variable syntax is correct?",
  options: [
    "--main-color",
    "$main-color",
    "@main-color",
    "#main-color"
  ],
  answer: "--main-color"
},
{
  question: "CSS variables are accessed using?",
  options: [
    "var()",
    "getVar()",
    "$()",
    "variable()"
  ],
  answer: "var()"
}
],
10: [
{
  question: "Difference between margin and padding?",
  options: [
    "Margin outside, padding inside",
    "Padding outside, margin inside",
    "Both same",
    "Neither"
  ],
  answer: "Margin outside, padding inside"
},
{
  question: "Which layout system is best for navbar?",
  options: [
    "Flexbox",
    "Grid",
    "Table",
    "Float"
  ],
  answer: "Flexbox"
},
{
  question: "Which layout system is best for dashboard?",
  options: [
    "Grid",
    "Flexbox",
    "Float",
    "Table"
  ],
  answer: "Grid"
},
{
  question: "Which CSS property hides overflow content?",
  options: [
    "overflow: hidden",
    "display: none",
    "visibility: hidden",
    "clip"
  ],
  answer: "overflow: hidden"
},
{
  question: "Difference between display:none and visibility:hidden?",
  options: [
    "display:none removes space, visibility:hidden keeps space",
    "Both same",
    "visibility:hidden removes space",
    "None"
  ],
  answer: "display:none removes space, visibility:hidden keeps space"
},
{
  question: "Which unit is best for scalable typography?",
  options: [
    "rem",
    "px",
    "cm",
    "mm"
  ],
  answer: "rem"
},
{
  question: "Which CSS concept is most used for modern layouts?",
  options: [
    "Flexbox and Grid",
    "Tables",
    "Frames",
    "Floats only"
  ],
  answer: "Flexbox and Grid"
},
{
  question: "What is specificity in CSS?",
  options: [
    "Rule priority calculation",
    "Animation speed",
    "Font size",
    "Page layout"
  ],
  answer: "Rule priority calculation"
},
{
  question: "What is the purpose of media queries?",
  options: [
    "Responsive design",
    "Database access",
    "Animations",
    "JavaScript execution"
  ],
  answer: "Responsive design"
},
{
  question: "Most important CSS topic for frontend interviews?",
  options: [
    "Flexbox, Grid, Specificity",
    "Colors only",
    "Fonts only",
    "Borders only"
  ],
  answer: "Flexbox, Grid, Specificity"
}
]
 },
 javascript: {
  1: [
{
  question: "JavaScript is a?",
  options: [
    "Programming Language",
    "Database",
    "Operating System",
    "Browser"
  ],
  answer: "Programming Language"
},
{
  question: "Which keyword declares a variable?",
  options: [
    "let",
    "variable",
    "int",
    "define"
  ],
  answer: "let"
},
{
  question: "Which keyword declares a constant?",
  options: [
    "const",
    "let",
    "var",
    "constant"
  ],
  answer: "const"
},
{
  question: "Output of typeof 10?",
  options: [
    "number",
    "integer",
    "float",
    "object"
  ],
  answer: "number"
},
{
  question: "Which symbol is used for comments?",
  options: [
    "//",
    "#",
    "--",
    "**"
  ],
  answer: "//"
},
{
  question: "Which value represents 'nothing'?",
  options: [
    "null",
    "0",
    "false",
    "undefined"
  ],
  answer: "null"
},
{
  question: "Output of 2 + '2'?",
  options: [
    "22",
    "4",
    "NaN",
    "undefined"
  ],
  answer: "22"
},
{
  question: "Which operator checks equality and type?",
  options: [
    "===",
    "==",
    "=",
    "!="
  ],
  answer: "==="
},
{
  question: "Output of Boolean(1)?",
  options: [
    "true",
    "false",
    "1",
    "undefined"
  ],
  answer: "true"
},
{
  question: "JavaScript runs in?",
  options: [
    "Browser",
    "Database",
    "Compiler",
    "Operating System"
  ],
  answer: "Browser"
}
],
2: [
{
  question: "Which datatype stores text?",
  options: [
    "String",
    "Number",
    "Boolean",
    "Object"
  ],
  answer: "String"
},
{
  question: "Which datatype stores true/false?",
  options: [
    "Boolean",
    "String",
    "Number",
    "Array"
  ],
  answer: "Boolean"
},
{
  question: "typeof null returns?",
  options: [
    "object",
    "null",
    "undefined",
    "string"
  ],
  answer: "object"
},
{
  question: "typeof undefined returns?",
  options: [
    "undefined",
    "object",
    "null",
    "string"
  ],
  answer: "undefined"
},
{
  question: "Which is NOT primitive?",
  options: [
    "Object",
    "String",
    "Number",
    "Boolean"
  ],
  answer: "Object"
},
{
  question: "let allows?",
  options: [
    "Reassignment",
    "Redeclaration in same scope",
    "Neither",
    "Only constants"
  ],
  answer: "Reassignment"
},
{
  question: "const allows?",
  options: [
    "No reassignment",
    "Reassignment",
    "Redeclaration",
    "Mutation only"
  ],
  answer: "No reassignment"
},
{
  question: "NaN stands for?",
  options: [
    "Not a Number",
    "New and Null",
    "Number and Null",
    "None"
  ],
  answer: "Not a Number"
},
{
  question: "Which datatype stores key-value pairs?",
  options: [
    "Object",
    "Array",
    "String",
    "Boolean"
  ],
  answer: "Object"
},
{
  question: "typeof [] returns?",
  options: [
    "object",
    "array",
    "list",
    "undefined"
  ],
  answer: "object"
}
],
3: [
{
  question: "How do you declare a function?",
  options: [
    "function myFunc(){}",
    "func myFunc(){}",
    "create myFunc(){}",
    "define myFunc(){}"
  ],
  answer: "function myFunc(){}"
},
{
  question: "Functions are used to?",
  options: [
    "Reuse code",
    "Store data",
    "Create HTML",
    "Style pages"
  ],
  answer: "Reuse code"
},
{
  question: "Output of function add(a,b){return a+b}",
  options: [
    "Returns sum",
    "Prints sum",
    "Stores sum",
    "Deletes sum"
  ],
  answer: "Returns sum"
},
{
  question: "Arrow functions introduced in?",
  options: [
    "ES6",
    "ES5",
    "ES4",
    "ES3"
  ],
  answer: "ES6"
},
{
  question: "Arrow function syntax?",
  options: [
    "()=>{}",
    "->{}",
    "=>()",
    "<=>"
  ],
  answer: "()=>{}"
},
{
  question: "Default return value if none specified?",
  options: [
    "undefined",
    "null",
    "0",
    "false"
  ],
  answer: "undefined"
},
{
  question: "Functions can be stored in?",
  options: [
    "Variables",
    "Only classes",
    "Only arrays",
    "Only objects"
  ],
  answer: "Variables"
},
{
  question: "Immediately Invoked Function Expression is?",
  options: [
    "IIFE",
    "IFE",
    "IFF",
    "IIE"
  ],
  answer: "IIFE"
},
{
  question: "Function parameters are?",
  options: [
    "Inputs",
    "Outputs",
    "Variables",
    "Objects"
  ],
  answer: "Inputs"
},
{
  question: "Function return keyword is?",
  options: [
    "return",
    "give",
    "output",
    "yield"
  ],
  answer: "return"
}
],
4: [
{
  question: "Arrays store?",
  options: [
    "Multiple values",
    "Single value",
    "Functions only",
    "Objects only"
  ],
  answer: "Multiple values"
},
{
  question: "Array indexing starts from?",
  options: [
    "0",
    "1",
    "-1",
    "Depends"
  ],
  answer: "0"
},
{
  question: "Which method adds element at end?",
  options: [
    "push()",
    "pop()",
    "shift()",
    "unshift()"
  ],
  answer: "push()"
},
{
  question: "Which method removes last element?",
  options: [
    "pop()",
    "push()",
    "shift()",
    "splice()"
  ],
  answer: "pop()"
},
{
  question: "Which method removes first element?",
  options: [
    "shift()",
    "pop()",
    "push()",
    "slice()"
  ],
  answer: "shift()"
},
{
  question: "Which method adds element at beginning?",
  options: [
    "unshift()",
    "push()",
    "shift()",
    "splice()"
  ],
  answer: "unshift()"
},
{
  question: "map() returns?",
  options: [
    "New array",
    "Boolean",
    "Object",
    "Nothing"
  ],
  answer: "New array"
},
{
  question: "filter() returns?",
  options: [
    "Filtered array",
    "Single value",
    "Object",
    "String"
  ],
  answer: "Filtered array"
},
{
  question: "forEach() returns?",
  options: [
    "undefined",
    "Array",
    "Object",
    "Boolean"
  ],
  answer: "undefined"
},
{
  question: "Array length property?",
  options: [
    "length",
    "size",
    "count",
    "len"
  ],
  answer: "length"
}
],
5: [
{
  question: "Objects store data in?",
  options: [
    "Key-value pairs",
    "Arrays only",
    "Functions only",
    "Strings only"
  ],
  answer: "Key-value pairs"
},
{
  question: "How do you access object property name?",
  options: [
    "obj.name",
    "obj->name",
    "obj:name",
    "obj[name]"
  ],
  answer: "obj.name"
},
{
  question: "Which keyword creates a class?",
  options: [
    "class",
    "Class",
    "new",
    "object"
  ],
  answer: "class"
},
{
  question: "Which keyword creates an object from a class?",
  options: [
    "new",
    "create",
    "class",
    "this"
  ],
  answer: "new"
},
{
  question: "What does 'this' refer to?",
  options: [
    "Current object",
    "Global object always",
    "Parent object",
    "Window only"
  ],
  answer: "Current object"
},
{
  question: "Which OOP concept allows code reuse?",
  options: [
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction"
  ],
  answer: "Inheritance"
},
{
  question: "Which OOP concept hides implementation details?",
  options: [
    "Abstraction",
    "Inheritance",
    "Polymorphism",
    "Overloading"
  ],
  answer: "Abstraction"
},
{
  question: "Method is?",
  options: [
    "Function inside object",
    "Variable",
    "Array",
    "Loop"
  ],
  answer: "Function inside object"
},
{
  question: "Object.keys(obj) returns?",
  options: [
    "Array of keys",
    "Array of values",
    "Object",
    "Boolean"
  ],
  answer: "Array of keys"
},
{
  question: "Object.values(obj) returns?",
  options: [
    "Array of values",
    "Array of keys",
    "Object",
    "String"
  ],
  answer: "Array of values"
}
],
6: [
{
  question: "DOM stands for?",
  options: [
    "Document Object Model",
    "Data Object Model",
    "Document Oriented Method",
    "Dynamic Object Method"
  ],
  answer: "Document Object Model"
},
{
  question: "Which method selects element by id?",
  options: [
    "getElementById()",
    "querySelectorAll()",
    "getElementsByClassName()",
    "findElement()"
  ],
  answer: "getElementById()"
},
{
  question: "Which method selects first matching element?",
  options: [
    "querySelector()",
    "querySelectorAll()",
    "getElement()",
    "select()"
  ],
  answer: "querySelector()"
},
{
  question: "Which method returns all matching elements?",
  options: [
    "querySelectorAll()",
    "querySelector()",
    "getElementById()",
    "selectAll()"
  ],
  answer: "querySelectorAll()"
},
{
  question: "Which property changes text content?",
  options: [
    "innerText",
    "textValue",
    "valueText",
    "content"
  ],
  answer: "innerText"
},
{
  question: "Which property changes HTML content?",
  options: [
    "innerHTML",
    "outerText",
    "textContent",
    "html"
  ],
  answer: "innerHTML"
},
{
  question: "Which method creates a new element?",
  options: [
    "createElement()",
    "newElement()",
    "appendElement()",
    "makeElement()"
  ],
  answer: "createElement()"
},
{
  question: "Which method adds an element to DOM?",
  options: [
    "appendChild()",
    "addChild()",
    "insert()",
    "push()"
  ],
  answer: "appendChild()"
},
{
  question: "Which method removes an element?",
  options: [
    "remove()",
    "delete()",
    "pop()",
    "erase()"
  ],
  answer: "remove()"
},
{
  question: "DOM allows JavaScript to?",
  options: [
    "Manipulate web pages",
    "Create databases",
    "Compile code",
    "Manage servers"
  ],
  answer: "Manipulate web pages"
}
],
7: [
{
  question: "Which event occurs when button is clicked?",
  options: [
    "click",
    "hover",
    "submit",
    "focus"
  ],
  answer: "click"
},
{
  question: "Which event occurs when mouse enters element?",
  options: [
    "mouseover",
    "mouseout",
    "click",
    "focus"
  ],
  answer: "mouseover"
},
{
  question: "Which event occurs when input gains focus?",
  options: [
    "focus",
    "blur",
    "change",
    "submit"
  ],
  answer: "focus"
},
{
  question: "Which event occurs when input loses focus?",
  options: [
    "blur",
    "focus",
    "change",
    "input"
  ],
  answer: "blur"
},
{
  question: "Which method adds event listener?",
  options: [
    "addEventListener()",
    "addListener()",
    "attachEvent()",
    "onEvent()"
  ],
  answer: "addEventListener()"
},
{
  question: "Event bubbling means?",
  options: [
    "Event propagates upward",
    "Event propagates downward",
    "Event stops",
    "Event repeats"
  ],
  answer: "Event propagates upward"
},
{
  question: "Which method stops event bubbling?",
  options: [
    "stopPropagation()",
    "preventDefault()",
    "stopEvent()",
    "cancel()"
  ],
  answer: "stopPropagation()"
},
{
  question: "preventDefault() is used to?",
  options: [
    "Prevent default browser action",
    "Stop event bubbling",
    "Create event",
    "Delete event"
  ],
  answer: "Prevent default browser action"
},
{
  question: "Submit button triggers?",
  options: [
    "submit event",
    "click event only",
    "hover event",
    "focus event"
  ],
  answer: "submit event"
},
{
  question: "Keyboard key press generates?",
  options: [
    "keydown",
    "mouseclick",
    "focus",
    "blur"
  ],
  answer: "keydown"
}
],
8: [
{
  question: "Template literals use?",
  options: [
    "Backticks (`)",
    "Single quotes",
    "Double quotes",
    "Parentheses"
  ],
  answer: "Backticks (`)"
},
{
  question: "Which syntax spreads array elements?",
  options: [
    "...",
    "***",
    "&&",
    "=>"
  ],
  answer: "..."
},
{
  question: "Which syntax is used for destructuring?",
  options: [
    "{} and []",
    "()",
    "<>",
    "||"
  ],
  answer: "{} and []"
},
{
  question: "Arrow functions were introduced in?",
  options: [
    "ES6",
    "ES5",
    "ES3",
    "ES7"
  ],
  answer: "ES6"
},
{
  question: "Which keyword imports modules?",
  options: [
    "import",
    "include",
    "require",
    "load"
  ],
  answer: "import"
},
{
  question: "Which keyword exports modules?",
  options: [
    "export",
    "share",
    "public",
    "module"
  ],
  answer: "export"
},
{
  question: "Spread operator is used for?",
  options: [
    "Expanding iterable values",
    "Loops",
    "Conditions",
    "Classes"
  ],
  answer: "Expanding iterable values"
},
{
  question: "Rest operator collects?",
  options: [
    "Multiple values",
    "Single value",
    "Objects only",
    "Arrays only"
  ],
  answer: "Multiple values"
},
{
  question: "Template literals allow?",
  options: [
    "String interpolation",
    "Database queries",
    "CSS styling",
    "Loops"
  ],
  answer: "String interpolation"
},
{
  question: "Which keyword declares block-scoped variable?",
  options: [
    "let",
    "var",
    "global",
    "constantly"
  ],
  answer: "let"
}
],
9: [
{
  question: "A Promise represents?",
  options: [
    "Future result of async operation",
    "Array",
    "Loop",
    "Object"
  ],
  answer: "Future result of async operation"
},
{
  question: "Promise has how many states?",
  options: [
    "3",
    "2",
    "4",
    "5"
  ],
  answer: "3"
},
{
  question: "Promise states are?",
  options: [
    "Pending, Fulfilled, Rejected",
    "Start, Stop, End",
    "True, False, Null",
    "Open, Close, Wait"
  ],
  answer: "Pending, Fulfilled, Rejected"
},
{
  question: "Which method handles successful promise?",
  options: [
    ".then()",
    ".catch()",
    ".finally()",
    ".success()"
  ],
  answer: ".then()"
},
{
  question: "Which method handles errors?",
  options: [
    ".catch()",
    ".then()",
    ".error()",
    ".fail()"
  ],
  answer: ".catch()"
},
{
  question: "Which keyword waits for promise completion?",
  options: [
    "await",
    "wait",
    "async",
    "promise"
  ],
  answer: "await"
},
{
  question: "await can only be used inside?",
  options: [
    "async function",
    "normal function",
    "loop",
    "object"
  ],
  answer: "async function"
},
{
  question: "fetch() returns?",
  options: [
    "Promise",
    "Array",
    "Object",
    "String"
  ],
  answer: "Promise"
},
{
  question: "Promise.all() is used for?",
  options: [
    "Multiple promises",
    "Loops",
    "Objects",
    "Arrays only"
  ],
  answer: "Multiple promises"
},
{
  question: "Async/Await makes code?",
  options: [
    "Easier to read",
    "Slower",
    "Longer",
    "Synchronous"
  ],
  answer: "Easier to read"
}
],
10: [
{
  question: "What is closure?",
  options: [
    "Function with access to outer scope",
    "Loop",
    "Array",
    "Object"
  ],
  answer: "Function with access to outer scope"
},
{
  question: "What is hoisting?",
  options: [
    "Moving declarations to top during execution",
    "Loop execution",
    "Event handling",
    "DOM manipulation"
  ],
  answer: "Moving declarations to top during execution"
},
{
  question: "What is event delegation?",
  options: [
    "Handling child events through parent",
    "Adding multiple listeners",
    "Stopping events",
    "Removing listeners"
  ],
  answer: "Handling child events through parent"
},
{
  question: "What is callback function?",
  options: [
    "Function passed as argument",
    "Function inside object",
    "Recursive function",
    "Arrow function"
  ],
  answer: "Function passed as argument"
},
{
  question: "What is the output of typeof NaN?",
  options: [
    "number",
    "NaN",
    "undefined",
    "object"
  ],
  answer: "number"
},
{
  question: "Which method converts JSON string to object?",
  options: [
    "JSON.parse()",
    "JSON.stringify()",
    "parseJSON()",
    "toObject()"
  ],
  answer: "JSON.parse()"
},
{
  question: "Which method converts object to JSON string?",
  options: [
    "JSON.stringify()",
    "JSON.parse()",
    "toJSON()",
    "stringifyObject()"
  ],
  answer: "JSON.stringify()"
},
{
  question: "Difference between == and === ?",
  options: [
    "=== checks type and value",
    "Both are same",
    "== checks type only",
    "=== checks value only"
  ],
  answer: "=== checks type and value"
},
{
  question: "What is a higher-order function?",
  options: [
    "Function taking/returning functions",
    "Function inside loop",
    "Recursive function",
    "Constructor"
  ],
  answer: "Function taking/returning functions"
},
{
  question: "Most asked JavaScript interview topics?",
  options: [
    "Closures, Promises, Async/Await, Event Loop",
    "Colors",
    "Fonts",
    "Comments"
  ],
  answer: "Closures, Promises, Async/Await, Event Loop"
}
]
 },
 react: {
  1: [
{
  question: "React is a?",
  options: [
    "JavaScript Library",
    "Programming Language",
    "Database",
    "Framework"
  ],
  answer: "JavaScript Library"
},
{
  question: "React was developed by?",
  options: [
    "Facebook",
    "Google",
    "Microsoft",
    "Amazon"
  ],
  answer: "Facebook"
},
{
  question: "React is mainly used for?",
  options: [
    "Building UI",
    "Database Management",
    "Operating Systems",
    "Networking"
  ],
  answer: "Building UI"
},
{
  question: "React applications are made up of?",
  options: [
    "Components",
    "Classes",
    "Tables",
    "Servers"
  ],
  answer: "Components"
},
{
  question: "Which command creates a React app using Vite?",
  options: [
    "npm create vite@latest",
    "npm install react",
    "npx react-app",
    "npm init react"
  ],
  answer: "npm create vite@latest"
},
{
  question: "React uses which syntax extension?",
  options: [
    "JSX",
    "HTML",
    "XML",
    "TSX"
  ],
  answer: "JSX"
},
{
  question: "JSX stands for?",
  options: [
    "JavaScript XML",
    "Java Syntax Extension",
    "JSON XML",
    "JavaScript Extension"
  ],
  answer: "JavaScript XML"
},
{
  question: "Which file usually renders the root component?",
  options: [
    "main.jsx",
    "App.css",
    "package.json",
    "index.html"
  ],
  answer: "main.jsx"
},
{
  question: "Root React component is usually?",
  options: [
    "App",
    "Home",
    "Main",
    "Root"
  ],
  answer: "App"
},
{
  question: "React follows which architecture?",
  options: [
    "Component-Based",
    "Monolithic",
    "Client-Server",
    "MVC Only"
  ],
  answer: "Component-Based"
}
],
2: [
{
  question: "A React component must return?",
  options: [
    "JSX",
    "CSS",
    "JSON",
    "SQL"
  ],
  answer: "JSX"
},
{
  question: "JSX allows writing?",
  options: [
    "HTML inside JavaScript",
    "SQL inside HTML",
    "CSS inside SQL",
    "JSON inside CSS"
  ],
  answer: "HTML inside JavaScript"
},
{
  question: "Component names should start with?",
  options: [
    "Capital Letter",
    "Small Letter",
    "Number",
    "Symbol"
  ],
  answer: "Capital Letter"
},
{
  question: "Which component type uses functions?",
  options: [
    "Functional Component",
    "Class Component",
    "Root Component",
    "Static Component"
  ],
  answer: "Functional Component"
},
{
  question: "Fragments are represented by?",
  options: [
    "<></>",
    "<fragment>",
    "<div>",
    "<section>"
  ],
  answer: "<></>"
},
{
  question: "JSX expressions are written inside?",
  options: [
    "{}",
    "()",
    "[]",
    "<>"
  ],
  answer: "{}"
},
{
  question: "Which attribute replaces class in JSX?",
  options: [
    "className",
    "class",
    "cssClass",
    "classname"
  ],
  answer: "className"
},
{
  question: "Which attribute is used for labels?",
  options: [
    "htmlFor",
    "for",
    "labelFor",
    "idFor"
  ],
  answer: "htmlFor"
},
{
  question: "Can a component be reused?",
  options: [
    "Yes",
    "No",
    "Only once",
    "Depends"
  ],
  answer: "Yes"
},
{
  question: "Components help in?",
  options: [
    "Code Reusability",
    "Database Storage",
    "Server Deployment",
    "Networking"
  ],
  answer: "Code Reusability"
}
],
3: [
{
  question: "Props stands for?",
  options: [
    "Properties",
    "Parameters",
    "Processes",
    "Protocols"
  ],
  answer: "Properties"
},
{
  question: "Props are passed from?",
  options: [
    "Parent to Child",
    "Child to Parent",
    "Sibling to Sibling",
    "Database to UI"
  ],
  answer: "Parent to Child"
},
{
  question: "Props are?",
  options: [
    "Read-only",
    "Mutable",
    "Editable",
    "Private"
  ],
  answer: "Read-only"
},
{
  question: "Props are received as?",
  options: [
    "Function Parameter",
    "Array",
    "Database",
    "Hook"
  ],
  answer: "Function Parameter"
},
{
  question: "Which syntax accesses a prop?",
  options: [
    "props.name",
    "prop.name",
    "this.name",
    "name.prop"
  ],
  answer: "props.name"
},
{
  question: "Props help in?",
  options: [
    "Passing Data",
    "Styling",
    "Routing",
    "Deployment"
  ],
  answer: "Passing Data"
},
{
  question: "Can props contain functions?",
  options: [
    "Yes",
    "No",
    "Only arrays",
    "Only strings"
  ],
  answer: "Yes"
},
{
  question: "Can props contain objects?",
  options: [
    "Yes",
    "No",
    "Only numbers",
    "Only arrays"
  ],
  answer: "Yes"
},
{
  question: "Default props provide?",
  options: [
    "Fallback Values",
    "Hooks",
    "State",
    "Events"
  ],
  answer: "Fallback Values"
},
{
  question: "Props improve?",
  options: [
    "Component Reusability",
    "Database Speed",
    "Compilation",
    "Deployment"
  ],
  answer: "Component Reusability"
}
],
4: [
{
  question: "Which hook manages state?",
  options: [
    "useState",
    "useEffect",
    "useRef",
    "useMemo"
  ],
  answer: "useState"
},
{
  question: "useState returns?",
  options: [
    "State and Setter Function",
    "Array only",
    "Object only",
    "Boolean"
  ],
  answer: "State and Setter Function"
},
{
  question: "State changes cause?",
  options: [
    "Re-render",
    "Reload Page",
    "Server Restart",
    "Nothing"
  ],
  answer: "Re-render"
},
{
  question: "State is used for?",
  options: [
    "Dynamic Data",
    "Static HTML",
    "CSS",
    "Deployment"
  ],
  answer: "Dynamic Data"
},
{
  question: "Setter function updates?",
  options: [
    "State",
    "Props",
    "Component",
    "CSS"
  ],
  answer: "State"
},
{
  question: "State should be changed using?",
  options: [
    "Setter Function",
    "Direct Assignment",
    "Props",
    "Router"
  ],
  answer: "Setter Function"
},
{
  question: "useState is imported from?",
  options: [
    "react",
    "react-router-dom",
    "bootstrap",
    "vite"
  ],
  answer: "react"
},
{
  question: "State persists between?",
  options: [
    "Re-renders",
    "Reloads",
    "Installations",
    "Deployments"
  ],
  answer: "Re-renders"
},
{
  question: "State can store?",
  options: [
    "Any Data Type",
    "Strings Only",
    "Numbers Only",
    "Objects Only"
  ],
  answer: "Any Data Type"
},
{
  question: "useState follows which concept?",
  options: [
    "Hooks",
    "Routing",
    "DOM",
    "Classes"
  ],
  answer: "Hooks"
}
],
5: [
{
  question: "Which hook is used for side effects?",
  options: [
    "useEffect",
    "useState",
    "useRef",
    "useMemo"
  ],
  answer: "useEffect"
},
{
  question: "useEffect is imported from?",
  options: [
    "react",
    "react-router-dom",
    "bootstrap",
    "vite"
  ],
  answer: "react"
},
{
  question: "Fetching API data is an example of?",
  options: [
    "Side Effect",
    "State",
    "Props",
    "Routing"
  ],
  answer: "Side Effect"
},
{
  question: "Which dependency array runs effect only once?",
  options: [
    "[]",
    "[count]",
    "[ ]",
    "None"
  ],
  answer: "[]"
},
{
  question: "useEffect without dependency array runs?",
  options: [
    "After every render",
    "Once only",
    "Never",
    "Twice only"
  ],
  answer: "After every render"
},
{
  question: "Cleanup function is returned from?",
  options: [
    "useEffect",
    "useState",
    "Component",
    "Router"
  ],
  answer: "useEffect"
},
{
  question: "Cleanup is commonly used for?",
  options: [
    "Removing event listeners",
    "Adding state",
    "Passing props",
    "Routing"
  ],
  answer: "Removing event listeners"
},
{
  question: "Which dependency array runs effect when count changes?",
  options: [
    "[count]",
    "[]",
    "[state]",
    "[props]"
  ],
  answer: "[count]"
},
{
  question: "useEffect replaces which lifecycle methods?",
  options: [
    "componentDidMount, componentDidUpdate",
    "render",
    "constructor",
    "setState"
  ],
  answer: "componentDidMount, componentDidUpdate"
},
{
  question: "API calls are commonly placed inside?",
  options: [
    "useEffect",
    "useState",
    "JSX",
    "Props"
  ],
  answer: "useEffect"
}
],
6: [
{
  question: "Which event handles button clicks?",
  options: [
    "onClick",
    "onChange",
    "onSubmit",
    "onFocus"
  ],
  answer: "onClick"
},
{
  question: "Which event handles form submission?",
  options: [
    "onSubmit",
    "onClick",
    "onChange",
    "onInput"
  ],
  answer: "onSubmit"
},
{
  question: "Which event handles input changes?",
  options: [
    "onChange",
    "onSubmit",
    "onFocus",
    "onClick"
  ],
  answer: "onChange"
},
{
  question: "Controlled components use?",
  options: [
    "State",
    "Props",
    "Router",
    "CSS"
  ],
  answer: "State"
},
{
  question: "preventDefault() is used to?",
  options: [
    "Prevent page refresh",
    "Update state",
    "Navigate pages",
    "Render JSX"
  ],
  answer: "Prevent page refresh"
},
{
  question: "Input value is usually stored in?",
  options: [
    "State",
    "Props",
    "Router",
    "Context"
  ],
  answer: "State"
},
{
  question: "Textarea value is controlled by?",
  options: [
    "State",
    "Props",
    "DOM only",
    "Router"
  ],
  answer: "State"
},
{
  question: "Which attribute links state to input?",
  options: [
    "value",
    "name",
    "id",
    "className"
  ],
  answer: "value"
},
{
  question: "Radio buttons commonly use?",
  options: [
    "checked",
    "selected",
    "active",
    "clicked"
  ],
  answer: "checked"
},
{
  question: "Forms in React are usually?",
  options: [
    "Controlled",
    "Uncontrolled only",
    "Static",
    "Server-side"
  ],
  answer: "Controlled"
}
],
7: [
{
  question: "Which package provides routing?",
  options: [
    "react-router-dom",
    "react-router",
    "router-react",
    "react-navigation"
  ],
  answer: "react-router-dom"
},
{
  question: "Which component wraps routes?",
  options: [
    "BrowserRouter",
    "RouterLink",
    "Navigate",
    "Switch"
  ],
  answer: "BrowserRouter"
},
{
  question: "Which component defines routes?",
  options: [
    "Routes",
    "RouteList",
    "Switch",
    "Navigate"
  ],
  answer: "Routes"
},
{
  question: "Which component creates a route?",
  options: [
    "Route",
    "Link",
    "Navigate",
    "BrowserRouter"
  ],
  answer: "Route"
},
{
  question: "Which component is used instead of anchor tag?",
  options: [
    "Link",
    "Navigate",
    "Router",
    "Switch"
  ],
  answer: "Link"
},
{
  question: "Which hook gets URL parameters?",
  options: [
    "useParams",
    "useNavigate",
    "useLocation",
    "useState"
  ],
  answer: "useParams"
},
{
  question: "Which hook navigates programmatically?",
  options: [
    "useNavigate",
    "useParams",
    "useEffect",
    "useRef"
  ],
  answer: "useNavigate"
},
{
  question: "Which hook accesses current location?",
  options: [
    "useLocation",
    "useNavigate",
    "useParams",
    "useMemo"
  ],
  answer: "useLocation"
},
{
  question: "Route path '/about' renders?",
  options: [
    "About Component",
    "Navbar",
    "Home",
    "App"
  ],
  answer: "About Component"
},
{
  question: "Routing in React creates?",
  options: [
    "Single Page Applications",
    "Databases",
    "Servers",
    "Operating Systems"
  ],
  answer: "Single Page Applications"
}
],
8: [
{
  question: "Which hook creates mutable reference?",
  options: [
    "useRef",
    "useState",
    "useEffect",
    "useMemo"
  ],
  answer: "useRef"
},
{
  question: "Changing useRef value causes?",
  options: [
    "No re-render",
    "Re-render",
    "Reload",
    "Error"
  ],
  answer: "No re-render"
},
{
  question: "useRef commonly accesses?",
  options: [
    "DOM Elements",
    "Props",
    "Routes",
    "APIs"
  ],
  answer: "DOM Elements"
},
{
  question: "Which hook shares data globally?",
  options: [
    "useContext",
    "useState",
    "useEffect",
    "useRef"
  ],
  answer: "useContext"
},
{
  question: "Context API helps avoid?",
  options: [
    "Prop Drilling",
    "State",
    "JSX",
    "Components"
  ],
  answer: "Prop Drilling"
},
{
  question: "Context is created using?",
  options: [
    "createContext",
    "newContext",
    "ContextAPI",
    "makeContext"
  ],
  answer: "createContext"
},
{
  question: "Context data is provided by?",
  options: [
    "Provider",
    "Consumer",
    "Router",
    "Props"
  ],
  answer: "Provider"
},
{
  question: "useContext consumes?",
  options: [
    "Context Value",
    "State",
    "Props",
    "DOM"
  ],
  answer: "Context Value"
},
{
  question: "Which hook is useful for focus input?",
  options: [
    "useRef",
    "useState",
    "useMemo",
    "useEffect"
  ],
  answer: "useRef"
},
{
  question: "Theme toggling is commonly implemented using?",
  options: [
    "Context API",
    "CSS only",
    "Local Variables",
    "Arrays"
  ],
  answer: "Context API"
}
],
9: [
{
  question: "Which hook memoizes a calculated value?",
  options: [
    "useMemo",
    "useCallback",
    "useRef",
    "useEffect"
  ],
  answer: "useMemo"
},
{
  question: "Which hook memoizes a function?",
  options: [
    "useCallback",
    "useMemo",
    "useRef",
    "useState"
  ],
  answer: "useCallback"
},
{
  question: "Why is useMemo used?",
  options: [
    "Improve performance",
    "Handle routing",
    "Manage CSS",
    "Create components"
  ],
  answer: "Improve performance"
},
{
  question: "useMemo recalculates when?",
  options: [
    "Dependencies change",
    "Page reloads",
    "Props are removed",
    "Never"
  ],
  answer: "Dependencies change"
},
{
  question: "useCallback returns?",
  options: [
    "Memoized Function",
    "Memoized Value",
    "DOM Element",
    "State"
  ],
  answer: "Memoized Function"
},
{
  question: "React.memo is used for?",
  options: [
    "Prevent unnecessary re-renders",
    "Routing",
    "State Management",
    "Fetching APIs"
  ],
  answer: "Prevent unnecessary re-renders"
},
{
  question: "Which hook is useful for expensive calculations?",
  options: [
    "useMemo",
    "useRef",
    "useEffect",
    "useNavigate"
  ],
  answer: "useMemo"
},
{
  question: "Optimization mainly improves?",
  options: [
    "Performance",
    "Styling",
    "Routing",
    "Deployment"
  ],
  answer: "Performance"
},
{
  question: "React.memo works with?",
  options: [
    "Components",
    "Hooks",
    "CSS",
    "Routes"
  ],
  answer: "Components"
},
{
  question: "Which feature avoids repeated function creation?",
  options: [
    "useCallback",
    "useState",
    "useRef",
    "useEffect"
  ],
  answer: "useCallback"
}
],
10: [
{
  question: "What is Virtual DOM?",
  options: [
    "Lightweight copy of DOM",
    "Real DOM",
    "Browser API",
    "Database"
  ],
  answer: "Lightweight copy of DOM"
},
{
  question: "Why is Virtual DOM used?",
  options: [
    "Improve Performance",
    "Store Data",
    "Create APIs",
    "Routing"
  ],
  answer: "Improve Performance"
},
{
  question: "What is Prop Drilling?",
  options: [
    "Passing props through multiple levels",
    "Updating state",
    "Routing pages",
    "Creating components"
  ],
  answer: "Passing props through multiple levels"
},
{
  question: "Which solution reduces Prop Drilling?",
  options: [
    "Context API",
    "CSS",
    "Bootstrap",
    "Props"
  ],
  answer: "Context API"
},
{
  question: "What is a Higher Order Component (HOC)?",
  options: [
    "Function that takes component and returns component",
    "Class Component",
    "Hook",
    "Router"
  ],
  answer: "Function that takes component and returns component"
},
{
  question: "What is Lazy Loading?",
  options: [
    "Loading components when needed",
    "Loading everything at once",
    "Removing components",
    "Creating APIs"
  ],
  answer: "Loading components when needed"
},
{
  question: "Which function is used for lazy loading?",
  options: [
    "React.lazy()",
    "React.load()",
    "React.memo()",
    "React.import()"
  ],
  answer: "React.lazy()"
},
{
  question: "Suspense is used with?",
  options: [
    "Lazy Loading",
    "Routing",
    "Props",
    "Forms"
  ],
  answer: "Lazy Loading"
},
{
  question: "Which state management library is commonly used with React?",
  options: [
    "Redux",
    "Bootstrap",
    "Express",
    "MongoDB"
  ],
  answer: "Redux"
},
{
  question: "Most asked React interview topics?",
  options: [
    "Hooks, Virtual DOM, Context API, Routing",
    "Colors",
    "Fonts",
    "HTML Tags"
  ],
  answer: "Hooks, Virtual DOM, Context API, Routing"
}
]
 },
 sql: {
  1: [
{
  question: "SQL stands for?",
  options: [
    "Structured Query Language",
    "Simple Query Language",
    "Standard Query Logic",
    "Structured Question Language"
  ],
  answer: "Structured Query Language"
},
{
  question: "SQL is used to?",
  options: [
    "Manage Databases",
    "Create Operating Systems",
    "Build Networks",
    "Design UI"
  ],
  answer: "Manage Databases"
},
{
  question: "Which command retrieves data?",
  options: [
    "SELECT",
    "INSERT",
    "DELETE",
    "UPDATE"
  ],
  answer: "SELECT"
},
{
  question: "Which symbol selects all columns?",
  options: [
    "*",
    "#",
    "%",
    "&"
  ],
  answer: "*"
},
{
  question: "Which clause filters rows?",
  options: [
    "WHERE",
    "ORDER BY",
    "GROUP BY",
    "HAVING"
  ],
  answer: "WHERE"
},
{
  question: "Which command adds data?",
  options: [
    "INSERT",
    "SELECT",
    "DELETE",
    "DROP"
  ],
  answer: "INSERT"
},
{
  question: "Which command modifies data?",
  options: [
    "UPDATE",
    "SELECT",
    "DROP",
    "CREATE"
  ],
  answer: "UPDATE"
},
{
  question: "Which command removes rows?",
  options: [
    "DELETE",
    "SELECT",
    "INSERT",
    "ALTER"
  ],
  answer: "DELETE"
},
{
  question: "SQL statements end with?",
  options: [
    ";",
    ".",
    ":",
    ","
  ],
  answer: ";"
},
{
  question: "Database stores?",
  options: [
    "Organized Data",
    "Programs",
    "Networks",
    "HTML Pages"
  ],
  answer: "Organized Data"
}
],
2: [
{
  question: "Which command creates a table?",
  options: [
    "CREATE TABLE",
    "MAKE TABLE",
    "ADD TABLE",
    "NEW TABLE"
  ],
  answer: "CREATE TABLE"
},
{
  question: "Which constraint uniquely identifies a row?",
  options: [
    "PRIMARY KEY",
    "FOREIGN KEY",
    "CHECK",
    "DEFAULT"
  ],
  answer: "PRIMARY KEY"
},
{
  question: "PRIMARY KEY can contain?",
  options: [
    "Unique Values",
    "Duplicate Values",
    "NULL Values",
    "Only Strings"
  ],
  answer: "Unique Values"
},
{
  question: "Which constraint prevents NULL values?",
  options: [
    "NOT NULL",
    "CHECK",
    "DEFAULT",
    "UNIQUE"
  ],
  answer: "NOT NULL"
},
{
  question: "Which constraint prevents duplicates?",
  options: [
    "UNIQUE",
    "CHECK",
    "DEFAULT",
    "NULL"
  ],
  answer: "UNIQUE"
},
{
  question: "Which constraint links two tables?",
  options: [
    "FOREIGN KEY",
    "PRIMARY KEY",
    "UNIQUE",
    "CHECK"
  ],
  answer: "FOREIGN KEY"
},
{
  question: "ALTER TABLE is used to?",
  options: [
    "Modify Table Structure",
    "Delete Table",
    "Insert Data",
    "Select Data"
  ],
  answer: "Modify Table Structure"
},
{
  question: "DROP TABLE does?",
  options: [
    "Deletes Entire Table",
    "Deletes Rows",
    "Updates Rows",
    "Creates Table"
  ],
  answer: "Deletes Entire Table"
},
{
  question: "TRUNCATE removes?",
  options: [
    "All Rows",
    "Table Structure",
    "Columns",
    "Database"
  ],
  answer: "All Rows"
},
{
  question: "DEFAULT constraint provides?",
  options: [
    "Default Value",
    "Unique Value",
    "Null Value",
    "Foreign Key"
  ],
  answer: "Default Value"
}
],
3: [
{
  question: "WHERE clause is used to?",
  options: [
    "Filter Records",
    "Sort Records",
    "Group Records",
    "Delete Table"
  ],
  answer: "Filter Records"
},
{
  question: "Operator for equality?",
  options: [
    "=",
    "==",
    "===",
    ":="
  ],
  answer: "="
},
{
  question: "Operator for not equal?",
  options: [
    "<>",
    "=",
    "==",
    "=>"
  ],
  answer: "<>"
},
{
  question: "Which operator checks range?",
  options: [
    "BETWEEN",
    "LIKE",
    "IN",
    "EXISTS"
  ],
  answer: "BETWEEN"
},
{
  question: "Which operator checks multiple values?",
  options: [
    "IN",
    "BETWEEN",
    "LIKE",
    "ORDER BY"
  ],
  answer: "IN"
},
{
  question: "LIKE is used for?",
  options: [
    "Pattern Matching",
    "Sorting",
    "Grouping",
    "Joining"
  ],
  answer: "Pattern Matching"
},
{
  question: "Wildcard for multiple characters?",
  options: [
    "%",
    "_",
    "*",
    "#"
  ],
  answer: "%"
},
{
  question: "Wildcard for single character?",
  options: [
    "_",
    "%",
    "*",
    "#"
  ],
  answer: "_"
},
{
  question: "Logical AND requires?",
  options: [
    "All Conditions True",
    "One Condition True",
    "No Conditions True",
    "Two Rows"
  ],
  answer: "All Conditions True"
},
{
  question: "Logical OR requires?",
  options: [
    "At Least One True",
    "All True",
    "None True",
    "Two Tables"
  ],
  answer: "At Least One True"
}
],
4: [
{
  question: "ORDER BY is used to?",
  options: [
    "Sort Data",
    "Group Data",
    "Delete Data",
    "Insert Data"
  ],
  answer: "Sort Data"
},
{
  question: "Ascending order keyword?",
  options: [
    "ASC",
    "DESC",
    "UP",
    "TOP"
  ],
  answer: "ASC"
},
{
  question: "Descending order keyword?",
  options: [
    "DESC",
    "ASC",
    "DOWN",
    "LOW"
  ],
  answer: "DESC"
},
{
  question: "COUNT() returns?",
  options: [
    "Number of Rows",
    "Average",
    "Maximum",
    "Minimum"
  ],
  answer: "Number of Rows"
},
{
  question: "SUM() returns?",
  options: [
    "Total Value",
    "Average",
    "Largest Value",
    "Count"
  ],
  answer: "Total Value"
},
{
  question: "AVG() returns?",
  options: [
    "Average Value",
    "Maximum",
    "Minimum",
    "Count"
  ],
  answer: "Average Value"
},
{
  question: "MAX() returns?",
  options: [
    "Largest Value",
    "Smallest Value",
    "Average",
    "Count"
  ],
  answer: "Largest Value"
},
{
  question: "MIN() returns?",
  options: [
    "Smallest Value",
    "Largest Value",
    "Average",
    "Count"
  ],
  answer: "Smallest Value"
},
{
  question: "Aggregate functions operate on?",
  options: [
    "Multiple Rows",
    "Single Column Only",
    "Tables Only",
    "Database Only"
  ],
  answer: "Multiple Rows"
},
{
  question: "COUNT(*) counts?",
  options: [
    "All Rows",
    "Columns",
    "Tables",
    "Databases"
  ],
  answer: "All Rows"
}
],
5: [
{
  question: "GROUP BY is used to?",
  options: [
    "Group Rows with Same Values",
    "Sort Rows",
    "Delete Rows",
    "Join Tables"
  ],
  answer: "Group Rows with Same Values"
},
{
  question: "GROUP BY is commonly used with?",
  options: [
    "Aggregate Functions",
    "INSERT",
    "UPDATE",
    "DELETE"
  ],
  answer: "Aggregate Functions"
},
{
  question: "Which clause filters grouped records?",
  options: [
    "HAVING",
    "WHERE",
    "ORDER BY",
    "SELECT"
  ],
  answer: "HAVING"
},
{
  question: "WHERE filters data?",
  options: [
    "Before Grouping",
    "After Grouping",
    "After Sorting",
    "Never"
  ],
  answer: "Before Grouping"
},
{
  question: "HAVING filters data?",
  options: [
    "After Grouping",
    "Before Grouping",
    "Before SELECT",
    "Before WHERE"
  ],
  answer: "After Grouping"
},
{
  question: "Which query finds departments with more than 5 employees?",
  options: [
    "HAVING COUNT(*) > 5",
    "WHERE COUNT(*) > 5",
    "ORDER BY COUNT(*)",
    "SELECT COUNT(*)"
  ],
  answer: "HAVING COUNT(*) > 5"
},
{
  question: "GROUP BY creates?",
  options: [
    "Groups of Similar Values",
    "New Tables",
    "Indexes",
    "Views"
  ],
  answer: "Groups of Similar Values"
},
{
  question: "COUNT() with GROUP BY gives?",
  options: [
    "Count per Group",
    "Total Count Only",
    "Maximum Value",
    "Average Value"
  ],
  answer: "Count per Group"
},
{
  question: "Can HAVING be used without GROUP BY?",
  options: [
    "Yes",
    "No",
    "Only in MySQL",
    "Only in Oracle"
  ],
  answer: "Yes"
},
{
  question: "GROUP BY department calculates AVG(salary) for?",
  options: [
    "Each Department",
    "Whole Table",
    "One Employee",
    "One Row"
  ],
  answer: "Each Department"
}
],
6: [
{
  question: "JOIN is used to?",
  options: [
    "Combine Data from Tables",
    "Delete Tables",
    "Create Database",
    "Sort Records"
  ],
  answer: "Combine Data from Tables"
},
{
  question: "Most common JOIN type?",
  options: [
    "INNER JOIN",
    "TOP JOIN",
    "MIDDLE JOIN",
    "CENTER JOIN"
  ],
  answer: "INNER JOIN"
},
{
  question: "INNER JOIN returns?",
  options: [
    "Matching Rows",
    "All Rows",
    "Left Rows Only",
    "Right Rows Only"
  ],
  answer: "Matching Rows"
},
{
  question: "LEFT JOIN returns?",
  options: [
    "All Left Table Rows",
    "All Right Table Rows",
    "Matching Rows Only",
    "No Rows"
  ],
  answer: "All Left Table Rows"
},
{
  question: "RIGHT JOIN returns?",
  options: [
    "All Right Table Rows",
    "All Left Table Rows",
    "Matching Rows Only",
    "No Rows"
  ],
  answer: "All Right Table Rows"
},
{
  question: "FULL JOIN returns?",
  options: [
    "All Rows from Both Tables",
    "Only Matching Rows",
    "Only Left Rows",
    "Only Right Rows"
  ],
  answer: "All Rows from Both Tables"
},
{
  question: "Which keyword specifies join condition?",
  options: [
    "ON",
    "WHERE",
    "GROUP BY",
    "HAVING"
  ],
  answer: "ON"
},
{
  question: "Self Join joins?",
  options: [
    "Table with Itself",
    "Two Databases",
    "Three Tables",
    "Views Only"
  ],
  answer: "Table with Itself"
},
{
  question: "Cartesian Product is produced by?",
  options: [
    "CROSS JOIN",
    "INNER JOIN",
    "LEFT JOIN",
    "RIGHT JOIN"
  ],
  answer: "CROSS JOIN"
},
{
  question: "Foreign Keys are commonly used in?",
  options: [
    "Joins",
    "Sorting",
    "Grouping",
    "Indexing"
  ],
  answer: "Joins"
}
],
7: [
{
  question: "A query inside another query is called?",
  options: [
    "Subquery",
    "Join",
    "Index",
    "View"
  ],
  answer: "Subquery"
},
{
  question: "Subqueries are enclosed in?",
  options: [
    "Parentheses",
    "Brackets",
    "Quotes",
    "Curly Braces"
  ],
  answer: "Parentheses"
},
{
  question: "Subquery executes?",
  options: [
    "Before Outer Query",
    "After Outer Query",
    "Simultaneously",
    "Never"
  ],
  answer: "Before Outer Query"
},
{
  question: "Which operator often uses subqueries?",
  options: [
    "IN",
    "ORDER BY",
    "GROUP BY",
    "DESC"
  ],
  answer: "IN"
},
{
  question: "EXISTS checks?",
  options: [
    "Whether Rows Exist",
    "Number of Columns",
    "Indexes",
    "Views"
  ],
  answer: "Whether Rows Exist"
},
{
  question: "Subqueries can return?",
  options: [
    "Single or Multiple Rows",
    "Only One Row",
    "Only One Column",
    "Only Tables"
  ],
  answer: "Single or Multiple Rows"
},
{
  question: "Correlated Subquery depends on?",
  options: [
    "Outer Query",
    "Database",
    "Index",
    "View"
  ],
  answer: "Outer Query"
},
{
  question: "Nested queries improve?",
  options: [
    "Complex Data Retrieval",
    "UI Design",
    "Networking",
    "Compilation"
  ],
  answer: "Complex Data Retrieval"
},
{
  question: "Which keyword compares with subquery result set?",
  options: [
    "ANY",
    "ORDER",
    "GROUP",
    "JOIN"
  ],
  answer: "ANY"
},
{
  question: "ALL operator compares against?",
  options: [
    "Every Value Returned",
    "One Value",
    "First Value",
    "Last Value"
  ],
  answer: "Every Value Returned"
}
],
8: [
{
  question: "A View is?",
  options: [
    "Virtual Table",
    "Physical Table",
    "Database",
    "Index"
  ],
  answer: "Virtual Table"
},
{
  question: "Views store?",
  options: [
    "Query Definition",
    "Actual Data",
    "Indexes",
    "Constraints"
  ],
  answer: "Query Definition"
},
{
  question: "Index improves?",
  options: [
    "Query Speed",
    "Storage",
    "Security",
    "Normalization"
  ],
  answer: "Query Speed"
},
{
  question: "Primary Key is?",
  options: [
    "Unique Identifier",
    "Foreign Reference",
    "Index Only",
    "View"
  ],
  answer: "Unique Identifier"
},
{
  question: "Foreign Key ensures?",
  options: [
    "Referential Integrity",
    "Sorting",
    "Grouping",
    "Performance"
  ],
  answer: "Referential Integrity"
},
{
  question: "Can a table have multiple foreign keys?",
  options: [
    "Yes",
    "No",
    "Only Two",
    "Only One"
  ],
  answer: "Yes"
},
{
  question: "Unique Key allows?",
  options: [
    "Unique Values",
    "Duplicate Values",
    "Null Only",
    "Foreign Keys"
  ],
  answer: "Unique Values"
},
{
  question: "Clustered Index determines?",
  options: [
    "Physical Order of Data",
    "Database Name",
    "Foreign Keys",
    "Views"
  ],
  answer: "Physical Order of Data"
},
{
  question: "Non-clustered Index stores?",
  options: [
    "Pointers to Data",
    "Entire Tables",
    "Views",
    "Databases"
  ],
  answer: "Pointers to Data"
},
{
  question: "Indexes are mainly used in?",
  options: [
    "Large Tables",
    "Small Programs",
    "HTML Pages",
    "Networks"
  ],
  answer: "Large Tables"
}
],
9: [
{
  question: "Normalization is used to?",
  options: [
    "Reduce Data Redundancy",
    "Increase Duplication",
    "Delete Tables",
    "Create Views"
  ],
  answer: "Reduce Data Redundancy"
},
{
  question: "Normalization improves?",
  options: [
    "Data Integrity",
    "UI Design",
    "Networking",
    "Compilation"
  ],
  answer: "Data Integrity"
},
{
  question: "Which normal form removes repeating groups?",
  options: [
    "1NF",
    "2NF",
    "3NF",
    "BCNF"
  ],
  answer: "1NF"
},
{
  question: "1NF requires?",
  options: [
    "Atomic Values",
    "Multiple Values",
    "Duplicate Rows",
    "Foreign Keys"
  ],
  answer: "Atomic Values"
},
{
  question: "2NF removes?",
  options: [
    "Partial Dependency",
    "Transitive Dependency",
    "Foreign Keys",
    "Indexes"
  ],
  answer: "Partial Dependency"
},
{
  question: "2NF must first satisfy?",
  options: [
    "1NF",
    "3NF",
    "BCNF",
    "None"
  ],
  answer: "1NF"
},
{
  question: "3NF removes?",
  options: [
    "Transitive Dependency",
    "Partial Dependency",
    "Primary Key",
    "Indexes"
  ],
  answer: "Transitive Dependency"
},
{
  question: "BCNF is stricter than?",
  options: [
    "3NF",
    "2NF",
    "1NF",
    "None"
  ],
  answer: "3NF"
},
{
  question: "Normalization generally increases?",
  options: [
    "Number of Tables",
    "Data Duplication",
    "Storage Usage",
    "Errors"
  ],
  answer: "Number of Tables"
},
{
  question: "Main goal of normalization?",
  options: [
    "Efficient Database Design",
    "Increase Complexity",
    "Slow Queries",
    "Add Redundancy"
  ],
  answer: "Efficient Database Design"
}
],
10: [
{
  question: "Which clause is executed first in SQL?",
  options: [
    "FROM",
    "SELECT",
    "ORDER BY",
    "HAVING"
  ],
  answer: "FROM"
},
{
  question: "Difference between DELETE and TRUNCATE?",
  options: [
    "DELETE removes selected rows, TRUNCATE removes all rows",
    "Both are same",
    "TRUNCATE removes selected rows",
    "DELETE removes table"
  ],
  answer: "DELETE removes selected rows, TRUNCATE removes all rows"
},
{
  question: "Difference between WHERE and HAVING?",
  options: [
    "WHERE filters rows, HAVING filters groups",
    "Both are same",
    "HAVING filters rows",
    "WHERE filters groups"
  ],
  answer: "WHERE filters rows, HAVING filters groups"
},
{
  question: "Which JOIN returns unmatched rows from both tables?",
  options: [
    "FULL OUTER JOIN",
    "INNER JOIN",
    "LEFT JOIN",
    "RIGHT JOIN"
  ],
  answer: "FULL OUTER JOIN"
},
{
  question: "What is a Composite Key?",
  options: [
    "Combination of Multiple Columns as Key",
    "Foreign Key",
    "Primary Key",
    "Unique Index"
  ],
  answer: "Combination of Multiple Columns as Key"
},
{
  question: "What is Denormalization?",
  options: [
    "Adding Redundancy for Performance",
    "Removing Tables",
    "Creating Indexes",
    "Deleting Data"
  ],
  answer: "Adding Redundancy for Performance"
},
{
  question: "Which SQL object stores a query permanently?",
  options: [
    "View",
    "Index",
    "Trigger",
    "Database"
  ],
  answer: "View"
},
{
  question: "What is a Trigger?",
  options: [
    "Automatically Executed Action",
    "Join Type",
    "Constraint",
    "Index"
  ],
  answer: "Automatically Executed Action"
},
{
  question: "Which command gives user permissions?",
  options: [
    "GRANT",
    "REVOKE",
    "COMMIT",
    "ROLLBACK"
  ],
  answer: "GRANT"
},
{
  question: "Most important SQL interview topics are?",
  options: [
    "Joins, Normalization, Keys, Subqueries",
    "Colors",
    "Fonts",
    "HTML Tags"
  ],
  answer: "Joins, Normalization, Keys, Subqueries"
}
]
 }
};

export default quizData;