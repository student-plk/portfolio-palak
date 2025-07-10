import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  gradient: string;
  image: string;
  link?: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = projectsRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el: Element) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "JavaScript Web Integration",
      description: "Advanced web development project featuring geolocation services and modern JavaScript integration techniques.",
      stack: ["JavaScript", "Web Development", "Geolocation", "HTML/CSS"],
      gradient: "from-violet-600 to-purple-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Agentic AI with Twilio & LangChain",
      description: "Voice automation system using Twilio and LangChain for intelligent conversational AI with real-time voice processing capabilities.",
      stack: ["Twilio", "LangChain", "Python", "Voice AI", "Automation"],
      gradient: "from-indigo-600 to-blue-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_twilio-langchain-voiceautomation-activity-7347595930780495872--pjA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Full Stack Web Application",
      description: "A comprehensive web application built with modern technologies including React, Node.js, and database integration.",
      stack: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "from-blue-600 to-cyan-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Python WhatsApp Automation",
      description: "Automated WhatsApp messaging system built with Python for efficient communication and task automation.",
      stack: ["Python", "WhatsApp API", "Automation", "Selenium"],
      gradient: "from-green-600 to-emerald-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "DevOps Automation Pipeline",
      description: "Automated CI/CD pipeline implementation using modern DevOps tools and practices for seamless deployment.",
      stack: ["Docker", "Jenkins", "Kubernetes", "Git"],
      gradient: "from-emerald-600 to-teal-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "AI-Powered Disease Assistant WebApp",
      description: "Intelligent disease prediction system using machine learning models with 95% accuracy for early disease detection and healthcare assistance.",
      stack: ["Machine Learning", "Python", "WebApp", "Healthcare AI", "95% Accuracy"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_internshipjourney-project3-ai-activity-7345183466516271105-9l4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
            Projects
          </h2>
          <div className="professional-divider mx-auto max-w-xs"></div>
        </div>

        <div className="symmetric-grid-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`scroll-reveal professional-card overflow-hidden transition-all duration-300 border-2 projects-border-${index}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </button>
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional-btn flex items-center bg-violet-600 text-white hover:bg-violet-700"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  ) : (
                    <button className="professional-btn flex items-center bg-violet-600 text-white hover:bg-violet-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;