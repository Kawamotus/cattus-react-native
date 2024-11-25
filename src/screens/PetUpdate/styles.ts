import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerImage = styled.View`
  width: 360px;
  height: 360px;
`;

export const ContainerBody = styled.View`
  align-items: center;
`;

export const ContainerData = styled.View`
  margin-top: 8px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ContainerTwoRows = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 4px;
`;

export const TitleData = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme, black }: any) =>
    black == true ? theme.background : theme.text};
  font-size: 16px;
  margin-bottom: 4px;
`;

//a ordem que os parâmetros são passados importa
export const SelectButtonTwoOptions = styled(TouchableOpacity)`
  width: 154px;
  height: 52px;
  background-color: ${({ theme }: any) => theme.black300};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px;
  border-color: ${({ theme, type }: any) =>
    type == true ? theme.green300 : theme.black300};
`;

export const SelectButtonColorWithThreePerLine = styled(TouchableOpacity)`
  width: 100px;
  height: 52px;
  background-color: ${({ theme, type }: any) =>
    type == "laranja"
      ? theme.orange
      : type == "cinza"
      ? theme.gray
      : type == "preto"
      ? theme.black
      : type == "branco"
      ? theme.white
      : type == "marrom"
      ? theme.brown
      : type == "mesclada"
      ? theme.mesclada
      : theme.black300};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
