// src/components/Services.js
import React from 'react';

const Services = () => {
  const sectionId = "services";
  const services = [
    {
      title: "Getting Loans",
      description: "We provide easy access to loans for individuals and businesses."
    },
    {
      title: "Loaning Others",
      description: "Facilitate peer-to-peer lending to help others in need."
    },
    {
      title: "Saving Money",
      description: "Encourage savings with attractive interest rates."
    },
    {
      title: "Foreign Exchange Rates",
      description: (
        <>
          Check live foreign exchange rates <a href="https://www.x-rates.com" target="_blank" rel="noopener noreferrer">here</a>.
        </>
      )
    },
    {
      title: "Crypto Exchange Rates",
      description: (
        <>
          Check live crypto exchange rates <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">here</a>.
        </>
      )
    }
  ];

  return (
    <section id={sectionId}>
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <div className="service" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
