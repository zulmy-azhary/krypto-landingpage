import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  min-height: 100vh;
`;

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Main>
        <h1>Hello World</h1>
      </Main>
    </>
  );
};

export default HomePage;
