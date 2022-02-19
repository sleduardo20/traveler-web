import styled, { css, DefaultTheme } from 'styled-components';
import { CardCityProps } from './CardCity';

type Props = Pick<CardCityProps, 'size'>;

const modifierContainer = {
  normal: () => css`
    width: 25.6rem;
    height: 26.6rem;
  `,
  large: () => css`
    width: 30.4rem;
    height: 31.6rem;
  `,
};

export const Container = styled.div<Props>`
  ${({ theme, size }) => css`
    background: ${theme.colors.shape1};
    border: 0.1rem solid ${theme.colors.shape02};
    border-radius: 2rem;
    transition: 0.2s;

    ${!!size && modifierContainer[size]}

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  `}
`;

const modifierImage = {
  normal: () => css`
    width: 25.41rem;
    height: 19.6rem;
  `,
  large: () => css`
    width: 30.22rem;
    height: 22.27rem;
  `,
};

export const Image = styled.div<Props>`
  ${({ size }) => css`
    position: relative;
    border-radius: 2rem 2rem;
    width: 25.41rem;
    height: 19.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${!!size && modifierImage[size]}

    img {
      border-radius: 2rem 2rem 0 0;
      width: 100%;
      height: 100%;
    }
  `}
`;

const modifierPlace = {
  normal: (theme: DefaultTheme) => css`
    margin: ${theme.spacings.xxsmall} 0 0 ${theme.spacings.medium};
    strong {
      font-family: ${theme.font.family.barlow};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      line-height: ${theme.spacings.medium};
      color: ${theme.colors.title};
    }

    span {
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      line-height: ${theme.spacings.small};
      color: ${theme.colors.text};
    }
  `,
  large: (theme: DefaultTheme) => css`
    margin: ${theme.spacings.xsmall} 0 0 ${theme.spacings.medium};
    strong {
      font-family: ${theme.font.family.barlow};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.title};
    }

    span {
      margin-top: ${theme.spacings.xxsmall};
      font-family: ${theme.font.family.roboto};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.text};
    }
  `,
};

export const Place = styled.article<Props>`
  ${({ theme, size }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${!!size && modifierPlace[size](theme)}
  `}
`;
