## 🎯 Day 02: Array Filtering and Mapping Logic

### **Problem Statement**
Write a JavaScript/TypeScript program that takes an array of objects representing "Users" and processes them based on specific age and formatting rules. This challenge focuses on data transformation and filtering.

### **Tasks**
- [X] Create folder `Day-02-Array-Logic`.
- [X] Implement logic in `solution.js`.
- [X] Implement logic in `solution.ts` (Typed version).
- [X] Document logic in folder-level `README.md`.

### **Rules**
- Filter out users who are **under 18** years old.
- Transform the remaining users' names to **UPPERCASE**.
- Output should be an array of strings (names only).

### **Definition of Done**
- Code pushed to a feature branch `feature/day-02-array-logic`.
- PR created with a clear description and linked to the issue.

## 🧠 Key Learnings & Logic Insights

During this challenge, I reinforced several core programming principles:

* **Data Transformation:** Learned how to move from an "Array of Objects" to an "Array of Strings".
* **Chaining Logic:** Understanding the sequence—first we filter (remove unwanted data), then we map (modify the remaining data).
* **Declarative Approach:** Using `.filter()` and `.map()` makes the code more readable compared to traditional loops.
* **Type Safety:** Defined an `Interface` in TypeScript to ensure the User objects have the correct structure.
* **TypeScript Scope Management:** Resolved the "Cannot redeclare block-scoped variable" error by using `export {}`. This treats the file as a module rather than a global script, preventing naming conflicts with the JavaScript version.

---
[⬅ Back to Main Progress Tracker](../README.md)