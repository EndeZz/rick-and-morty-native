import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const SearchItemWrapper = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${theme.color.gray4};
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  margin-bottom: 20px;
`;

export const SearchFilterInfo = styled.View`
  margin-left: 13px;
`;

export const SearchFilterTitle = styled.Text`
  font-family: ${theme.typography.black};
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: ${theme.color.black};
`;

export const SearchFilterCaption = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: ${theme.color.additional_text};
`;

export const InputContainer = styled.View`
  border-bottom-width: 1px;
  border-color: ${theme.color.gray5};
`;
