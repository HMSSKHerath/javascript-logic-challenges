## 🎯 Day 05: JavaScript Method Chaining & Data Transformation

### **Problem Statement**
Implement a professional solution to filter active cart items and calculate the total bill using **Method Chaining** (`.filter()`, `.map()`, and `.reduce()`). The goal is to master functional programming by transforming raw data into a final result in a single, readable execution flow.

### **Tasks**
- [X] Create folder `Day-05-Cart-Chaining`.
- [] Implement the logic in `solution.js`.
- [] Use **Method Chaining** to process the input array in one continuous block.
- [] Document the logic and transformation flow in a folder-level `README.md`.

### **Rules**
- Use `.filter()` to keep only items where `isAdded: true`.
- Use `.map()` to extract the `price` values from the filtered result.
- Use `.reduce()` to sum those prices and return a single total value.
- **Strictly No Loops:** Do not use `for` or `while` loops. Use ES6+ Functional Programming.
- Output should be a single numerical value representing the total price.

### **Definition of Done**
- Code pushed to a feature branch `feature/day-05-cart-chaining`.
- Logic implemented using a single chained statement.
- Final total bill correctly calculated and logged.

## 🧠 Key Learnings & Logic Insights

During this challenge, I mastered data transformation using Method Chaining:

* **Method Chaining Pattern:** Learned how to pass the output of one array method directly into the next, creating a clean and declarative "pipeline" for data.
* **Declarative vs Imperative:** Shifted from "How" to do it (loops) to "What" to do (Filter -> Map -> Sum), making the code much more readable and maintainable.
* **Pure Functions in Transformation:** Focused on using arrow functions to keep the logic concise and side-effect-free during the transformation stages.
* **Single Responsibility:** Each method in the chain handles one specific task (filtering, extracting, or summing), following the principle of clean code.
* **Data Immutability:** Ensured the original `myCart` array remains unchanged while generating the final `totalBill` value.

---
[⬅ Back to Main Progress Tracker](../README.md)