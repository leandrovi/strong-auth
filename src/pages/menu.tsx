import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import { useAuth } from "../hooks/AuthContext";
import { mediaQueries, WIDTH_CONTAINER } from "@utils/constants";
import { Paragraph, TitleMain } from "@components/Typography/Typography";
import { MenuOptions } from "@components/MenuOptions/MenuOptions";
import { WppGroup } from "@components/WppGroup/WppGroup";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  background: ${({ theme }) => theme.palette.red[500]};
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

  p {
    color: white;
    font-weight: bold;
  }

  @media ${mediaQueries.tablet} {
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-family: "BebasNeue";
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.grayScale[0]};
  margin-bottom: -0.5rem;
  margin-left: 0.8rem;
`;

export const BgImage = styled.div`
  width: 40vw;
  height: 35vw;

  background: url("/images/flowers-drawing-white.png");
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

const Menu: NextPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Conferência Forte | Menu</title>
      </Head>

      <Main>
        <Container>
          <Title>Conferência</Title>
          <TitleMain color="#FFFFFF">Forte</TitleMain>
          <Paragraph maxWidth={400}>
            Obrigado por participar da Conferência Flores 2022.
          </Paragraph>
          <Paragraph maxWidth={400}>Nos vemos no ano que vem!</Paragraph>
        </Container>

        <BgImage />
      </Main>

      <WppGroup />
    </>
  );
};

export default Menu;
