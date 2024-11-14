import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Container } from "./styles";
import { Header } from "@components/Header";

const screenWidth = Dimensions.get("window").width;

export const Graphics = () => {
  const data = [
    {
      name: "Cats",
      population: 35,
      color: "green",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Dogs",
      population: 40,
      color: "orange",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "Birds",
      population: 25,
      color: "blue",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
  ];

  return (
    <Container>
      <Header />
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor='population'
        backgroundColor='transparent'
        paddingLeft='15'
        absolute
      />
    </Container>
  );
};
