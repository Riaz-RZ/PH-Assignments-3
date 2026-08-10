# JavaScript Problem Solving Assignment (ES6)

## Assignment 3

This repository contains my solutions for **Programming Hero — JavaScript Problem Solving Assignment (ES6), Assignment 3**.

### 📄 Assignment Document

**Bengali Version:**
[JavaScript Problem Solving Assignment (ES6)](https://docs.google.com/document/d/12ywo_iS6K-XaGGuuIR6k09Q1p5EpJjUT6gsi11ky2Gc/edit?tab=t.0)

---

## 📌 Important Instructions

* The function name must not be changed. Each problem must use the exact function name provided.
* Every function must **return** the required value using the `return` statement.
* All logic and variables must be written inside the function.
* The output must exactly match the requirements of each problem.
* Hidden test cases may be used to verify the solutions.
* The assignment document is the final authority for the requirements.

---

## 📝 Problems

### Problem 1 — Student Introduction Generator

**Function:** `studentIntroduction`

Generates an introduction message for a newly registered student.

**Concepts:**

* Objects
* Property validation
* `typeof`
* Template literals
* Conditional logic

**Example Output:**

```text
My name is Rafi. I am 18 years old. I am learning JavaScript.
```

---

### Problem 2 — Active User Filter

**Function:** `filterActiveUsers`

Filters a list of users and returns only users whose `isActive` property is `true`.

**Concepts:**

* Arrays
* Objects
* `filter()`
* Property validation

**Example:**

```js
[
  { name: "A", isActive: true },
  { name: "B", isActive: false }
]
```

**Output:**

```js
[
  { name: "A", isActive: true }
]
```

---

### Problem 3 — Trending Hashtag Counter

**Function:** `countHashtags`

Counts hashtags in a caption and identifies the longest hashtag.

**Concepts:**

* Strings
* Arrays
* `split()`
* `startsWith()`
* Objects
* String manipulation

**Example:**

```text
"Loving this weather today #sunny #vibes #weekend"
```

**Output:**

```js
{
  hashtagCount: 3,
  longestTag: "weekend"
}
```

---

### Problem 4 — Bonus Score Calculator

**Function:** `bonusScore`

Adds **10 bonus marks** to every score and returns the total of all updated scores.

**Concepts:**

* Arrays
* `map()`
* `reduce()`
* Array validation
* Number validation

**Example:**

```js
[80, 65, 90, 75]
```

**Output:**

```text
350
```

---

### Problem 5 — AI Leaderboard Generator

**Function:** `generateLeaderboard`

Fixes a buggy leaderboard function using ES6 concepts.

### Rules

* Only students with a score of **70 or above** qualify.
* Qualified student names must be converted to **UPPERCASE**.
* Only the **top 3** qualified students are displayed.
* The result does not need to be sorted.

**Concepts:**

* `Array.isArray()`
* `filter()`
* `map()`
* `slice()`
* Arrow functions
* Destructuring
* String methods
* Input validation

**Example Output:**

```js
["RAFI", "KARIM", "NAFIS"]
```

---

## 🛠️ JavaScript / ES6 Concepts Practiced

This assignment covers several important JavaScript concepts:

* Functions
* Objects
* Arrays
* Conditional statements
* Template literals
* `typeof`
* `Array.isArray()`
* `in` operator
* `filter()`
* `map()`
* `reduce()`
* `split()`
* `startsWith()`
* `toUpperCase()`
* `slice()`
* Arrow functions
* Destructuring
* Input validation
* Return statements
* ES6 syntax

---

## 📂 Project Structure

```text
PH-Assignments-3/
│
├── Problem-1/
│   └── studentIntroduction.js
│
├── Problem-2/
│   └── filterActiveUsers.js
│
├── Problem-3/
│   └── countHashtags.js
│
├── Problem-4/
│   └── bonusScore.js
│
├── Problem-5/
│   └── generateLeaderboard.js
│
└── README.md
```

> The folder and file names can be adjusted according to the actual project structure.

---

## 🎯 Assignment Goal

The main goal of this assignment is to practice **JavaScript ES6 concepts and problem-solving skills** by implementing functions that handle different types of input, validation, array operations, string manipulation, and debugging.

---

## 👨‍💻 Author

**MD Riazul Islam**

JavaScript / MERN Stack Learner

---

## 📚 Course

**Programming Hero — Full Stack Development**

**Assignment:** JavaScript Problem Solving Assignment (ES6) — Assignment 3













