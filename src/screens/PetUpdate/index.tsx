import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Container,
  ContainerBody,
  ContainerImage,
  ContainerData,
  TitleData,
  ContainerRow,
  SelectButtonTwoOptions,
  SelectButtonColorWithThreePerLine,
  ContainerTwoRows,
} from "./styles";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { PetData } from "@screens/PetDetail";
import { Image } from "expo-image";
import { ScrollView } from "react-native";
import React from "react";
import { Loading } from "@components/Loading";
import { getAnimal } from "src/functions/AnimalsFetch";
import { InputText } from "@components/InputText";
import { useTheme } from "@themes";
import { Button } from "@components/Button";

type RouteParams = {
  _id: string;
};

export const PetUpdate = () => {
  const [data, setData] = React.useState<PetData>();
  const [isLoading, setIsLoading] = React.useState(false);

  const [petName, setPetName] = React.useState("");
  const [petGender, setPetGender] = React.useState("");
  const [petCastrated, setPetCastrated] = React.useState("");
  const [furColor, setFurColor] = React.useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { _id } = route.params as RouteParams;

  const getData = async () => {
    setIsLoading(true);
    const result = await getAnimal(_id);
    setData(await result.result);
    setIsLoading(false);
    setPetGender(result.result.petGender);
    setPetCastrated(result.result.petCharacteristics.petCastrated);
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [_id])
  );

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <HeaderTitleBack
        title='Atualizar Pet'
        onPress={() => navigation.navigate("petDetail", { _id })}
      />
      <ScrollView>
        <ContainerImage>
          <Image
            style={{
              flex: 1,
              backgroundColor: theme.background,
              borderRadius: 0,
            }}
            source={data?.petPicture}
            contentFit='cover'
            transition={1000}
          />
        </ContainerImage>
        <ContainerBody>
          <ContainerData>
            <TitleData>Nome:</TitleData>
            <InputText value={data?.petName} />
          </ContainerData>
          <ContainerData>
            <TitleData>Data de nascimento - arrumar amanha:</TitleData>
            <InputText value={data?.petBirth} />
          </ContainerData>
          <ContainerData>
            <TitleData>Gênero:</TitleData>
            <ContainerRow>
              <SelectButtonTwoOptions
                onPress={() => setPetGender("Macho")}
                type={petGender == "Macho"}>
                <TitleData>Macho</TitleData>
              </SelectButtonTwoOptions>
              <SelectButtonTwoOptions
                onPress={() => setPetGender("Fêmea")}
                type={petGender == "Fêmea"}>
                <TitleData>Fêmea</TitleData>
              </SelectButtonTwoOptions>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Observações:</TitleData>
            <InputText value={data?.petObs} />
          </ContainerData>
          <ContainerData>
            <TitleData>Castrado?</TitleData>
            <ContainerRow>
              <SelectButtonTwoOptions
                onPress={() => setPetCastrated("Sim")}
                type={petCastrated == "Sim"}>
                <TitleData>Sim</TitleData>
              </SelectButtonTwoOptions>
              <SelectButtonTwoOptions
                onPress={() => setPetCastrated("Não")}
                type={petCastrated == "Não"}>
                <TitleData>Não</TitleData>
              </SelectButtonTwoOptions>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Raça:</TitleData>
            <InputText value={data?.petCharacteristics.petBreed} />
          </ContainerData>
          <ContainerData>
            <TitleData>Tamanho - mexer amanha - colocar seletor:</TitleData>
            <InputText value={data?.petCharacteristics.petSize} />
          </ContainerData>
          <ContainerData>
            <TitleData>Cor do pelo - colocar seletor:</TitleData>
            <ContainerTwoRows>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("preto")}
                type={furColor == "preto" ? "preto" : ""}>
                <TitleData>Preto</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("branco")}
                type={furColor == "branco" ? "branco" : ""}>
                <TitleData black={furColor == "branco"}>Branco</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("laranja")}
                type={furColor == "laranja" ? "laranja" : ""}>
                <TitleData>Laranja</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerTwoRows>
            <ContainerRow>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("cinza")}
                type={furColor == "cinza" ? "cinza" : ""}>
                <TitleData>Cinza</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("marrom")}
                type={furColor == "marrom" ? "marrom" : ""}>
                <TitleData>Marrom</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setFurColor("mesclada")}
                type={furColor == "mesclada" ? "mesclada" : ""}>
                <TitleData>Mesclada</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Tamanho do pelo:</TitleData>
            <InputText value={data?.physicalCharacteristics.furLenght} />
          </ContainerData>
          <ContainerData>
            <TitleData>Cor dos olhos - colocar seletor:</TitleData>
            <InputText value={data?.physicalCharacteristics.eyeColor} />
          </ContainerData>
          <ContainerData>
            <TitleData>Peso (em kg):</TitleData>
            <InputText
              value={data?.physicalCharacteristics.weight}
              keyboardType='numeric'
            />
          </ContainerData>
          <ContainerData>
            <TitleData>Personalidade - colocar seletor:</TitleData>
            <InputText value={data?.behavioralCharacteristics.personality} />
          </ContainerData>
          <ContainerData>
            <TitleData>Nível de atividade - colocar seletor:</TitleData>
            <InputText value={data?.behavioralCharacteristics.activityLevel} />
          </ContainerData>
          <ContainerData>
            <TitleData>Nível do miado - Realmente deixo isso?</TitleData>
            <InputText value={data?.behavioralCharacteristics.meow} />
          </ContainerData>
          <ContainerData>
            <TitleData>Comorbidades:</TitleData>
            <InputText value={data?.petComorbidities} />
          </ContainerData>
          <ContainerData>
            <TitleData>
              Vacinas - colocar um map com um + pra adicionar as vacinas ou um
              seletor com as possíveis doenças:
            </TitleData>
            <InputText value={data?.petName} />
          </ContainerData>
          <ContainerData>
            <Button title='Botaumzão' />
          </ContainerData>
        </ContainerBody>
      </ScrollView>
    </Container>
  );
};
