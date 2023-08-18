import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 100px;
  padding: 100px 0px;
  max-width: 1000px;
  width: 100%;
  height: 100vh;

  @media (max-width: 1068px) {
    padding: 100px 50px;
  }
`;

const Title = styled.p`
  max-width: max-content;
  margin-bottom: 30px;
  padding-left: 4px;

  font-family: ${(props) => props.theme.font.family.one};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.color.Green.default};
`;

const Name = styled.h1`
  max-width: max-content;
  font-size: clamp(40px, 8vw, 80px);

  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Description = styled.h2`
  max-width: max-content;
  font-size: clamp(40px, 5vw, 60px);

  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.default};
`;

const Introduction = styled.p`
  max-width: 540px;
  padding: 20px 0px;

  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Light};
`;

const Hero = ({ settings }) => {
  return (
    <Section>
      <Title>{settings.Title}</Title>
      <Name>{settings.Name}</Name>
      <Description>{settings.Description}</Description>
      <Introduction>{settings.Introduction}</Introduction>
    </Section>
  );
};

export default Hero;
