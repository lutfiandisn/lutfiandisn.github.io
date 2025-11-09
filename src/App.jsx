import React, { lazy } from "react";
import LazySection from "./components/LazySection";
import "./App.css";

// Lazy import each section
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const TechStack = lazy(() => import("./components/TechStack"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <LazySection component={Hero} />
      <LazySection component={About} />
      <LazySection component={TechStack} />
      <LazySection component={Experience} />
      <LazySection component={Projects} />
      <LazySection component={Contact} />

      <footer className="text-center text-sm text-gray-500 mt-12 pb-6">
        Made with ❤️ © {new Date().getFullYear()} Lutfiandi Satriawan Nugraha
      </footer>
    </div>
  );
}

export default App;
