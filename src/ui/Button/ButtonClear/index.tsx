import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonClearTitle, ButtonClearWrapper } from './styled';

interface IButtonClear {
  onPress?: () => void;
}

export const ButtonClear: FC<IButtonClear & TouchableOpacityProps> = ({
  onPress,
}) => (
  <ButtonClearWrapper onPress={onPress}>
    <ButtonClearTitle>Clear</ButtonClearTitle>
  </ButtonClearWrapper>
);
