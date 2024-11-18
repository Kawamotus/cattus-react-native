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
  Box,
  BoxContainer,
  BoxTitle,
  BoxData,
  AboutContainer,
  AboutTitle,
  AboutData,
  ItemContainer,
  ItemTitle,
  ItemData,
  ItemBox,
  ItemContainerBox,
} from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { useTheme } from "@themes";
import { ScrollView } from "react-native";

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
    console.log(await result.result);
  };

  const handleGoBack = () => {
    navigation.navigate("petList");
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [_id])
  );

  return !isLoading ? (
    <Wrapper>
      <BackContent>
        <Clickable onPress={handleGoBack}>
          <ChevronLeft color={theme.text} size={40} />
        </Clickable>
        <TextAnimalName>{data?.petName}</TextAnimalName>
      </BackContent>
      {/* scrollview simples só pra funcionar o scroll, seguindo as edições do container */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <PicAnimal source={{ uri: data?.petPicture }} />
          <BoxContainer>
            <Box>
              <BoxTitle>Tamanho</BoxTitle>
              <BoxData>23cm</BoxData>
            </Box>
            <Box>
              <BoxTitle>Peso</BoxTitle>
              <BoxData>3,5Kg</BoxData>
            </Box>
            <Box>
              <BoxTitle>Cor</BoxTitle>
              <BoxData>Branco e Laranja</BoxData>
            </Box>
          </BoxContainer>
          <AboutContainer>
            <AboutTitle>Observação</AboutTitle>
            <AboutData>Aprecia brinquedos interativos</AboutData>
          </AboutContainer>
          <ItemContainer>
            <ItemTitle>Vacinas: </ItemTitle>
            <ItemContainerBox>
              <ItemBox>
                <ItemData>V3</ItemData>
              </ItemBox>
              <ItemBox>
                <ItemData>Raiva</ItemData>
              </ItemBox>
              <ItemBox>
                <ItemData>V4</ItemData>
              </ItemBox>
              <ItemBox>
                <ItemData>V5</ItemData>
              </ItemBox>
              <ItemBox>
                <ItemData>V8</ItemData>
              </ItemBox>
            </ItemContainerBox>
          </ItemContainer>
          <AboutContainer>
            <AboutTitle>Personalidade</AboutTitle>
            <AboutData>independente</AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Comorbidades</AboutTitle>
            <AboutData>Problema renal</AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Saúde</AboutTitle>
            <AboutData>Saudável</AboutData>
          </AboutContainer>
        </Container>
      </ScrollView>
    </Wrapper>
  ) : (
    <Loading />
  );
};
