import { createGlobalStyle } from "styled-components";

import { mediaQueries } from "@utils/constants";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "BebasNeue";
    src: url("/fonts/BebasNeue.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Chloe";
    src: url("/fonts/Chloe.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  /* Tablet */
  @media ${mediaQueries.tablet} {
    html {
      font-size: 93.75%;
    }
  }

  /* Mobile */
  @media ${mediaQueries.mobile} {
    html {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${({ theme }) => theme.palette.grayScale[0]};
    color: ${({ theme }) => theme.palette.grayScale[800]};
    font-family: 'Montserrat';
    min-height: 100vh;
  }

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
`;
