import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { useTheme } from "./src/themes";
import { ThemeProvider } from "styled-components";

export default function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={
          theme.background == "#fcfcfc" ? "dark-content" : "light-content"
        }
        backgroundColor={theme.background}
        translucent
      />
      <Home />
    </ThemeProvider>
  );
}
