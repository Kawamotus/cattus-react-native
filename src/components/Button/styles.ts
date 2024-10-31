import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "purple" | "green";

type Props = {
  type: ButtonTypeStyleProps;
};

export const StyledButton = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;
  width: 300px;
  background-color: ${({ theme, type }) =>
    type === "green" ? theme.green400 : theme.purple300};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 10px;
`;

export const StyledButtonText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.white100};
  font-family: ${({ theme }) => theme.font};
`;
