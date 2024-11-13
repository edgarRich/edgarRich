// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.amount} - {transaction.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;