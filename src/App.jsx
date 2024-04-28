import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <header>
        <h1 className='starter'>The Royal Bank Of Flatiron</h1>
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
