import React from "react";
import { List, Newsletter } from "@components";
import styled from "styled-components";
import { Heading } from "@styles/SharedComponents";

const Container = styled.footer`
  background: linear-gradient(180deg, #000337 8.05%, black 165.52%);
  width: 100%;
  min-height: fit-content;
  padding: 5rem 0;
`;

const Wrapper = styled.div`
  width: calc(var(--mobile) / 1.125);
  display: flex;
  justify-content: space-between;
  column-gap: 6.25rem;
  flex-wrap: wrap;
  margin: auto;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.125);
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    width: calc(var(--laptop) / 1.25);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 1.35);
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Krypto</Heading>
        <List name="Krypto" list={["Home", "About", "Buy NFTs", "Sell NFTs"]} />
        <List name="Market" list={["Browse", "NFTs", "Buy NFTs", "Sell NFTs"]} />
        <List name="Contact" list={["Email", "LinkedIn", "Instagram", "Twitter"]} />
        <Newsletter />
      </Wrapper>
    </Container>
  );
};

export default Footer;
