import { useNavigation, useRoute } from "@react-navigation/native";
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
import { useTheme } from "@themes";
import { ChevronLeft } from "lucide-react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";

type RouteParams = {
  _id: string;
};

const videoSource =
  "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

export const CameraDetail = () => {
  const route = useRoute();
  const theme = useTheme();

  const player = useVideoPlayer(videoSource);

  const { _id } = route.params as RouteParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("cameraList");
  };

  React.useEffect(() => {}, []);

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
          <VideoView
            player={player}
            style={{ width: "100%", height: 200 }}
            allowsFullscreen
            allowsPictureInPicture
            nativeControls={true}
          />
        </VideoContainer>
        <PetsContainer>
          <TitlePets>Pets avistados:</TitlePets>
        </PetsContainer>
      </ScrollContainer>
    </Container>
  );
};
