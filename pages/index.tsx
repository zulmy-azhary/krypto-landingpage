import { Navbar } from "@components";
import { Analytics, Featured, Hero } from "@section";
import { outfit } from "@styles/GlobalStyles";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: -9999;
    user-select: none;
  }

  &:before {
    --size: 918px;
    width: var(--size);
    height: var(--size);
    background-color: var(--secondary);
    opacity: 0.75;
    top: -17.5rem;
    left: -17.5rem;
    filter: blur(150px);
  }

  &:after {
    --size: 806px;
    width: var(--size);
    height: var(--size);
    background-color: var(--accent);
    opacity: 0.65;
    right: -23rem;
    top: 10.125rem;
    filter: blur(200px);
  }
`;

const Main = styled.main`
  width: calc(var(--mobile) / 1.125);
  display: flex;
  flex-direction: column;
  row-gap: 9.188rem;
  padding: 1.5rem 0;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.125);
  }

  @media (min-width: ${props => props.theme.media.laptop}) {
    width: calc(var(--laptop) / 1.25);
    padding: 3rem 0;
  }

  @media (min-width: ${props => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 1.35);
  }
`;

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krypto | Home Page</title>
      </Head>
      <Container className={outfit.variable}>
        <Navbar />
        <Main>
          <Hero />
          <Featured />
          <Analytics />
        </Main>
      </Container>
    </>
  );
};

export default HomePage;
