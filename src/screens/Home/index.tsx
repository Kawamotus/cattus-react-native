import { Button } from "@components/Button";
import { Container, Content, Text } from "./styles";
import { InputText } from "@components/InputText";
import { Header } from "@components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Text>A</Text>
        <InputText placeholder='teste' />
        <Button title='Botão teste' type='green' />
      </Content>
    </Container>
  );
};
