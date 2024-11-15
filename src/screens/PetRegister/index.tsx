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

export const PetRegister = () => {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(image);
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(image);
    }
  };
  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) setDate(selectedDate);
    console.log(date);
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
          <InputText placeholder='Nome' onChangeText={setName} />
          <Button
            title={
              !date ? "Data de Nascimento" : `Nasceu em ${dia}/${mes}/${ano}?`
            }
            onPress={() => setShow(!show)}
          />
          {show && (
            <RNDateTimePicker value={date} mode='date' onChange={onChange} />
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
          <InputText placeholder='Observações' onChangeText={setObs} />
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

          <Button title='Cadastrar' type='green' />
        </ContainerForm>
      </ContainerScroll>
    </Container>
  );
};
