import '../.jest/next-image.mock';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import {ModalProvider} from '../src/hooks/useModal'

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

addDecorator((story)=>(
  <ModalProvider>
    <ThemeProvider theme={theme}>
      {story()}
      <GlobalStyles/>
    </ThemeProvider>
  </ModalProvider>
  
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'blog',
    values: [
      {
        name: 'blog',
        value: '#FFFFFF',
      },

    ],
  },
};

