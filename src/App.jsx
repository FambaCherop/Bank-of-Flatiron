// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const sampleTransactions = [
    {
      date: "2024/04/25",
      category: "Groceries",
      description: "Weekly grocery shopping",
      amount: 50.00
    },
    {
      date: "2024/04/24",
      category: "Utilities",
      description: "Electricity bill",
      amount: 75.00
    },
    {
      date: "2024/04/23",
      category: "Dining Out",
      description: "Lunch with friends",
      amount: 30.00
    }
  ];

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Concatenate sampleTransactions with transactions
  const allTransactions = [...sampleTransactions, ...transactions];

  return (
    <div className="container">
      <header>
        <h1>Welcome to the Bank of Flatiron</h1>
      </header>
      <div className="content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Form addTransaction={addTransaction} />
        {/* Pass the concatenated array to the Table component */}
        <Table transactions={allTransactions} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
