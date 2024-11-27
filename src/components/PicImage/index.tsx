import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images", "videos"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    return result.assets[0];
  }
};

export const takePhoto = async () => {
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
    return result.assets[0];
  }
};
