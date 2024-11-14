import { launchImageLibraryAsync } from "expo-image-picker";

export const pickImage = async () => {
  const result = await launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 1,
  });

  return result;
};
