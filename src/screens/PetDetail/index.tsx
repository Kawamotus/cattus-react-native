import { Loading } from "@components/Loading";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { getAnimal } from "src/functions/AnimalsFetch";
import {
  BackContent,
  Clickable,
  Wrapper,
  Container,
  PicAnimal,
  TextAnimalName,
} from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { useTheme } from "@themes";

type RouteParams = {
  _id: string;
};

type PetData = {
  _id: string;
  petBirth: string;
  petCharacteristics: {
    petBreed: string;
  };
  petComorbidities: string;
  petEntry: string;
  petGender: string;
  petName: string;
  petObs: string;
  petPicture: string;
  petVaccCard: string;
  petStatus: {
    petCurrentStatus: string;
    petLastOccurrence: string | null;
    petOccurrencesQuantity: string | null;
  };
};

export const PetDetail = () => {
  const [data, setData] = React.useState<PetData>();
  const [isLoading, setIsLoading] = React.useState(true);

  const theme = useTheme();

  const navigation = useNavigation();

  const route = useRoute();
  const { _id } = route.params as RouteParams;

  const getData = async () => {
    setIsLoading(true);
    const result = await getAnimal(_id);
    setData(await result.result);
    setIsLoading(false);
  };

  const handleGoBack = () => {
    navigation.navigate("petList");
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData();
  //   }, [])
  // );

  React.useEffect(() => {
    getData();
  }, []);

  return !isLoading ? (
    <Wrapper>
      <BackContent>
        <Clickable onPress={handleGoBack}>
          <ChevronLeft color={theme.text} size={40} />
        </Clickable>
      </BackContent>
      <Container>
        <PicAnimal source={{ uri: data?.petPicture }} />
        <TextAnimalName>{data?.petName}</TextAnimalName>
        <TextAnimalName>{_id}</TextAnimalName>
      </Container>
    </Wrapper>
  ) : (
    <Loading />
  );
};
