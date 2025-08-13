import { useEffect, useRef } from 'react';
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

interface Theory {
  title: string;
  description: string;
  stack: string[];
  gradient: string;
  image: string;
  link: string;
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

  // Projects data
  const projects: Project[] = [
    {
      title: "Firebase Authentication App",
      description: "A secure authentication system built with Firebase, featuring email/password and social media login options with real-time user management.",
      stack: ["Firebase", "Authentication", "React", "Web App", "Security"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_firebase-authentication-appdevelopment-activity-7359237766687137792-hZtC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "#"
    },
    {
      title: "MyBuddy - Personal AI Chatbot",
      description: "An intelligent AI chatbot assistant that helps with portfolio management and provides personalized assistance using natural language processing.",
      stack: ["AI Chatbot", "Natural Language Processing", "Python", "Machine Learning", "Portfolio Assistant"],
      gradient: "from-purple-500 to-indigo-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_mybuddy-aichatbot-portfolioassistant-activity-7355896121065455618-BsAo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4",
      codeLink: "#"
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

  // Case Studies data
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
    }
  ];

  // Theories data
  const theories: Theory[] = [
    {
      title: "Tuple vs List in Python",
      description: "Comprehensive comparison between tuples and lists in Python, covering their differences, use cases, performance implications, and best practices for choosing between them.",
      stack: ["Python", "Data Structures", "Tuples", "Lists", "Performance"],
      gradient: "from-amber-500 to-orange-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_programmingtips-tuplevslist-pythonlearning-activity-7351981632142176270-Ewdi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "AWS Services Deep Dive",
      description: "Comprehensive theoretical understanding of 84+ AWS services including compute, storage, networking, security, and machine learning services.",
      stack: ["AWS", "Cloud Computing", "Architecture", "Best Practices", "Security"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_aws-services-activity-7350633946767835137-Iseg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd8DBYBYlk5UNY5NMFs0iIe53dWMgIfAn4"
    },
    {
      title: "Kubernetes Architecture",
      description: "In-depth theoretical knowledge of Kubernetes architecture, components, and networking model for container orchestration at scale.",
      stack: ["Kubernetes", "Containers", "Orchestration", "Cloud Native", "DevOps"],
      gradient: "from-blue-400 to-cyan-600",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "https://www.linkedin.com/posts/palak-saini-7868b921b_kubernetes-architecture-activity-7350633946767835137-Iseg?utm_source=share&utm_medium=member_desktop"
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      View on LinkedIn
                    </a>
                  )}
                  {project.codeLink && project.codeLink !== "#" && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Case Studies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className="scroll-reveal bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} opacity-80`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={caseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    Read Case Study
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theory Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Theory & Concepts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theories.map((theory, index) => (
              <div
                key={index}
                className="scroll-reveal bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={theory.image}
                    alt={theory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${theory.gradient} opacity-80`}></div>
                  <div className="absolute top-4 right-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {theory.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {theory.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {theory.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={theory.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0a66c2] hover:bg-[#004182] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    View Theory
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
