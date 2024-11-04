import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type AlertColorType = "ok" | "alert" | "danger";

type Props = { type: AlertColorType };

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>
    type === "ok"
      ? theme.ok
      : type === "alert"
      ? theme.alert
      : type === "danger"
      ? theme.danger
      : theme.gray400};
  width: 320px;
  height: 130px;

  padding: 15px;
  border-color: ${({ theme }) => theme.green300};
  border-radius: 10px;
  flex-direction: row;
  margin: 6px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #fff;
`;

export const TextContainer = styled.View`
  margin-left: 10px;
`;

export const PetName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.text};
`;

export const DataText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.font};
`;
