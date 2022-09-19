import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const ButtonClearWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonClearTitle = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.primary};
`;
