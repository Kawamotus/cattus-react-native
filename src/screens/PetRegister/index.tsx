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

export const PetRegister = () => {
  const [image, setImage] = React.useState({});

  const theme = useTheme();
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
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
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleSelectImage = async () => {};

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

          <Button title='Cadastrar' type='green' />
        </ContainerForm>
      </ContainerScroll>
    </Container>
  );
};
