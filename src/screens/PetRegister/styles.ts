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
`;

export const Picture = styled.Image`
  max-width: 200px;
  max-height: 105px;
`;

export const ButtonGallery = styled(TouchableOpacity)`
  width: 110px;
  height: 50px;
  background-color: ${({ theme }: any) => theme.purple400};
  border-radius: 8px;
`;
