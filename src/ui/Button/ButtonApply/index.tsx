import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonApplyTitle, ButtonApplyWrapper } from './styled';

interface IButtonApply {
  onPress?: () => void;
}

export const ButtonApply: FC<IButtonApply & TouchableOpacityProps> = ({
  onPress,
}) => (
  <ButtonApplyWrapper onPress={onPress}>
    <ButtonApplyTitle>Apply</ButtonApplyTitle>
  </ButtonApplyWrapper>
);
