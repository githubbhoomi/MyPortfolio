import React from 'react';
import './Skills.css';

const Skills = () => {

  const skillCategories = [

    {
      title: "Frontend",
      skills: [
        { name: "HTML", percentage: 95 },
        { name: "CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 82 }
      ]
    },

    {
      title: "Backend",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "Django", percentage: 85 },
        { name: "REST API", percentage: 80 }
      ]
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", percentage: 80 },
        { name: "SQLite", percentage: 75 }
      ]
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", percentage: 85 },
        { name: "GitHub", percentage: 88 },
        { name: "AWS Basics", percentage: 70 },
        { name: "VS Code", percentage: 92 }
      ]
    }

  ];

  return (
    <section className="skills-section">

      <div className="skills-container">

        <h4>My Skills</h4>

        <h1>
          Technical <span>Expertise</span>
        </h1>

        <p>
          I work with modern frontend and backend technologies
          to build scalable and responsive web applications.
        </p>

        <div className="category-grid">

          {skillCategories.map((category, index) => (

            <div className="category-card" key={index}>

              <h2>{category.title}</h2>

              {category.skills.map((skill, i) => (

                <div className="skill-item" key={i}>

                  <div className="skill-header">

                    <h3>{skill.name}</h3>

                    <span>{skill.percentage}%</span>

                  </div>

                  <div className="skill-bar">

                    <div
                      className="skill-progress"
                      style={{
                        width: `${skill.percentage}%`
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;