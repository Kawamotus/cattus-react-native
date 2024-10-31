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
  min-height: 50px;
  max-height: 50px;
  width: 300px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;
