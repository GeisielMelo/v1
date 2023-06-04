import React from "react";
import Title from "../hero/Title";
import Intro from "../hero/Intro";
import Name from "../hero/Name";
import Role from "../hero/Role";

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <Title />
        <Name />
        <Role />
        <Intro />
      </div>
    </section>
  );
};

export default Hero;
