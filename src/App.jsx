import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center text-sm text-gray-500 mt-12 pb-6">
        © {new Date().getFullYear()} Lutfiandi Satriawan Nugraha
        <br />
        <span className="text-xs text-gray-400">
          Made with ❤️ using{" "}
          <span className="font-semibold text-indigo-500">React.js</span> &amp;
          Vite
        </span>
      </footer>
    </div>
  );
}

export default App