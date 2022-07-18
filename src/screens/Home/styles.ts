import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 10px;
`;
export const HeaderTitle = styled(Text).attrs({
  size: 30,
  isBold: true,
})`
  margin-left: 20px;
`;

export const FlatListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.Image`
  width: 450px;
  height: 450px;
  position: absolute;
  left: 150px;
  top: -140px;
  opacity: 0.4;
`;
