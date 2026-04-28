## 🎯 Day 06: Asynchronous API Fetching & Data Transformation

### **Problem Statement**
Implement a professional solution to fetch user data from an external API and process it using asynchronous JavaScript. The goal is to master **Promises**, **Async/Await**, and data filtering/mapping to transform raw API responses into a refined dataset.

### **Tasks**
- [X] Create folder `Day-06-API-Fetching`.
- [X] Implement the logic in `solution.js`.
- [ ] Implement the typed version in `solution.ts`.
- [] Use the **Fetch API** to retrieve data from JSONPlaceholder.
- [ ] Document the asynchronous flow and error handling in a folder-level `README.md`.

### **Rules**
- Use the **Fetch API** with `async/await` for asynchronous operations.
- Filter users whose `username` length is greater than 6.
- Map the results to return only `name` and `email` properties.
- **Error Handling:** Use `try...catch` blocks to manage potential API or network failures.
- Output should be an array of objects containing refined user data.

### **Definition of Done**
- Code pushed to a feature branch `feature/day-06-api-fetching`.
- Successful data retrieval from the API endpoint.
- Final filtered and mapped user list correctly logged to the console.

## 🧠 Key Learnings & Logic Insights

During this challenge, I mastered handling external data using Asynchronous JavaScript:

* **Async/Await Pattern:** Learned how to handle asynchronous operations in a synchronous-looking way, making the code cleaner and easier to debug than using `.then()` chains.
* **API Integration:** Gained experience in using the `fetch()` API to communicate with external REST endpoints and handle JSON responses.
* **Robust Error Handling:** Learned the importance of `try...catch` blocks to ensure the application doesn't crash during network issues or API downtime.
* **Data Sanitization:** Practiced filtering and mapping raw data immediately after fetching to ensure only the necessary information enters the application logic.
* **Type Safety in APIs:** Used TypeScript Interfaces to define the structure of the incoming API data, preventing runtime errors caused by unexpected data formats.

---
[⬅ Back to Main Progress Tracker](../README.md)