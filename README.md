# Expense Tracker

A React-based Expense Tracker application developed as part of a 5-day software engineering internship assessment. The application allows users to manage their daily expenses with complete CRUD functionality, real-time validation, search, filtering, monthly summaries, and persistent local storage.

---

## Features

- Add new expenses with:
  - Description
  - Amount
  - Category
  - Date
  - Optional note
- Edit existing expenses using the same prefilled form
- Delete expenses
- Inline validation with field-specific error messages
- Search expenses by description (case-insensitive)
- Filter expenses by category
- Combined search and category filtering
- Current-month summary with category-wise subtotals
- Newest-first expense sorting
- Persistent storage using Local Storage
- Two distinct empty states:
  - No expenses yet
  - No expenses match your search or filter
- Consistent currency and date formatting throughout the application

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
│   └── ExpenseList.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Validation Rules

The application performs inline validation while the user types and again before form submission.

Validation includes:

- Description must contain at least 3 characters.
- Amount must:
  - be numeric
  - be greater than zero
  - be a finite number
- Category selection is required.
- Date is required.
- Future dates are not allowed.

Invalid forms cannot be submitted until all validation rules are satisfied.

---

## Expense Summary

The application displays a **Visible Current Month Summary** that is always derived from the currently filtered expense data.

The summary automatically updates after:

- Adding an expense
- Editing an expense
- Deleting an expense
- Search changes
- Category filter changes
- Page reload

No duplicate summary state is maintained.

---

## Data Persistence

All expense records are stored in the browser's Local Storage.

The application restores saved expenses automatically when the page reloads.

---

## Edge Cases Tested

The following scenarios were manually tested during development:

- Add expense
- Edit expense
- Delete expense
- Delete while editing
- Cancel edit mode
- Reload after add
- Reload after edit
- Reload after delete
- Description validation
- Amount validation
- Category validation
- Future date validation
- Search functionality
- Category filtering
- Combined search and filtering
- Empty state (no expenses)
- Empty state (no matching results)
- Current month summary after editing expenses across different months
- Sorting after add, edit, delete, search, filter, and reload

---

## Known Limitations

- Data is stored locally in the browser and is not synchronized across devices.
- Categories are predefined.
- Search is limited to the expense description.
- No authentication or backend database is implemented.

---

## Self Review

This project successfully implements all the required Stage 1 functionality, including CRUD operations, inline validation, search, filtering, monthly summaries, sorting, and Local Storage persistence.

During development, the primary focus was maintaining a single source of truth for expense data while ensuring edit mode, validation, filtering, sorting, and monthly summaries remained synchronized after every user action.

The application was manually regression tested across all major workflows and common edge cases to ensure consistent behaviour before submission.