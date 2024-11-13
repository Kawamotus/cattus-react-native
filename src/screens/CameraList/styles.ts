import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }: any) => theme.background};
  flex: 1;
`;

export const ContentList = styled.View`
  align-items: center;
  flex: 1;
`;
