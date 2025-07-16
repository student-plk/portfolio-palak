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
          {/* AWS 86 Services Case Study Card */}
          <section id="aws-case-study" className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-8">
                <div
                  className="scroll-reveal professional-card overflow-hidden transition-all duration-300 border border-[1.5px] rounded-xl border-yellow-500"
                  style={{ width: '350px' }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                      alt="86 AWS Services Case Study"
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-80"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      86 AWS Services: Deep Understanding Case Study
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      An in-depth learning journey through 86 core AWS services, covering compute, storage, networking, machine learning, DevOps, and security. Focused on real-world applications and foundational knowledge for hands-on implementation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">AWS</span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">Cloud Computing</span>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">Case Study</span>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/posts/palak-saini-7868b921b_aws-services-activity-7350633946767835137-Iseg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Skills />
          
          <Contact />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

export default App;