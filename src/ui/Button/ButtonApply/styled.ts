import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const ButtonApplyWrapper = styled.TouchableOpacity`
  border-radius: 14px;
  background-color: ${theme.color.primary};
`;

export const ButtonApplyTitle = styled.Text`
  color: ${theme.color.white};
  font-family: ${theme.typography.black};
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.08px;
  text-transform: uppercase;
  padding: 5px 12px;
`;
