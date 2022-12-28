import { Text } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  grid-column: span 2 / span 2;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    grid-column: span 1 / span 1;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const Title = styled(Text)`
  font-weight: 600;
`;

const Item = styled.a`
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`;

interface Props {
  name: string;
  list: string[];
}

const List: React.FC<Props> = ({ name, list }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <Ul>
        {list.map((item) => (
          <li key={item}>
            <Item href="#">{item}</Item>
          </li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default List;
