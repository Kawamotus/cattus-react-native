import { Button } from "@components/Button";
import { Container, Text } from "./styles";
import { InputText } from "@components/InputText";

export const Home = () => {
  return (
    <Container>
      <Text>A</Text>
      <InputText placeholder='teste' />
      <Button title='Botão teste' type='green' />
    </Container>
  );
};
