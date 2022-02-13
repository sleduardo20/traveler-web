import styled, { css } from 'styled-components';

type HeaderProps = {
  hasBorder: boolean;
};
export const Container = styled.header<HeaderProps>`
  ${({ theme, hasBorder }) => css`
    width: 100%;
    border-bottom: ${hasBorder ? `1px solid ${theme.colors.shape02}` : ''};
  `}
`;

export const Header = styled.header`
  width: 100%;
  flex: 1;
  height: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
