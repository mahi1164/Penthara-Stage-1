import { useState } from "react";

function ExpenseForm() {

  const [formData, setFormData] = useState({
    description:"",
    amount:"",
    category:"",
    date:"",
    note:""
  });

  return (
    <form>

      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Description"
      />

      <input
        type="number"
        placeholder="Amount"
      />

      <select>

        <option value="">
          Select Category
        </option>

        <option>Food</option>
        <option>Travel</option>
        <option>Rent</option>
        <option>Fun</option>
        <option>Other</option>

      </select>

      <input type="date" />

      <textarea
        placeholder="Note (Optional)"
      />

      <button>
        Add Expense
      </button>

    </form>
  );
}

export default ExpenseForm;