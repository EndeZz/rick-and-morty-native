import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { ArrowLeftIcon } from 'src/ui/Icon';
import { ButtonText, ButtonWrapper } from './styled';

interface ButtonGoBackProps {
  onPress?: () => void;
}

export const ButtonGoBack: FC<ButtonGoBackProps> = ({ onPress }) => {
  const { goBack } = useNavigation();

  const handleOnPress = () => (onPress ? onPress() : goBack());

  return (
    <ButtonWrapper onPress={handleOnPress}>
      <ArrowLeftIcon />
      <ButtonText>Back</ButtonText>
    </ButtonWrapper>
  );
};
