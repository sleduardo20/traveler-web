/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/GlobalStyles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Traveler</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />

        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
