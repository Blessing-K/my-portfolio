import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import { initScrollReveal } from "./scrollReveal";

function App() {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => cleanup && cleanup();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
