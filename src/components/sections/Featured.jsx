import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Title } from "../Title";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 100px;
  padding: 100px 0px;
  max-width: 850px;
  width: calc(100% - 200px);

  @media (max-width: 769px) {
    margin: 0 50px;
    width: calc(100% - 100px);
  }
`;

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  @media (max-width: 1060px) {
    flex-direction: column-reverse;
  }
`;

const Menu = styled.div`
  max-width: 150px;
  width: 100%;
  @media (max-width: 1060px) {
    max-width: 100%;
  }
`;

const Preview = styled.div`
  position: relative;
  max-width: 700px;
  max-height: 400px;
  @media (max-width: 1060px) {
    border-radius: 8px;
    max-width: 100%;
    max-height: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  cursor: pointer;
  @media (max-width: 1060px) {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px;
  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.sm};
  border-left: 2px solid ${(props) => props.theme.color.Slate.default};
  color: ${(props) => props.theme.color.Slate.Lightest};
  &:hover {
    color: ${(props) => props.theme.color.Green.default};
    border-color: ${(props) => props.theme.color.Green.default};
    background-color: ${(props) => props.theme.color.Navy.Light};
  }
  @media (max-width: 1060px) {
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.color.Slate.default};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 5px rgba(2, 12, 27, 0.7);
  @media (max-width: 1060px) {
    border-radius: 8px;
  }
`;

const Description = styled.div`
  position: absolute;
  text-align: right;
  bottom: 0px;
  right: 0px;
  max-width: 450px;
  background-color: ${(props) => props.theme.color.Navy.Light};
  border-radius: 8px;
  color: white;
  padding: 10px;
  margin: 9px 5px;
  &:hover {
    background-color: ${(props) => props.theme.color.Navy.Transparent};
  }
`;

const DescriptionText = styled.p`
  text-shadow: 0px 0px 5px black;
  font-size: ${(props) => props.theme.font.size.sm};
  font-family: ${(props) => props.theme.font.family.two};
`;

const DescriptionTech = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  flex-wrap: wrap;
  list-style: none;
  & li {
    margin-left: 10px;
    font-size: ${(props) => props.theme.font.size.sm};
    font-family: ${(props) => props.theme.font.family.one};
  }
`;

const Buttons = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.color.Slate.Lightest};
  }
  & button:hover {
    color: ${(props) => props.theme.color.Green.default};
  }
  & button:active {
    color: ${(props) => props.theme.color.Slate.default};
  }
`;

const Visibility = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  text-align: right;
  top: 0px;
  right: 0px;
  margin: 9px 5px;
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Featured = ({ settings, data }) => {
  const [previewData, setPreviewData] = useState(null);
  const [showDescription, setShowDescription] = useState(true);
  const isFeatured = (item) => item.Featured === true;

  useEffect(() => {
    if (!previewData) {
      const firstItem = data.find((item) => item.Featured === true);
      setPreviewData(firstItem);
    }
  }, [previewData, data]);

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Section id={settings.iD}>
      <Title title={settings.Title} />

      <Container>
        <Menu>
          <List>
            {data.filter(isFeatured).map((item, index) => (
              <Item key={index} onClick={() => setPreviewData(item)}>
                {item.Title}
              </Item>
            ))}
          </List>
        </Menu>

        <Preview>
          <Image src={previewData?.ImageLink} />

          {showDescription && (
            <Description>
              <DescriptionText>{previewData?.Description}</DescriptionText>
              <DescriptionTech>
                {previewData?.Technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </DescriptionTech>
              <Buttons>
                {previewData?.LiveLink !== null && (
                  <button onClick={() => handleButtonClick(previewData.LiveLink)}>
                    <OpenInNewIcon />
                  </button>
                )}
                {previewData?.GitLink !== null && (
                  <button onClick={() => handleButtonClick(previewData.GitLink)}>
                    <GitHubIcon />
                  </button>
                )}
              </Buttons>
            </Description>
          )}
          <Visibility onMouseEnter={() => setShowDescription(false)} onMouseLeave={() => setShowDescription(true)}>
            {showDescription ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Visibility>
        </Preview>
      </Container>
    </Section>
  );
};

export default Featured;
