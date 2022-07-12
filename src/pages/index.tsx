import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useAuth } from "../hooks/AuthContext";
import { mediaQueries, WIDTH_CONTAINER } from "@utils/constants";

import { TitleMain } from "@components/Typography/Typography";
import { Form } from "@components/Form/Form";
import { WppGroup } from "@components/WppGroup/WppGroup";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background: ${({ theme }) => theme.palette.pink[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  max-width: ${WIDTH_CONTAINER}px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${mediaQueries.tablet} {
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-family: "BebasNeue";
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.red[500]};
  margin-bottom: -0.5rem;
  margin-left: 0.8rem;
`;

export const BgImage = styled.div`
  width: 40vw;
  height: 35vw;

  background: url("/images/flowers-drawing.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  position: absolute;
  right: 0;
  bottom: 0;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

const Home: NextPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthenticated) router.push("/menu");
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Conferência Forte | Login</title>
      </Head>

      <Main>
        <Container>
          <Title>Conferência</Title>
          <TitleMain>Forte</TitleMain>
          <Form />
        </Container>

        <BgImage />
      </Main>

      <WppGroup />
    </>
  );
};

export default Home;
