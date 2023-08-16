import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { fetchAppData } from "../services/fetchAppData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!data) {
        try {
          const response = await fetchAppData();
          setData(response);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [data]);

  return (
    <Wrapper>
      <Home />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

export default Index;
