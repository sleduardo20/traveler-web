import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    height: 100vh;
    color: ${theme.colors.title};

    h1 {
      font-weight: ${theme.font.medium};
      font-size: 3.6rem;
    }
  `}
`;

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SortingOptions = styled.div``;

export const WrapperOption = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    color: ${theme.colors.complement};
    font-size: ${theme.font.sizes.medium};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.shape02};

    span {
      cursor: pointer;

      &.active {
        position: relative;
        font-weight: ${theme.font.bold};
        color: ${theme.colors.title};

        ::after {
          content: '';
          width: 90px; //verificar o tamanho exato para as outras opções
          height: 2px;
          left: 50%;
          transform: translate(-50%);
          background: ${theme.colors.orange};
          position: absolute;
          top: 33px;
        }
      }
    }
  `}
`;
