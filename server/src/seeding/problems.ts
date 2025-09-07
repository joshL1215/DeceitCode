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
      { input: '"qwerty"', expectedOutput: '"ytrewq"' },
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
    slug: "factorial",
    title: "Factorial",
    difficulty: "Easy",
    description: `Calculate the factorial of a given non-negative integer n.\n
The factorial of n is defined as n! = n * (n-1) * ... * 1\n
Return the factorial value.\n
Examples:\n
0 -> 1\n
3 -> 6\n
5 -> 120`,
    prelimCases: [
      { input: "0", expectedOutput: "1" },
      { input: "3", expectedOutput: "6" },
      { input: "5", expectedOutput: "120" }
    ],
    testCases: [
      { input: "1", expectedOutput: "1" },
      { input: "2", expectedOutput: "2" },
      { input: "6", expectedOutput: "720" },
      { input: "7", expectedOutput: "5040" },
      { input: "10", expectedOutput: "3628800" }
    ]
  },
  {
    slug: "sum-of-digits",
    title: "Sum of Digits",
    difficulty: "Easy",
    description: `Given a non-negative integer, return the sum of its digits.\n
Examples:\n
123 -> 6\n
456 -> 15`,
    prelimCases: [
      { input: "123", expectedOutput: "6" },
      { input: "0", expectedOutput: "0" },
      { input: "7", expectedOutput: "7" }
    ],
    testCases: [
      { input: "999", expectedOutput: "27" },
      { input: "456", expectedOutput: "15" },
      { input: "1001", expectedOutput: "2" },
      { input: "11111", expectedOutput: "5" },
      { input: "56789", expectedOutput: "35" }
    ]
  },
  {
    slug: "is-prime",
    title: "Prime Number Check",
    difficulty: "Medium",
    description: `Determine if a given integer n (>1) is a prime number.\n
Return "true" if prime, "false" otherwise.\n
Examples:\n
2 -> true\n
4 -> false\n
13 -> true`,
    prelimCases: [
      { input: "2", expectedOutput: "true" },
      { input: "4", expectedOutput: "false" },
      { input: "13", expectedOutput: "true" }
    ],
    testCases: [
      { input: "1", expectedOutput: "false" },
      { input: "17", expectedOutput: "true" },
      { input: "18", expectedOutput: "false" },
      { input: "19", expectedOutput: "true" },
      { input: "20", expectedOutput: "false" }
    ]
  },
  {
    slug: "count-vowels",
    title: "Count Vowels",
    difficulty: "Easy",
    description: `Given a string, count the number of vowels (a, e, i, o, u) in it.\n
Return the count.\n
Examples:\n
"hello" -> 2\n
"world" -> 1`,
    prelimCases: [
      { input: '"hello"', expectedOutput: "2" },
      { input: '"world"', expectedOutput: "1" },
      { input: '"aeiou"', expectedOutput: "5" }
    ],
    testCases: [
      { input: '"xyz"', expectedOutput: "0" },
      { input: '"programming"', expectedOutput: "3" },
      { input: '"OpenAI"', expectedOutput: "3" },
      { input: '"abcdefghijklmnopqrstuvwxyz"', expectedOutput: "5" },
      { input: '""', expectedOutput: "0" }
    ]
  },
  {
    slug: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    description: `Given a signed integer, return the integer with its digits reversed.\n
If reversing causes the value to go outside 32-bit signed integer range, return 0.\n
Examples:\n
123 -> 321\n
-456 -> -654\n
1534236469 -> 0`,
    prelimCases: [
      { input: "123", expectedOutput: "321" },
      { input: "-456", expectedOutput: "-654" },
      { input: "1534236469", expectedOutput: "0" }
    ],
    testCases: [
      { input: "0", expectedOutput: "0" },
      { input: "100", expectedOutput: "1" },
      { input: "-100", expectedOutput: "-1" },
      { input: "120", expectedOutput: "21" },
      { input: "2147483647", expectedOutput: "0" }
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
  },
  {
    slug: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Hard",
    description: `Given a string s, find the length of the longest substring without repeating characters.\n
Return the length.\n
Examples:\n
"abcabcbb" -> 3\n
"bbbbb" -> 1\n
"pwwkew" -> 3`,
    prelimCases: [
      { input: '"abcabcbb"', expectedOutput: "3" },
      { input: '"bbbbb"', expectedOutput: "1" },
      { input: '"pwwkew"', expectedOutput: "3" }
    ],
    testCases: [
      { input: '"abcdef"', expectedOutput: "6" },
      { input: '"dvdf"', expectedOutput: "3" },
      { input: '"anviaj"', expectedOutput: "5" },
      { input: '"aab"', expectedOutput: "2" },
      { input: '" "', expectedOutput: "1" }
    ]
  },
  
  {
    slug: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    description: `Given an array of integers representing the heights of bars in a histogram, 
find the area of the largest rectangle that can be formed.\n
Return the maximum area.\n
Examples:\n
[2,1,5,6,2,3] -> 10\n
[2,4] -> 4`,
    prelimCases: [
      { input: "[2,1,5,6,2,3]", expectedOutput: "10" },
      { input: "[2,4]", expectedOutput: "4" },
      { input: "[1,1,1,1]", expectedOutput: "4" }
    ],
    testCases: [
      { input: "[6,2,5,4,5,1,6]", expectedOutput: "12" },
      { input: "[2,1,2]", expectedOutput: "3" },
      { input: "[4,2,0,3,2,5]", expectedOutput: "6" },
      { input: "[1]", expectedOutput: "1" },
      { input: "[1,2,3,4,5]", expectedOutput: "9" }
    ]
  },
  {
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description: `Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.\n
Examples:\n
[0,1,0,2,1,0,1,3,2,1,2,1] -> 6\n
[4,2,0,3,2,5] -> 9`,
    prelimCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expectedOutput: "6" },
      { input: "[4,2,0,3,2,5]", expectedOutput: "9" },
      { input: "[1,0,2]", expectedOutput: "1" }
    ],
    testCases: [
      { input: "[2,0,2]", expectedOutput: "2" },
      { input: "[3,0,0,2,0,4]", expectedOutput: "10" },
      { input: "[0,0,0,0]", expectedOutput: "0" },
      { input: "[5,4,1,2]", expectedOutput: "1" },
      { input: "[0,1,0,1]", expectedOutput: "1" }
    ]
  },
  {
    slug: "word-break",
    title: "Word Break",
    difficulty: "Hard",
    description: `Given a string s and a dictionary of words (predefined inside function), determine if s can be segmented into a space-separated sequence of one or more dictionary words.\n
Return "true" if possible, otherwise "false".\n
Examples (dictionary = ["leet","code"]):\n
"leetcode" -> true\n
"leetcod" -> false`,
    prelimCases: [
      { input: '"leetcode"', expectedOutput: "true" },
      { input: '"leetcod"', expectedOutput: "false" },
      { input: '"applepenapple"', expectedOutput: "true" }
    ],
    testCases: [
      { input: '"catsanddog"', expectedOutput: "true" },
      { input: '"catsandog"', expectedOutput: "false" },
      { input: '"pineapplepenapple"', expectedOutput: "true" },
      { input: '"abcd"', expectedOutput: "false" },
      { input: '"aaaaaaa"', expectedOutput: "true" }
    ]
  },
  {
    slug: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    description: `Given two strings s and t (you can assume t is predefined inside function), return the minimum window in s which contains all the characters of t.\n
If no such window exists, return an empty string.\n
Examples (t = "ABC"):\n
"ADOBECODEBANC" -> "BANC"\n
"a" -> ""`,
    prelimCases: [
      { input: '"ADOBECODEBANC"', expectedOutput: '"BANC"' },
      { input: '"a"', expectedOutput: '""' },
      { input: '"AA"', expectedOutput: '""' }
    ],
    testCases: [
      { input: '"ADOBECODEBAANC"', expectedOutput: '"BAANC"' },
      { input: '"AABC"', expectedOutput: '"AABC"' },
      { input: '"ABAC"', expectedOutput: '"BAC"' },
      { input: '"ADOBECODEBANCABC"', expectedOutput: '"BANC"' },
      { input: '"XYZ"', expectedOutput: '""' }
    ]
  }
];

await connectDb();
await ProblemModel.deleteMany({});
await ProblemModel.insertMany(problems);
await mongoose.disconnect();
