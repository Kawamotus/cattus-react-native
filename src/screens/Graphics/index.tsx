import { View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ChartContainer, Container } from "./styles";
import { Header } from "@components/Header";
import { useTheme } from "@themes";

const screenWidth = Dimensions.get("window").width;

export const Graphics = () => {
  const theme = useTheme();
  const data = [
    {
      name: "Cats",
      population: 35,
      color: "green",
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
    {
      name: "Dogs",
      population: 40,
      color: "orange",
      legendFontColor: theme.black400,
      legendFontSize: 16,
    },
  ];

  return (
    <Container>
      <Header />
      <ChartContainer>
        <PieChart
          data={data}
          width={screenWidth}
          height={200}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor='population'
          backgroundColor='transparent'
          paddingLeft='16'
          absolute //número absoluto ou porcentagem
        />
      </ChartContainer>
    </Container>
  );
};
