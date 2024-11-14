import React from "react";
import {
  ButtonNew,
  ButtonText,
  Container,
  ContainerBody,
  ContainerButton,
  Content,
} from "./styles";
import { PetItem } from "@components/PetItem";
import { getAnimals } from "src/functions/AnimalsFetch";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Plus } from "lucide-react-native";
import { useTheme } from "@themes";

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
  const theme = useTheme();

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
        <ContainerBody>
          <ContainerButton>
            <ButtonNew onPress={() => navigation.navigate("petRegister")}>
              <ButtonText>Adicionar</ButtonText>
              <Plus color={theme.text} size={20} />
            </ButtonNew>
          </ContainerButton>
          <Content>
            {petData.map((data) => (
              <PetItem
                imageSource={data.petPicture}
                petAlertLevel={
                  data.petStatus.petCurrentStatus == "0"
                    ? "ok"
                    : data.petStatus.petCurrentStatus == "1"
                    ? "alert"
                    : data.petStatus.petCurrentStatus == "2"
                    ? "danger"
                    : ""
                }
                petName={data.petName}
                petSex={data.petGender}
                petComorbidities={data.petComorbidities}
                onPress={() => handleNavigate(data._id)}
                key={data._id}
              />
            ))}
          </Content>
        </ContainerBody>
      )}
    </Container>
  );
};
