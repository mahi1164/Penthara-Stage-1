const currentMonthExpenses = filteredExpenses.filter((expense) => {

  const expenseDate = new Date(expense.date);

  return (
    expenseDate.getMonth() === currentDate.getMonth() - 1 &&
    expenseDate.getFullYear() === currentDate.getFullYear()
  );

});