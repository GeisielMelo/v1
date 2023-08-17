import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { fetchData } from "../utils/fetchData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

  return (
    data ? (
      <Wrapper>
        <Home settings={data.Hero} />
        <About settings={data.About} />
        <Featured settings={data.Featured} />
        <Projects settings={data.Projects} />
        <Contact settings={data.Contact} />
      </Wrapper>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default Index;
