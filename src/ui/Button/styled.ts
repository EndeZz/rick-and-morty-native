import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.color.primary};
  font-family: 'Roboto-Regular';
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  padding-left: 5.5px;
`;

export const FilterWrapper = styled.TouchableOpacity`
  padding-top: 11px;
  padding-bottom: 11px;
`;

export const FilterTitle = styled.Text`
  font-family: ${theme.typography.black};
  text-align: right;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.primary};
`;
