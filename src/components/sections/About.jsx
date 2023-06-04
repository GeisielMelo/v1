import React from "react";
import Title from "../about/Title";
import Content from "../about/Content";
import Tech from "../about/Tech";
import Photo from "../about/Photo";

const About = () => {
  return (
    <section id="about">
      <Title />
      <div className="grid-about">
        <Content />
        <Tech />
        <Photo />
      </div>
    </section>
  );
};

export default About;
