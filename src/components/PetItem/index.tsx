import { Container, Image } from "./styles";

type Props = {
  imageSource: string;
  petName?: string;
  petType?: string;
  petSex?: string;
  petAlertLevel?: string | number;
};

export const PetItem = ({
  imageSource,
  petName,
  petType,
  petSex,
  petAlertLevel,
}: Props) => {
  return (
    <Container>
      <Image source={{ uri: imageSource }} />
    </Container>
  );
};
