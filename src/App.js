import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gadgets from "./components/Gadgets";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Gadgets />
      <Contact />
    </div>
  );
}

export default App;
