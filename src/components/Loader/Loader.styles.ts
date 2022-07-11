import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: ${(props) => props.theme.palette.grayScale[0]};
  opacity: 0.8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const logoLoading = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const LogoLoading = styled.div`
  width: 60px;
  height: 60px;
  background: url("/images/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  animation: ${logoLoading} 1s linear infinite;
`;
