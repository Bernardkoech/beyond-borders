import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Basic Plan",
      price: "$9.99",
      features: [
        "Access to all streaming content",
        "Standard video quality",
        "Single device streaming",
      ],
    },
    {
      title: "Standard Plan",
      price: "$14.99",
      features: [
        "Access to all streaming content",
        "HD video quality",
        "Two devices streaming simultaneously",
        "Priority customer support",
      ],
    },
    {
      title: "Premium Plan",
      price: "$19.99",
      features: [
        "Access to all streaming content",
        "Ultra HD video quality",
        "Four devices streaming simultaneously",
        "Priority customer support",
        "Offline viewing",
      ],
    },
  ];

  return (
    <div className="pricing-page">
      <h2>Choose Your Plan</h2>
      <div className="pricing-container">
        {pricingOptions.map((option, index) => (
          <div key={index} className="pricing-option">
            <h3>{option.title}</h3>
            <p className="price">{option.price}</p>
            <ul>
              {option.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
