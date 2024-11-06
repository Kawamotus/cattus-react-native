import { Clickable, CompanyName, Container, ProfilePicture } from "./styles";
import { getUser } from "@storage/user";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Bell } from "lucide-react-native";
import { useTheme } from "@themes";

type userData = {
  companyName?: string;
  picture?: string;
};

export const Header = () => {
  const [userData, setUserData] = React.useState<userData>({});

  const theme = useTheme();

  const getUserData = async () => {
    setUserData(await getUser());
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <Container>
      <Clickable>
        <ProfilePicture source={{ uri: userData.picture }} />
      </Clickable>
      <CompanyName>{userData.companyName}</CompanyName>
      <Clickable>
        <Bell color={theme.text} />
      </Clickable>
    </Container>
  );
};
