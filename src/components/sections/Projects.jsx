import React, { useState } from "react";
import Card from "../Card";

const Projects = (props) => {
  const data  = props.data;
  const [displayedItems, setDisplayedItems] = useState(6);

  const handleMoreButtonClick = () => {
    setDisplayedItems(displayedItems + 3);
  };

  return (
    <section id="projects">
      <div className="title-projects">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
      </div>
      <div className="cards-area">
        {data.slice(0, displayedItems).map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            github={item.gitLink}
            live={item.liveLink}
          />
        ))}
      </div>
      {displayedItems < data.length && (
        <div className="more-button">
          <button onClick={handleMoreButtonClick}>{props.button}</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
