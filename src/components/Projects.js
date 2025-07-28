import React from "react";

const ProjectCard = ({ title, description, tech,link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tech">
      {tech.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
    <div >
    <button className="project-btn"><a href={link}> View Project</a></button>
    </div>
  </div>
);

function Projects() {
  const projectData = [
    {
      title: "Calculator",
      description:
        "A full-stack web application for an online store, focusing on database integration and web technologies.",
      tech: [ "JavaScript", "HTML", "CSS"],
      link :"calculator-pi-virid-30.vercel.app"
    },
    {
      title: "X-O-Game",
      description:
        "A full-stack web application for an online store, focusing on database integration and web technologies.",
      tech: [ "JavaScript", "HTML", "CSS"],
      link :"x-o-game-three.vercel.app"
    },
    
  ];

  return (
    <>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </>
  );
}

export default Projects;
