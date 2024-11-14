import { Plus } from "lucide-react-native";
import { Fab } from "./styles";
import { useTheme } from "@themes";
import { TouchableOpacityProps } from "react-native";

export const FloatActionButton = ({ ...rest }: TouchableOpacityProps) => {
  const theme = useTheme();

  return (
    <Fab {...rest}>
      <Plus color={theme.text} size={24} />
    </Fab>
  );
};
