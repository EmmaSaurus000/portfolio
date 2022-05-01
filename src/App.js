import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Roles from "./components/Roles";
import Tagline from "./components/Tagline";
import Credits from "./components/Credits";
import Studies from "./components/Studies";

function App() {
  return (
      <main>
        <Navbar />
        <Tagline />
        <About />
        <Skills />
        <Projects />
        <Studies />
        <Roles />
        <Contact />
        <Credits />
      </main>
  );
}

export default App;
