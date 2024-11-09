import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.background};
`;

export const BackContent = styled.View`
  margin-top: 28px;
  height: 56px;
  padding: 8px;
  background-color: ${({ theme }: any) => theme.background};
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: row;
`;

export const Clickable = styled(TouchableOpacity)`
  position: absolute;
  left: 8px;
`;

export const ClickableLogout = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 80px;
`;

//animal data

export const PicAnimal = styled.Image`
  width: 360px;
  height: 360px;
`;

export const TextAnimalName = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 24px;
  color: ${({ theme }: any) => theme.text};
`;

export const BoxContainer = styled.View`
  flex-direction: row;
`;

export const Box = styled.View`
  background-color: ${({ theme }: any) => theme.black300};
  width: 88px;
  height: 72px;
  border-radius: 8px;
  margin: 12px;
  align-items: center;
  justify-content: center;
`;

export const BoxTitle = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
`;

export const BoxData = styled.Text`
  color: ${({ theme }: any) => theme.green300};
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  text-align: center;
`;

export const AboutContainer = styled.View`
  padding: 16px;
  padding-top: 0;
`;

export const AboutTitle = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
`;

export const AboutData = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-family: ${({ theme }: any) => theme.font};
  font-size: 16px;
  text-align: justify;
`;
