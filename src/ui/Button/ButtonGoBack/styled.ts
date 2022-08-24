import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.color.primary};
  font-family: ${theme.typography.regular};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  padding-left: 5.5px;
`;
