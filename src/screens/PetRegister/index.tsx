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
import { Alert, Image } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { Camera, Images } from "lucide-react-native";
import { postAnimal } from "src/functions/AnimalsFetch";
import { getUser } from "@storage/user";

export const PetRegister = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const [gender, setGender] = React.useState("Fêmea");
  const [obs, setObs] = React.useState("");

  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0"); // Mês começa do 0
  const ano = date.getFullYear();
  //petName, petBirth, petGender, petObs e petPicture

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
    console.log(date);
  };

  const sendData = async () => {
    if (!name || !image || !date || !gender || !obs) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

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
    setGender("Fêmea");

    navigation.navigate("petList");
  };

  return (
    <Container>
      <HeaderTitleBack
        title='Cadastro'
        onPress={() => navigation.navigate("petList")}
      />
      <ContainerScroll>
        <ContainerImage>
          <Picture source={require("@assets/sleeping-kitty.png")} />
        </ContainerImage>
        <ContainerForm>
          <InputText placeholder='Nome' onChangeText={setName} value={name} />
          <Button
            title={
              !date ? "Data de Nascimento" : `Nasceu em ${dia}/${mes}/${ano}?`
            }
            onPress={() => setShow(!show)}
          />
          {show && (
            <RNDateTimePicker value={date} mode='date' onChange={changeDate} />
          )}
          <Picker
            selectedValue={gender}
            onValueChange={(item) => setGender(item)}
            style={{
              height: 50,
              width: 320,
              borderRadius: 8,
              marginBottom: 8,
              marginTop: 8,
              backgroundColor: theme.black200,
              color: theme.gray300,
            }}>
            <Picker.Item label='Fêmea' value='Fêmea' />
            <Picker.Item label='Macho' value='Macho' />
          </Picker>
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
    </Container>
  );
};
