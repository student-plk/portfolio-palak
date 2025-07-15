import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  stack: string[];
  gradient: string;
  image: string;
  link?: string;
  codeLink?: string;
}

interface CaseStudy {
  title: string;
  description: string;
  stack: string[];
  gradient: string;
  image: string;
  link?: string;
  codeLink?: string;
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
      title: "AI-Powered News Generator",
      description: "Intelligent news generation system using Agentic AI and Gemini AI with Streamlit interface for automated content creation and curation.",
      stack: ["Agentic AI", "Gemini AI", "Streamlit", "Python", "News Generation"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_agenticai-geminiai-streamlit-activity-7350200982393319424-sVU9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "JavaScript Web Integration",
      description: "Advanced web development project featuring geolocation services and modern JavaScript integration techniques.",
      stack: ["JavaScript", "Web Development", "Geolocation", "HTML/CSS"],
      gradient: "from-violet-600 to-purple-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/javascript_task"
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
      title: "EVENT PASS - Music Festival Booking",
      description: "Interactive music festival ticket booking webapp with real-time availability, pricing, and seamless booking experience.",
      stack: ["Streamlit", "Python", "WebApp", "Event Booking", "UI/UX"],
      gradient: "from-pink-600 to-rose-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_python-streamlit-webappdevelopment-activity-7342855025926230016-qENi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Python WhatsApp Automation",
      description: "Real-time messaging automation using PyWhatKit library for both individual contacts and group messaging with time-based execution.",
      stack: ["Python", "PyWhatKit", "WhatsApp Bot", "Automation", "Real-time"],
      gradient: "from-green-600 to-emerald-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-whatsappbot-activity-7343508397134073856-hYj_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Multi-Platform Python Automation Suite",
      description: "Comprehensive automation portfolio including SMS alerts, automated phone calls, Instagram posting bot, and email automation using Python APIs.",
      stack: ["Python", "Twilio", "SMS", "Instagram Bot", "Email Automation"],
      gradient: "from-teal-600 to-green-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/python_task"
    },
    {
      title: "DevOps Automation Pipeline",
      description: "Comprehensive CI/CD pipeline implementation with Docker containerization, automated testing, and deployment strategies for modern DevOps practices.",
      stack: ["Docker", "CI/CD", "DevOps", "Automation", "Pipeline"],
      gradient: "from-emerald-600 to-teal-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_cicdpipeline-devops-docker-activity-7349672612215554048-h-jR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/Devops_project1"
    },
    {
      title: "Apache Web Server in Docker",
      description: "Containerized Apache web server deployment with Docker for scalable and portable web hosting solutions.",
      stack: ["Apache Server", "Docker", "Web Hosting", "Containerization", "DevOps"],
      gradient: "from-cyan-600 to-blue-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_apacheserver-dockerdeployment-webhosting-activity-7348256254839926785-Oz0c?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "IBM Cloud Kubernetes Case Study",
      description: "Enterprise-level case study on IBM Cloud Kubernetes implementation with security analysis and best practices for cloud-native applications.",
      stack: ["IBM Cloud", "Kubernetes", "Case Study", "Cloud Security", "DevOps"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_casestudy-kubernetes-ibmcloud-activity-7347498955703775232--TaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Python Menu-Based RHEL Project",
      description: "Interactive menu-driven system for RHEL administration with root access capabilities and system management features.",
      stack: ["Python", "RHEL", "Linux Admin", "Root Access", "System Management"],
      gradient: "from-yellow-600 to-orange-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_pythonlearning-rhel-rootaccess-activity-7342642753207427073-sIgG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/Python_project"
    },
    {
      title: "AI-Powered Disease Assistant WebApp",
      description: "Intelligent disease prediction system using machine learning models with 95% accuracy for early disease detection and healthcare assistance.",
      stack: ["Machine Learning", "Python", "WebApp", "Healthcare AI", "95% Accuracy"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_internshipjourney-project3-ai-activity-7345183466516271105-9l4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/Python_project"
    }
  ];

  // Add your case studies here
  const caseStudies: CaseStudy[] = [
    // Example case study (replace or add more as needed)
    {
      title: "Sample Case Study Title",
      description: "Description of the case study goes here. You can add more case studies to this array.",
      stack: ["Tech 1", "Tech 2", "Tech 3"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "#",
      codeLink: "#"
    },
    {
      title: "Amazon CloudSearch Case Study",
      description: "Comprehensive case study on how Amazon CloudSearch transformed an e-commerce platform's search capabilities with 10x performance improvement.",
      stack: ["AWS", "CloudSearch", "Case Study", "E-commerce", "Search Engine"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_amazoncloudsearch-awssearch-cloudcomputing-activity-7349293884021051393-OitI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "McDonald's Digital Transformation Case Study",
      description: "Comprehensive analysis of McDonald's digital transformation journey using AWS cloud services and modern technology solutions.",
      stack: ["AWS", "Digital Transformation", "Case Study", "Cloud Architecture", "Enterprise"],
      gradient: "from-amber-600 to-orange-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_case-study-mcdonalds-digital-transformation-activity-7349123414147612674-s7DG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "IBM Cloud Kubernetes Case Study",
      description: "Enterprise-level case study on IBM Cloud Kubernetes implementation with security analysis and best practices for cloud-native applications.",
      stack: ["IBM Cloud", "Kubernetes", "Case Study", "Cloud Security", "DevOps"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_casestudy-kubernetes-ibmcloud-activity-7347498955703775232--TaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Python Menu-Based RHEL Project",
      description: "Interactive menu-driven system for RHEL administration with root access capabilities and system management features.",
      stack: ["Python", "RHEL", "Linux Admin", "Root Access", "System Management"],
      gradient: "from-yellow-600 to-orange-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_pythonlearning-rhel-rootaccess-activity-7342642753207427073-sIgG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/Python_project"
    },
    {
      title: "AI-Powered Disease Assistant WebApp",
      description: "Intelligent disease prediction system using machine learning models with 95% accuracy for early disease detection and healthcare assistance.",
      stack: ["Machine Learning", "Python", "WebApp", "Healthcare AI", "95% Accuracy"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_internshipjourney-project3-ai-activity-7345183466516271105-9l4s?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "https://github.com/student-plk/Python_project"
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
              className={`scroll-reveal professional-card overflow-hidden transition-all duration-300 border border-[1.5px] rounded-xl ${[
                'border-violet-500',
                'border-blue-500',
                'border-emerald-500',
                'border-pink-500',
                'border-green-500',
                'border-teal-500',
                'border-cyan-500',
                'border-amber-500',
                'border-indigo-500',
                'border-orange-500',
                'border-red-500',
              ][index % 11]}`}
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
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  ) : (
                    <button className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </button>
                  )}
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
      {/* Case Study Section */}
      <section id="case-study" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
              Case Study
            </h2>
            <div className="professional-divider mx-auto max-w-xs"></div>
          </div>
          {/* Case Study Cards */}
          <div className="symmetric-grid-3">
            {caseStudies.length === 0 ? (
              <div className="text-center text-gray-600 dark:text-gray-300 text-lg w-full col-span-3">
                <p>Case studies will be added here soon. Stay tuned!</p>
              </div>
            ) : (
              caseStudies.map((study, index) => (
                <div
                  key={index}
                  className={`scroll-reveal professional-card overflow-hidden transition-all duration-300 border border-[1.5px] rounded-xl ${[
                    'border-violet-500',
                    'border-blue-500',
                    'border-emerald-500',
                    'border-pink-500',
                    'border-green-500',
                    'border-teal-500',
                    'border-cyan-500',
                    'border-amber-500',
                    'border-indigo-500',
                    'border-orange-500',
                    'border-red-500',
                  ][index % 11]}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${study.gradient} opacity-80`}></div>
                    <div className="absolute top-4 right-4">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {study.codeLink ? (
                        <a
                          href={study.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      ) : (
                        <button className="professional-btn flex items-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600" disabled>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </button>
                      )}
                      {study.link ? (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="professional-btn flex items-center bg-violet-600 text-white hover:bg-violet-700"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Case Study
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
              ))
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;