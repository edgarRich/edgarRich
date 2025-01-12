// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to STK Financial Inclusion System</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
