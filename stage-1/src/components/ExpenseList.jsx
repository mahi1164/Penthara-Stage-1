function ExpenseList({ expenses }) {
  return (
    <section className="expense-list">

      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p className="empty-message">
          No expenses yet.
        </p>
      ) : (
        <p>Expenses will appear here...</p>
      )}

    </section>
  );
}

export default ExpenseList;