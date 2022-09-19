import React, { FC } from 'react';
import { TextInputProps } from 'react-native';
import { InputElement } from './styled';

interface InputProps {
  onChangeText: (value: string) => void;
  value: string;
}

export const Input: FC<InputProps & TextInputProps> = ({
  onChangeText,
  value,
  ...attrs
}) => <InputElement onChangeText={onChangeText} value={value} {...attrs} />;
