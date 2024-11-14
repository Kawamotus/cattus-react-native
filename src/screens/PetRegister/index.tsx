import React from "react";
import {
  ButtonGallery,
  Container,
  ContainerForm,
  ContainerGallery,
  ContainerImage,
  ContainerScroll,
  Picture,
  TextButton,
} from "./styles";
import { useTheme } from "@themes";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export const PetRegister = () => {
  const [image, setImage] = React.useState({});
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) setDate(selectedDate);
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
          <InputText placeholder='Nome' />
          <InputText placeholder='Nome' />
          <ContainerGallery>
            <ButtonGallery onPress={takePhoto}>
              <TextButton>Camera</TextButton>
            </ButtonGallery>
            <ButtonGallery onPress={pickImage}>
              <TextButton>Galeria</TextButton>
            </ButtonGallery>
          </ContainerGallery>
          <Button title='Selecionar Data' onPress={() => setShow(!show)} />
          {show && (
            <RNDateTimePicker value={date} mode='date' onChange={onChange} />
          )}
          <Button title='Cadastrar' type='green' />
        </ContainerForm>
      </ContainerScroll>
    </Container>
  );
};
