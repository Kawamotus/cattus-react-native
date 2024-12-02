import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerCharts = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
  margin-top: 12px;
`;

export const ContainerData = styled.View`
  margin-left: 12px;
  margin-bottom: 12px;
`;

export const ContainerImage = styled(TouchableOpacity)`
  height: 200px;
  width: 200px;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 20px;
  color: ${({ theme }: any) => theme.text};
  padding-bottom: 4px;
  padding-top: 8px;
`;

export const ContainerAlignCenter = styled.View`
  align-items: center;
  gap: 21px;
  flex-direction: row;
`;

export const SquareButton = styled(TouchableOpacity)`
  width: 68px;
  height: 68px;
  background-color: ${({ theme }: any) => theme.green400};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
