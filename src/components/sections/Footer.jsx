import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 100px;
`;

const Copy = styled.p`
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Light};
  padding: 2px;
  margin: 3px;
`;

const Inspiration = styled.p`
  font-size: ${(props) => props.theme.font.size.es};
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.default};
`;

const Footer = ({ name }) => {
  const [showInspiration, setShowInspiration] = useState(false);

  return (
    <Container
      onMouseEnter={() => setShowInspiration(true)}
      onMouseLeave={() => setShowInspiration(false)}
    >
      <Copy>© {name}</Copy>
      {showInspiration && <Inspiration>Inspired by @bchiang7</Inspiration>}
    </Container>
  );
};

export default Footer;
