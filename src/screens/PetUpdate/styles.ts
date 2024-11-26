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
  margin-top: 16px;
  gap: 12px;
  padding: 4px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const ContainerTwoRows = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0;
`;

export const ContainerSpaceBeetween = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 320px;
`;

export const ContainerAddVacc = styled.View`
  width: 320px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerItemVacc = styled.View`
  width: 320px;
  height: 24px;
  align-items: ${({ empty }: any) => (empty ? "center" : "")};
  justify-content: center;
`;

export const TitleData = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme, black }: any) =>
    black == true ? theme.background : theme.text};
  font-size: ${({ size }: any) => (size == "g" ? "20px" : "16px")};
`;

export const TextData = styled.Text`
  font-family: ${({ theme }: any) => theme.font};
  color: ${({ theme, black }: any) =>
    black == true ? theme.background : theme.text};
  font-size: ${({ size }: any) => (size == "g" ? "20px" : "16px")};
`;

export const TextDate = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme, black }: any) =>
    black == true ? theme.background : theme.text};
  font-size: 20px;
  margin-bottom: 4px;
  width: 154px;
  text-align: center;
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
    type ? theme.green300 : theme.black300};
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
      : type == "azul"
      ? theme.blue
      : type == "verde"
      ? theme.green
      : theme.black300};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: ${({ active }: any) => (active ? "2px" : 0)};
  border-color: ${({ theme, active }: any) =>
    active ? theme.green300 : theme.black300};
`;

export const CircleButton = styled(TouchableOpacity)`
  border-radius: 40px;
  height: 36px;
  width: 36px;
  background-color: ${({ theme }: any) => theme.black300};
  border: 2px;
  border-color: ${({ theme }: any) => theme.white};
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const SquareAddVacc = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 52px;
  background-color: ${({ theme }: any) => theme.black200};
  border-radius: 0 8px 8px 0;
`;

export const SelectDate = styled(TouchableOpacity)`
  height: 52px;
  width: 154px;
  background-color: ${({ theme }: any) => theme.purple400};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const InputVacc = styled.TextInput`
  height: 52px;
  width: 270px;
  border-radius: 8px 0 0 8px;
  color: ${({ theme }: any) => theme.white100};
  font-family: ${({ theme }: any) => theme.font};
  font-size: 16px;
  background-color: ${({ theme }: any) => theme.black200};
  padding: 8px;
`;
