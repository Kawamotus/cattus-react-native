import { CirclePic } from "@components/CirclePic";
import {
  Container,
  ContainerAlignCenter,
  ContainerData,
  ContainerImage,
  SquareButton,
  Title,
} from "./styles";
import { Header } from "@components/Header";
import { ScrollView, View } from "react-native";
import React from "react";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAnimals } from "src/functions/AnimalsFetch";
import { useTheme } from "@themes";
import { Image } from "expo-image";
import { Cctv, ListCheck, Plus, Search } from "lucide-react-native";

type AnimalData = {
  _id: string;
  petPicture: string;
  petStatus: { petCurrentStatus: string };
};

export const Home = () => {
  const [animalData, setAnimalData] = React.useState<Array<AnimalData>>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleNavigatePetDetail = (_id: string) => {
    navigation.navigate("petDetail", { _id });
  };

  const filteredAlertPets = animalData.filter(
    (item) =>
      item.petStatus.petCurrentStatus == "1" ||
      item.petStatus.petCurrentStatus == "2"
  );

  useFocusEffect(
    React.useCallback(() => {
      const loadAnimals = async () => {
        setIsLoading(true);
        const animalsList = await getAnimals();
        setAnimalData(await animalsList.result);
        setIsLoading(false);
      };
      loadAnimals();
    }, [])
  );

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={{ marginLeft: 12 }}>
            <Title>Seus pets</Title>
          </View>
          {animalData ? (
            <ScrollView
              style={{ marginTop: 0, marginBottom: 8, paddingLeft: 8 }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {animalData
                .filter(
                  (data) => data.petStatus?.petCurrentStatus !== undefined
                )
                .sort((a, b) => {
                  const order = ["2", "1", "0"];
                  const statusA = a.petStatus?.petCurrentStatus || "";
                  const statusB = b.petStatus?.petCurrentStatus || "";
                  return order.indexOf(statusA) - order.indexOf(statusB);
                })
                .map((data) => (
                  <CirclePic
                    key={data._id}
                    type={
                      data.petStatus
                        ? data.petStatus.petCurrentStatus == "0"
                          ? "ok"
                          : data.petStatus.petCurrentStatus == "1"
                          ? "alert"
                          : data.petStatus.petCurrentStatus == "2"
                          ? "danger"
                          : ""
                        : ""
                    }
                    source={data.petPicture}
                    onPress={() => {
                      handleNavigatePetDetail(data._id);
                    }}
                  />
                ))}
            </ScrollView>
          ) : (
            // mudar isso aqui
            <Title>Nenhum animal cadastrado D:</Title>
          )}
          <ContainerData>
            <Title>O que deseja fazer?</Title>
            <ContainerAlignCenter>
              <SquareButton onPress={() => navigation.navigate("petRegister")}>
                <Plus color={theme.white} size={30} />
              </SquareButton>
              <SquareButton onPress={() => navigation.navigate("petList")}>
                <ListCheck color={theme.white} size={30} />
              </SquareButton>
              <SquareButton onPress={() => navigation.navigate("petSearch")}>
                <Search color={theme.white} size={30} />
              </SquareButton>
              <SquareButton onPress={() => navigation.navigate("cameraList")}>
                <Cctv color={theme.white} size={30} />
              </SquareButton>
            </ContainerAlignCenter>
          </ContainerData>
          <ContainerData>
            <Title>Animais em alerta</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredAlertPets.map((item) => (
                <ContainerImage
                  key={item._id}
                  onPress={() => handleNavigatePetDetail(item._id)}>
                  <Image
                    style={{
                      flex: 1,
                      backgroundColor: theme.background,
                      borderRadius: 8,
                    }}
                    source={item.petPicture}
                    contentFit='cover'
                    transition={1000}
                  />
                </ContainerImage>
              ))}
            </ScrollView>
          </ContainerData>
          <ContainerData>
            <Title>Últimos adicionados</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {animalData
                .slice(animalData.length - 4, animalData.length)
                .map((item) => (
                  <ContainerImage
                    key={item._id}
                    onPress={() => handleNavigatePetDetail(item._id)}>
                    <Image
                      style={{
                        flex: 1,
                        backgroundColor: theme.background,
                        borderRadius: 8,
                      }}
                      source={item.petPicture}
                      contentFit='cover'
                      transition={1000}
                    />
                  </ContainerImage>
                ))}
            </ScrollView>
          </ContainerData>
        </ScrollView>
      )}
    </Container>
  );
};
