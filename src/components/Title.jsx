import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  max-width: max-content;
  white-space: nowrap;
  margin-right: 20px;
  font-family: ${(props) => props.theme.font.family.two};
  color: ${(props) => props.theme.color.Slate.Lightest};
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.color.Slate.default};
`;

export const Title = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Line />
    </Container>
  );
};
