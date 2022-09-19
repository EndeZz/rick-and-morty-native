import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const FilterBlockWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;

export const FilterInner = styled.View`
  width: 100%;
  margin-left: 13px;
  padding: 11px 0;
`;

export const FilterCaption = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.black};
`;
