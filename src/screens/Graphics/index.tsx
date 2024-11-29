import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ChartContainer, Container, ContainerCharts, Title } from "./styles";
import { Header } from "@components/Header";
import { useTheme } from "@themes";
import { Pie } from "@components/Charts/Pie";

const screenWidth = Dimensions.get("window").width;

export const Graphics = () => {
  const theme = useTheme();
  const data = [
    {
      name: "Fêmea(s)",
      population: 2,
      color: "green",
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: "Macho(s)",
      population: 4,
      color: "orange",
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
  ];

  const alertData = [
    {
      name: "Saudável",
      population: 3,
      color: theme.ok,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: "Alerta",
      population: 2,
      color: theme.alert,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
    {
      name: "Perigo",
      population: 1,
      color: theme.danger,
      legendFontColor: theme.text,
      legendFontSize: 16,
    },
  ];

  return (
    <Container>
      <Header />
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
    </Container>
  );
};
