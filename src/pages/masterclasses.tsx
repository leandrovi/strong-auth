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

const masterclasses = [
  "https://www.youtube.com/embed/_YsoOSFF4jg",
  "https://www.youtube.com/embed/x0zcj2G-B8k",
  "https://www.youtube.com/embed/cRprO1yrRuY",
  "https://www.youtube.com/embed/lvMRewk478c",
  "https://www.youtube.com/embed/0rpZ8rxfbfY",
  "https://www.youtube.com/embed/36yAFkxmbzw",
  "https://www.youtube.com/embed/9YPvIKDoRPw",
  "https://www.youtube.com/embed/l26qxqK4x0A",
  "https://www.youtube.com/embed/K7dskzCTg1Q",
  "https://www.youtube.com/embed/VNMYx5IjXxo",
  "https://www.youtube.com/embed/NVgZn7dVE0s",
  "https://www.youtube.com/embed/Ir7PHTqk_CE",
  "https://www.youtube.com/embed/UR2LQpzJmRs",
  "https://www.youtube.com/embed/FponXUC9hj8",
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
  height: 193px;
  margin: 2rem;
  position: relative;
  display: block;
  z-index: 10;

  &::before {
    display: block;
    content: "";
    padding-top: 56.25%;
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

const Masterclasses: NextPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Conferência Forte | Masterclasses</title>
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
          <TitleTwo color="#EE9BB5">Masterclasses</TitleTwo>

          <Videos>
            {masterclasses.map((masterclass) => (
              <VideoWrapper key={masterclass}>
                <iframe
                  src={masterclass}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
            ))}
          </Videos>
        </Container>

        <Flower />
      </Main>
    </>
  );
};

export default Masterclasses;
