import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../Card";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0px;
  margin: 0 100px;
  max-width: 1000px;

  @media (max-width: 769px) {
    margin: 0 50px;
  }
`;

const Title = styled.h1`
  max-width: max-content;
  white-space: nowrap;
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Subtitle = styled.h2`
  margin: 10px;
  max-width: max-content;
  margin-bottom: 30px;
  padding-left: 4px;

  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.color.Green.default};
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 20px 30px;
  background: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.color.Green.default};
  border: 1px solid ${(props) => props.theme.color.Green.default};

  &:hover {
    background: ${(props) => props.theme.color.Navy.Lightest};
  }
`;

const Projects = ({ settings, data }) => {
  const [maxCards, setMaxCards] = useState(6);

  return (
    <Section id={settings.iD}>
      <Title>{settings.Title}</Title>
      <Subtitle>{settings.Subtitle}</Subtitle>
      <Cards>
        {data?.slice(0, maxCards).map((item, index) => (
          <Card
            key={index}
            title={item.Title}
            description={item.Description}
            technologies={item.Technologies}
            git={item.GitLink}
            live={item.LiveLink}
          />
        ))}
      </Cards>
      {maxCards < data.length ? (
        <Button onClick={() => setMaxCards(maxCards + 3)}>{settings.ButtonMore}</Button>
      ) : (
        <Button onClick={() => setMaxCards(6)}>{settings.ButtonLess}</Button>
      )}
    </Section>
  );
};

export default Projects;
