import React, { useEffect, useRef } from 'react';
import { Server, Brain, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const elements = skillsRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Linux",
      icon: Server,
      level: 85,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Machine Learning",
      icon: Brain,
      level: 90,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "DevOps",
      icon: Layers,
      level: 80,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Full Stack",
      icon: Zap,
      level: 85,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Agentic AI",
      icon: Brain,
      level: 75,
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="professional-divider mx-auto max-w-xs"></div>
        </div>

        <div className="symmetric-grid-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`scroll-reveal professional-card p-8 text-center transition-all duration-300 group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skill.name}
              </h3>
              
              <div className="relative">
                <div className="skill-bar mb-2">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;