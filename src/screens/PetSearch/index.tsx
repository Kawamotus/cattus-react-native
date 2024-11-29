import { Header } from "@components/Header";
import { Container, ContainerAlign, Content } from "./styles";
import { InputText } from "@components/InputText";
import { ScrollView } from "react-native";
import React from "react";
import { PetData } from "@screens/PetDetail";

export const PetSearch = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState<Array<PetData>>();

  return (
    <Container>
      <Header />
      <ContainerAlign>
        <InputText
          placeholder='digite o nome que deseja pesquisar'
          style={{ marginTop: 20 }}
          value={search}
          onChangeText={setSearch}
        />
      </ContainerAlign>
      <ScrollView>
        <Content></Content>
      </ScrollView>
    </Container>
  );
};
