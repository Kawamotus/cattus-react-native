import { Clickable, CompanyName, Container, ProfilePicture } from "./styles";
import { getUser } from "@storage/user";
import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Bell } from "lucide-react-native";
import { useTheme } from "@themes";
import { AppRoutesProps } from "src/routes/app.routes";

type userData = {
  companyName?: string;
  picture?: string;
};

export const Header = () => {
  const [userData, setUserData] = React.useState<userData>({});

  const theme = useTheme();
  const navigation = useNavigation<AppRoutesProps>();

  const getUserData = async () => {
    setUserData(await getUser());
  };

  const handlePressProfilePic = () => {
    navigation.navigate("profile");
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <Container>
      <Clickable onPress={handlePressProfilePic}>
        <ProfilePicture source={{ uri: userData.picture }} />
      </Clickable>
      <CompanyName>{userData.companyName}</CompanyName>
      <Clickable>
        <Bell color={theme.text} />
      </Clickable>
    </Container>
  );
};
