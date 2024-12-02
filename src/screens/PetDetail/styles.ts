import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const Container = styled.View`
  flex: 1;
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

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
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
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  margin-top: 4px;
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
  padding: 24px;
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

export const ItemContainer = styled.View`
  padding: 24px;
  padding-top: 0;
  max-width: 400px;
`;

export const ItemContainerBox = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

export const ItemTitle = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ItemData = styled.Text`
  color: ${({ theme }: any) => theme.text};
  font-family: ${({ theme }: any) => theme.font};
  font-size: 16px;
  text-align: justify;
`;

export const ItemBox = styled.View`
  background-color: ${({ theme }: any) => theme.black200};
  border-radius: 16px;
  height: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 4px;
`;

export const ContainerPersonality = styled.View`
  padding: 8px;
`;
