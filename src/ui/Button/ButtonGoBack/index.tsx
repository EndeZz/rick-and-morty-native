import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from 'src/navigation';
import { ArrowLeftIcon } from 'src/ui';
import { ButtonText, ButtonWrapper } from './styled';

interface ButtonGoBackProps {
  onPress?: () => void;
}

export const ButtonGoBack: FC<ButtonGoBackProps & TouchableOpacityProps> = ({
  onPress,
}) => {
  const { goBack } = useNavigation();

  const handleOnPress = () => (onPress ? onPress() : goBack());

  return (
    <ButtonWrapper onPress={handleOnPress}>
      <ArrowLeftIcon />
      <ButtonText>Back</ButtonText>
    </ButtonWrapper>
  );
};
