## Easy
1. Write a function that takes two numbers as arguments and returns their sum.
2. Write a function that converts minutes into seconds.
3. Write a function that returns true if a number is even and false if it's not.
4. Recreate the Math.max function without using it. The function takes an array of numbers and returns the highest number.
5. Write a function that takes a string and returns it reversed without using the .reverse() method.
6. Write a function that takes an array and an integer n and returns the nth element of the array.
7. Write a function that takes a number and returns its factorial.
8. Write a function that checks if a string is a palindrome (reads the same backward as forward).
9. Write a function that takes a string and returns the longest word in the string.
10. Write a function that counts the number of vowels in a string.
11. Write a function that mimics the JavaScript .includes() method. It should take an array and a value and return true if the value is in the array.
12. Write a function that prints every number from 1 to n. For multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
13. Write a function that takes an array of numbers and returns the sum of all elements.
14. Write a function that takes a number and returns true if it is a prime number and false otherwise.
15. Write a function that mimics the JavaScript .slice() method for arrays. It should take an array, a start index, and an optional end index and return a new array.
16. Write a function that converts Celsius to Fahrenheit.
17. Write a function that checks if an element is present in an array without using .includes().
18. Write a function that counts how many times a particular element appears in an array.
19. Write a function that mimics the .indexOf() method. It should take an array and a value and return the first index at which the value exists, or -1 if it's not in the array.
20. Write a function that takes two arrays and returns a new array that is the union of the two arrays with duplicates removed.
21. Write a function that takes an array of numbers and returns an array containing only the even numbers from the original array.
22. Create a function that accepts a string as its argument and returns the string in uppercase. Try to do this without using the .toUpperCase() method.
23. Develop a function that takes two arguments: an array of strings and a single character (string of length 1). The function should return a new array containing only the strings from the input array that start with the specified character.
24. Write a function that calculates the number of days between two dates. The dates will be passed to the function as strings in the format "YYYY-MM-DD".
25. Construct a function that takes a positive integer as its argument and returns an array of all the integers that are both less than the input and prime. Use the function you wrote for checking if a number is prime from the previous set of challenges, if needed.

## Medium
26. Write a function that merges two sorted arrays into a single sorted array. Do not use the .sort() method.
27. Create a function that takes a string as input and returns an object where the keys are letters and the values are the number of times each letter appears in the string.
28. Develop a function that simulates the array .map() method. It should take an array and a callback function and return a new array that contains the result of applying the callback function to every element of the input array.
29. Write a function that takes an integer n and returns an n x n spiral matrix. (A spiral matrix is a square matrix of numbers where the numbers are filled into the matrix in a spiral order.)
30. Create a function that implements a basic calculator that can perform addition, subtraction, multiplication, and division on two numbers passed as arguments. The function should take the first number, an operator string ('+', '-', '*', '/'), and the second number.
31. Develop a function that simulates the array .filter() method. It should take an array and a callback function and return a new array that contains only the elements for which the callback returns true.
32. Write a debounce function that takes a function and a delay as arguments and returns a debounced version of the original function. The debounced function should only execute the original function if delay milliseconds have passed without it being called.
33. Create a function that takes a string and returns its camelCase version.
34. Develop a function that simulates the array .reduce() method. It should take an array, a reducer function, and an initial accumulator value, then return the final accumulator value after applying the reducer to every element in the array.
35. Write a function that takes a positive integer and returns its Roman numeral equivalent as a string.
36. Create a function that finds and returns the index of a peak element in an array. A peak element is an element that is greater than its neighbors.
37. Write a function that takes a string as input and returns true if the string is a valid number, and false otherwise. A valid number can include integers, floating points, and numbers with an "e" to indicate scientific notation.
38. Develop a function that takes an array of numbers and returns the length of the longest increasing subsequence.
39. Create a function that takes an array of intervals and merges all overlapping intervals. The intervals are represented as an array of two integers, where the first integer is the start time and the second is the end time.
40. Write a function that simulates the array .every() method. It should take an array and a callback function and return true if the callback returns true for every element in the array.
41. Develop a function that takes a string as input and returns the first non-repeating character in the string. If there is no non-repeating character, return null.
42. Create a function that takes two strings and returns true if one is an anagram of the other.
43. Write a function that takes a string containing parentheses, square brackets, and curly braces and returns true if the brackets are correctly balanced, and false otherwise.
44. Develop a function that takes an array of numbers as input and returns an array of arrays, where each sub-array contains all unique pairs of numbers that sum up to a specific target number.
45. Write a function that takes a string and returns the longest palindrome that can be made by deleting some of the characters from the original string.
46. Create a function that takes an array and rotates it to the right by k steps, where k is non-negative.
47. Develop a function that takes a binary tree and returns its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
48. Write a function that takes a string as input and compresses the string using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3".
49. Create a function that takes an array of strings and groups anagrams together. Anagrams are strings that contain the same characters in any order.
50. Write a function that simulates the Promise.all function. It should take an array of promises and return a single Promise that resolves with an array of the results of the input promises.

