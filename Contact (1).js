// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to your backend
    setResponseMessage("Thank you for your message!");
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Our Team:</p>
      <ul>
        <li>Edgar Musau</li>
        <li>Peter Njihia</li>
        <li>Matthews Amsterdam</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      {responseMessage && <div id="responseMessage">{responseMessage}</div>}
    </section>
  );
};

export default Contact;