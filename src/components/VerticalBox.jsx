import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TranslateIcon from "@mui/icons-material/Translate";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  height: 100px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 45px;
  height: 300px;
  ${(props) => (props.direction === "left" ? "left: 20px" : "right: 20px")};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
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

export const VerticalBox = ({ media, translate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return isMobile ? (
    <Container>
      <Button onClick={() => handleButtonClick(media.GitHub)}>
        <GitHubIcon />
      </Button>
      <Button onClick={() => handleButtonClick(media.LinkedIn)}>
        <LinkedInIcon />
      </Button>
      <Button title="Português / English" onClick={translate}>
        <TranslateIcon />
      </Button>
      <Button onClick={() => handleContactClick(media.Email)}>
        <EmailIcon />
      </Button>
    </Container>
  ) : (
    <>
      <Box direction={"left"}>
        <Button onClick={() => handleButtonClick(media.GitHub)}>
          <GitHubIcon />
        </Button>
        <Button onClick={() => handleButtonClick(media.LinkedIn)}>
          <LinkedInIcon />
        </Button>
        <Line />
      </Box>

      <Box direction={"right"}>
        <Button title="Português / English" onClick={translate}>
          <TranslateIcon />
        </Button>
        <Button onClick={() => handleContactClick(media.Email)}>
          <EmailIcon />
        </Button>
        <Line />
      </Box>
    </>
  );
};
