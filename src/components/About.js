import React from "react";
import logo from "../assets/hamzabeji_logo.png";
// import myImage from "../assets/pic.png";

function About() {
  return (
    <>
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <img src={logo} alt="Hamza Beji" className="about-image" />
        <div className="about-text">
          <p>
            I am a passionate Software Engineering student at the Faculty of
            Sciences of Gabès (FSG) with strong foundations in algorithms,
            system design, and full-stack development. I am enthusiastic about
            solving complex problems through efficient code and innovative
            solutions.
          </p>
          <p>
            My experience includes developing academic projects with database
            integration (MySQL) and a solid understanding of OOP principles in
            Java and C++. I am a quick learner and a collaborative team player,
            always eager to expand my expertise in web and mobile technologies.
          </p>
          </div>
          </div>
        {/* </div>
        <img src={myImage} alt="Hamza Beji" className="pic" />
      </div> */}
    </>
  );
}

export default About;
