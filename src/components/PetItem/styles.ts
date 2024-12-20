import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type AlertColorType = "ok" | "alert" | "danger";

type Props = { type: AlertColorType };

export const Container = styled(TouchableOpacity)<Props>`
  width: 320px;
  height: 130px;
  background-color: ${({ theme }: any) => theme.black300};
  border-radius: 10px;
  flex-direction: row;
  margin: 6px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border-width: 4px;
  border-color: ${({ theme }: any) => theme.background};
  object-fit: cover;
`;

export const TextContainer = styled.View`
  margin-left: 8px;
`;

export const PicAndText = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-left: 12px;
  max-width: 208px;
  max-height: 48px;
`;

export const Color = styled.View<Props>`
  background-color: ${({ theme, type }: any) =>
    type == "ok"
      ? theme.ok
      : type == "alert"
      ? theme.alert
      : type == "danger"
      ? theme.danger
      : theme.gray400};
  width: 4px;
  border-radius: 4px 0px 0px 4px;
`;

export const PetName = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }: any) => theme.fontBold};
  color: ${({ theme }: any) => theme.text};
`;

export const DataText = styled.Text`
  margin-top: 3px;
  color: ${({ theme }: any) => theme.text};
  font-size: 16px;
  font-family: ${({ theme }: any) => theme.font};
`;
