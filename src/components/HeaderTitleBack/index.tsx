import { useTheme } from "@themes";
import { BackContent, Clickable, TextTitle } from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export const HeaderTitleBack = ({ title, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <BackContent>
      <Clickable {...rest}>
        <ChevronLeft color={theme.text} size={40} />
      </Clickable>
      <TextTitle>{title}</TextTitle>
    </BackContent>
  );
};
