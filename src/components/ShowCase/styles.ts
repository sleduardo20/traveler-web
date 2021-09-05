import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    width: 120rem;
    height: 28.6rem;
    background-color: ${theme.colors.shape1};

    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${theme.colors.shape02};
    border-radius: 1.6rem;
  `}
`;

export const Info = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xxxlarge};
    color: ${theme.colors.title};
    align-items: flex-start;
    justify-content: center;

    span {
      display: flex;
      width: 12rem;
      height: 3.2rem;
      border-radius: 10rem;
      background: ${theme.colors.orange};
      color: ${theme.colors.shape1};
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.medium};
      text-align: center;
      align-items: center;
      justify-content: center;
      margin-bottom: ${theme.spacings.medium};

      svg {
        color: ${theme.colors.shape1};
        margin-right: ${theme.spacings.xxsmall};
      }
    }

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.medium};
      line-height: ${theme.spacings.medium};
    }

    p {
      margin-top: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family.roboto};
      line-height: ${theme.spacings.small};
    }
  `}
`;

export const Image = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 60rem;
    height: 28.6rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0 1.6rem 1.6rem 0;
    }
  `}
`;
