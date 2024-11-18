import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
`;

export const ContainerCharts = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
  margin-top: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.fontBold};
  font-size: 20px;
  color: ${({ theme }: any) => theme.text};
  padding-left: 12px;
  padding-bottom: 4px;
  padding-top: 8px;
`;
