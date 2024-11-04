import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

//fazer um jeito de mudar a cor de acordo com o nível de alerta
export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  width: 300px;
  height: 300px;
  border-width: 2px;

  border-color: ${({ theme }) => theme.green300};
  border-radius: 10px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
