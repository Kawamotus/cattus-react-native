import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 60px;
  background-color: ${({ theme }) => theme.green400};
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
  font-family: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text};
`;

export const Clickable = styled(TouchableOpacity)``;
