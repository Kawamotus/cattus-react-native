import { Header } from "@components/Header";
import { Container, ContentList } from "./styles";
import { CameraItem } from "@components/CameraItem";
import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CameraList = () => {
  const [cameraData, setCameraData] = React.useState([
    {
      _id: "1",
      title: "Camera 1",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "2",
      title: "Camera 2",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "3",
      title: "Camera 3",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "4",
      title: "Camera 4",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "5",
      title: "Camera 5",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "6",
      title: "Camera 6",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "7",
      title: "Camera 7",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "8",
      title: "Camera 8",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "9",
      title: "Camera 9",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
    {
      _id: "10",
      title: "Camera 10",
      linkPic:
        "https://apaixonadosporquatropatas.com.br/wp-content/uploads/2024/04/Como-Escolher-os-Melhores-Brinquedos-e-Acessorios-para-seu-Pet.jpg",
    },
  ]);

  const navigation = useNavigation();

  const handleNatigate = (_id: string) => {
    navigation.navigate("cameraDetail", { _id });
  };

  return (
    <Container>
      <Header />
      <ContentList>
        <FlatList
          data={cameraData}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CameraItem
              title={item.title}
              linkPic={item.linkPic}
              onPress={() => handleNatigate(item._id)}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </ContentList>
    </Container>
  );
};
