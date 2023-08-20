import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0px;
  margin: 0 100px;
  max-width: 600px;

  @media (max-width: 1068px) {
    margin: 0 50px;
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

const Subtitle = styled.h1`
  margin: 20px 0px 10px 0px;
  font-size: clamp(40px, 5vw, 60px);
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Message = styled.p`
  padding: 0 20px;
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Light};
  font-weight: ${(props) => props.theme.font.weight.regular};
  text-align: center;
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

const Contact = ({ settings }) => {
  const handleContactClick = () => {
    window.location.href = `mailto:${settings.email}`;
  };
  return (
    <Section id={settings.iD}>
      <Title>{settings.Title}</Title>
      <Subtitle>{settings.Subtitle}</Subtitle>
      <Message>{settings.Message}</Message>
      <Button onClick={handleContactClick}>{settings.ButtonText}</Button>
    </Section>
  );
};

export default Contact;
