import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import data from "../utils/data";
import config from "../utils/config";

const Index = () => {
  return (
    <>
      <Navbar
        logo={config.navBarLogoLink}
        menu={config.navBar}
        button={config.navBarButton}
      />
      <div id="main">
        <Hero
          title={config.appTitle}
          name={config.name}
          job={config.job}
          intro={config.introduction}
        />
        <About
          title={config.aboutTitle}
          bio={config.bio}
          experience={config.experience}
          conclusion={config.conclusion}
          tech={config.tech}
          techTitle={config.techTitle}
          image={config.imageLink}
          imageAlt={config.imageLinkDescription}
        />
        <Featured
          title={config.featuredTitle}
          data={data}
          />
        <Projects
          title={config.projectsTitle}
          subTitle={config.projectsSubTitle}
          button={config.projectsButton}
          data={data}
        />
        <Contact
          title={config.contactTitle}
          subTitle={config.contactSubtitle}
          message={config.contactMessage}
          button={config.contactButton}
          email={config.contactEmail}
        />
      </div>
      <Footer
        email={config.contactEmail}
      />
    </>
  );
};

export default Index;
