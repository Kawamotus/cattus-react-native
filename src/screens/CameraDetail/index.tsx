import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Container } from "./styles";
import { Video } from "expo-av";
import { useTheme } from "@themes";
import WebView from "react-native-webview";
import React from "react";
import { HeaderTitleBack } from "@components/HeaderTitleBack";

type RouteParams = {
  _id: string;
};

const videoSource =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

export const CameraDetail = () => {
  const route = useRoute();

  const { _id } = route.params as RouteParams;
  const navigation = useNavigation();

  React.useEffect(() => {}, []);

  useFocusEffect(React.useCallback(() => {}, []));

  const uri = "https://expo.dev/";

  return (
    <Container>
      <HeaderTitleBack
        title={_id}
        onPress={() => navigation.navigate("cameraList")}
      />
      <WebView source={{ uri: uri }} style={{ flex: 1 }} />
    </Container>
  );
};
