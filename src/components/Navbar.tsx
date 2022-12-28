import { useMediaQuery } from "@hooks";
import { Heading, Layout, Text } from "@styles/SharedComponents";
import { theme } from "@styles/theme";
import React from "react";
import styled from "styled-components";

const Header = styled(Layout)`
  padding: 1.5rem 0;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    padding: 2.5rem 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Heading)`
  font-family: var(--outfit);
  font-weight: bold;
`;

const List = styled.ul`
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

const Item = styled(Text)`
  font-family: var(--outfit);

  &:hover {
    color: var(--accent);
  }
`;

const Navbar: React.FC = () => {
  const isTablet = useMediaQuery(`(min-width: ${theme.media.tablet})`);
  return (
    <Header as="header">
      <Nav>
        <Brand>Krypto</Brand>
        {isTablet && (
          <List>
            {["about", "pricing", "contact", "buy nfts"].map((item) => (
              <li key={item}>
                <Item as="a" href="#">
                  {item}
                </Item>
              </li>
            ))}
          </List>
        )}
      </Nav>
    </Header>
  );
};

export default Navbar;
