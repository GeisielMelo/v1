import React, { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Featured from "../components/sections/Featured";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { fetchData } from "../utils/fetchData";
import { Wrapper } from "../components/Wrapper";
import { VerticalBoxLeft, VerticalBoxRight } from "../components/VerticalBox";
import { Loading } from "../components/Loading";

const Index = () => {
  const [data, setData] = useState(null);
  const [language, setLanguage] = useState("enUS");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const response = await fetchData(language);
        setData(response);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [language]);

  const handleChangeLanguage = () => {
    const newLanguage = language === "enUS" ? "ptBR" : "enUS";
    localStorage.setItem("language", JSON.stringify(newLanguage));
    setLanguage(newLanguage);
  };

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        data && (
          <>
            <Hero settings={data.Hero} />
            <About settings={data.About} tech={data.Technologies} />
            <Featured settings={data.Featured} data={data.Data} />
            <Projects settings={data.Projects} data={data.Data} />
            <Contact settings={data.Contact} />
            <VerticalBoxLeft media={data.Media} />
            <VerticalBoxRight
              media={data.Media}
              translate={handleChangeLanguage}
            />
            <Footer name={data.Hero.Name} />
          </>
        )
      )}
    </Wrapper>
  );
};

export default Index;
