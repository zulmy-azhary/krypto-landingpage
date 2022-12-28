import styled from "styled-components";

export const Text = styled.p<{ maxWidth?: string }>`
  width: 100%;
  font-weight: 400;
  letter-spacing: 1px;

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    font-size: 1.125rem;
    line-height: 1.719rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: ${(props) => props.maxWidth};
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

export const Heading = styled.h3`
  letter-spacing: 10%;
  line-height: 1.719rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--primary);

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

export const Layout = styled.div`
  width: calc(var(--mobile) / 1.125);
  
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.125);
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    width: calc(var(--laptop) / 1.25);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 1.35);
  }
`;