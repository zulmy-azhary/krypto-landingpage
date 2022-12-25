import styled from "styled-components";

export const BodyText = styled.p`
  font-weight: 400;
  letter-spacing: 1px;
  
  @media (min-width: ${props => props.theme.media.laptop}) {
    font-size: 1.125rem;
    line-height: 1.719rem;
  }
`;

export const MainHeader = styled.h1`
  font-family: var(--outfit);
  font-weight: bold;
  font-size: 1.5rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 3rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 5.438rem;
    line-height: 6.25rem;
  }
`;

export const SubHeading = styled.h3`
  font-weight: 500;
  letter-spacing: 10%;
  line-height: 1.719rem;
  font-size: 1rem;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1.25rem;
  }
`;

export const SubHeader = styled.h2`
  font-family: var(--outfit);
  font-weight: bold;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 3.563rem;
    line-height: 3.125rem;
  }
`;

export const Button = styled.button`
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

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 1.25rem;
    padding: 1.5rem 3.5rem;
  }
`;
