import AsyncStorage from "@react-native-async-storage/async-storage";

type TokenData = {
  token: string;
};

export const addToken = async (token: TokenData) => {
  const data = JSON.stringify(token);
  await AsyncStorage.setItem("token", data);
};

export const getToken = async () => {
  const data = await AsyncStorage.getItem("token");
  const result = data !== null ? JSON.parse(data) : null;
  return result;
};

export const deleteToken = async () => {
  await AsyncStorage.removeItem("token");
};

export const verifyToken = async () => {};
