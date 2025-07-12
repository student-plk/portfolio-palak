import React, { useEffect, useRef } from 'react';
import { Code, Globe, Database, Wrench, Zap, BookOpen } from 'lucide-react';

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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-600 to-cyan-600",
      skills: ["Python", "JavaScript"],
      description: "Core programming languages for development and automation"
    },
    {
      title: "Web Development",
      icon: Globe,
      gradient: "from-green-600 to-emerald-600",
      skills: ["HTML", "Flask", "CSS"],
      description: "Frontend and backend web development technologies"
    },
    {
      title: "Database",
      icon: Database,
      gradient: "from-purple-600 to-pink-600",
      skills: ["MySQL", "MongoDB"],
      description: "Relational and NoSQL database management systems"
    },
    {
      title: "Tools & Development",
      icon: Wrench,
      gradient: "from-orange-600 to-red-600",
      skills: ["Git", "GitHub", "Docker", "Kubernetes", "Jenkins"],
      description: "Version control, containerization, and CI/CD tools"
    },
    {
      title: "API & Integration",
      icon: Zap,
      gradient: "from-violet-600 to-indigo-600",
      skills: ["OpenAI", "GitHub REST API"],
      description: "Third-party APIs and integration services"
    },
    {
      title: "Currently Learning",
      icon: BookOpen,
      gradient: "from-teal-600 to-blue-600",
      skills: ["Machine Learning", "GenAI", "GenAI Ops"],
      description: "Emerging technologies and ongoing skill development"
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
            Skills & Technologies
          </h2>
          <div className="professional-divider mx-auto max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`scroll-reveal professional-card p-6 transition-all duration-300 group border-2 skills-border-${index} hover:shadow-xl hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {category.description}
              </p>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;