import { Button } from "@components";
import { Text, SubHeader, Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  column-gap: 1.75rem;
  flex-direction: column;
  row-gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  object-fit: contain;
  flex: 1;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 2.75);
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 2.188rem;
`;

const Analytics: React.FC = () => {
  return (
    <Section>
      <Image src="/assets/img-analytics.png" alt="Analytics Image" />
      <Content>
        <Heading>Analytics</Heading>
        <SubHeader>Built-In Analytics To Track Your Nfts</SubHeader>
        <Text maxWidth="85%">
          Use our built-in analytics dashboard to pull valuable insights and monitor the value of
          your Krypto portfolio over time.
        </Text>
        <Button variant="primary">View Our Pricing</Button>
      </Content>
    </Section>
  );
};

export default Analytics;
