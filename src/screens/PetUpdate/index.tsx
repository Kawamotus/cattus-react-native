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
  SelectDate,
  TextDate,
  ContainerSpaceBeetween,
  CircleButton,
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
import { formatDate } from "@utils/utils";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Minus, Plus } from "lucide-react-native";

type RouteParams = {
  _id: string;
};

export const PetUpdate = () => {
  const [data, setData] = React.useState<PetData>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const [petName, setPetName] = React.useState("");
  const [petBirth, setPetBirth]: any = React.useState(new Date());
  const [petGender, setPetGender] = React.useState("");
  const [petCastrated, setPetCastrated] = React.useState("");
  const [furColor, setFurColor] = React.useState("");
  const [petBreed, setPetBreed] = React.useState("");
  const [petObs, setPetObs] = React.useState("");
  const [eyeColor, setEyeColor] = React.useState("");
  const [furLength, setFurLength] = React.useState("");
  const [size, setSize] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [personality, setPersonality] = React.useState("");
  const [activityLevel, setActivityLevel] = React.useState("");
  const [petComorbidities, setPetComorbidities] = React.useState("");
  const [petPicture, setPetPicture] = React.useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { _id } = route.params as RouteParams;

  const getData = async () => {
    setIsLoading(true);
    const result = await getAnimal(_id);
    setData(await result.result);
    setIsLoading(false);
    setPetName(result.result.petName);
    setPetGender(result.result.petGender);
    setPetCastrated(result.result.petCharacteristics.petCastrated);
    setPetBirth(result.result.petBirth);
    setPetBreed(result.result.petCharacteristics.petBreed);
    setPetObs(result.result.petObs);
    setEyeColor(result.result.physicalCharacteristics.eyeColor);
    setFurLength(result.result.physicalCharacteristics.furLength);
    setSize(result.result.physicalCharacteristics.size);
    setWeight(result.result.physicalCharacteristics.weight);
    setPersonality(result.result.behavioralCharacteristics.personality);
    setActivityLevel(result.result.behavioralCharacteristics.activityLevel);
    setPetComorbidities(result.result.petComorbidities);
    setPetPicture(result.result.petPicture);
  };

  const changeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setPetBirth(selectedDate);
  };

  React.useEffect(() => {}, []);

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
            source={petPicture}
            contentFit='cover'
            transition={1000}
          />
        </ContainerImage>
        <ContainerBody>
          <ContainerData>
            <TitleData>Nome:</TitleData>
            <InputText value={petName} onChangeText={setPetName} />
          </ContainerData>
          <ContainerData>
            <TitleData>Data de nascimento:</TitleData>
            <ContainerRow>
              <TextDate>{formatDate(petBirth)}</TextDate>
              <SelectDate onPress={() => setShowDatePicker(!showDatePicker)}>
                <TitleData>Selecione</TitleData>
              </SelectDate>
            </ContainerRow>
            {showDatePicker && (
              <RNDateTimePicker
                value={new Date(petBirth)}
                mode='date'
                onChange={changeDate}
              />
            )}
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
            <InputText value={petObs} />
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
            <InputText value={petBreed} />
          </ContainerData>
          <ContainerData>
            <TitleData>Cor do pelo:</TitleData>
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
            <TitleData>Tamanho do Pet:</TitleData>
            <ContainerSpaceBeetween>
              <CircleButton onPress={() => setSize(size - 1)}>
                <Minus color={theme.white} size={24} />
              </CircleButton>
              <TitleData size='g'>{size}cm</TitleData>
              <CircleButton onPress={() => setSize(size + 1)}>
                <Plus color={theme.white} size={24} />
              </CircleButton>
            </ContainerSpaceBeetween>
          </ContainerData>
          <ContainerData>
            <TitleData>Cor dos olhos - colocar seletor:</TitleData>
            <ContainerRow>
              <SelectButtonColorWithThreePerLine
                onPress={() => setEyeColor("castanho")}
                type={eyeColor == "castanho" ? "marrom" : ""}>
                <TitleData>Castanho</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setEyeColor("azul")}
                type={eyeColor == "azul" ? "azul" : ""}>
                <TitleData>Azul</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setEyeColor("verde")}
                type={eyeColor == "verde" ? "verde" : ""}>
                <TitleData>Verde</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Peso:</TitleData>
            <ContainerSpaceBeetween>
              <CircleButton onPress={() => setWeight(weight - 0.1)}>
                <Minus color={theme.white} size={24} />
              </CircleButton>
              <TitleData size='g'>{weight.toFixed(1)}kg</TitleData>
              <CircleButton onPress={() => setWeight(weight + 0.1)}>
                <Plus color={theme.white} size={24} />
              </CircleButton>
            </ContainerSpaceBeetween>
          </ContainerData>
          <ContainerData>
            <TitleData>Tamanho do pelo:</TitleData>
            <ContainerRow>
              <SelectButtonColorWithThreePerLine
                active={furLength == "curto"}
                onPress={() => setFurLength("curto")}>
                <TitleData>Curto</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                active={furLength == "médio"}
                onPress={() => setFurLength("médio")}>
                <TitleData>Médio</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                active={furLength == "longo"}
                onPress={() => setFurLength("longo")}>
                <TitleData>Longo</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Personalidade:</TitleData>
            <ContainerTwoRows>
              <SelectButtonColorWithThreePerLine
                onPress={() => setPersonality("amigável")}
                active={personality == "amigável"}>
                <TitleData>Amigável</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setPersonality("reservado")}
                active={personality == "reservado"}>
                <TitleData>Reservado</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                onPress={() => setPersonality("brincalhão")}
                active={personality == "brincalhão"}>
                <TitleData>Brincalhão</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerTwoRows>
            <ContainerRow>
              <SelectButtonTwoOptions
                onPress={() => setPersonality("independente")}
                type={personality == "independente"}>
                <TitleData>Independente</TitleData>
              </SelectButtonTwoOptions>
              <SelectButtonTwoOptions
                onPress={() => setPersonality("arisco")}
                type={personality == "arisco"}>
                <TitleData>Arisco</TitleData>
              </SelectButtonTwoOptions>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Nível de atividade</TitleData>
            <ContainerRow>
              <SelectButtonColorWithThreePerLine
                active={activityLevel == "ativo"}
                onPress={() => setActivityLevel("ativo")}>
                <TitleData>Ativo</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                active={activityLevel == "moderado"}
                onPress={() => setActivityLevel("moderado")}>
                <TitleData>Moderado</TitleData>
              </SelectButtonColorWithThreePerLine>
              <SelectButtonColorWithThreePerLine
                active={activityLevel == "calmo"}
                onPress={() => setActivityLevel("calmo")}>
                <TitleData>Calmo</TitleData>
              </SelectButtonColorWithThreePerLine>
            </ContainerRow>
          </ContainerData>
          <ContainerData>
            <TitleData>Comorbidades:</TitleData>
            <InputText
              value={petComorbidities}
              onChangeText={setPetComorbidities}
            />
          </ContainerData>
          <ContainerData>
            <TitleData>
              Vacinas - colocar um map com um + pra adicionar as vacinas ou um
              seletor com as possíveis vacinas:
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
