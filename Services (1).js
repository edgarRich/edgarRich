// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service">
        <h3>Getting Loans</h3>
        <p>We provide easy access to loans for individuals and businesses.</p>
      </div>
      <div className="service">
        <h3>Loaning Others</h3>
        <p>Facilitate peer-to-peer lending to help others in need.</p>
      </div>
      <div className="service">
        <h3>Saving Money</h3>
        <p>Encourage savings with attractive interest rates.</p>
      </div>
      <div className="service">
        <h3>Foreign Exchange Rates</h3>
        <p>Check live foreign exchange rates <a href="https://www.x-rates.com" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </div>
      <div className="service">
        <h3>Crypto Exchange Rates</h3>
        <p>Check live crypto exchange rates <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </div>
    </section>
  );
};

export default Services;