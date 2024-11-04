import React from "react";
import { Container } from "./styles";
import { PetItem } from "@components/PetItem";
import { FlatList } from "react-native";

export const PetList = () => {
  const [petData, setPetData] = React.useState([
    {
      image: "https://github.com/kawamotus.png",
      alert: "ok",
      name: "Farofa",
      age: "10",
      petSex: "Fêmea",
      id: "1",
    },
    {
      image: "https://github.com/kawamotus.png",
      alert: "danger",
      name: "Vini",
      age: "10",
      petSex: "Fêmea",
      id: "2",
    },
    {
      image: "https://github.com/kawamotus.png",
      alert: "alert",
      name: "Coisinho",
      age: "10",
      petSex: "Macho",
      id: "3",
    },
    {
      image: "https://github.com/kawamotus.png",
      alert: "ok",
      name: "Farofa",
      age: "10",
      petSex: "Fêmea",
      id: "4",
    },
    {
      image: "https://github.com/kawamotus.png",
      alert: "danger",
      name: "Vini",
      age: "10",
      petSex: "Fêmea",
      id: "5",
    },
    {
      image: "https://github.com/kawamotus.png",
      alert: "alert",
      name: "Coisinho",
      age: "10",
      petSex: "Macho",
      id: "6",
    },
  ]);

  return (
    <Container>
      <FlatList
        data={petData}
        keyExtractor={(item) => item.id}
        //precisa ser "item" pois é a forma desestruturada que o flatlist entende
        renderItem={({ item }) => (
          <PetItem
            imageSource={item.image}
            petAlertLevel={item.alert}
            petName={item.name}
            petAge={item.age}
            petSex={item.petSex}
          />
        )}
        contentContainerStyle={petData.length == 0 && { flex: 1 }}
      />
    </Container>
  );
};
