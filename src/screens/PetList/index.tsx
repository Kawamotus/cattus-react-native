import React from "react";
import { Container, Content } from "./styles";
import { PetItem } from "@components/PetItem";
import { FlatList } from "react-native";
import { getAnimals } from "src/functions/AnimalsFetch";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";

type PetData = {
  _id: string;
  petName: string;
  petGender: string;
  petPicture: string;
  petComorbidities: string;
  petStatus: { petCurrentStatus: string };
};

export const PetList = () => {
  const [petData, setPetData] = React.useState<Array<PetData>>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigation = useNavigation();

  const handleNavigate = (_id: string) => {
    navigation.navigate("petDetail", { _id });
  };

  useFocusEffect(
    React.useCallback(() => {
      const animals = async () => {
        const animalsList = await getAnimals();
        setPetData(await animalsList.result);
        setIsLoading(false);
      };
      animals();
    }, [])
  );

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <Content>
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
                petComorbidities={item.petComorbidities}
                onPress={() => handleNavigate(item._id)}
              />
            )}
            contentContainerStyle={petData.length == 0 && { flex: 1 }}
            style={{ paddingTop: 8 }}
          />
        </Content>
      )}
    </Container>
  );
};
