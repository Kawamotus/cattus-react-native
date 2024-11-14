import React from "react";
import {
  ButtonGallery,
  Container,
  ContainerForm,
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
          <ButtonGallery onPress={pickImage}></ButtonGallery>
          <Button title='Cadastrar' type='green' />
        </ContainerForm>
      </ContainerScroll>
    </Container>
  );
};
