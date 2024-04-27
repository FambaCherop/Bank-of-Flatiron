

import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import SearchBar from './components/SearchBar';



import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to the Bank of Flatiron</h1>
      </header>
      <div className="content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Form addTransaction={addTransaction} />
        <Table transactions={transactions} searchTerm={searchTerm} />
       
      </div>
    </div>
  );
}

export default App;