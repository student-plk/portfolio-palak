import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 dark:bg-gray-900 transition-colors duration-300`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-pulse tracking-wide text-center">
          This Is Palak's Portfolio
        </h1>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="relative">
        {/* Floating blobs background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-blob blob-1"></div>
          <div className="floating-blob blob-2"></div>
          <div className="floating-blob blob-3"></div>
        </div>

        {/* Theme toggle button */}
        {/* Removed theme toggle button as per user request */}

        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          
          <Contact />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

export default App;