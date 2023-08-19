import React from "react";
import styled from "styled-components";
import { Title } from "../Title";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 100px;
  padding: 100px 0px;
  max-width: 850px;
  
  @media (max-width: 769px) {
    margin: 0 50px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 50px;
  margin: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 270px;
  row-gap: 20px;
`;

const Paragraph = styled.p`
  max-width: 470px;
  width: 100%;

  font-family: ${(props) => props.theme.font.family.one};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.color.Slate.default};

  @media (max-width: 768px) {
    max-width: 850px;
  }
`;

const TechTitle = styled.p`
  max-width: 255px;
  font-family: ${(props) => props.theme.font.family.one};
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.sm};
  color: ${(props) => props.theme.color.Slate.default};
`;

const TechStack = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  & li {
    margin: 5px;
    font-family: ${(props) => props.theme.font.family.one};
    font-weight: ${(props) => props.theme.font.weight.regular};
    color: ${(props) => props.theme.color.Green.default};
  }
`;

const Photo = styled.img`
  max-width: 255px;
  border-radius: 8px;
  box-shadow: 4px 4px 10px ${(props) => props.theme.color.Green.default};;
`;

const About = ({ settings, tech }) => {
  return (
    <Section>
      <Title title={settings.Title} />
      <Container>
        <LeftContainer>
          <Paragraph>{settings.Bio}</Paragraph>
          <Paragraph>{settings.Experience}</Paragraph>
          <Paragraph>{settings.Conclusion}</Paragraph>
        </LeftContainer>

        <RightContainer>
          <Photo src={settings.Image} alt="profile" />
          <TechTitle>{tech.Title}</TechTitle>
          <TechStack>
            {tech.Tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </TechStack>
        </RightContainer>
      </Container>
    </Section>
  );
};

export default About;
