import React from "react";
import {
  ButtonGallery,
  Container,
  ContainerForm,
  ContainerGallery,
  ContainerImage,
  ContainerScroll,
  Picture,
} from "./styles";
import { useTheme } from "@themes";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Camera, Images } from "lucide-react-native";
import { postAnimal } from "src/functions/AnimalsFetch";
import { getUser } from "@storage/user";
import { formatDate } from "@utils/utils";
import {
  ContainerRow,
  SelectButtonTwoOptions,
  TitleData,
} from "@screens/PetUpdate/styles";
import { Loading } from "@components/Loading";

export const PetRegister = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [gender, setGender] = React.useState("Macho");
  const [obs, setObs] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      if (result.assets[0].fileName) {
        setImageData(result.assets[0].fileName);
      }
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão necessária",
        "Precisamos de permissão para acessar a câmera."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(image);
      if (result.assets[0].fileName) {
        setImageData(result.assets[0].fileName);
      }
    }
  };

  const changeDate = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) setDate(selectedDate);
  };

  const sendData = async () => {
    if (!name || !image || !date || !gender || !obs) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    const user = await getUser();
    const result = await fetch(image);
    const blob = await result.blob();

    const formData = new FormData();
    formData.append("petName", name);
    formData.append("petBirth", date.toDateString());
    formData.append("petGender", gender);
    formData.append("petObs", obs);
    formData.append("petPicture", {
      uri: image,
      name: imageData,
      type: blob.type,
    });
    formData.append("company", user.company);

    const response = await postAnimal(formData);
    console.log(await response);

    setName("");
    setImage("");
    setDate(new Date());
    setObs("");
    setGender("Macho");
    Alert.alert("Sucesso", "Pet cadastrado com sucesso!");

    setIsLoading(false);

    navigation.navigate("petList");
  };

  return (
    <Container>
      <HeaderTitleBack
        title='Cadastro'
        onPress={() => navigation.navigate("petList")}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ContainerScroll>
          <ContainerImage>
            <Picture source={require("@assets/sleeping-kitty.png")} />
          </ContainerImage>
          <ContainerForm>
            <InputText placeholder='Nome' onChangeText={setName} value={name} />
            <Button
              title={
                !date ? "Data de Nascimento" : `Nasceu em ${formatDate(date)}?`
              }
              onPress={() => setShow(!show)}
            />
            {show && (
              <RNDateTimePicker
                value={date}
                mode='date'
                onChange={changeDate}
              />
            )}
            <View style={{ marginTop: 8, marginBottom: 8 }}>
              <ContainerRow>
                <SelectButtonTwoOptions
                  onPress={() => setGender("Macho")}
                  type={gender == "Macho"}>
                  <TitleData>Macho</TitleData>
                </SelectButtonTwoOptions>
                <SelectButtonTwoOptions
                  onPress={() => setGender("Fêmea")}
                  type={gender == "Fêmea"}>
                  <TitleData>Fêmea</TitleData>
                </SelectButtonTwoOptions>
              </ContainerRow>
            </View>
            <InputText
              placeholder='Observações'
              onChangeText={setObs}
              value={obs}
            />
            <ContainerGallery>
              <ButtonGallery onPress={takePhoto}>
                <Camera color={theme.text} size={30} />
              </ButtonGallery>
              <ButtonGallery onPress={pickImage}>
                <Images color={theme.text} size={30} />
              </ButtonGallery>
            </ContainerGallery>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
            )}

            <Button title='Cadastrar' type='green' onPress={sendData} />
          </ContainerForm>
        </ContainerScroll>
      )}
    </Container>
  );
};
