// Dashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);   

      }
    };

    fetchData();   

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