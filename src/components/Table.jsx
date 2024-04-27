// Table.js
import React from 'react';
import './Table.css';

const Table = ({ transactions, searchTerm }) => {
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.category}</td> {/* Display the category value */}
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
