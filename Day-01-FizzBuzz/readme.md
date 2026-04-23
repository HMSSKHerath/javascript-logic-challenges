## 🎯 Day 01: FizzBuzz Logic Implementation

### **Problem Statement**
Write a JavaScript/TypeScript program that iterates through numbers from **1 to 20** and logs specific strings based on divisibility rules. This challenge focuses on mastering control flow and condition priority.

### **Tasks**
- [X] Create folder `Day-01-FizzBuzz`.
- [X] Implement logic in `solution.js`.
- [ ] Implement logic in `solution.ts` (Typed version).
- [X] Document logic in folder-level `README.md`.

### **Rules**
- Divisible by **3** → `"Fizz"`
- Divisible by **5** → `"Buzz"`
- Divisible by **both 3 & 5** → `"FizzBuzz"`
- Otherwise → **The Number**

### **Definition of Done**
- Code pushed to a feature branch.
- PR created with a clear description and linked to this issue.



## 🧠 Key Learnings & Logic Insights

During this challenge, I reinforced several core programming principles:

* **Most Specific Case First:** Always place the most restrictive condition at the top of an `if-else if` chain.
    * *Example:* Checking for `(n % 3 === 0 && n % 5 === 0)` must happen before checking for `3` or `5` individually.
* **Control Flow Priority:** Code executes from top to bottom. Once a condition is met (`true`), the remaining `else if` blocks are skipped.
* **Avoiding Double Printing:** Using `if - else if` instead of multiple `if` statements ensures only one result is logged for each number.
* **The Modulo Operator (%):** Used effectively to determine divisibility by checking for a zero remainder.