import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.background};
`;

export const Clickable = styled(TouchableOpacity)`
  margin-top: 20px;
`;

export const ClickableLogout = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const ProfilePic = styled.Image`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
  margin-top: 8px;
  max-width: 250px;
  text-align: center;
`;

export const Logout = styled.Text`
  font-family: ${({ theme }: any) => theme.font};
  font-size: 20px;
  color: ${({ theme }: any) => theme.danger};
  margin-right: 8px;
`;

export const TextManage = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 20px;
  color: ${({ theme }: any) => theme.text};
`;
