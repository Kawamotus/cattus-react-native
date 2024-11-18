import React from "react";
import {
  Clickable,
  ClickableLogout,
  Container,
  Logout,
  ProfileName,
  ProfilePic,
  TextManage,
  Wrapper,
} from "./styles";
import { getUser } from "@storage/user";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { LogOut } from "lucide-react-native";
import { useTheme } from "@themes";
import { HeaderTitleBack } from "@components/HeaderTitleBack";

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
      <HeaderTitleBack
        title={data ? data?.name : "Usuário"}
        onPress={handleBack}
      />
      <Container>
        <ProfilePic source={{ uri: data?.picture }} />
        <ProfileName>{data?.companyName}</ProfileName>
        <ProfileName>
          {data?.accessLevel == 1 ? "Administrador" : "Colaborador"}
        </ProfileName>
        <Clickable onPress={() => navigation.navigate("profileList")}>
          <TextManage>Gerenciar Perfis</TextManage>
        </Clickable>
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
