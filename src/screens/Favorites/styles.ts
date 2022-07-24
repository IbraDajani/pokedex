import {Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 10px;
`;
export const BackgroundImage = styled(Image)`
  width: 285px;
  height: 285px;
  left: 235px;
  top: -75px;
  position: absolute;
  opacity: 0.1;
`;
