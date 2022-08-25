import { theme } from 'src/styles';
import styled from 'styled-components/native';

export const ModalHeader = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 9px 15px;
`;

export const Title = styled.Text`
  font-family: ${theme.typography.black};
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: ${theme.color.black};
  position: absolute;
  left: 50%;
`;
