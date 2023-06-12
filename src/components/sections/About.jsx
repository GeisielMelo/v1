import React from "react";
import Tech from "../Tech";

const About = (props) => {
  return (
    <section id="about">
      <div className="horizontal-line-title">
        <h1>{props.title}</h1>
        <div></div>
      </div>

      <div className="about-container">
        <div className="content">
          <p>{props.bio}</p>
          <p>{props.experience}</p>
          <p>{props.conclusion}.</p>
        </div>

        {/* <div className="grid-photo">
                <img src={props.image} alt={props.imageAlt} />
            </div> */}
            
        <div>
          <p>{props.techTitle}</p>
          <Tech technologies={props.tech} />
        </div>
      </div>
    </section>
  );
};

export default About;
