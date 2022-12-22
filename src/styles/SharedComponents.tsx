import styled from "styled-components";

export const BodyText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.719rem;
`;

export const MainHeader = styled.h1`
  font-family: var(--outfit);
  font-size: 5.438rem;
  font-weight: bold;
  line-height: 6.25rem;
`;

export const SubHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.719rem;
  letter-spacing: 10%;
`;

export const SubHeader = styled.h2`
  font-family: var(--outfit);
  font-size: 3.563rem;
  font-weight: bold;
  line-height: 3.125rem;
`;

export const Button = styled.button`
  border-radius: 6.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.5rem 3.75rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.719rem;
  letter-spacing: 10%;
  color: var(--primary);
  border: 2px solid var(--primary);
  cursor: pointer;
`;
