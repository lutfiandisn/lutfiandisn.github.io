import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(): React.ReactElement {
  return (
    <div className="size-full bg-slate-950 text-slate-200">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />

      <footer className="text-center text-sm text-slate-400 py-8 border-t border-slate-800/50">
        Made with ❤️ © {new Date().getFullYear()} Lutfiandi Satriawan Nugraha
      </footer>
    </div>
  );
}

export default App;
