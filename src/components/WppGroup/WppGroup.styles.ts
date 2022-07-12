import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export const Logo = styled.div`
  width: 49.4px;
  height: 50.5px;

  background: url("/images/wpp-logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  a {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Tooltip = styled.div<{ show: boolean }>`
  position: absolute;
  top: -5rem;
  right: 0;
  width: 14rem;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 32px -4px ${({ theme }) => theme.palette.grayScale[400]};
  font-family: "Montserrat";
  font-size: 0.8rem;
  line-height: 1.2rem;
  transition: opacity 0.3s;

  opacity: ${({ show }) => (show ? 1 : 0)};
`;
