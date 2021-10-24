import { useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import * as S from './styles';
import { IconClose } from '../../constants/Icons';

export type ModalProps = {
  open: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
};

export const Modal = ({ children, header }: ModalProps) => {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const handleKeyup = ({ key }: KeyboardEvent) => {
      key === 'Escape' && closeModal();
    };

    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [closeModal]);

  return (
    <S.Modal open={isOpen}>
      <S.Overlay onClick={closeModal} />
      <S.ContentModal>
        <S.Header>
          <div>{header}</div>
          <button type="button" onClick={closeModal}>
            {IconClose}
          </button>
        </S.Header>
        <S.MainModal>{children}</S.MainModal>
      </S.ContentModal>
    </S.Modal>
  );
};
