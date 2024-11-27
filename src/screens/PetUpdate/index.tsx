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
  ContainerAddVacc,
  InputVacc,
  SquareAddVacc,
  TextData,
  ContainerItemVacc,
  ContainerGallery,
} from "./styles";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { PetData } from "@screens/PetDetail";
import { Image } from "expo-image";
import { Alert, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Loading } from "@components/Loading";
import {
  getAnimal,
  patchAnimal,
  uploadImage,
} from "src/functions/AnimalsFetch";
import { InputText } from "@components/InputText";
import { useTheme } from "@themes";
import { Button } from "@components/Button";
import { formatDate } from "@utils/utils";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Camera, Images, Minus, Plus, X } from "lucide-react-native";
import { getUser } from "@storage/user";
import { ButtonGallery } from "@screens/PetRegister/styles";
import { pickImage, takePhoto } from "@components/PicImage";

type RouteParams = {
  _id: string;
};

export const PetUpdate = () => {
  const [data, setData] = React.useState<PetData>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [vaccArray, setVaccArray] = React.useState("");

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
  const [petPictureData, setPetPictureData]: any = React.useState();
  const [petVaccines, setPetVaccines] = React.useState<Array<string>>();

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
    setPetVaccines(result.result.petVaccines);
  };

  const changeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setPetBirth(selectedDate);
  };

  const addVacc = () => {
    if (vaccArray.trim() !== "") {
      setPetVaccines((prevItems: any) => [...prevItems, vaccArray.trim()]);
      setVaccArray("");
    }
  };

  const removeVacc = (vacc: string) => {
    const newVaccArray = petVaccines?.filter((item) => item != vacc);
    setPetVaccines(newVaccArray);
  };

  const takeImage = async () => {
    const result = await takePhoto();
    if (result?.uri) {
      setPetPicture(result.uri);
      setPetPictureData(result);
      return;
    }
    Alert.alert("Erro", "Operação cancelada!");
  };

  const pickPhoto = async () => {
    const result = await pickImage();
    if (result?.uri) {
      setPetPicture(result.uri);
      setPetPictureData(result);
      return;
    }
    Alert.alert("Erro", "Operação cancelada!");
  };

  const handlePatchData = async () => {
    const user = await getUser();

    if (petPicture != data?.petPicture) {
      setIsLoading(true);
      const response = await fetch(petPicture);
      const blob = await response.blob();

      console.log(petPictureData);

      const formData = new FormData();
      const bodyImage = {
        uri: petPicture,
        name: petPictureData.fileName,
        type: blob.type,
      };

      formData.append("imagem", bodyImage);

      const { img_url } = await uploadImage(formData);
      setPetPicture(await img_url);
    }

    const body = {
      petName: petName,
      petGender: petGender,
      petCastrated: petCastrated,
      petBirth: petBirth,
      petObs: petObs,
      petVaccines: petVaccines,
      petComorbidities: petComorbidities,
      petPicture: petPicture,
      petCharacteristics: {
        petCastrated: petCastrated,
        petBreed: petBreed,
      },
      physicalCharacteristics: {
        eyeColor: eyeColor,
        furLength: furLength,
        size: size,
        weight: weight,
      },
      behavioralCharacteristics: {
        personality: personality,
        activityLevel: activityLevel,
      },
      company: user.company,
    };

    const result = await patchAnimal(_id, body);
    navigation.navigate("petDetail", { _id });
    Alert.alert("Deu certo", "Pet atualizado com sucesso!");
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
          <ContainerGallery>
            <ButtonGallery onPress={takeImage}>
              <Camera color={theme.white400} size={30} />
            </ButtonGallery>
            <ButtonGallery onPress={pickPhoto}>
              <Images color={theme.white400} size={30} />
            </ButtonGallery>
          </ContainerGallery>
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
            <InputText value={petObs} onChangeText={setPetObs} />
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
            <TitleData>Cor dos olhos:</TitleData>
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
            <ContainerRow>
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
            </ContainerRow>
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
            <TitleData>Nível de atividade:</TitleData>
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
            <TitleData>Vacinas:</TitleData>
            <ContainerAddVacc>
              <InputVacc
                value={vaccArray}
                onChangeText={setVaccArray}
                placeholder='Adicione uma vacina'
                placeholderTextColor={theme.gray200}
              />
              <SquareAddVacc onPress={addVacc}>
                <Plus color={theme.green300} size={32} />
              </SquareAddVacc>
            </ContainerAddVacc>
            {petVaccines?.length == 0 ? (
              <ContainerItemVacc empty>
                <TextData>Nenhuma vacina adicionada D:</TextData>
              </ContainerItemVacc>
            ) : (
              petVaccines?.map((vacc) => (
                <ContainerItemVacc key={vacc}>
                  <TextData>{vacc}</TextData>
                  <TouchableOpacity onPress={() => removeVacc(vacc)}>
                    <X color={theme.danger} size={20} />
                  </TouchableOpacity>
                </ContainerItemVacc>
              ))
            )}
          </ContainerData>
          <ContainerData>
            <Button title='Atualizar' onPress={handlePatchData} />
          </ContainerData>
        </ContainerBody>
      </ScrollView>
    </Container>
  );
};
