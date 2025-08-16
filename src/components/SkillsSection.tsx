import React from 'react';
import ScrollFloat from './ScrollFloat';
import './SkillsSection.css';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'FRONTEND',
      skills: [
        { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
        { name: 'React', icon: '⚛️', color: '#61dafb' },
        { name: 'Next.js', icon: 'N', color: '#000000' },
        { name: 'Redux', icon: '🔄', color: '#764abc' },
        { name: 'Tailwind CSS', icon: '🌊', color: '#06b6d4' },
        { name: 'GSAP', icon: '🦸', color: '#88ce02' },
        { name: 'Framer Motion', icon: '🎨', color: '#ff6b6b' },
        { name: 'Sass', icon: 'S', color: '#cf649a' },
        { name: 'Bootstrap', icon: 'B', color: '#7952b3' }
      ]
    },
    {
      name: 'BACKEND',
      skills: [
        { name: 'Node.js', icon: '🟢', color: '#339933' },
        { name: 'NestJS', icon: '🔥', color: '#e0234e' },
        { name: 'Express.js', icon: 'eX', color: '#000000' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
          <ScrollFloat containerClassName="skills-title">
            <span className="title-icon">*</span> MY STACK
          </ScrollFloat>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <ScrollFloat 
                  containerClassName="category-name"
                  stagger={0.05}
                  animationDuration={0.8}
                >
                  {category.name}
                </ScrollFloat>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <div 
                      className="skill-icon"
                      style={{ 
                        backgroundColor: skill.color,
                        color: skill.name === 'TypeScript' || skill.name === 'Next.js' || skill.name === 'Express.js' ? '#ffffff' : '#000000'
                      }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
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

export default SkillsSection;
