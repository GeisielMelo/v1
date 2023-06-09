import React from "react";

const Hero = (props) => {
  return (
    <section id="hero">
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <h3>{props.job}</h3>
      <p>{props.intro}</p>
    </section>
  );
};

export default Hero;
