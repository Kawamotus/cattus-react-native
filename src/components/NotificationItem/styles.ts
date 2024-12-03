import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 320px;
  height: 110px;
  align-items: center;
  background-color: ${({ theme }: any) => theme.black300};
  border-radius: 4px;
  margin-bottom: 12px;
  flex-direction: row;
`;

export const ContainerText = styled.View`
  max-width: 220px;
  height: 100px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 20px;
  color: ${({ theme }: any) => theme.text};
`;

export const TextData = styled.Text`
  font-family: ${({ theme }: any) => theme.font};
  font-size: 16px;
  color: ${({ theme }: any) => theme.text};
`;
