import { theme } from 'src/styles';
import styled from 'styled-components/native';

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
