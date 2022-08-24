import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { ArrowLeftIcon } from 'src/ui/Icon';
import { ButtonText, ButtonWrapper } from './styled';

export const ButtonGoBack: FC = () => {
  const { goBack } = useNavigation();

  return (
    <ButtonWrapper onPress={goBack}>
      <ArrowLeftIcon />
      <ButtonText>Back</ButtonText>
    </ButtonWrapper>
  );
};
