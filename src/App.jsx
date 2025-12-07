import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] to-[#0d0d18] text-white relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 
                bg-[linear-gradient(#ffffff09_1px,transparent_1px),linear-gradient(90deg,#ffffff09_1px,transparent_1px)]
                bg-[size:40px_40px] opacity-20"
      ></div>

      {/* Cyberpunk glow top-left */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-96 h-96 
                bg-cyber-blue/20 blur-3xl rounded-full"
      ></div>

      {/* Cyberpunk glow bottom-right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] 
                bg-cyber-purple/20 blur-3xl rounded-full"
      ></div>

      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
