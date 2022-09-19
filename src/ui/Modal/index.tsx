import React, { FC } from 'react';
import { Modal as ModalElement } from 'react-native';
import { ButtonGoBack } from '../Button';
import { Title, ModalHeader } from './styled';

interface ModalProps {
  title: string;
  isVisible: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({
  title,
  isVisible,
  onPress,
  children,
}) => (
  <ModalElement visible={isVisible} animationType="slide">
    <ModalHeader>
      <ButtonGoBack onPress={onPress} />
      <Title>{title}</Title>
    </ModalHeader>
    {children}
  </ModalElement>
);
