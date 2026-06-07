import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Fashion Frenzy",
    desc: "A Django-based fashion eCommerce website with login, booking, and categories for men, women, and kids.",
  },
{
  title: "Event Management",
  desc: "A full-stack event management application built with React, Node.js, and PostgreSQL, featuring event creation, registration, and user authentication.",
},
{
  title: "Todo App",
  desc: "A task management application built with React, Node.js, and PostgreSQL, allowing users to create, update, delete, and organize daily tasks.",
},
{
  title: "Movie App",
  desc: "A movie discovery application that uses a movie API to display trending movies, search results, ratings, and detailed movie information.",
}
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

            {/* <button>View Project</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;