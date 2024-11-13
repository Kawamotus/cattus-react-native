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
import { Video } from "expo-av";

type RouteParams = {
  _id: string;
};

export const CameraDetail = () => {
  const route = useRoute();
  const theme = useTheme();

  const { _id } = route.params as RouteParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("cameraList");
  };

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
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            }}
            rate={1.0} // Velocidade de reprodução
            volume={1.0} // Volume (1.0 = 100%)
            isMuted={false} // Som ativado
            shouldPlay // Inicia a reprodução automaticamente
            isLooping // Reprodução em loop
            style={{
              width: "100%",
              height: 200,
            }}
            resizeMode='contain'
          />
        </VideoContainer>
        <PetsContainer>
          <TitlePets>Pets avistados:</TitlePets>
        </PetsContainer>
      </ScrollContainer>
    </Container>
  );
};
