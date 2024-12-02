import { Loading } from "@components/Loading";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { deleteAnimal, getAnimal } from "src/functions/AnimalsFetch";
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
  ItemData,
  ItemBox,
  ItemContainerBox,
  ContainerButton,
} from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { useTheme } from "@themes";
import { Alert, ScrollView } from "react-native";
import { Button } from "@components/Button";
import { formatDate } from "@utils/utils";

type RouteParams = {
  _id: string;
};

export type PetData = {
  _id: string;
  petBirth: string;
  petCharacteristics: {
    petBreed: string;
    petCastrated: string;
    petSize: string;
  };
  behavioralCharacteristics: {
    activityLevel: string;
    meow: string;
    personality: string;
    socialBehavior: string;
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
  petVaccines?: [];
  physicalCharacteristics: {
    eyeColor: string;
    furColor: string;
    furLenght: string;
    size: number; //tamanho em cm do pet
    weight: number; //peso em kg
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

  const handleDelete = async () => {
    Alert.alert("Atenção!", "Deseja realmente excluir esse pet?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: async () => {
          const result = await deleteAnimal(_id);
          if (result) {
            navigation.navigate("petList");
            Alert.alert("Sucesso", "Animal deletado com sucesso!");
          } else {
            Alert.alert("Erro", "Falha ao deletar animal!");
          }
        },
      },
    ]);
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
              <BoxData>{data?.physicalCharacteristics.size}cm</BoxData>
            </Box>
            <Box>
              <BoxTitle>Peso</BoxTitle>
              <BoxData>
                {data?.physicalCharacteristics.weight.toFixed(1)}Kg
              </BoxData>
            </Box>
            <Box>
              <BoxTitle>Cor</BoxTitle>
              <BoxData>{data?.physicalCharacteristics.furColor}</BoxData>
            </Box>
          </BoxContainer>
          <AboutContainer>
            <AboutTitle>Cor dos olhos: </AboutTitle>
            <AboutData>
              {data?.physicalCharacteristics.eyeColor
                ? data?.physicalCharacteristics.eyeColor
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Data de nascimento: </AboutTitle>
            <AboutData>{formatDate(data?.petBirth)}</AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Gênero: </AboutTitle>
            <AboutData>
              {data?.petGender ? data?.petGender : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Observação:</AboutTitle>
            <AboutData>
              {data?.petObs ? data.petObs : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Castrado:</AboutTitle>
            <AboutData>
              {data?.petCharacteristics.petCastrated
                ? data.petCharacteristics.petCastrated
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Raça:</AboutTitle>
            <AboutData>
              {data?.petCharacteristics.petBreed
                ? data.petCharacteristics.petBreed
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <ItemContainer>
            <AboutTitle>Vacinas: </AboutTitle>
            {data?.petVaccines?.length == 0 ? (
              <AboutData>Nenhuma vacina cadastrada</AboutData>
            ) : (
              <ItemContainerBox>
                {data?.petVaccines?.map((vacc) => (
                  <ItemBox key={vacc}>
                    <ItemData>{vacc}</ItemData>
                  </ItemBox>
                ))}
              </ItemContainerBox>
            )}
          </ItemContainer>
          <AboutContainer>
            <AboutTitle>Personalidade:</AboutTitle>
            <AboutData>
              {data?.behavioralCharacteristics.personality
                ? data?.behavioralCharacteristics.personality
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Nível de atividade:</AboutTitle>
            <AboutData>
              {data?.behavioralCharacteristics.activityLevel
                ? data?.behavioralCharacteristics.activityLevel
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Comorbidades:</AboutTitle>
            <AboutData>
              {data?.petComorbidities
                ? data?.petComorbidities
                : "Ainda não informado"}
            </AboutData>
          </AboutContainer>
          <AboutContainer>
            <AboutTitle>Saúde:</AboutTitle>
            <AboutData>
              {data?.petStatus.petCurrentStatus == "0"
                ? "Saudável"
                : data?.petStatus.petCurrentStatus == "1"
                ? "Precisa de atenção"
                : data?.petStatus.petCurrentStatus == "2"
                ? "Precisa de atenção urgente"
                : "Não informado"}
            </AboutData>
          </AboutContainer>
          <ContainerButton>
            <Button
              title='Remover pet'
              type='danger'
              style={{ marginBottom: 8 }}
              onPress={() => handleDelete()}
            />
            <Button
              title='Atualizar cadastro'
              type='purple'
              onPress={() => navigation.navigate("petUpdate", { _id })}
            />
          </ContainerButton>
        </Container>
      </ScrollView>
    </Wrapper>
  ) : (
    <Loading />
  );
};
