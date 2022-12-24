import React from "react";
import styled from "styled-components";

const Btn = styled.button<{ $variant: BtnVariant }>`
  border-radius: 6.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--outfit);
  font-weight: 500;
  line-height: 1.719rem;
  letter-spacing: 10%;
  color: var(--primary);
  border: 2px solid var(--primary);
  cursor: pointer;
  letter-spacing: 2px;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1rem;
    padding: 1.25 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 1.25rem;
    padding: 1.5rem 3.5rem;
  }
`;

type BtnVariant = "Primary" | "Secondary" | "Accent";

interface Props {
  variant: BtnVariant;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({ variant, children }) => {
  let btnVariant: string;
  if (variant === "Primary") {
    btnVariant = "";
  }
  return <Btn $variant={variant}>{children}</Btn>;
};

export default Button;
