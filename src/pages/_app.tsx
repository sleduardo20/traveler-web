import { ModalProvider } from 'hooks/useModal';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextProgressBar from 'nextjs-progressbar';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Head>
          <title>Traveler</title>
          <link rel="shortcut icon" href="/img/icon-192.png" />
          <link rel="apple-touch-icon" href="/img/icon-192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Roboto:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
        <NextProgressBar
          color={`${theme.colors.orange}`}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
