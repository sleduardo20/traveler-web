import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type Props = Pick<ButtonProps, 'size' | 'color'>;

const modifier = {
  blueLow: (theme: DefaultTheme) => css`
    background: ${theme.colors.blueLow};
    color: ${theme.colors.blue};
    font-weight: ${theme.font.medium};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
    color: ${theme.colors.shape1};
    font-weight: ${theme.font.normal};
  `,
  large: () => css`
    width: 32.9rem;
    height: 7.2rem;
  `,
  small: () => css`
    width: 17.4rem;
    height: 4.8rem;
  `,
};

export const Container = styled.button<Props>`
  ${({ theme, color, size }) => css`
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    font-family: ${theme.font.family.roboto};
    line-height: 2.4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.98);
    }

    ${!!color && modifier[color](theme)}
    ${!!size && modifier[size]}
  `}
`;
