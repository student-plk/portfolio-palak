import React, { useEffect, useRef } from 'react';
import { Container, GitBranch, Settings, Truck } from 'lucide-react';

const Tools = () => {
  const toolsRef = useRef<HTMLDivElement>(null);

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

    const elements = toolsRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      name: "Kubernetes",
      icon: Container,
      description: "Container orchestration and management",
      gradient: "from-blue-600 to-blue-800",
      size: "large"
    },
    {
      name: "Git/GitHub",
      icon: GitBranch,
      description: "Version control and collaboration",
      gradient: "from-gray-600 to-gray-800",
      size: "medium"
    },
    {
      name: "Docker",
      icon: Container,
      description: "Containerization platform",
      gradient: "from-cyan-600 to-cyan-800",
      size: "medium"
    },
    {
      name: "Jenkins",
      icon: Settings,
      description: "CI/CD automation server",
      gradient: "from-red-600 to-red-800",
      size: "small"
    }
  ];

  return (
    <section id="tools" ref={toolsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
            Tools
          </h2>
          <div className="professional-divider mx-auto max-w-xs"></div>
        </div>

        <div className="symmetric-grid-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`scroll-reveal professional-card p-8 transition-all duration-300 group border-2 tools-border-${index}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="h-10 w-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;