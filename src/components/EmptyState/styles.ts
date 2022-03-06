import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-top: ${({ theme }) => theme.spacings.small};
    text-align: center;
    font-weight: ${({ theme }) => theme.font.medium};
    color: ${({ theme }) => theme.colors.text};
  }
`;
