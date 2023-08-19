import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TranslateIcon from "@mui/icons-material/Translate";

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 20px;
  width: 45px;
  height: 300px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 45px;
  height: 300px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 2px;
  cursor: pointer;
  background: none;
  color: ${(props) => props.theme.color.Slate.Lightest};
  &:hover {
    color: ${(props) => props.theme.color.Green.default};
    border: 1px solid ${(props) => props.theme.color.Green.default};
    background-color: ${(props) => props.theme.color.Navy.Light};
  }
`;

const Line = styled.div`
  position: fixed;
  bottom: 0;
  width: 2px;
  max-height: 170px;
  height: 100%;
  background-color: ${(props) => props.theme.color.Slate.Lightest};
  margin-top: 20px;
`;

export const VerticalBoxLeft = ({ media }) => {
  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <LeftBox>
      <Button onClick={() => handleButtonClick(media.GitHub)}>
        <GitHubIcon />
      </Button>
      <Button onClick={() => handleButtonClick(media.LinkedIn)}>
        <LinkedInIcon />
      </Button>

      <Line />
    </LeftBox>
  );
};

export const VerticalBoxRight = ({ media, translate }) => {
  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <RightBox>
      <Button title="Português / English" onClick={translate}>
        <TranslateIcon />
      </Button>

      <Button onClick={() => handleContactClick(media.Email)}>
        <EmailIcon />
      </Button>
      <Line />
    </RightBox>
  );
};
