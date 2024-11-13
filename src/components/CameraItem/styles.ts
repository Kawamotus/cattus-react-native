import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 160px;
  background-color: ${({ theme }: any) => theme.black300};
  height: 160px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 8px;
`;

export const CameraImage = styled.Image`
  width: 140px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 4px;
`;

export const CameraText = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
`;
