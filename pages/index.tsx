import { Footer, Navbar } from "@components";
import { Action, Analytics, Featured, Hero, Mobile, Testimonials } from "@section";
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
    width: var(--size);
    height: var(--size);
    position: absolute;
    border-radius: 50%;
    z-index: -9999;
    user-select: none;
  }

  &:before {
    --size: 400px;
    background-color: var(--secondary);
    opacity: 0.75;
    top: -10rem;
    left: -10rem;
    filter: blur(125px);
  }

  &:after {
    --size: 400px;
    background-color: var(--accent);
    opacity: 0.65;
    right: -15rem;
    top: 12rem;
    filter: blur(150px);
  }

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    &:before {
      --size: 700px;
      top: -17.5rem;
      left: -17.5rem;
      filter: blur(150px);
    }

    &:after {
      --size: 600px;
      right: -23rem;
      top: 15.125rem;
      filter: blur(200px);
    }
  }

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    &:before {
      --size: 918px;
    }

    &:after {
      --size: 806px;
      right: -23rem;
      top: 10.125rem;
    }
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

  @media (min-width: ${(props) => props.theme.media.laptop}) {
    width: calc(var(--laptop) / 1.25);
    padding: 3rem 0;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 1.35);
    padding-bottom: 15.125rem;
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
          <Mobile />
          <Testimonials />
          <Action />
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
