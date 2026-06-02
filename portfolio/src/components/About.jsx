import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">

          <div className="image-wrapper">
            <img
              src="/profile.jpg"
              alt="profile"
              className="profile-img"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">

          <h4>About Me</h4>

          <h1>
            Hi, I'm <span>Bhoomika N</span>
          </h1>

          <h3>Full Stack Developer</h3>

          <p>
            I am a passionate Full Stack Developer with knowledge in
            React, JavaScript, Python, Django, HTML, CSS, and MySQL.
            I enjoy building modern, responsive, and user-friendly web applications.
          </p>

          <p>
            I am very interested in AI and continuously learning new
            technologies to improve my development skills.
          </p>

          <a href="/resume.pdf" download>
      <button className="resume-btn">
        Download Resume
       </button>
      </a>

        </div>

      </div>

    </section>
  );
};

export default About;