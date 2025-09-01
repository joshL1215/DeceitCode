import "dotenv/config";
import ProblemModel from "../models/problem-model.js";
import connectDb from "../config/db.js";
import mongoose from "mongoose";

const problems = [
  {
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers and a target, return indices of the two numbers 
such that they add up to the target. Each input will have exactly one solution.`,
    prelimCases: [
      { input: "[2,7,11,15], 9", expectedOutput: "[0,1]" },
      { input: "[3,2,4], 6", expectedOutput: "[1,2]" },
      { input: "[3,3], 6", expectedOutput: "[0,1]" }
    ],
    testCases: [
      { input: "[1,2,3,4,5], 8", expectedOutput: "[2,4]" },
      { input: "[0,0,0,0], 0", expectedOutput: "[0,1]" },
      { input: "[5,75,25], 100", expectedOutput: "[1,2]" },
      { input: "[1,3,7,9], 10", expectedOutput: "[0,3]" },
      { input: "[2,4,6,8], 14", expectedOutput: "[2,3]" },
      { input: "[1,1,2,3], 4", expectedOutput: "[2,3]" },
      { input: "[10,20,30], 50", expectedOutput: "[1,2]" },
      { input: "[5,5,5,5], 10", expectedOutput: "[0,1]" }
    ]
  },
  {
    slug: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    description: `Write a function that reverses a string. For example, given "hello", return "olleh".`,
    prelimCases: [
      { input: '"hello"', expectedOutput: '"olleh"' },
      { input: '"world"', expectedOutput: '"dlrow"' },
      { input: '"abc"', expectedOutput: '"cba"' }
    ],
    testCases: [
      { input: '"openai"', expectedOutput: '"ianepo"' },
      { input: '"abcd"', expectedOutput: '"dcba"' },
      { input: '"racecar"', expectedOutput: '"racecar"' },
      { input: '""', expectedOutput: '""' },
      { input: '"a"', expectedOutput: '"a"' },
      { input: '"12345"', expectedOutput: '"54321"' },
      { input: '"xyz"', expectedOutput: '"zyx"' },
      { input: '"palindrome"', expectedOutput: '"emordnilap"' }
    ]
  },
  {
    slug: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    description: `Given n, return the nth Fibonacci number. Assume Fib(0)=0 and Fib(1)=1.`,
    prelimCases: [
      { input: "0", expectedOutput: "0" },
      { input: "1", expectedOutput: "1" },
      { input: "2", expectedOutput: "1" }
    ],
    testCases: [
      { input: "3", expectedOutput: "2" },
      { input: "4", expectedOutput: "3" },
      { input: "5", expectedOutput: "5" },
      { input: "6", expectedOutput: "8" },
      { input: "7", expectedOutput: "13" },
      { input: "8", expectedOutput: "21" },
      { input: "9", expectedOutput: "34" },
      { input: "10", expectedOutput: "55" }
    ]
  },
  {
    slug: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    description: `Determine whether an integer is a palindrome. An integer is a palindrome 
when it reads the same backward as forward.`,
    prelimCases: [
      { input: "121", expectedOutput: "true" },
      { input: "-121", expectedOutput: "false" },
      { input: "10", expectedOutput: "false" }
    ],
    testCases: [
      { input: "0", expectedOutput: "true" },
      { input: "1", expectedOutput: "true" },
      { input: "1221", expectedOutput: "true" },
      { input: "12321", expectedOutput: "true" },
      { input: "123", expectedOutput: "false" },
      { input: "1001", expectedOutput: "true" },
      { input: "1010", expectedOutput: "false" },
      { input: "98789", expectedOutput: "true" }
    ]
  },
  {
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Medium",
    description: `Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.`,
    prelimCases: [
      { input: "[1,2,4], [1,3,4]", expectedOutput: "[1,1,2,3,4,4]" },
      { input: "[], []", expectedOutput: "[]" },
      { input: "[], [0]", expectedOutput: "[0]" }
    ],
    testCases: [
      { input: "[5,10], [3,7,8]", expectedOutput: "[3,5,7,8,10]" },
      { input: "[1], [2,3,4]", expectedOutput: "[1,2,3,4]" },
      { input: "[1,3,5], [2,4,6]", expectedOutput: "[1,2,3,4,5,6]" },
      { input: "[2,4], [1,3]", expectedOutput: "[1,2,3,4]" },
      { input: "[0], [0]", expectedOutput: "[0,0]" },
      { input: "[], [1,2,3]", expectedOutput: "[1,2,3]" },
      { input: "[1,2], []", expectedOutput: "[1,2]" },
      { input: "[7,8], [6,9]", expectedOutput: "[6,7,8,9]" }
    ]
  },
  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: `Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid. Open brackets must be closed in the correct order.`,
    prelimCases: [
      { input: '"()"', expectedOutput: "true" },
      { input: '"()[]{}"', expectedOutput: "true" },
      { input: '"(]"', expectedOutput: "false" }
    ],
    testCases: [
      { input: '"([{}])"', expectedOutput: "true" },
      { input: '"(((())))"', expectedOutput: "true" },
      { input: '"((())"', expectedOutput: "false" },
      { input: '"([)]"', expectedOutput: "false" },
      { input: '"{}[]"', expectedOutput: "true" },
      { input: '"{"', expectedOutput: "false" },
      { input: '"]"', expectedOutput: "false" },
      { input: '"", expectedOutput: "true"' }
    ]
  },
  {
    slug: "remove-duplicates-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    description: `Given a sorted array nums, remove the duplicates in-place such that each element 
appears only once and returns the new length.`,
    prelimCases: [
      { input: "[1,1,2]", expectedOutput: "[1,2]" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", expectedOutput: "[0,1,2,3,4]" },
      { input: "[1,2,3]", expectedOutput: "[1,2,3]" }
    ],
    testCases: [
      { input: "[]", expectedOutput: "[]" },
      { input: "[1]", expectedOutput: "[1]" },
      { input: "[1,1]", expectedOutput: "[1]" },
      { input: "[1,1,1,1]", expectedOutput: "[1]" },
      { input: "[0,0,0,0,1]", expectedOutput: "[0,1]" },
      { input: "[1,2,2,3,4,4,5]", expectedOutput: "[1,2,3,4,5]" },
      { input: "[10,10,20,20,30,30]", expectedOutput: "[10,20,30]" },
      { input: "[1,1,2,2,3,3,4,4,5,5]", expectedOutput: "[1,2,3,4,5]" }
    ]
  },
  {
    slug: "best-time-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Medium",
    description: `You are given an array prices where prices[i] is the price of a given stock 
on the ith day. You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.`,
    prelimCases: [
      { input: "[7,1,5,3,6,4]", expectedOutput: "5" },
      { input: "[1,2,3,4,5]", expectedOutput: "4" },
      { input: "[7,6,4,3,1]", expectedOutput: "0" }
    ],
    testCases: [
      { input: "[3,3,5,0,0,3,1,4]", expectedOutput: "4" },
      { input: "[1,2]", expectedOutput: "1" },
      { input: "[2,4,1]", expectedOutput: "2" },
      { input: "[2,1,2,0,1]", expectedOutput: "1" },
      { input: "[1]", expectedOutput: "0" },
      { input: "[1,2,4,2,5,7,2,4,9,0]", expectedOutput: "9" },
      { input: "[7,1,5,3,6,4,8]", expectedOutput: "7" },
      { input: "[1,2,3,0,2,5]", expectedOutput: "5" }
    ]
  },
  {
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you 
can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    prelimCases: [
      { input: "2", expectedOutput: "2" },
      { input: "3", expectedOutput: "3" },
      { input: "1", expectedOutput: "1" }
    ],
    testCases: [
      { input: "4", expectedOutput: "5" },
      { input: "5", expectedOutput: "8" },
      { input: "6", expectedOutput: "13" },
      { input: "7", expectedOutput: "21" },
      { input: "8", expectedOutput: "34" },
      { input: "9", expectedOutput: "55" },
      { input: "10", expectedOutput: "89" },
      { input: "15", expectedOutput: "987" }
    ]
  },
  {
    slug: "max-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    description: `Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.`,
    prelimCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expectedOutput: "6" },
      { input: "[1]", expectedOutput: "1" },
      { input: "[5,4,-1,7,8]", expectedOutput: "23" }
    ],
    testCases: [
      { input: "[1,2,3,4,5]", expectedOutput: "15" },
      { input: "[-1,-2,-3,-4]", expectedOutput: "-1" },
      { input: "[0,0,0,0]", expectedOutput: "0" },
      { input: "[-2,-1]", expectedOutput: "-1" },
      { input: "[2,-1,2,3,4,-5]", expectedOutput: "10" },
      { input: "[8,-19,5,-4,20]", expectedOutput: "20" },
      { input: "[34,-50,42,14,-5,86]", expectedOutput: "137" },
      { input: "[-2,1]", expectedOutput: "1" }
    ]
  }
];

await connectDb();
await ProblemModel.deleteMany({});
await ProblemModel.insertMany(problems);
await mongoose.disconnect();
