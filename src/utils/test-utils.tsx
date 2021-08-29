import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const customRender = (
  children: ReactElement,
  { ...renderOptions }: RenderOptions = {},
) =>
  render(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render };
