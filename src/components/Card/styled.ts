import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const CardItem = styled.TouchableOpacity`
  background-color: ${theme.color.white};
  width: 163px;
  height: 219px;
  border: 1px solid ${theme.color.gray5};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardImg = styled.Image`
  width: 100%;
  height: 140px;
`;

export const CardTitle = styled.Text`
  font-family: ${theme.typography.black};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.black};
`;

export const CardStatus = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
  color: ${theme.color.gray1};
`;

export const CardBox = styled.View`
  padding: 12px;
  height: 79px;
`;
