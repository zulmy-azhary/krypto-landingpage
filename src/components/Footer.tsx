import React from "react";
import { List, Newsletter } from "@components";
import styled from "styled-components";
import { Heading, Layout } from "@styles/SharedComponents";

const Container = styled.footer`
  background: linear-gradient(180deg, var(--background) 8.05%, black 165.52%);
  width: 100%;
  min-height: fit-content;
  padding: 5rem 0;
`;

const Wrapper = styled(Layout)`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  justify-items: center;
  flex-wrap: wrap;
  margin: auto;
  row-gap: 2rem;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    justify-items: start;
  }
`;

const Title = styled(Heading)`
  grid-column: span 6 / span 6;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    grid-column: span 1 / span 1;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Krypto</Title>
        {data.map(({ name, list }: Data) => (
          <List key={name} name={name} list={list} />
        ))}
        <Newsletter />
      </Wrapper>
    </Container>
  );
};

type Data = {
  name: string;
  list: string[];
};

const data: Data[] = [
  {
    name: "Krypto",
    list: ["Home", "About", "Pricing", "Support"],
  },
  {
    name: "Market",
    list: ["Browse NFTs", "Buy NFTs", "Sell NFTs"],
  },
  {
    name: "Contact",
    list: ["Email", "LinkedIn", "Instagram", "Twitter", "Facebook"],
  },
];

export default Footer;
