import React, { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail, Flower } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <Flower className="h-8 w-8 text-violet-400 mr-2 group-hover:animate-spin" />
              <h1 className="text-xl font-bold text-white hover:text-violet-400 transition-colors">
                Palak Saini
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-violet-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-violet-400 hover:bg-gray-700 rounded-md w-full text-left transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Sidebar Social Icons */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-4">
        <a
          href="https://www.linkedin.com/in/palak-saini-7868b921b"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-sky-500 transition-all duration-300 hover:scale-110 blink-icon"
        >
          <Linkedin className="h-6 w-6 text-white group-hover:animate-spin" />
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </a>
        
        <a
          href="https://github.com/student-plk"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-sky-500 transition-all duration-300 hover:scale-110 blink-icon"
        >
          <Github className="h-6 w-6 text-white group-hover:animate-spin" />
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            GitHub
          </span>
        </a>
        
        <a
          href="mailto:palaks2598@gmail.com"
          className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-blue-500 transition-all duration-300 hover:scale-110 blink-icon"
        >
          <Mail className="h-6 w-6 text-white group-hover:animate-spin" />
          <span className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Email
          </span>
        </a>
      </div>
    </>
  );
};

export default Header;