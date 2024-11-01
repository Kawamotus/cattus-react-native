import "styled-components/native";
import { useTheme } from "@themes";

const theme = useTheme();

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
