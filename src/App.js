import React from 'react';
// import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ParticlesBackground /> */}
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
