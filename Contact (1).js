// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a network request
    setTimeout(() => {
      setResponseMessage("Thank you for your message!");
      setIsLoading(false);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
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
        
        <button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send Message'}</button>
      </form>
      {responseMessage && <div id="responseMessage" aria-live="polite">{responseMessage}</div>}
    </section>
  );
};

export default Contact;
