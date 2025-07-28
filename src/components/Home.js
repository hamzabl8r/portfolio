import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import myImage from "../assets/pic.png";

function Home() {
  return (
    <>
    <div className="home">
      <div className="hero-container section">
        <h1>Hello, I'm Hamza Béji</h1>
        <TypeAnimation
          sequence={[
            "A Software Engineering Student",
            2000,
            "A Full-Stack Developer",
            2000,
            "A Problem Solver",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />
        <p className="hero-description">
          Passionate about building efficient and innovative software solutions
          from concept to deployment.
        </p>
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </div>
      <div className="pics">
        <img src={myImage} alt="Hamza Beji" className="pic" />
      </div>
      </div>
    </>
  );
}

export default Home;
