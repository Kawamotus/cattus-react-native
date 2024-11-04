import { Text } from "react-native";
import { Container } from "./styles";
import { PetItem } from "@components/PetItem";

export const PetList = () => {
  return (
    <Container>
      <PetItem imageSource='https://github.com/kawamotus.png' />
    </Container>
  );
};
