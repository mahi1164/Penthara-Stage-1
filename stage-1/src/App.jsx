import { useEffect, useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {

  const savedExpenses = JSON.parse(
    localStorage.getItem("expenses")
  );

  if (savedExpenses) {
    setExpenses(savedExpenses);
  }

}, []);



const deleteExpense = (id) => {

    const updatedExpenses =
        expenses.filter(
            expense => expense.id !== id
        );

    setExpenses(updatedExpenses);

    if (
  editingExpense &&
  editingExpense.id === id
) {
  setEditingExpense(null);
}

    localStorage.setItem(
        "expenses",
        JSON.stringify(updatedExpenses)
    );

};
const filteredExpenses = expenses
.filter((expense) => {

  const matchesSearch =
    expense.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "" ||
    expense.category === selectedCategory;

  return matchesSearch && matchesCategory;

})
.sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );


const currentDate = new Date();

const currentMonthExpenses = filteredExpenses.filter((expense) => {

  const expenseDate = new Date(expense.date);

  return (
    expenseDate.getMonth() === currentDate.getMonth() &&
    expenseDate.getFullYear() === currentDate.getFullYear()
  );

});

const total = currentMonthExpenses.reduce(
  (sum, expense) => sum + expense.amount,
  0
);

const categories = ["Food", "Travel", "Rent", "Fun", "Other"];

const categoryTotals = {};

categories.forEach((category) => {

  categoryTotals[category] = currentMonthExpenses
    .filter((expense) => expense.category === category)
    .reduce((sum, expense) => sum + expense.amount, 0);

});
  return (
  <div className="app">

    <Header />

    <ExpenseForm
  expenses={expenses}
  setExpenses={setExpenses}
  editingExpense={editingExpense}
  setEditingExpense={setEditingExpense}
/>
    <section className="summary-card">

  <h2>Visible Current Month Summary</h2>

  <h3>Total : ₹ {total.toLocaleString("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})}</h3>

  {categories.map((category) => (

    <p key={category}>

      <strong>{category}</strong> : ₹ {categoryTotals[category].toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}

    </p>

  ))}

</section>

    <input
      type="text"
      className="search-box"
      placeholder="Search by description..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <select
      className="filter-box"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Rent">Rent</option>
      <option value="Fun">Fun</option>
      <option value="Other">Other</option>
    </select>

    <ExpenseList
      expenses={filteredExpenses}
      deleteExpense={deleteExpense}
      totalExpenses={expenses.length}
      editingExpense={editingExpense}
      setEditingExpense={setEditingExpense}
    />

  </div>
);
}

export default App;