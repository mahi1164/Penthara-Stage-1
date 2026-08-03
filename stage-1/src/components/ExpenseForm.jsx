import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
    note: "",
  });

  const [errors, setErrors] = useState({
  description: "", 
  amount: "",
  date: "",
});

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
const validateForm = () => {

  const newErrors = {
    description: "",
    amount: "",
    date: "",
  };

  if (formData.description.trim().length < 3) {
    newErrors.description =
      "Description must be at least 3 characters.";
  }

  if (
    Number(formData.amount) <= 0 ||
    formData.amount === ""
  ) {
    newErrors.amount =
      "Amount must be greater than 0.";
  }

  if (
    formData.date &&
    new Date(formData.date) > new Date()
  ) {
    newErrors.date =
      "Future dates are not allowed.";
  }

  setErrors(newErrors);

  return Object.values(newErrors).every(
    (error) => error === ""
  );
};

const handleSubmit = (event) => {

  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const expense = {
    id: Date.now(),
    ...formData,
    amount: Number(formData.amount),
  };

  const updatedExpenses = [
    expense,
    ...expenses,
  ];

  setExpenses(updatedExpenses);

  localStorage.setItem(
    "expenses",
    JSON.stringify(updatedExpenses)
  );

  setFormData({
    description: "",
    amount: "",
    category: "",
    date: "",
    note: "",
  });

};


  return (
    <form onSubmit={handleSubmit}>

      <h2>Add Expense</h2>

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      {errors.description && (
  <p className="error">
    {errors.description}
  </p>
)}

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      {errors.amount && (
  <p className="error">
    {errors.amount}
  </p>
)}

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Rent">Rent</option>
        <option value="Fun">Fun</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {errors.date && (
  <p className="error">
    {errors.date}
  </p>
)}
   

      <textarea
        name="note"
        placeholder="Note (Optional)"
        value={formData.note}
        onChange={handleChange}
      />

      <button type="submit">
        Add Expense
      </button>

    </form>
  );
}

export default ExpenseForm;