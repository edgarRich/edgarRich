// src/components/STKPrompt.js
import React, { useState } from 'react';
import axios from 'axios';

const STKPrompt = () => {
  const [amount, setAmount] = useState(0);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSTKPrompt = async () => {
    try {
      const response = await axios.post('http://localhost:3000/stk/prompt', { amount });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setResponseMessage("An error occurred while initiating the STK prompt.");
    }
  };

  return (
    <div>
      <h1>STK Prompt</h1>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleSTKPrompt}>Initiate STK Prompt</button>
      {responseMessage && <div>{responseMessage}</div>}
    </div>
  );
};

export default STKPrompt;