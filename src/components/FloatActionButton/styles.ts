import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Fab = styled(TouchableOpacity)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }: any) => theme.green400};
  width: 56px;
  height: 56px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;
