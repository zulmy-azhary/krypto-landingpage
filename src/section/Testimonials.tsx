import { Card } from "@components";
import { SubHeader, Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8.688rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.313rem;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: calc(var(--desktop) / 2.5);
    margin: 0 auto;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const Testimonials: React.FC = () => {
  return (
    <Section>
      <Header>
        <Heading>Testimonials</Heading>
        <SubHeader>Read What Others Have To Say</SubHeader>
      </Header>
      <Box>
        <Card
          name={"Olivia Cole"}
          image={"user-1"}
        />
        <Card
          name={"Evan White"}
          image={"user-2"}
        />
        <Card
          name={"Jessica Page"}
          image={"user-3"}
        />
        <Card
          name={"Olivia Cole"}
          image={"user-1"}
        />
      </Box>
    </Section>
  );
};

export default Testimonials;
