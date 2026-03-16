import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="app relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
