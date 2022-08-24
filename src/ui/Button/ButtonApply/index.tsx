import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonApplyTitle, ButtonApplyWrapper } from './styled';

interface IButtonApply {
  onPress?: (event: GestureResponderEvent) => void;
}

export const ButtonApply: FC<IButtonApply> = ({ onPress }) => {
  return (
    <ButtonApplyWrapper onPress={onPress}>
      <ButtonApplyTitle>Apply</ButtonApplyTitle>
    </ButtonApplyWrapper>
  );
};
