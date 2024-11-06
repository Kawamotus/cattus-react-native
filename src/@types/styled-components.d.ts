import "styled-components/native";
import { useTheme } from "@themes";

const theme = useTheme();

export type ThemeType = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
