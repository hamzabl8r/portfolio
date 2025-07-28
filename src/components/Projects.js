import React from "react";
import tictac from '../assets/X-O.png'
import calculator from '../assets/Cal.png'
const ProjectCard = ({ title,imgs, description, tech,link }) => (
  <div className="project-card">

    <img src={imgs} alt={imgs}  style={{width:"100%" ,height:'400px' ,marginBottom:'5px', borderRadius:"5px 5px 0px"}}/>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-tech">
      {tech.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
    <div >
    <a href={link} ><button className="project-btn"> View Project</button></a>
    </div>
  </div>
);

function Projects() {
  const projectData = [
    {
      title: "Calculator",
      imgs : calculator,
      description:
        "A full-stack web application for an online store, focusing on database integration and web technologies.",
      tech: [ "JavaScript", "HTML", "CSS"],
      link :"https://calculator-pi-virid-30.vercel.app"
    },
    {
      title: "X-O-Game",
      imgs : tictac,
      description:
        "A full-stack web application for an online store, focusing on database integration and web technologies.",
      tech: [ "JavaScript", "HTML", "CSS"],
      link :"https://x-o-game-three.vercel.app"
    },
    
  ];
  return (
    <div className="Proj-container">

      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
