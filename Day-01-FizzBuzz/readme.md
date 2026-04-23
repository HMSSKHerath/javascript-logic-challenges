## 🎯 Day 01: FizzBuzz Logic Implementation

### **Problem Statement**
Write a JavaScript/TypeScript program that iterates through numbers from **1 to 20** and logs specific strings based on divisibility rules. This challenge focuses on mastering control flow and condition priority.

### **Tasks**
- [X] Create folder `Day-01-FizzBuzz`.
- [X] Implement logic in `solution.js`.
- [X] Implement logic in `solution.ts` (Typed version).
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

* **Logic Priority:** Hardest condition (`3 & 5`) goes first to avoid wrong results.
* **Smart Flow:** Using `else if` ensures the program stops after the first correct match.
* **Clean Output:** Prevents printing multiple results for a single number.
* **Modulo Usage:** Efficiently checked divisibility using the `%` operator.
* **Type Safety:** Used TypeScript to ensure the loop variable stays a `number`.

---
[⬅ Back to Main Progress Tracker](../README.md)