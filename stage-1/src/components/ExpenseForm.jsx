import { useEffect, useRef, useState } from "react";

function ExpenseForm({
  expenses,
  setExpenses,
  editingExpense,
  setEditingExpense
}) {

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
  category: "",
  date: "",
});

const formRef = useRef(null);

useEffect(() => {

  if (editingExpense) {

    setFormData(editingExpense);

    setErrors({
      description: "",
      amount: "",
      category: "",
      date: "",
    });

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  } else {

    setFormData({
      description: "",
      amount: "",
      category: "",
      date: "",
      note: "",
    });

    setErrors({
      description: "",
      amount: "",
      category: "",
      date: "",
    });

  }

}, [editingExpense]);

const validateForm = (data) => {

  const newErrors = {
  description: "",
  amount: "",
  category: "",
  date: "",
  };

  if (data.description.trim().length < 3) {
    newErrors.description =
      "Description must be at least 3 characters.";
  }
  const amount = Number(data.amount);

  if (
  data.amount === "" ||
  !Number.isFinite(amount) ||
  amount <= 0
) {
  newErrors.amount =
    "Amount must be greater than 0.";
}
  if (data.category === "") {
  newErrors.category =
    "Please select a category.";
}

  if (data.date === "") {

  newErrors.date =
    "Please select a date.";

} else if (
  new Date(data.date) > new Date()
) {

  newErrors.date =
    "Future dates are not allowed.";

}

  setErrors(newErrors);

  return Object.values(newErrors).every(
    (error) => error === ""
  );

  
};

  const handleChange = (event) => {

  const { name, value } = event.target;

  const updatedFormData = {
    ...formData,
    [name]: value,
  };

  setFormData(updatedFormData);

  validateForm(updatedFormData);

};


const handleSubmit = (event) => {

  event.preventDefault();

  if (!validateForm(formData)) {
    return;
  }

  let updatedExpenses;

if (editingExpense) {

  updatedExpenses = expenses.map((expense) =>

    expense.id === editingExpense.id
      ? {
          ...formData,
          id: editingExpense.id,
          amount: Number(formData.amount),
        }
      : expense

  );

} else {

  const expense = {
    id: Date.now(),
    ...formData,
    amount: Number(formData.amount),
  };

  updatedExpenses = [
    expense,
    ...expenses,
  ];

}

  setExpenses(updatedExpenses);
  setEditingExpense(null);

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
    <form ref={formRef} onSubmit={handleSubmit}>

      <h2>
      {editingExpense
      ? "Update Expense"
      : "Add Expense"}
      </h2>

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

      {errors.category && (
  <p className="error">
    {errors.category}
  </p>
)}

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
       {editingExpense
        ? "Update Expense"
        : "Add Expense"}
      </button>
      {editingExpense && (
   
   <button
    type="button"
    onClick={() => {

      setEditingExpense(null);

      setFormData({
        description: "",
        amount: "",
        category: "",
        date: "",
        note: "",
      });

      setErrors({
        description: "",
        amount: "",
        category: "",
        date: "",
      });

    }}
  >
    Cancel
  </button>
)}

    </form>
  );
}

export default ExpenseForm;