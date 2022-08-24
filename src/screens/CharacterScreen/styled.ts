import { theme } from 'src/styles';
import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding-left: 9px;
  padding-right: 23px;
`;
export const Title = styled.Text`
  font-family: ${theme.typography.bold};
  font-size: 34px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: ${theme.color.black};
  margin-bottom: 19px;
`;
export const List = styled.FlatList`
  padding-top: 10px;
  padding-left: 9px;
  padding-right: 23px;
  flex: 1;
`;
