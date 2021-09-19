import styled, { css } from 'styled-components';
import { ModalProps } from '.';

type Props = Pick<ModalProps, 'open'>;

export const Modal = styled.div<Props>`
  ${({ open }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: ${open ? 'block' : 'none'};
  `}
`;

export const ContentModal = styled.div`
  ${({ theme }) => css`
    width: 73.6rem;
    height: 52.8rem;
    border-radius: 2rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.colors.shape1};
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: rgba(18, 57, 82, 0.3);
    backdrop-filter: blur(1.2px);
  `}
`;

export const MainModal = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 3.2rem;
  `}
`;
export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 9.6rem;
    padding: 4rem 3.2rem;
    border-bottom: 1px solid ${theme.colors.shape02};
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      flex: 1;
    }

    button {
      background: transparent;
      padding: ${theme.spacings.xxsmall};
      border-radius: 1rem;
      width: 4rem;
      height: 4rem;
      border: 1px solid ${theme.colors.complement};
      cursor: pointer;

      svg {
        color: ${theme.colors.complement};
      }
    }
  `}
`;
