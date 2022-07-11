import * as React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "../hooks/AuthContext";

import { GlobalStyle } from "@styles/global";
import { theme } from "@styles/theme";
import { sleep } from "@utils/sleep";

import Loader from "@components/Loader/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await sleep(2000);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
