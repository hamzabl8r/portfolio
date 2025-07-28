import React from 'react';

const Skill = ({ name, level }) => (
  <div className="skill-item">
    <span className="skill-name">{name}  <span className='level'>{level}</span></span>
    <div className="skill-bar">
      <div className="skill-level" style={{ width: level }}></div>
    </div>
  </div>
);


function Skills() {
  return (
    <>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container sk">
      <div className='first'>
        <Skill name="Java" level="90%" />
        <Skill name="JavaScript" level="75%" />
        <Skill name="C++" level="80%" />
        <Skill name="C" level="85%" />
        <Skill name="Python" level="75%" />
      </div>
      <div className='Second'>
        <Skill name="HTML5 & CSS3" level="95%" />
        <Skill name="ReactJS" level="65%" />
        <Skill name="MySQL" level="90%" />
        <Skill name="Git" level="85%" />
        <Skill name="Algorithms" level="90%" />
      </div>
      </div>
    </>
  );
}

export default Skills;