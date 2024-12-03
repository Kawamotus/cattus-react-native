import { BarChart } from "react-native-chart-kit";
import { ChartContainer } from "./styles";
import { useTheme } from "@themes";
import { BarChartProps } from "react-native-chart-kit/dist/BarChart";

export const Bar = ({
  width,
  height,
  yAxisLabel,
  yAxisSuffix,
  chartConfig,
  data,
}: BarChartProps) => {
  const theme = useTheme();

  return (
    <ChartContainer>
      <BarChart
        data={data}
        width={width}
        height={height}
        yAxisLabel={yAxisLabel}
        yAxisSuffix={yAxisSuffix}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ChartContainer>
  );
};
