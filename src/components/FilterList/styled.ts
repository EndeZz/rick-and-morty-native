import { LineWrapper } from 'src/ui/Line/styled';
import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const FilterTitle = styled.Text`
  font-family: ${theme.typography.regular};
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.24px;
  padding-left: 16px;
  padding-bottom: 8px;
  color: ${theme.color.gray1};
`;

export const FilterContent = styled.View`
  margin-bottom: 30px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${theme.color.gray4};
`;

export const FilterLine = styled(LineWrapper)`
  margin-left: 54px;
`;
