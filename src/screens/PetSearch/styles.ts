import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerAlign = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;
