import { TouchableOpacityProps } from "react-native";
import {
  Color,
  Container,
  DataText,
  Image,
  PetName,
  PicAndText,
  TextContainer,
} from "./styles";

type Props = TouchableOpacityProps & {
  imageSource: string;
  petName?: string;
  petAge?: string;
  petSex?: string;
  petComorbidities?: string;
  petAlertLevel?: string | number;
};

export const PetItem = ({
  imageSource,
  petName,
  petSex,
  petAlertLevel,
  petComorbidities,
  ...rest
}: Props) => {
  return (
    <Container {...rest}>
      <Color type={petAlertLevel} />
      <PicAndText>
        <Image source={{ uri: imageSource }} />
        <TextContainer>
          <PetName>{petName}</PetName>
          <DataText>{petSex}</DataText>
          <DataText>{petComorbidities}</DataText>
        </TextContainer>
      </PicAndText>
    </Container>
  );
};
