import React, { useEffect, useRef } from 'react';
import { User, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const aboutData = [
    {
      icon: User,
      title: "About Me",
      content: "Enthusiastic about Full Stack Development, DevOps, Machine Learning, and Agentic AI. Passionate about building solutions through innovation and automation.",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "B.Sc Computer Science - Barkatullah University, Bhopal (2019)\n\nClass XII - Holy Faith Bal Red Cross Higher Secondary School, Harda MP (2016)",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Briefcase,
      title: "Experience",
      content: "Currently working as a Tech Intern at LinuxWorld Informatics Pvt Ltd, focusing on modern technologies and innovative solutions.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Award,
      title: "Certificates",
      content: "Continuously learning and expanding knowledge in cutting-edge technologies. Certificates will be added as they are obtained.",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 neon-blink-title">
            About Me
          </h2>
          <div className="professional-divider mx-auto max-w-xs"></div>
        </div>

        <div className="symmetric-grid-2">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className={`scroll-reveal professional-card p-8 transition-all duration-300 border border-[1.5px] rounded-xl ${index === 0 ? 'border-violet-500' : index === 1 ? 'border-blue-500' : index === 2 ? 'border-emerald-500' : 'border-orange-500'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;