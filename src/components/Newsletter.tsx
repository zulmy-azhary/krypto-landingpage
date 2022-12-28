import { Text } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";
import { Input } from "@components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  grid-column: span 6 / span 6;
  
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    row-gap: 2.563rem;
    grid-column: span 2 / span 2;
  }
`;

const Title = styled(Text)`
  font-weight: 600;
  text-align: center;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    text-align: start;
  }
`;

const Newsletter: React.FC = () => {
  return (
    <Wrapper>
      <Title>Join Our Newsletter</Title>
      <Input />
    </Wrapper>
  );
};

export default Newsletter;
