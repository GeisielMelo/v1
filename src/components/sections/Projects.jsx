import React from "react";
import Card from "../Card";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="title-projects">
        <h1>Other Noteworthy Projects</h1>
        <h2>view the archive</h2>
      </div>
      <div className="cards-area">
        {props.data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            live={item.liveLink}
            github={item.gitLink}
          />
        ))}
      </div>
      <div className="more-button">
        <button>More</button>
      </div>
    </section>
  );
};

export default Projects;
