import { Text } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";
import { Input } from "@components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.563rem;
`;

const Title = styled(Text)`
  font-weight: 600;
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
