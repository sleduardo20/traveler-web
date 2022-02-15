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

export const TopSection = styled.section``;
