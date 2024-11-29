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
