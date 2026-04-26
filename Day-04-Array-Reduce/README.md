## 🎯 Day 04: JavaScript Array Reduce & Accumulation

### **Problem Statement**
Implement a professional solution to calculate the total bill and total item quantity from a shopping cart using the `.reduce()` method. The goal is to master state accumulation and type safety in a single pass.

### **Tasks**
- [X] Create folder `Day-04-Array-Reduce`.
- [X] Implement the logic in `solution.js`.
- [] Implement the typed version in `solution.ts`.
- [X] Document the logic and type definitions in a folder-level `README.md`.

### **Rules**
- Use `.reduce()` to return a single object containing both total price and total quantity.
- Use **Object Destructuring** inside the `.reduce()` method to access properties.
- Ensure the logic handles an empty array correctly by returning `{ totalBill: 0, totalItems: 0 }`.
- Output should be a single object `{ totalBill: number, totalItems: number }`.

### **Definition of Done**
- Code pushed to a feature branch `feature/day-04-array-reduce`.
- PR created with a clear description and linked to the issue.

## 🧠 Key Learnings & Logic Insights

During this challenge, I deepened my understanding of state accumulation patterns:

* **Accumulator Pattern:** Learned how to initialize `.reduce()` with an object to track multiple values (Total Price and Quantity) simultaneously.
* **Single Pass Efficiency:** Mastered calculating complex totals in a single iteration, which is more performant than using multiple loops or chaining.
* **Destructuring in Reducers:** Used object destructuring directly on the current item within the reducer function to keep the logic clean and readable.
* **TypeScript Interface for State:** Defined a `CartSummary` interface to strictly type the accumulator, preventing runtime errors in the final result object.
* **Edge Case Handling:** Implemented an initial value for the reducer to ensure the code remains robust even when processing an empty shopping cart.

---
[⬅ Back to Main Progress Tracker](../README.md)