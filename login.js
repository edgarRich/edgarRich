// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    pin: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.phone || !formData.pin) {
      setError('Please fill in all fields.');
      return;
    }

    // Send data to backend
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful login
    })
    .catch(error => {
      setError('Login failed: ' + error.message);
    });
  };
  
  // Simulate a successful login
    document.getElementById('message').innerText = 'Login successful! Redirecting...';
    setTimeout(() => {
        // Redirect to another page or perform further actions
        window.location.href = 'dashboard.html'; // Change to your desired page
    }, 2000);
});