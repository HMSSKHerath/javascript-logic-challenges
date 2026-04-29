## 🎯 Day 07: API Data Sorting & Multi-Condition Filtering

### **Problem Statement**
Implement a professional solution to fetch post data from an external API and perform complex sorting and filtering. The goal is to master **Asynchronous Data Handling**, **Array Sorting Algorithms** (`.sort()`), and multi-level data transformation to present information in a structured order.

### **Tasks**
- [] Create folder `Day-07-API-Sorting`.
- [] Implement the logic in `solution.js` using `async/await`.
- [] Implement the typed version in `solution.ts`.
- [] Use the **Fetch API** to retrieve data from `https://jsonplaceholder.typicode.com/posts`.
- [] Implement logic to filter posts where `userId` is 1.
- [] Sort the filtered posts by the **length of their title** in descending order (longest first).
- [] Document the sorting logic and performance considerations in a folder-level `README.md`.

### **Rules**
- Use the **Fetch API** with `async/await` for asynchronous operations.
- **Data Filtering:** Only include posts where `userId === 1`.
- **Data Sorting:** Sort the results based on `title.length` in descending order.
- **Strictly No Loops:** Use functional methods (`.filter()`, `.sort()`) for processing.
- Output should be an array of objects containing the sorted post data.

### **Definition of Done**
- Code pushed to a feature branch `feature/day-07-api-sorting`.
- Successful data retrieval from the API endpoint.
- Final filtered and sorted post list correctly logged to the console using `console.table()`.

## 🧠 Key Learnings & Logic Insights

During this challenge, I mastered advanced array manipulation and sorting:

* **Custom Sort Logic:** Learned how to provide a compare function to `.sort()` to handle specific criteria like string length.
* **Multi-Stage Pipelines:** Gained experience in chaining `.filter()` and `.sort()` to process complex data structures efficiently.
* **Descending vs Ascending:** Mastered the logic of `(b.title.length - a.title.length)` to ensure the longest titles appear at the top.
* **API Resource Filtering:** Practiced extracting specific segments of API data based on relational IDs like `userId`.
* **Type Safety in Sorting:** Used TypeScript interfaces to ensure the properties being sorted (`title`) exist and are of the correct type.

---
[⬅ Back to Main Progress Tracker](../README.md)