import { Cat, Container, StyledLoading } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <Cat source={require("@assets/full-white-cat.png")} />
      <StyledLoading />
    </Container>
  );
};
