import { createContext, useState, useContext } from 'react';

type ModalDataProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContextData = createContext({} as ModalDataProps);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  console.log(isOpen);

  return (
    <ModalContextData.Provider value={{ closeModal, openModal, isOpen }}>
      {children}
    </ModalContextData.Provider>
  );
};

export const useModal = () => useContext(ModalContextData);
