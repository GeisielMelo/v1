import React, { useState, useEffect } from "react";
import DesktopNavbar from "../components/DesktopNavbar";
import MobileNavbar from "../components/MobileNavbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

import DesktopFooter from "../components/DesktopFooter";
import MobileFooter from "../components/MobileFooter";

import data from "../utils/data";
import config from "../utils/config";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileNavbar menu={config.nav.menu} button={config.nav.button} />
      ) : (
        <DesktopNavbar menu={config.nav.menu} button={config.nav.button} />
      )}

      <div id="main">
        <Hero
          title={config.hero.title}
          name={config.hero.name}
          job={config.hero.job}
          intro={config.hero.introduction}
        />
        <About
          title={config.about.title}
          bio={config.about.bio}
          experience={config.about.experience}
          conclusion={config.about.conclusion}
          image={config.about.image}
          imageAlt={config.about.imageDescription}
          techTitle={config.technologies.title}
          tech={config.technologies.tech}
        />
        <Featured title={config.featured.title} data={data} />
        <Projects
          title={config.projects.title}
          subTitle={config.projects.subtitle}
          button={config.projects.button}
          data={data}
        />
        <Contact
          title={config.contact.title}
          subTitle={config.contact.subtitle}
          message={config.contact.message}
          button={config.contact.button}
          email={config.contact.email}
        />
      </div>
      {isMobile ? (
        <MobileFooter
          buttons={config.bottomButtons}
          email={config.contact.email}
        />
      ) : (
        <DesktopFooter
          buttons={config.bottomButtons}
          email={config.contact.email}
        />
      )}
    </>
  );
};

export default Index;
