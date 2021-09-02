import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type Props = Pick<ButtonProps, 'size' | 'color'>;

const modifier = {
  blueLow: (theme: DefaultTheme) => css`
    background: ${theme.colors.blueLow};
    color: ${theme.colors.blue};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
    color: ${theme.colors.shape1};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.shape1};
    font-weight: ${theme.font.normal};
  `,
  large: () => css`
    width: 32.9rem;
    height: 7.2rem;
  `,
  medium: () => css`
    width: 22.5rem;
    height: 4.8rem;
  `,
  small: (theme: DefaultTheme) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: ${theme.colors.shape1};
    border: 1.5px solid ${theme.colors.complement};
    padding: 0;
    justify-content: center;

    svg {
      color: ${theme.colors.complement};
      margin: 0;
      height: 2rem;
      width: 2rem;
    }
  `,
};

export const Container = styled.button<Props>`
  ${({ theme, color, size }) => css`
    border-radius: 0.4rem;
    border: none;
    cursor: pointer;
    font-family: ${theme.font.family.roboto};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    line-height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }

    span {
      flex: 1;
      margin-right: ${theme.spacings.xxsmall};
    }

    svg {
      height: 2.4rem;
      width: 2.4rem;
    }

    ${!!color && modifier[color](theme)}
    ${!!size && modifier[size](theme)}
  `}
`;
