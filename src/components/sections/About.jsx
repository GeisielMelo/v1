import React from "react";
import Tech from "../Tech";

const About = (props) => {
  return (
    <section id="about">
      <div>
        <h1>About Me</h1>
      </div>
      <div className="about-container">
        <div className="content">
          <p>{props.bio}</p>
          <p>{props.work}</p>
          <p>{props.experience}.</p>
          <p>{props.techTitle}</p>
          <Tech technologies={props.tech} />
        </div>
        <div className="grid-photo">
          <img
            width="300"
            height="300"
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
