import React from "react";
import Title from "./Title";
import Name from "./Name";
import Role from "./Role";
import Intro from "./Intro";

const Hero = () => {
  return (
    <div className="hero">
      <Title />
      <Name />
      <Role />
      <Intro />
    </div>
  );
};

export default Hero;
