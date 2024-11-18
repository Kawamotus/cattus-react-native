import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerProfiles = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ContainerImage = styled.View`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }: any) => theme.gray400};
  border-radius: 8px;
`;

export const ContainerProfile = styled(TouchableOpacity)`
  width: 140px;
  height: 160px;
  background-color: ${({ theme }: any) => theme.black200};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const TextName = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
  margin-top: 4px;
`;
