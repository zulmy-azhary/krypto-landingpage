import { accent, primary, secondary } from "@styles/SharedStyles";
import React from "react";
import styled from "styled-components";

export const Btn = styled.button<{ $variant: BtnVariant }>`
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
  padding: 0.5rem 1.5rem;
  width: fit-content;

  /* Primary */
  ${(props) => props.$variant === "primary" && primary};

  /* Secondary */
  ${(props) => props.$variant === "secondary" && secondary};

  /* Accent */
  ${(props) => props.$variant === "accent" && accent};

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 1.25rem;
    padding: 1.5rem 3.5rem;
  }
`;

type BtnVariant = "primary" | "secondary" | "accent";

interface Props {
  variant: BtnVariant;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({ variant, children }) => {
  return <Btn $variant={variant}>{children}</Btn>;
};

export default Button;
