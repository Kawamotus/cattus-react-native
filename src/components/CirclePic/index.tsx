import { Image } from "expo-image";
import { Container } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  source?: string;
  type: string;
};

export const CirclePic = ({ type, source, ...rest }: Props) => {
  return (
    <Container {...rest} type={type}>
      <Image
        style={{
          flex: 1,
          backgroundColor: "#0553",
          borderRadius: 40,
        }}
        source={source}
        contentFit='cover'
        transition={1000}
      />
    </Container>
  );
};
