import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-heading">Experience</h1>

      <div className="timeline">

        <div className="timeline-card left">
          <div className="content">
            <span className="year">2024 - Present</span>
            <h2>Software Developer</h2>
            <h3>PROGEN ERP Systems</h3>

            <p>
              Worked on web application development using PHP, JavaScript,
              jQuery, Python, and Django. Built responsive UI components and
              improved application performance.
            </p>
          </div>
        </div>

        <div className="timeline-card right">
          <div className="content">
            <span className="year">React & Django Projects</span>
            <h2>Full Stack Development</h2>
            <h3>Personal Projects</h3>

            <p>
              Developed projects like Fashion Frenzy, Job Portal App,
              and AI-based Ghibli Image Converter using React, Django,
              MySQL, and REST APIs.
            </p>
          </div>
        </div>

        <div className="timeline-card left">
          <div className="content">
            <span className="year">Skills & Learning</span>
            <h2>Frontend & Backend</h2>
            <h3>Continuous Learning</h3>

            <p>
              Exploring AI, React animations, APIs, authentication,
              and modern full stack technologies to build creative
              and scalable applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;