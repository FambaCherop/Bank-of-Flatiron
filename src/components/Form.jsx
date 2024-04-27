// Form.js
import React, { useState } from 'react';
import './Form.css';

const Form = ({ addTransaction }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      date: new Date().toLocaleDateString(),
      category, // Include the category value in the newTransaction object
      description,
      amount,
    };

    addTransaction(newTransaction);

    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Form;

