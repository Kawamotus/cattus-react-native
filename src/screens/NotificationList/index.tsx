import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { Container, ContainerNotifications, TextEmpty } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { NotificationItem } from "@components/NotificationItem";
import React from "react";
import { getNotifications } from "src/functions/NotificationFetch";
import { Loading } from "@components/Loading";

export const NotificationList = () => {
  const [notifications, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigation = useNavigation();

  const getNotificationsData = async () => {
    setIsLoading(true);
    const result = await getNotifications();
    setNotifications(result.result);
    setIsLoading(false);
    console.log(notifications);
  };

  useFocusEffect(
    React.useCallback(() => {
      getNotificationsData();
    }, [])
  );

  return (
    <Container>
      <HeaderTitleBack
        title='Notificações'
        onPress={() => navigation.navigate("home")}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <ContainerNotifications>
            {notifications && notifications.length == 0 ? (
              <TextEmpty>Nenhuma notificação a ser exibida</TextEmpty>
            ) : (
              // fazer o map aqq
              <NotificationItem
                title='Título da notificação'
                body='O que ocorreu'
              />
            )}
          </ContainerNotifications>
        </ScrollView>
      )}
    </Container>
  );
};
