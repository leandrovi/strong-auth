import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="pt-br">
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <meta name="description" content="Conferência Flores | Login" />
          <meta
            property="og:description"
            content="Conferência Flores | Login"
          />

          <meta property="og:title" content="Conferência Flores | Login" />
          <meta
            property="og:url"
            content="https://conferencia.movimentoflores.com.br"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://downloads.adai.com.br/logo-flores.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Montserrat:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
