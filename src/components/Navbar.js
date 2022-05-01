import "./Navbar.css";
import name from "../public/name.png";
import handshake from "../public/handshake.gif";
import React from "react";

export default function Navbar() {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="hands">
          <img src={handshake} style={{ maxWidth: 50 }} />
        </div>
        <a href="#about" className="nav-name">
          <img src={name} al="Emma Saurus" />
        </a>
        
        <a href="#skills" className="nav-box">
          Skills
        </a>
        
        <a href="#projects" className="nav-box">
          Projects
        </a>
        <a href="#studies" className="nav-box">
          Studies
        </a>
        <a href="#roles" className="nav-box">
          Roles
        </a>
        <a
          href="#contact"
          className="nav-box"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
