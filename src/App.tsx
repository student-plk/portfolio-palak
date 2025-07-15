import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, ExternalLink, Code } from 'lucide-react';
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

  // Add a tasks array for the Task section
  const tasks = [
    {
      title: "JavaScript Web Integration",
      description: "Advanced web development project featuring geolocation services and modern JavaScript integration techniques.",
      stack: ["JavaScript", "Web Development", "Geolocation", "HTML/CSS"],
      gradient: "from-violet-600 to-purple-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/javascript_task"
    }
  ];

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
          {/* Task Section */}
          <section id="task" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
                  Task
                </h2>
                <div className="professional-divider mx-auto max-w-xs"></div>
              </div>
              <div className="flex justify-center">
                <div className="scroll-reveal professional-card overflow-hidden transition-all duration-300 border border-[1.5px] rounded-xl border-violet-500" style={{ width: '350px' }}>
                  <div className="relative overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="JavaScript Web Integration"
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-80"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      JavaScript Web Integration
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Advanced web development project featuring geolocation services and modern JavaScript integration techniques.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium">JavaScript</span>
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium">Web Development</span>
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium">Geolocation</span>
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium">HTML/CSS</span>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/student-plk/javascript_task"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        Code
                      </a>
                      <a
                        href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center bg-violet-600 text-white hover:bg-violet-700"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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