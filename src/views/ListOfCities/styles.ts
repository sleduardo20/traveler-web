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
    border-bottom: 1px solid ${theme.colors.shape02};

    span {
      cursor: pointer;
      padding-bottom: ${theme.spacings.xsmall};

      &.active {
        position: relative;
        font-weight: ${theme.font.bold};
        color: ${theme.colors.title};
        border-bottom: 2px solid ${theme.colors.orange};
      }
    }
  `}
`;

export const PlacesSection = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.medium};
  `}
`;
