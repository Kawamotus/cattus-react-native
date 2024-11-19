import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  BackContainer,
  CameraTitle,
  Clickable,
  Container,
  PetsContainer,
  ScrollContainer,
  TitlePets,
  VideoContainer,
} from "./styles";
import { Video } from "expo-av";
import { useTheme } from "@themes";
import { ChevronLeft } from "lucide-react-native";
import React from "react";

type RouteParams = {
  _id: string;
};

const videoSource =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

export const CameraDetail = () => {
  const route = useRoute();
  const theme = useTheme();

  const videoRef = React.useRef<Video>(null);

  //const player = useVideoPlayer(videoSource);

  const { _id } = route.params as RouteParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("cameraList");
  };

  React.useEffect(() => {}, []);

  useFocusEffect(React.useCallback(() => {}, []));

  return (
    <Container>
      <BackContainer>
        <Clickable onPress={handleGoBack}>
          <ChevronLeft color={theme.text} size={40} />
        </Clickable>
        <CameraTitle>{_id}</CameraTitle>
      </BackContainer>
      <ScrollContainer>
        <VideoContainer>
          <Video
            ref={videoRef}
            source={{ uri: videoSource }}
            style={{ width: "100%", height: 360 }}
            resizeMode='contain' // Ajusta ao contêiner
            useNativeControls // Ativa os controles nativos
            isLooping // Faz o vídeo reiniciar automaticamente
            onError={(error) => console.log("Erro no vídeo:", error)}
          />
        </VideoContainer>
        <PetsContainer>
          <TitlePets>Pets avistados:</TitlePets>
        </PetsContainer>
      </ScrollContainer>
    </Container>
  );
};
