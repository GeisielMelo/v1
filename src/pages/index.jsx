import React, { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { fetchData } from "../utils/fetchData";
import { Wrapper } from "../components/StyledComponents";

const Index = () => {
  const [data, setData] = useState(null);
  const [language, setLanguage] = useState("enUS");

  useEffect(() => {
    try {
      const response = fetchData(language);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }, [language]);

  return data ? (
    <Wrapper>
      <Hero settings={data.Hero} />
      <About settings={data.About} tech={data.Technologies} />
      <Featured settings={data.Featured} />
      <Projects settings={data.Projects} />
      <Contact settings={data.Contact} />
      <Footer name={data.Hero.Name}/>
    </Wrapper>
  ) : (
    <p>Loading...</p>
  )
}

export default Index;
