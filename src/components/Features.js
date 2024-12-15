import React from "react";
import "./Features.css";

function Features() {
  const features = [
    { title: "Wide Variety", description: "Laptops, Cameras, Consoles, and more." },
    { title: "Affordable Pricing", description: "Plans to suit every budget." },
    { title: "Quick Delivery", description: "Get gadgets delivered in no time!" },
  ];

  return (
    <section id="features" className="features">
      <h2>Platform Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
