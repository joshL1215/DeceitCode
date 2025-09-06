import "dotenv/config";
import ProblemModel from "../models/problem-model.js";
import connectDb from "../config/db.js";
import mongoose from "mongoose";

const problems = [
  {
    slug: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    description: `Write a function that reverses a given string.\n
The input will be a single string, which may contain letters, numbers, or symbols.\n
Return a new string which is the reverse of the input string.\n
Examples:\n
"hello" -> "olleh"\n
"world!" -> "!dlrow"`,
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
    slug: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    description: `Determine whether a given integer is a palindrome.\n
A palindrome integer reads the same forward and backward.\n
Your function should return "true" if the integer is a palindrome and "false" otherwise.\n
Examples:\n
121 -> true\n
-121 -> false\n
10 -> false`,
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
    slug: "fibonacci-number",
    title: "Fibonacci Number",
    difficulty: "Easy",
    description: `Calculate the nth Fibonacci number for a given integer n.\n
The Fibonacci sequence is defined as:\n
Fib(0) = 0, Fib(1) = 1\n
Fib(n) = Fib(n-1) + Fib(n-2) for n > 1\n
Your function should return the nth Fibonacci number.\n
Examples:\n
0 -> 0\n
1 -> 1\n
5 -> 5`,
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
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: `You are climbing a staircase with n steps.\n
Each time you can climb either 1 or 2 steps.\n
Calculate how many distinct ways there are to reach the top of the staircase.\n
Return the total number of unique paths.\n
Examples:\n
2 -> 2 (1+1, 2)\n
3 -> 3 (1+1+1, 1+2, 2+1)`,
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
which has the largest sum and return its sum.\n
The subarray must be continuous and can contain negative numbers.\n
Examples:\n
[-2,1,-3,4,-1,2,1,-5,4] -> 6\n
[1,2,3,4,5] -> 15`,
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