## Hard
51. Implement a function that performs a deep comparison between two values to determine if they are equivalent.
52. Write a function that simulates the Array.prototype.flat() method, capable of flattening an array to a specified depth.
53. Create a custom iterator that iterates through every character in a string, including those in Unicode supplementary planes.
54. Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
55. Write a function that converts an object into a query string with proper encoding.
56. Develop a function that simulates the behavior of Promise.race(), returning a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.
57. Create a function that performs an in-place shuffle of an array.
58. Implement a throttle function that takes a function and a limit as arguments and ensures that the function can only be executed once per limit period.
59. Write a function that takes a string and returns all possible permutations of the characters in the string.
60. Develop a function that finds the shortest path in a maze represented as a 2D array.
61. Implement a custom function that behaves like Object.assign() but performs a deep merge instead of a shallow copy.
62. Create a function that takes an asynchronous function and returns a version that ensures it can only be called one at a time.
63. Write a function that finds the kth largest element in an unsorted array without sorting the array.
64. Implement a function that returns a new function that delays the execution of a given function until the next tick of the event loop.
65. Develop a function that simulates the Array.prototype.splice() method without using the native method.
66. Write a function that takes a target function and an array of arguments and returns a function that can be executed to retry the target function with the arguments until it succeeds.
67. Create a function that detects cycles in an object (circular references).
68. Implement a lazy evaluation function that takes a function and its arguments and returns a function that, when called, will execute the original function with the provided arguments.
69. Write a function that transforms a binary tree into a circular doubly linked list in-place, following an in-order traversal.
70. Develop a function that takes a string representing an expression containing numbers, parentheses, and operators (+, -, *, /) and evaluates the expression.
71. Implement a function to serialize and deserialize a binary tree into a string and vice versa.
72. Create a function that takes a set of tasks and their dependencies and returns a list of tasks in a valid order of execution.
73. Write a function that calculates the nth Fibonacci number using dynamic programming to optimize performance.
74. Develop a custom text template engine that supports placeholders, loops, and conditional statements.
75. Implement a function that can take any function and automatically curry it, returning a new function that accepts its arguments one at a time until all have been provided and the original function can be executed.

## Expert
76. Write a function to implement a custom regular expression matcher with support for '.' and '*' as in regex.
77. Implement a custom event emitter class that mimics Node.js's EventEmitter, supporting event registration, emitting, and removal.
78. Create a function that generates all possible brace combinations for a given number. For example, for n=2, the output should be ["()()", "(())"].
79. Write a custom parser for a simple markup language that converts markup tags to HTML, implementing features like nested tags and attributes.
80. Develop a function that implements graph search algorithms (both breadth-first search and depth-first search) from scratch.
81. Implement a function that can take any non-circular JavaScript object and deeply clone it, including properties that are functions, undefined, and symbols.
82. Create a function that takes a list of asynchronous functions and executes them in parallel, but throttles the execution to a maximum number of functions running at the same time.
83. Write a polyfill for the async/await syntax using only Promises and callbacks.
84. Develop a function that simulates the Array.prototype.sort() method without using it, implementing an efficient sorting algorithm (like quicksort or mergesort).
85. Implement a custom string template function that supports advanced formatting, including conditionals, loops, and custom filter functions.
86. Write a function to efficiently compute the nth root of a number without using Math.pow() or **.
87. Create a function that takes a string of code written in a simple programming language and interprets it, executing the code.
88. Implement a function that provides a way to execute asynchronous functions with dependencies, ensuring that each function is executed after its dependencies have completed.
89. Develop a JavaScript tokenizer that can parse a string of code and return an array of tokens.
90. Write a function that implements a binary search tree with insert, search, and delete operations.
91. Create a custom set data structure that supports basic set operations (add, delete, union, intersection, difference) efficiently.
92. Implement a caching mechanism for a function that caches the result of API calls and returns the cached result when the same request is made within a certain time period.
93. Develop a function that can parse and evaluate mathematical expressions involving variables and support for addition, subtraction, multiplication, division, and parentheses.
94. Write a function that simulates CSS selector logic, returning all elements from a provided DOM tree that match a given selector string.
95. Implement a solution for the "n-queens" problem that finds all possible arrangements of n queens on an n×n chessboard so that no two queens threaten each other.
96. Create a function that dynamically generates a form based on a given object structure, with support for nested objects and types (text, number, checkbox, etc.).
97. Write a function that implements an efficient algorithm for matrix multiplication.
98. Develop a custom Markdown parser and converter that turns Markdown text into HTML.
99. Implement a solution for the traveling salesman problem using a heuristic or approximation algorithm.
100. Create a web crawler in JavaScript that can fetch pages from a domain and parse links to navigate through the website, obeying "robots.txt" rules.


