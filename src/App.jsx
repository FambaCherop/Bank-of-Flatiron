
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
      date: "06/12/2018",
      category: "Groceries",
      description: "Weekly grocery shopping",
      amount: 50.00
    },
    {
      id: 1,
      date: "06/11/2019",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000
    },
    {
    
      date: "06/07/2019",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: 10.55
    },
    {
      
      date: "06/12/2020",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: 1055
    },
    {
    
      date: "06/12/2021",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: 2499
    },
    {
      
      date: "06/12/2022",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 875
    },
    {
      date: "06/12/2023",
      category: "Groceries",
      description: "Weekly grocery shopping",
      amount: 5000
    },
    {
      date: "06/02/2024",
      category: "Utilities",
      description: "Electricity bill",
      amount: 7500
    },
    {
      date: "06/12/2024",
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
        <h1 className='starter'>The Royal Bank Of Flatiron</h1>
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
