import { BodyText, SubHeader, SubHeading, Button } from '@styles/SharedComponents';
import React from 'react'
import styled from 'styled-components';

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
`;

const AppTitle = styled(SubHeading)`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  color: var(--primary);
`;

const CustomBodyText = styled(BodyText)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: 80%;
  }
`;

const Download = styled(Button)`
  background-color: transparent;
  border-color: var(--accent);
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
        <AppTitle>Get Our App</AppTitle>
        <SubHeader>Browse Nfts From Your Smartphone</SubHeader>
        <CustomBodyText>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</CustomBodyText>
        <Download>Download On IOS</Download>
      </Content>
      <Image src="/assets/img-app.png" alt="App Image" />
    </Section>
  )
}

export default Mobile