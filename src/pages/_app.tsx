/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from 'hooks/redux/store/store';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Traveler</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600;700&family=Roboto:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
