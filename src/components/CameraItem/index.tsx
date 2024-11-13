import { TouchableOpacityProps } from "react-native";
import { CameraImage, CameraText, Container } from "./styles";

type Props = TouchableOpacityProps & {
  linkPic: string;
  title: string;
};

export const CameraItem = ({ linkPic, title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <CameraImage
        source={{
          uri: linkPic,
        }}
      />
      <CameraText>{title}</CameraText>
    </Container>
  );
};
