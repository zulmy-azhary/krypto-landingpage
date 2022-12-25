import { BodyText, Button, SubHeader, SubHeading } from "@styles/SharedComponents";
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

const AnalyticsTitle = styled(SubHeading)`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  color: var(--primary);
`;

const CustomBodyText = styled(BodyText)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: 85%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--secondary);
  border-color: var(--secondary);
  width: fit-content;
`;

const Analytics: React.FC = () => {
  return (
    <Section>
      <Image src="/assets/img-analytics.png" alt="Analytics Image" />
      <Content>
        <AnalyticsTitle>Analytics</AnalyticsTitle>
        <SubHeader>Built-In Analytics To Track Your Nfts</SubHeader>
        <CustomBodyText>
          Use our built-in analytics dashboard to pull valuable insights and monitor the value of
          your Krypto portfolio over time.
        </CustomBodyText>
        <PrimaryButton>View Our Pricing</PrimaryButton>
      </Content>
    </Section>
  );
};

export default Analytics;
