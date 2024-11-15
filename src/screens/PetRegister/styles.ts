import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerScroll = styled.ScrollView`
  flex: 1;
`;

export const ContainerImage = styled.View`
  width: 360px;
  height: 110px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContainerForm = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 8px;
`;

export const ContainerGallery = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-bottom: 8px;
  max-height: 500px;
`;

export const Picture = styled.Image`
  max-width: 200px;
  max-height: 105px;
`;

export const ButtonGallery = styled(TouchableOpacity)`
  width: 158px;
  height: 50px;
  background-color: ${({ theme }: any) => theme.purple400};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
