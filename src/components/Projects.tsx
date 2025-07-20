import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, Code, Linkedin } from 'lucide-react';

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
      title: "Web Scrapping Project",
      description: "AI-Powered News Generator. Intelligent news generation system using Agentic AI and Gemini AI with Streamlit interface for automated content creation and curation.",
      stack: ["Agentic AI", "Gemini AI", "Streamlit", "Python", "News Generation"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_agenticai-geminiai-streamlit-activity-7350200982393319424-sVU9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
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
      title: "EVENT PASS - Music Festival Booking",
      description: "Interactive music festival ticket booking webapp with real-time availability, pricing, and seamless booking experience.",
      stack: ["Streamlit", "Python", "WebApp", "Event Booking", "UI/UX"],
      gradient: "from-pink-600 to-rose-600",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_python-streamlit-webappdevelopment-activity-7342855025926230016-qENi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
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
    {
      title: "86 AWS Services Deep Understanding Case Study",
      description: "Comprehensive study of 84 core AWS services covering compute, storage, networking, machine learning, DevOps, and security. Deep theoretical knowledge foundation for practical cloud implementation.",
      stack: ["AWS", "Cloud Computing", "84 Services", "EC2", "Lambda", "S3", "IAM", "VPC", "DynamoDB"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_aws-services-activity-7350633946767835137-Iseg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
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
      title: "Amazon CloudSearch Case Study",
      description: "Comprehensive case study on how Amazon CloudSearch transformed an e-commerce platform's search capabilities with 10x performance improvement.",
      stack: ["AWS", "CloudSearch", "Case Study", "E-commerce", "Search Engine"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_amazoncloudsearch-awssearch-cloudcomputing-activity-7349293884021051393-OitI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
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
                
                <div className="flex space-x-4 flex-col gap-2">
                  {(project.codeLink && (project.stack.includes('JavaScript') || index >= projects.length - 2)) ? (
                    <>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </>
                  ) : project.codeLink ? (
                    <>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </>
                  ) : (
                    <button className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600" disabled>
                      <Github className="h-4 w-4" />
                      View on GitHub
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
      {/* Major Project Section */}
      <section id="major-project" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
              Major Project
            </h2>
            <div className="professional-divider mx-auto max-w-xs"></div>
          </div>
          <div className="flex justify-center">
            <div
              className={`scroll-reveal professional-card overflow-hidden transition-all duration-300 border border-[1.5px] rounded-xl border-emerald-500`}
              style={{ width: '350px', animationDelay: `0ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="DevOps Automation Pipeline"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-80"></div>
                <div className="absolute top-4 right-4">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8z" /></svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  DevOps Automation Pipeline
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Comprehensive CI/CD pipeline implementation with Docker containerization, automated testing, and deployment strategies for modern DevOps practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Docker", "CI/CD", "DevOps", "Automation", "Pipeline"].map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/student-plk/Devops_project1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/palak-saini-7868b921b_cicdpipeline-devops-docker-activity-7349672612215554048-h-jR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="professional-btn flex items-center bg-violet-600 text-white hover:bg-violet-700"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6M15 10l-3-3-3 3m3-3v12" /></svg>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Task Section */}
      <section id="task" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
              Python Automation
            </h2>
            <div className="professional-divider mx-auto max-w-xs"></div>
          </div>
          <div className="space-y-8">
            {/* Card 1: Send WhatsApp Message Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send WhatsApp Message Using Python</h3>
                <p className="text-gray-300 text-base">Automate sending personal WhatsApp messages using Python and the PyWhatKit library for real-time communication.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-whatsappbot-activity-7343508397134073856-hYj_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
              </div>
            </div>
            {/* Card 2: Send WhatsApp Group Message Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send WhatsApp Group Message Using Python</h3>
                <p className="text-gray-300 text-base">Automate sending WhatsApp group messages using Python and the PyWhatKit library for efficient group communication.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-whatsappbot-activity-7343508397134073856-hYj_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
              </div>
            </div>
            {/* Card 3: Send SMS Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send SMS Using Python</h3>
                <p className="text-gray-300 text-base">Use Python scripts and APIs to send real-time SMS alerts and reminders for communication automation.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/python_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
            {/* Card 4: Make Call Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Make Call Using Python</h3>
                <p className="text-gray-300 text-base">Trigger automated phone calls using Python and telephony APIs for voice communication automation.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/python_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
            {/* Card 5: Send Email Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send Email Using Python</h3>
                <p className="text-gray-300 text-base">Automate sending emails using Python scripts and email APIs for alerts, updates, and bulk mailing.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/python_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
            {/* Card 6: Post on Instagram Using Python */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg" >
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Post on Instagram Using Python</h3>
                <p className="text-gray-300 text-base">Automate posting images and captions to Instagram using Python and the Instabot library for social media automation.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_python-automation-projectlearning-activity-7347178275963568128-6zM1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/python_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* JavaScript Automation Section */}
      <section id="javascript-automation" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
              JavaScript Automation
            </h2>
            <div className="professional-divider mx-auto max-w-xs"></div>
          </div>
          <div className="space-y-8">
            {/* Card 1: Send WhatsApp Message Using JavaScript */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send WhatsApp Message Using JS</h3>
                <p className="text-gray-300 text-base">Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JavaScript.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 2: Show My Live Location */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Show My Live Location using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript geolocation API to get and display the user's current location.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 3: Find Nearby Grocery Stores */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Find Nearby Grocery Stores using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript and location services to find and display nearby grocery stores.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 4: Navigate Location */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Navigate Location using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript to navigate to a specific location or address using web APIs or mapping services.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 5: Capture Photo Using Webcam */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Capture Photo Using Webcam using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript and the MediaDevices API to capture a photo using the user's webcam and display or save the image.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 6: Record Video Directly from Browser */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Record Video Directly from Browser using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript and the MediaRecorder API to record video directly from the user's browser using their webcam.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 7: Send Emails Using JS */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Send Emails Using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript and email APIs (like EmailJS) to send emails directly from the browser or a web application.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Card 8: Capture Photo and Send Email Using JS */}
            <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-lg">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Capture Photo and Send Email Using JS</h3>
                <p className="text-gray-300 text-base">Use JavaScript to capture a photo using the webcam and send it as an email attachment using an email API.</p>
              </div>
              <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-8">
                <a
                  href="https://www.linkedin.com/posts/palak-saini-7868b921b_javascript-webdevelopment-geolocation-activity-7348235061013483520-4aKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a66c2] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#004182] transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  View on LinkedIn
                </a>
                <a
                  href="https://github.com/student-plk/javascript_task"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8.59.11.8-.26.8-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.64-2.81 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.81.58C20.56 20.87 24 16.84 24 12c0-5.52-4.48-10-10-10z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" // Match project card image
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
                          className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                        </a>
                      ) : (
                        <button className="professional-btn flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600" disabled>
                          <Github className="h-4 w-4" />
                          View on GitHub
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