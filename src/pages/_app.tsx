import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';
import store from './../store';
import { Provider } from 'react-redux';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
