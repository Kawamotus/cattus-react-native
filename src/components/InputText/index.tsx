import { Input } from "./styles";
import { TextInputProps, TextInput } from "react-native";
import React from "react";
import { useTheme } from "@themes";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export const InputText = ({ inputRef, ...rest }: Props) => {
  const color = useTheme();
  return (
    <Input ref={inputRef} {...rest} placeholderTextColor={color.gray200} />
  );
};
