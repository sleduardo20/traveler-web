import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 41.6rem;
    height: 4.8rem;
    background: ${theme.colors.background};
    border-radius: 1rem;
    border: 1px solid ${theme.colors.shape02};
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    input {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.spacings.small};
      font-family: ${theme.font.family.roboto};
      color: ${theme.colors.title};
      position: absolute;
      padding: 0 ${theme.spacings.large};
      width: 100%;
      height: 100%;
      flex: 1;
      background: transparent;
      outline: none;
      border: none;

      &::placeholder {
        color: ${theme.colors.shape02};
      }
    }
  `}
`;

type SearchProps = {
  isFilled: boolean;
};
export const Search = styled.div<SearchProps>`
  ${({ theme, isFilled }) => css`
    svg {
      color: ${isFilled ? theme.colors.orange : theme.colors.shape02};
      transition: 0.3s;
    }
  `}
`;
export const Close = styled.div<SearchProps>`
  ${({ theme, isFilled }) => css`
    z-index: 5;
    cursor: pointer;
    display: ${isFilled ? 'block' : 'none'};

    svg {
      color: ${theme.colors.shape02};
    }
  `}
`;
