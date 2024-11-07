import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: any) => theme.background};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 50px;
  margin-bottom: 40px;
`;

export const ValidationText = styled.Text`
  color: #fb3b3b;
  font-size: 15px;
  font-family: ${({ theme }: any) => theme.font};
  margin-right: 150px;
  margin-bottom: 10px;
`;
