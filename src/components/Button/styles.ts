import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "purple" | "green";

type Props = {
  type: ButtonTypeStyleProps;
};

export const StyledButton = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  width: 320px;
  background-color: ${({ theme, type }: any) =>
    type === "green"
      ? theme.green400
      : type === "danger"
      ? theme.danger
      : type === "purple"
      ? theme.purple300
      : theme.green400};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const StyledButtonText = styled.Text`
  font-size: 20px;
  color: ${({ theme }: any) => theme.white100};
  font-family: ${({ theme }: any) => theme.font};
`;
