function ExpenseList({ expenses, deleteExpense }) {

  return (
    <section className="expense-list">

      <h2>Expense List</h2>

      {expenses.length === 0 ? (

        <p className="empty-message">
          No expenses yet.
        </p>

      ) : (

        expenses.map((expense) => (

          <div
            key={expense.id}
            className="expense-card"
          >

            <h3>{expense.description}</h3>

            <p>
              <strong>Amount:</strong> ₹ {expense.amount}
            </p>

            <p>
              <strong>Category:</strong> {expense.category}
            </p>

            <p>
              <strong>Date:</strong> {expense.date}
            </p>

            {expense.note && (
              <p>
                <strong>Note:</strong> {expense.note}
              </p>
            )}

            <button
              className="delete-btn"
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>

          </div>

        ))

      )}

    </section>
  );
}

export default ExpenseList;