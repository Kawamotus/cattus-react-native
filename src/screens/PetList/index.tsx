import React from "react";
import { Container } from "./styles";
import { PetItem } from "@components/PetItem";
import { FlatList } from "react-native";
import { getAnimals } from "src/functions/AnimalsFetch";
import { Loading } from "@components/Loading";
import { useFocusEffect } from "@react-navigation/native";

type PetData = {
  _id: string;
  petName: string;
  petGender: string;
  petPicture: string;
  petStatus: { petCurrentStatus: string };
};

export const PetList = () => {
  const [petData, setPetData] = React.useState<Array<PetData>>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const animals = async () => {
        const teste = await getAnimals();
        console.log("bateu");
        setPetData(await teste.result);
        setIsLoading(false);
      };
      animals();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={petData}
          keyExtractor={(item) => item._id}
          //precisa ser "item" pois é a forma desestruturada que o flatlist entende
          renderItem={({ item }) => (
            <PetItem
              imageSource={item.petPicture}
              petAlertLevel={
                item.petStatus.petCurrentStatus == "0"
                  ? "ok"
                  : item.petStatus.petCurrentStatus == "1"
                  ? "alert"
                  : item.petStatus.petCurrentStatus == "2"
                  ? "danger"
                  : ""
              }
              petName={item.petName}
              petSex={item.petGender}
            />
          )}
          contentContainerStyle={petData.length == 0 && { flex: 1 }}
        />
      )}
    </Container>
  );
};
