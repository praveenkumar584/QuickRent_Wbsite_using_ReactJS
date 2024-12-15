import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Rent Gadgets at Affordable Prices</h1>
        <p>Explore our wide range of gadgets, tailored for your needs.</p>
        <button className="btn-cta">Explore Rentals</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
