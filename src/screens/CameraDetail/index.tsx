import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Container } from "./styles";
import WebView from "react-native-webview";
import React from "react";
import { HeaderTitleBack } from "@components/HeaderTitleBack";

type RouteParams = {
  _id: string;
};

export const CameraDetail = () => {
  const route = useRoute();

  const { _id } = route.params as RouteParams;
  const navigation = useNavigation();

  React.useEffect(() => {}, []);

  useFocusEffect(React.useCallback(() => {}, []));

  const uri = "http://192.168.227.31:5000/camera_stream";

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
