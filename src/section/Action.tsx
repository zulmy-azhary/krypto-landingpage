import { Button } from "@components";
import { Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background: linear-gradient(280deg, #79b1ac 0%, #2e2862 100%, #4b5c84 100%);
  border-radius: 1.563rem;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  row-gap: 3.563rem;
  padding: 2rem;
  justify-content: center;
  min-height: 23rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    min-height: 28.875rem;
    padding: 4.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.125rem;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: 65%;
  }
`;

const Title = styled(Heading)`
  color: black !important;
`;

const Text = styled.h2`
  font-family: var(--outfit);
  color: var(--primary);
  font-size: 2rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    font-size: 3.75rem;
    line-height: 61.5px;
  }
`;

const Action: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Are you ready?</Title>
        <Text>Be A Part Of The Next Big Thing</Text>
      </Header>
      <Button variant="accent">Get Started</Button>
    </Container>
  );
};

export default Action;
