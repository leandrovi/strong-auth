import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

import { useAuth } from "../hooks/AuthContext";
import { mediaQueries, WIDTH_CONTAINER } from "@utils/constants";
import { TitleTwo } from "@components/Typography/Typography";

const sessions = [
  {
    video:
      "https://player.vimeo.com/video/729071558?h=365ee262c2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    title: "Sessão 1",
  },
  {
    video: "Sessão 2",
    title:
      "https://player.vimeo.com/video/729072273?h=4e502029e0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  // {
  //   video: "",
  //   title: "",
  // },
];

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0;
  background: ${({ theme }) => theme.palette.grayScale[900]};
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

export const Videos = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const VideoWrapper = styled.div`
  width: 301px;
  height: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem 1.8rem;
  position: relative;
  display: block;
  z-index: 10;

  h2 {
    color: ${({ theme }) => theme.palette.pink[500]};
    text-align: center;
    font-family: "Chloe";
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    padding: 56.25% 0 0 0;
    position: relative;
  }

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  a {
    color: ${({ theme }) => theme.palette.pink[500]};
    font-size: 0.9rem;
    margin-top: 1rem;
    text-align: center;
    width: 100%;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Flower = styled.div`
  width: 230px;
  height: 230px;

  position: absolute;
  top: 40px;
  right: 0;

  background: url("/images/yellow-flower.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

export const GoBack = styled.div`
  color: ${({ theme }) => theme.palette.grayScale[0]};
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    svg {
      margin-right: 0.6rem;
    }
  }
`;

const Sessoes: NextPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Conferência Forte | Sessões</title>
      </Head>

      <Main>
        <Container>
          <GoBack>
            <Link href="/menu">
              <a>
                <FaArrowLeft />
                Voltar
              </a>
            </Link>
          </GoBack>
          <TitleTwo color="#EE9BB5">Sessões Passadas</TitleTwo>

          <Videos>
            {sessions.map(({ video, title }) => (
              <VideoWrapper key={video}>
                <h2>{title}</h2>
                <div>
                  <iframe
                    src={video}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Masterclass - Abra&amp;ccedil;ando a Natureza da Mulher - Conf&amp;ecirc;ncia Flores 2022"
                  ></iframe>
                </div>
              </VideoWrapper>
            ))}
          </Videos>
        </Container>

        <Flower />
      </Main>
    </>
  );
};

export default Sessoes;
