import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ChartContainer = styled.View`
  height: auto;
  background-color: ${({ theme }: any) => theme.white200};
  margin: 8px;
  border-radius: 8px;
`;
