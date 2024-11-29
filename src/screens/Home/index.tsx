import { CirclePic } from "@components/CirclePic";
import {
  Container,
  ContainerAlignCenter,
  ContainerCharts,
  ContainerData,
  ContainerImage,
  SquareButton,
  Title,
} from "./styles";
import { Header } from "@components/Header";
import { Dimensions, ScrollView } from "react-native";
import React from "react";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAnimals } from "src/functions/AnimalsFetch";
import { useTheme } from "@themes";
import { Pie } from "@components/Charts/Pie";
import { Image } from "expo-image";
import { Cctv, ListCheck, Plus, Search } from "lucide-react-native";

type AnimalData = {
  _id: string;
  petPicture: string;
  petStatus: { petCurrentStatus: string };
};

const screenWidth = Dimensions.get("window").width;

export const Home = () => {
  const [animalData, setAnimalData] = React.useState<Array<AnimalData>>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation();
  const theme = useTheme();

  const handleNavigatePetDetail = (_id: string) => {
    navigation.navigate("petDetail", { _id });
  };

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
          <ContainerData>
            <Title>Seus pets</Title>
          </ContainerData>
          {animalData ? (
            <ScrollView
              style={{ marginTop: 8, marginBottom: 8, paddingLeft: 8 }}
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
            <ScrollView horizontal>
              <ContainerImage>
                <Image
                  style={{
                    flex: 1,
                    backgroundColor: theme.background,
                    borderRadius: 8,
                  }}
                  source='https://cattus-api.s3.amazonaws.com/1731711890787_20240909_011807.jpg'
                  contentFit='cover'
                  transition={1000}
                />
              </ContainerImage>
              <ContainerImage>
                <Image
                  style={{
                    flex: 1,
                    backgroundColor: theme.background,
                    borderRadius: 8,
                  }}
                  source='https://cattus-api.s3.amazonaws.com/1717004687301_Default_profile_picture_of_cat_or_dog_1.jpg'
                  contentFit='cover'
                  transition={1000}
                />
              </ContainerImage>
            </ScrollView>
          </ContainerData>
          <ContainerData>
            <Title>Últimos adicionados</Title>
            <ScrollView horizontal>
              <ContainerImage>
                <Image
                  style={{
                    flex: 1,
                    backgroundColor: theme.background,
                    borderRadius: 8,
                  }}
                  source='https://cattus-api.s3.amazonaws.com/1732670311772_bfaf7b52-ec8c-4fd4-bba6-a98bbde87b24.jpeg'
                  contentFit='cover'
                  transition={1000}
                />
              </ContainerImage>
              <ContainerImage>
                <Image
                  style={{
                    flex: 1,
                    backgroundColor: theme.background,
                    borderRadius: 8,
                  }}
                  source='https://cattus-api.s3.amazonaws.com/1717004852099_Default_profile_picture_of_cat_or_dog_3.jpg'
                  contentFit='cover'
                  transition={1000}
                />
              </ContainerImage>
            </ScrollView>
          </ContainerData>
        </ScrollView>
      )}
    </Container>
  );
};
