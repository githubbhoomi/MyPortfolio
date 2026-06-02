import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Fashion Frenzy",
    desc: "A Django-based fashion eCommerce website with login, booking, and categories for men, women, and kids.",
  },
  {
    title: "Job Portal App",
    desc: "A full stack job application platform using React and Django with authentication and job listings.",
  },
  {
    title: "Ghibli AI Image Converter",
    desc: "Upload images and convert them into Ghibli-style art using Python and AI libraries.",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="project-title">My Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-glow"></div>

            <h2>{project.title}</h2>
            <p>{project.desc}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;