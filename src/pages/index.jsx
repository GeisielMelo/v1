import React from "react";
import Nav from "../components/sections/Nav.jsx";
import Hero from "../components/sections/Hero.jsx";
import About from "../components/sections/About.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Featured from "../components/sections/Featured.jsx";

const Index = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
