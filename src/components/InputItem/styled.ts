import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const InputWrapper = styled.View`
  height: 36px;
  margin: 8px 16px 8px;
  border-radius: 10px;
  background-color: ${theme.color.input_bg};
  flex-direction: row;
  align-items: center;
`;

export const VoiceIconContainer = styled.View`
  position: absolute;
  right: 10px;
`;

export const SearchIconContainer = styled.View`
  position: absolute;
  left: 10px;
`;
