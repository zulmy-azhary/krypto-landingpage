import { Button } from "@components";
import { Text, SubHeader, Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column-reverse;
  row-gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  flex: 1;
  align-items: center;
  text-align: center;

  @media (min-width: ${props => props.theme.media.laptop}) {
    align-items: start;
    text-align: start;
  }
`;

const Image = styled.img`
  object-fit: contain;
  flex: 1;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 2.75);
  }
`;

const Mobile: React.FC = () => {
  return (
    <Section>
      <Content>
        <Heading>Get Our App</Heading>
        <SubHeader>Browse Nfts From Your Smartphone</SubHeader>
        <Text maxWidth="80%">
          Our Krypto app is the easiest way to keep track of your assets when you’re on the go.
        </Text>
        <Button variant="secondary">Download On IOS</Button>
      </Content>
      <Image src="/assets/img-app.png" alt="App Image" />
    </Section>
  );
};

export default Mobile;
