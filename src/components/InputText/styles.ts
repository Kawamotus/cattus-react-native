import { TextInput } from "react-native";
import styled, { css } from "styled-components";

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.black100};
    color: ${theme.white100};
    font-family: ${theme.font};
    font-size: 20px;
  `}
  flex: 1;
  min-height: 52px;
  max-height: 52px;
  width: 320px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 10px;
`;
