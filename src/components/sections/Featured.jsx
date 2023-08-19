import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Title } from "../Title";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 100px;
  padding: 100px 0px;
  max-width: 850px;
  width: 100%;
  height: 100vh;

  @media (max-width: 1068px) {
    padding: 100px 50px;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 50px 0;

  @media (max-width: 1068px) {
    flex-direction: column-reverse;
  }
`;

const Menu = styled.div`
  max-width: 200px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  @media (max-width: 1068px) {
    max-width: 400px;
  }
`;

const List = styled.ul`
  list-style: none;
  cursor: pointer;
  @media (max-width: 1068px) {
    display: flex;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-family: ${(props) => props.theme.font.family.one};
  font-size: ${(props) => props.theme.font.size.sm};
  border-left: 2px solid ${(props) => props.theme.color.Slate.default};
  color: ${(props) => props.theme.color.Slate.Lightest};
  &:hover {
    color: ${(props) => props.theme.color.Green.default};
    border-color: ${(props) => props.theme.color.Green.default};
    background-color: ${(props) => props.theme.color.Navy.Light};
  }
  @media (max-width: 1068px) {
    border-left: none;
    padding: 5px;
    margin: 5px;
    border-bottom: 2px solid ${(props) => props.theme.color.Slate.default};
  }
`;

const Preview = styled.div`
  position: relative;
  max-width: 650px;
  max-height: 400px;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 5px rgba(2, 12, 27, 0.7);
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
  margin: 5px;
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


const Featured = ({ settings, data }) => {
  const [previewData, setPreviewData] = useState(null);
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
    <Section>
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
        </Preview>
      </Container>
    </Section>
  );
};

export default Featured;
