import { TouchableOpacityProps } from "react-native";
import { StyledButton, StyledButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: string;
};

export const Button = ({ title, type = "green", ...rest }: Props) => {
  return (
    <StyledButton {...rest} type={type}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButton>
  );
};
