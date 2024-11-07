import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.background};
`;

export const BackContent = styled.View`
  margin-top: 28px;
  flex-direction: row;
  height: 56px;
  padding: 8px;
  background-color: ${({ theme }: any) => theme.background};
`;

export const Clickable = styled(TouchableOpacity)``;

export const ClickableLogout = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
`;

export const PicAnimal = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TextAnimalName = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
`;
