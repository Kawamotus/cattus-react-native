import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 60px;
  background-color: ${({ theme }: any) => theme.background};
  margin-top: 28px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ProfilePicture = styled.Image`
  border-radius: 40px;
  width: 44px;
  height: 44px;
`;

export const CompanyName = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme }: any) => theme.text};
  max-width: 200px;
  text-align: center;
`;

export const Clickable = styled(TouchableOpacity)``<TouchableOpacityProps>;
