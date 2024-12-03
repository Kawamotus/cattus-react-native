import { Bell } from "lucide-react-native";
import { Container, ContainerText, TextData, Title } from "./styles";
import { useTheme } from "@themes";
import { View } from "react-native";

type NotificationType = {
  title: string;
  body: string;
};

export const NotificationItem = ({ title, body }: NotificationType) => {
  const theme = useTheme();

  return (
    <Container>
      <View
        style={{
          width: 90,
          height: 110,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Bell color={theme.text} size={36} />
      </View>
      <ContainerText>
        <Title>{title}</Title>
        <TextData>{body}</TextData>
      </ContainerText>
    </Container>
  );
};
