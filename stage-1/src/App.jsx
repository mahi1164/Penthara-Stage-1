import { useEffect, useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
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

    localStorage.setItem(
        "expenses",
        JSON.stringify(updatedExpenses)
    );

};
const filteredExpenses = expenses.filter((expense) => {

  const matchesSearch =
    expense.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "" ||
    expense.category === selectedCategory;

  return matchesSearch && matchesCategory;

});
  return (
  <div className="app">

    <Header />

    <ExpenseForm
      expenses={expenses}
      setExpenses={setExpenses}
    />

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
    />

  </div>
);
}

export default App;