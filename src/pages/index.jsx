import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <div id="main">
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Index;
