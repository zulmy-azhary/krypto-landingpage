import { Heading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  background-color: #101146d8;
  width: 100%;
  min-height: 18.875rem;
  text-align: center;
  padding: 0 2.125rem 2.125rem;
  border-radius: 0.938rem;
  grid-column: span 12 / span 12;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    grid-column: span 6 / span 6;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    grid-column: span 4 / span 4;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    grid-column: span 3 / span 3;
  }
`;

const Profile = styled.div`
  margin: -2.75rem auto 0;
  position: relative;

  &:after {
    --size: 1.25rem;
    position: absolute;
    content: "";
    top: 0.5rem;
    right: 0;
    z-index: 9;
    width: var(--size);
    height: var(--size);
    background-color: var(--accent);
    mix-blend-mode: screen;
    border-radius: 50%;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    margin-top: -3.75rem;

    &:after {
      --size: 1.938rem;
      right: -0.25rem;
    }
  }
`;

const Image = styled.img`
  --size: 100px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  mix-blend-mode: luminosity;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    --size: 100px;
  }
  @media (min-width: ${(props) => props.theme.media.laptop}) {
    --size: 90px;
  }
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    --size: fit-content;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.563rem;
`;

interface Props {
  name: string;
  image: string;
  desc?: string;
}

const Card: React.FC<Props> = ({ name, image, desc }) => {
  return (
    <Container>
      <Profile>
        <Image src={`/assets/${image}.png`} alt={name} />
      </Profile>
      <Heading>{name}</Heading>
      <Description>
        {desc ??
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel."}
      </Description>
    </Container>
  );
};

export default Card;
