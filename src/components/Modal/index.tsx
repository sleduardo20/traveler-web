import { useState, useEffect } from 'react';
import * as S from './styles';
import { IconClose } from '../../constants/Icons';

export type ModalProps = {
  open: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
};

export const Modal = ({ children, header, open }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyup = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  const handleModal = () => {
    setIsOpen(state => !state);
  };
  return (
    <>
      <button type="button" onClick={handleModal}>
        Open Modal
      </button>
      <S.Modal open={isOpen}>
        <S.Overlay onClick={() => setIsOpen(false)} />
        <S.ContentModal>
          <S.Header>
            <div>{header}</div>
            <button type="button" onClick={handleModal}>
              {IconClose}
            </button>
          </S.Header>
          <S.MainModal>{children}</S.MainModal>
        </S.ContentModal>
      </S.Modal>
    </>
  );
};
