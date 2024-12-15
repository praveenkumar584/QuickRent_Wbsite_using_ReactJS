import React from "react";
import "./Gadgets.css";
import laptopImg from "../assets/laptop.png";
import cameraImg from "../assets/camera.png";
import consoleImg from "../assets/gaming-console.png";

function Gadgets() {
  const gadgets = [
    { name: "Laptop", price: "$50/day", image: laptopImg },
    { name: "Camera", price: "$30/day", image: cameraImg },
    { name: "Gaming Console", price: "$40/day", image: consoleImg },
  ];

  return (
    <section id="gadgets" className="gadgets">
      <h2>Available Gadgets</h2>
      <div className="gadget-list">
        {gadgets.map((gadget, index) => (
          <div key={index} className="gadget">
            <img src={gadget.image} alt={gadget.name} />
            <h3>{gadget.name}</h3>
            <p>{gadget.price}</p>
            <button className="btn">Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gadgets;
