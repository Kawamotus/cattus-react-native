import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerBody = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;
`;
