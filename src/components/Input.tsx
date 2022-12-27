import React from "react";
import styled from "styled-components";
import { Btn } from "./Button";

const Wrapper = styled.div`
  position: relative;
  min-width: 21.563rem;
  height: max-content;
`;

const InputForm = styled.input`
  --bgColor: #101146bf;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: normal;
  font-family: Roboto;
  border: 2px solid var(--bgColor);
  background-color: var(--bgColor);
  border-radius: 100px;
  width: 100%;
  line-height: 1.719rem;
  color: var(--primary);

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: var(--primary);
  }
`;

const Submit = styled(Btn)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: normal;
  font-family: Roboto;
`;

const Input: React.FC = () => {
  return (
    <Wrapper>
      <InputForm placeholder="Email Address" />
      <Submit $variant="primary">Submit</Submit>
    </Wrapper>
  );
};

export default Input;
