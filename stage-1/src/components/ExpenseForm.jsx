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

}, []);

...

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
