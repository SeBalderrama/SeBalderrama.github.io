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
      name: 'FRONTEND\n\n+ BACKEND',
      skills: [
        { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
        { name: 'React', icon: '⚛️', color: '#61dafb' },
        { name: 'Next.js', icon: 'N', color: '#000000' },
        { name: 'Three.js', icon: '3', color: '#rgba(0, 0, 0, 0)'},
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
    },
    {
      name: 'AI/ML',
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
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <ScrollFloat 
                  containerClassName="category-name"
                  stagger={0}
                  animationDuration={1}
                >
                  {category.name}
                </ScrollFloat>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    //style={{ animationDelay: `${skillIndex * 0.1}s` }}
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
                    <ScrollFloat
                      textClassName='skill-name'
                      scrollStart = "center bottom+=80%"
                      scrollEnd = "bottom bottom-=70%"
                      stagger={0}
                      animationDuration={1}
                    >
                      {skill.name}
                    </ScrollFloat>
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
