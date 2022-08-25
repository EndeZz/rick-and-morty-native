import React, { FC } from 'react';
import { Modal as ModalElement } from 'react-native';
import { ButtonGoBack } from '../Button';
import { Title, ModalHeader } from './styled';

interface ModalProps {
  title: string;
  isVisible: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({
  title,
  isVisible,
  toggleModal,
  children,
}) => (
  <ModalElement visible={isVisible} animationType="slide">
    <ModalHeader>
      <ButtonGoBack onPress={toggleModal} />
      <Title>{title}</Title>
    </ModalHeader>
    {children}
  </ModalElement>
);
