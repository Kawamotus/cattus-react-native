import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Cat = styled.Image`
  width: 185px;
  height: 200px;
  margin-bottom: 40px;
`;

export const StyledLoading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.green400,
  size: "large",
}))``;
