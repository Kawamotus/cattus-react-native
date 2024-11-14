import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerBody = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;

export const ContainerButton = styled.View`
  align-items: flex-end;
`;

export const ButtonNew = styled(TouchableOpacity)`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }: any) => theme.green400};
  border-radius: 4px;
  margin: 10px;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme }: any) => theme.text};
`;
