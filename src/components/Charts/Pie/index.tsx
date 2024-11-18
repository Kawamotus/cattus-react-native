import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ChartContainer } from "./styles";
import { useTheme } from "@themes";
import { PieChartProps } from "react-native-chart-kit/dist/PieChart";

const screenWidth = Dimensions.get("window").width;

export const Pie = ({
  data,
  width,
  height,
  accessor,
  backgroundColor,
  paddingLeft,
  ...rest
}: PieChartProps) => {
  const theme = useTheme();

  return (
    <ChartContainer>
      <PieChart
        data={data}
        width={width}
        height={height}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={accessor}
        backgroundColor={backgroundColor}
        paddingLeft={paddingLeft}
        {...rest}
      />
    </ChartContainer>
  );
};
