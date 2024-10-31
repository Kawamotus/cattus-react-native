import light from "./light";
import dark from "./dark";
import { useColorScheme } from "react-native";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? dark : dark;
};
