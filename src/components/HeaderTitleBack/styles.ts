import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

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

export const TextTitle = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 24px;
  color: ${({ theme }: any) => theme.text};
`;
