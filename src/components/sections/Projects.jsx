import React from "react";
import Title from "../projects/Title";
import Card from "../projects/Card";
import More from "../projects/More";

const Projects = () => {
  return (
    <section id="projects">
      <Title />
      <div className="cards-area">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <More />
    </section>
  );
};

export default Projects;
