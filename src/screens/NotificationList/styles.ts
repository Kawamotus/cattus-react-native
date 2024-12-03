import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerNotifications = styled.View`
  align-items: center;
  margin-top: 8px;
`;

export const TextEmpty = styled.Text`
  font-family: ${({ theme }: any) => theme.font};
  font-size: 20px;
  color: ${({ theme }: any) => theme.text};
`;
