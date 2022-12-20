import { Navbar } from "@components";
import { outfit } from "@styles/GlobalStyles";
import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
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

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krypto | Home Page</title>
      </Head>
      <Main className={outfit.variable}>
        <Navbar />
      </Main>
    </>
  );
};

export default HomePage;
