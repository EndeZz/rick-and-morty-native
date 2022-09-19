import React, { FC } from 'react';
import { theme } from 'src/styles';
import { Input, SearchIcon, VoiceIcon } from 'src/ui';
import {
  InputWrapper,
  SearchIconContainer,
  VoiceIconContainer,
} from './styled';

interface InputItemProps {
  onChangeText: (value: string) => void;
  value: string;
  placeholder: string;
}

export const InputItem: FC<InputItemProps> = ({
  onChangeText,
  value,
  placeholder,
}) => (
  <InputWrapper>
    <SearchIconContainer>
      <SearchIcon />
    </SearchIconContainer>

    <Input
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={theme.color.additional_text}
      keyboardType="default"
    />

    <VoiceIconContainer>
      <VoiceIcon />
    </VoiceIconContainer>
  </InputWrapper>
);
