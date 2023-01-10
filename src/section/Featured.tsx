import { Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2px;
  background-color: #28225d60;
  border-radius: 0.938rem;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    justify-content: space-evenly;
  }
`;

const Image = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: contain;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const Featured: React.FC = () => {
  return (
    <Section>
      <Heading>Featured On</Heading>
      <Wrapper>
        <Image src="/assets/icon-tc.png" alt="Tech Crunch Icon" />
        <Image src="/assets/icon-fc.png" alt="Fast Company Icon" />
        <Image src="/assets/icon-mit.png" alt="MIT Icon" />
        <Image src="/assets/icon-forbes.png" alt="Forbes Icon" />
      </Wrapper>
    </Section>
  );
};

export default Featured;
