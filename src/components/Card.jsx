import React from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderIcon from "@mui/icons-material/Folder";
import { OpacityMotion } from "./Motion";

const Container = styled.div`
  position: relative;
  max-width: 325px;
  height: 100%;
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.color.Navy.Light};
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(2, 12, 27, 0.7);

  @media screen and (max-width: 860px) and (min-width: 611px) {
    max-width: 250px;
  }

  @media (max-width: 610px) {
    max-width: 760px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.color.Slate.Light};
  &:hover {
    color: ${(props) => props.theme.color.Green.default};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Description = styled.p`
  margin: 20px 0;
  font-size: ${(props) => props.theme.font.size.sm};
  font-family: ${(props) => props.theme.font.family.one};
  color: ${(props) => props.theme.color.Slate.default};
  line-height: 1.3;
  margin-block-start: 1em;
  margin-block-end: 1em;
`;

const Technologies = styled.ul`
  position: absolute;
  bottom: 0;
  list-style: none;
  display: flex;
  margin: 10px 0;
  gap: 10px;

  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.es};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

export const Card = ({ title, description, technologies, live, git }) => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <OpacityMotion delay={0.2}>
      <Container>
        <Header>
          <Button>
            <FolderIcon />
          </Button>
          <Buttons>
            {live && (
              <Button onClick={() => handleButtonClick(live)}>
                <OpenInNewIcon />
              </Button>
            )}

            {git && (
              <Button onClick={() => handleButtonClick(git)}>
                <GitHubIcon />
              </Button>
            )}
          </Buttons>
        </Header>

        <Title>{title}</Title>
        <Description>{description}</Description>

        <Technologies>
          {technologies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Technologies>
      </Container>
    </OpacityMotion>
  );
};
