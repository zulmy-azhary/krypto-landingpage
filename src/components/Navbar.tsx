import { useMediaQuery } from "@hooks";
import { SubHeading } from "@styles/SharedComponents";
import { theme } from "@styles/theme";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: calc(var(--mobile) / 1.125);
  padding: 1.5rem 0;
  
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.125);
    padding: 2.5rem 0;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    width: calc(var(--laptop) / 1.25);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 1.35);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(SubHeading)`
  font-family: var(--outfit);
  text-transform: uppercase;
  font-weight: bold;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: align-items;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    column-gap: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    column-gap: 3rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    column-gap: 6.5rem;
  }
`;

const Item = styled(SubHeading)`
  font-family: var(--outfit);
  font-weight: 300;
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }
`;

const Navbar: React.FC = () => {
  const isTablet = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  return (
    <Header>
      <Nav>
        <Brand>Krypto</Brand>
        {isTablet && (
          <List>
            <Item as="li">about</Item>
            <Item as="li">pricing</Item>
            <Item as="li">contact</Item>
            <Item as="li">buy nfts</Item>
          </List>
        )}
      </Nav>
    </Header>
  );
};

export default Navbar;
