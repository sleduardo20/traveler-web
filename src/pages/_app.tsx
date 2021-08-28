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
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default App;
