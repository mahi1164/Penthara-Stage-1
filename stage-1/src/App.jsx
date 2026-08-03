import { useEffect, useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
const filteredExpenses = expenses.filter((expense) =>
  expense.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
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
  placeholder="Search expenses..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
      <ExpenseList
    expenses={filteredExpenses}
    deleteExpense={deleteExpense}
/>
    </div>
  );
}

export default App;