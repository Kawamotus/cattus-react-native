import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { useTheme } from "./src/themes";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Login } from "@screens/Login";

export default function App() {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={
          theme.background == "#fcfcfc" ? "dark-content" : "light-content"
        }
        backgroundColor={theme.background}
        translucent
      />
      {fontsLoaded ? <Login /> : <Login />}
    </ThemeProvider>
  );
}
