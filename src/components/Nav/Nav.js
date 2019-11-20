import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <section className="nav-bar-area">
      <label htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <nav className="nav-bar">
        <a href="#bio-section">About Me</a>
        <a href="#portfolio-section">Projects</a>
        <a href="#contact-section">Contact Information</a>
      </nav>
    </section>
  );
}
