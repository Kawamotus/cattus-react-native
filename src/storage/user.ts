import AsyncStorage from "@react-native-async-storage/async-storage";

type UserData = {
  accessLevel: number;
  companyName: string;
  id: string;
  name: string;
  company: string;
  picture: string;
};

export const addUser = async (user: UserData) => {
  const data = JSON.stringify(user);
  await AsyncStorage.setItem("user", data);
};

export const getUser = async () => {
  const data = await AsyncStorage.getItem("user");
  const result = data !== null ? JSON.parse(data) : null;
  return result;
};

export const deleteUser = async () => {
  await AsyncStorage.removeItem("user");
};
