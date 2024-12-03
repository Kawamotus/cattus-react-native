import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }: any) => theme.background};
  flex: 1;
`;

export const ContentList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
