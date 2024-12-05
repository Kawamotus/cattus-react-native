import { Dimensions } from "react-native";
import { Container, ContainerCharts, Title } from "./styles";
import { Header } from "@components/Header";
import { useTheme } from "@themes";
import { Pie } from "@components/Charts/Pie";
import React from "react";
import {
  getAllActivities,
  getAllAnimalsByGender,
  getSickAnimals,
} from "src/functions/ChartsFetch";
import { useFocusEffect } from "@react-navigation/native";
import { Loading } from "@components/Loading";

const screenWidth = Dimensions.get("window").width;

export const Graphics = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [sickData, setSickData] = React.useState({
    status: ["Saudável", "Alerta", "Perigo"],
    data: [0, 0, 0],
  });
  const [activityData, setActivityData] = React.useState([
    { activityName: "brincar", avgActivityTime: 0 },
    { activityName: "comer", avgActivityTime: 0 },
    { activityName: "dormir", avgActivityTime: 0 },
  ]);
  const [allPets, setAllPets] = React.useState({
    femea: 0,
    macho: 0,
    total: 0,
  });

  const getData = async () => {
    setIsLoading(true);

    const sickAnimals = await getSickAnimals();
    const status = sickAnimals.gatos.map((item: any) =>
      item.status == "0" ? "Saudável" : item.status == "1" ? "Alerta" : "Perigo"
    );
    const dados = sickAnimals.gatos.map((item: any) => item.macho + item.femea);
    setSickData({ status: status, data: dados });

    const activitiesAnimals = await getAllActivities();
    setActivityData(activitiesAnimals && activitiesAnimals);

    const allAnimals = await getAllAnimalsByGender();
    setAllPets(allAnimals && allAnimals[0].gatos);

    setIsLoading(false);
    console.log(allPets);
  };

  const theme = useTheme();
  const data = [
    {
      name: "Fêmea(s)",
      population: allPets.femea ? allPets.femea : 0,
      color: "green",
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: "Macho(s)",
      population: allPets.macho ? allPets.macho : 0,
      color: "orange",
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
  ];

  const healthChart = [
    {
      name: sickData && sickData.status[0],
      population: sickData && sickData.data[0],
      color:
        sickData && sickData.status[0] == "Saudável"
          ? theme.ok
          : sickData.status[0] == "Alerta"
          ? theme.alert
          : theme.danger,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: sickData && sickData.status[1],
      population: sickData && sickData.data[1],
      color:
        sickData && sickData.status[1] == "Saudável"
          ? theme.ok
          : sickData.status[1] == "Alerta"
          ? theme.alert
          : theme.danger,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: sickData && sickData.status[2],
      population: sickData && sickData.data[2],
      color:
        sickData && sickData.status[2] == "Saudável"
          ? theme.ok
          : sickData.status[2] == "Alerta"
          ? theme.alert
          : theme.danger,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
  ];

  const activityChart = activityData.map((item, index) => ({
    name: item.activityName,
    population: item.avgActivityTime,
    color: index == 0 ? theme.danger : index == 1 ? theme.alert : theme.ok,
    legendFontColor: theme.text,
    legendFontSize: 16,
  }));

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  return (
    <Container>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
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
            data={healthChart}
            paddingLeft='-8'
            backgroundColor='transparent'
            accessor='population'
            width={screenWidth}
            height={150}
          />
          <Title>Atividade dos Gatos</Title>
          <Pie
            data={activityChart}
            paddingLeft='-8'
            backgroundColor='transparent'
            accessor='population'
            width={screenWidth}
            height={150}
          />
        </ContainerCharts>
      )}
    </Container>
  );
};
