import styled from 'styled-components/native';
import Avatar from '~/components/Avatar';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
  justify-content: space-between;
  overflow: hidden;
  padding-right: 20px;
`;
export const ProfileContainer = styled.View`
  align-items: center;
`;
export const AvatarProfile = styled(Avatar)``;
export const ButtonContainer = styled.View`
  flex-direction: column;
  margin-bottom: 170px;
  /* background-color: gray; */
  /* border-radius: 24px; */
`;
export const BackgroundImage = styled.ImageBackground`
  width: 285px;
  height: 285px;
  left: -175px;
  top: -75px;
  position: absolute;
  opacity: 0.1;
`;
export const ButtonLogout = styled.TouchableOpacity`
  min-width: 51%;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  /* padding-left: 15px; */
  padding-bottom: 30px;
`;
export const ButtonLogoutText = styled(Text).attrs({
  size: 14,
  isBold: true,
})``;
