import React from "react";

const Tech = (props) => {
  return (
    <div className="grid-tech">
      <ul className="about-tech">
        {props.technologies.map((tech) => (
          <li key={tech.id}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tech;
