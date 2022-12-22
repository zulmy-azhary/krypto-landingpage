import { BodyText, Button, MainHeader } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 65vh;
`;

const HeroContent = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: 100%;
`;

const CustomBodyText = styled(BodyText)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: 70%;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Buy = styled(Button)`
  background-color: var(--secondary);
  border-color: var(--secondary);
`;

const Sell = styled(Button)`
  background-color: transparent;
  border-color: var(--accent);
`;

const Image = styled.img`
  object-fit: contain;
  align-self: start;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 2.5);
  }
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <HeroContent>
        <MainHeader>Discover And Collect Rare NFTs</MainHeader>
        <CustomBodyText>
          The most secure marketplace for buying and selling unique crypto assets.
        </CustomBodyText>
        <Action>
          <Buy>Buy Nfts</Buy>
          <Sell>Sell Nfts</Sell>
        </Action>
      </HeroContent>
      <Image src="/assets/img-hero.png" alt="Hero Image" />
    </Section>
  );
};

export default Hero;
