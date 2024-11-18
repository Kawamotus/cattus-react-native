import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 68px;
  height: 68px;
  border-radius: 40px;
  border: 2px;
  border-color: ${({ theme, type }: any) =>
    type == "alert"
      ? theme.alert
      : type == "danger"
      ? theme.danger
      : type == "ok"
      ? theme.ok
      : theme.gray400};
  background-color: ${({ theme }: any) => theme.black300};
  margin-right: 8px;
`;
