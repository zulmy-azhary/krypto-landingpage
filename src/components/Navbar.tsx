import { SubHeading } from "@styles/SharedComponents";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  padding: 2.5rem 11.75rem;
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
  column-gap: 6.5rem;
`;

const Item = styled(SubHeading)`
  font-family: var(--outfit);
  font-weight: 300;
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <Brand>Krypto</Brand>
        <List>
          <Item as="li">about</Item>
          <Item as="li">pricing</Item>
          <Item as="li">contact</Item>
          <Item as="li">buy nfts</Item>
        </List>
      </Nav>
    </Header>
  );
};

export default Navbar;
