import React, { useEffect, useRef } from 'react';
import { ChevronDown, Download, Linkedin, Github, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated background particles
    const createParticles = () => {
      const container = document.querySelector('.animated-background');
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      <div className="animated-background"></div>
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 gradient-bg"
      >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I am{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Palak Saini
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Tech Intern at{' '}
                <span className="text-violet-600 dark:text-violet-400">
                  LinuxWorld Informatics Pvt Ltd
                </span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                Enthusiastic about Full Stack Development, DevOps, Machine Learning, and Agentic AI. 
                Passionate about building innovative solutions through automation and cutting-edge technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Removed Download Resume button */}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 border-2 border-violet-600 text-violet-600 dark:text-violet-400 font-medium rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right content - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="professional-frame flower-hover-effect border-2 border-violet-400 rounded-2xl transition-shadow duration-300">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={profileImg}
                  alt="Palak Saini"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 z-10 relative"
                  onMouseEnter={() => {
                    const flower = document.querySelector('.flower-effect');
                    if (flower && !flower.classList.contains('animate-flower')) {
                      flower.classList.add('animate-flower');
                      setTimeout(() => flower.classList.remove('animate-flower'), 1200);
                    }
                  }}
                />
                {/* Flower effect container */}
                <div className="flower-effect absolute inset-0 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center items-center mt-16 space-x-8">
          <div className="social-icon-container">
            <a
              href="https://www.linkedin.com/in/palak-saini-7868b921b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="h-8 w-8 text-white" />
            </a>
            <div className="social-label">LinkedIn</div>
          </div>

          <div className="social-icon-container">
            <a
              href="mailto:palaks2598@gmail.com"
              className="social-icon"
            >
              <Mail className="h-8 w-8 text-white" />
            </a>
            <div className="social-label">Email</div>
          </div>

          <div className="social-icon-container">
            <a
              href="https://github.com/student-plk"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="h-8 w-8 text-white" />
            </a>
            <div className="social-label">GitHub</div>
          </div>
        </div>

        {/* Removed scroll hint from the bottom of the hero section */}
      </div>
    </section>
    </>
  );
};

export default Hero;