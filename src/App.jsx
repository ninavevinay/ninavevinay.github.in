import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Background from "./components/Background";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-white">
     
      <Background />
      
      <Cursor />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <div className="relative z-10">
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Education />
            <Certificates />
            <Achievements />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
