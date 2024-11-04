import { TouchableOpacityProps } from "react-native";
import { Container, DataText, Image, PetName, TextContainer } from "./styles";

type Props = TouchableOpacityProps & {
  imageSource: string;
  petName?: string;
  petAge?: string;
  petSex?: string;
  petAlertLevel: string | number;
};

export const PetItem = ({
  imageSource,
  petName,
  petAge,
  petSex,
  petAlertLevel,
  ...rest
}: Props) => {
  return (
    <Container {...rest} type={petAlertLevel}>
      <Image source={{ uri: imageSource }} />
      <TextContainer>
        <PetName>{petName}</PetName>
        <DataText>{petAge}</DataText>
        <DataText>{petSex}</DataText>
      </TextContainer>
    </Container>
  );
};
