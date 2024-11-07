import React from "react";
import {
  BackContent,
  ClickableLogout,
  Container,
  Logout,
  ProfileName,
  ProfilePic,
  Wrapper,
} from "./styles";
import { getUser } from "@storage/user";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { ChevronLeft, LogOut } from "lucide-react-native";
import { useTheme } from "@themes";
import { Clickable } from "@components/Header/styles";

type UserProps = {
  name: string;
  picture: string;
  companyName: string;
  accessLevel: Number;
};

export const Profile = () => {
  const [data, setData] = React.useState<UserProps>();
  const [isLoading, setIsLoading] = React.useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  const getData = async () => {
    setIsLoading(true);
    const result = await getUser();
    setData(await result);
    setIsLoading(false);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  return !isLoading ? (
    <Wrapper>
      <BackContent>
        <Clickable onPress={handleBack}>
          <ChevronLeft color={theme.text} size={40} />
        </Clickable>
      </BackContent>
      <Container>
        <ProfilePic source={{ uri: data?.picture }} />
        <ProfileName>{data?.name}</ProfileName>
        <ProfileName>{data?.companyName}</ProfileName>
        <ProfileName>
          {data?.accessLevel == 1 ? "Administrador" : "Colaborador"}
        </ProfileName>
        <ClickableLogout>
          <Logout>Sair</Logout>
          <LogOut color={theme.danger} />
        </ClickableLogout>
      </Container>
    </Wrapper>
  ) : (
    <Loading />
  );
};
