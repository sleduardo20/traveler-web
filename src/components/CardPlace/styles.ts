import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 25.6rem;
    height: 30.7rem;
    position: relative;
    border: 1px solid ${theme.colors.shape02};
    border-radius: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Ribbon = styled.div`
  ${({ theme }) => css`
    width: 5.6rem;
    height: 8.3rem;
    border-radius: ${theme.spacings.xxsmall};
    position: absolute;
    top: -24px;
    left: 29px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(180deg, #f25d27, #d05d00, #f25d27);
    background-size: 600% 600%;

    -webkit-animation: backgroundAnimation 3s ease infinite;
    -moz-animation: backgroundAnimation 3s ease infinite;
    animation: backgroundAnimation 3s ease infinite;

    @-webkit-keyframes backgroundAnimation {
      0% {
        background-position: 50% 0%;
      }
      50% {
        background-position: 51% 100%;
      }
      100% {
        background-position: 50% 0%;
      }
    }
    @-moz-keyframes backgroundAnimation {
      0% {
        background-position: 50% 0%;
      }
      50% {
        background-position: 51% 100%;
      }
      100% {
        background-position: 50% 0%;
      }
    }
    @keyframes backgroundAnimation {
      0% {
        background-position: 50% 0%;
      }
      50% {
        background-position: 51% 100%;
      }
      100% {
        background-position: 50% 0%;
      }
    }

    svg {
      color: ${theme.colors.shape1};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    small {
      color: ${theme.colors.shape1};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.medium};
      line-height: ${theme.spacings.small};
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 16rem;

    img {
      border-radius: ${theme.spacings.xsmall} ${theme.spacings.xsmall} 0 0;
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.shape02};

    strong {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      line-height: ${theme.spacings.small};
      color: ${theme.colors.title};
    }
  `}
`;

export const TypePlace = styled.div`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall};

    span {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.medium};
      line-height: ${theme.spacings.small};
      color: ${theme.colors.text};
    }

    svg {
      color: ${theme.colors.orange};
    }
  `}
`;
