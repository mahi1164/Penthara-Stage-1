# Expense Tracker

A responsive Expense Tracker built with React that allows users to manage daily expenses with full CRUD functionality, search, category filtering, monthly summaries, and persistent local storage.

---

## Features

- Add new expenses
- Edit existing expenses
- Delete expenses
- Search expenses by description
- Filter expenses by category
- Current month summary with category-wise totals
- Automatic newest-first sorting
- Persistent storage using Local Storage
- Inline form validation
- Responsive edit mode with prefilled fields
- Consistent currency and date formatting
- Empty state handling for both:
  - No expenses yet
  - No expenses match the current search/filter

---

## Tech Stack

- React
- JavaScript (ES6)
- HTML5
- CSS3
- Local Storage API

---

## Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── ExpenseForm.jsx
│   ├── ExpenseList.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Validation

The form validates:

- Description must contain at least 3 characters.
- Amount must be:
  - numeric
  - greater than zero
  - finite
- Category must be selected.
- Date cannot be empty.
- Future dates are rejected.

Validation runs while typing and again before submission.

---

## Current Month Summary

The summary is derived directly from the currently visible expenses.

It displays:

- Current month total
- Category-wise subtotals
- Automatically updates after:
  - Add
  - Edit
  - Delete
  - Search
  - Category filter
  - Page reload

---

## Persistence

Expenses are stored in browser Local Storage.

Data remains available after refreshing or reopening the application.

---

## Edge Cases Tested

- Adding expenses
- Editing expenses
- Cancelling edit mode
- Deleting while editing
- Reload after add/edit/delete
- Invalid amount inputs
- Empty description
- Future dates
- Search + category filter together
- Empty search/filter states
- Current month summary updates correctly
- Sorting remains newest first

---

## Known Limitations

- Data is stored only in browser Local Storage.
- No backend or user authentication.
- Summary only covers the current visible month's expenses.

---

## Self Review

This project successfully implements all core CRUD operations with validation, filtering, sorting, and persistent storage.

The biggest focus during development was maintaining a single source of truth for expense data while ensuring that edit mode, validation, and monthly summaries stayed synchronized after every operation.

The application was manually tested across common user flows including add, edit, delete, reload, search, category filtering, and edge cases involving validation and edit cancellation.