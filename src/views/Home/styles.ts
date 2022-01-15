import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const TopLeft = styled.section`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 13.8rem;
      width: 32.9rem;
      color: ${theme.colors.title};
      font-size: calc(${theme.font.sizes.xlarge} * 4);
    }

    p {
      margin-top: 4rem;
      width: 32.9rem;
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.xlarge};
      line-height: 3rem;
    }

    button {
      margin-top: 4.8rem;
    }
  `}
`;

export const Places = styled.section`
  width: 64rem;
  padding-top: 8rem;
  max-height: 90rem;
  overflow-y: hidden;
`;
