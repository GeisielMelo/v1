import React from "react";
import Card from "../Card";

const Projects = () => {
  return (
    <section id="projects">
      <div className="title-projects">
        <h1>Other Noteworthy Projects</h1>
        <h2>view the archive</h2>
      </div>
      <div className="cards-area">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="more-button"><button>More</button></div>
    </section>
  );
};

export default Projects;
