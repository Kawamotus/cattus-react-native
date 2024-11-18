import { CirclePic } from "@components/CirclePic";
import { Container, ContainerCharts, Title } from "./styles";
import { Header } from "@components/Header";
import { Dimensions, ScrollView } from "react-native";
import React from "react";
import { Loading } from "@components/Loading";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAnimals } from "src/functions/AnimalsFetch";
import { useTheme } from "@themes";
import { Pie } from "@components/Charts/Pie";

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

  const data = [
    {
      name: "Fêmea(s)",
      population: 2,
      color: "green",
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
    {
      name: "Macho(s)",
      population: 4,
      color: "orange",
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
  ];

  const alertData = [
    {
      name: "Saudável",
      population: 3,
      color: theme.ok,
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
    {
      name: "Alerta",
      population: 2,
      color: theme.alert,
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
    {
      name: "Perigo",
      population: 1,
      color: theme.danger,
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
  ];

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
          <Title>Seus pets</Title>
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
          <ContainerCharts>
            <Title>Quantidade de Gatos</Title>
            <Pie
              data={data}
              paddingLeft='-4'
              backgroundColor='transparent'
              accessor='population'
              width={screenWidth}
              height={150}
              absolute
            />
            <Title>Saúde dos Gatos</Title>
            <Pie
              data={alertData}
              paddingLeft='-8'
              backgroundColor='transparent'
              accessor='population'
              width={screenWidth}
              height={150}
            />
          </ContainerCharts>
        </ScrollView>
      )}
    </Container>
  );
};
