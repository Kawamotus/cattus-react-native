import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const BackContainer = styled.View`
  margin-top: 28px;
  height: 56px;
  padding: 8px;
  background-color: ${({ theme }: any) => theme.background};
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: row;
`;

export const ScrollContainer = styled.ScrollView``;

export const VideoContainer = styled.View``;

export const PetsContainer = styled.View`
  padding: 8px;
`;

export const Clickable = styled(TouchableOpacity)`
  position: absolute;
  left: 8px;
`;

export const CameraTitle = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme }: any) => theme.text};
  font-size: 20px;
`;

export const TitlePets = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
`;
