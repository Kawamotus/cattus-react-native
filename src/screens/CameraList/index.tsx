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
        "https://cdn.leonardo.ai/users/3871d2f2-3a2a-4694-a99a-6efec489dab4/generations/13e8974e-b8df-43f5-8f6a-2b937288274c/Leonardo_Phoenix_A_cozy_and_warm_cat_shelter_scene_with_multip_2.jpg",
    },
    {
      _id: "2",
      title: "Camera 2",
      linkPic:
        "https://cdn.leonardo.ai/users/3871d2f2-3a2a-4694-a99a-6efec489dab4/generations/13e8974e-b8df-43f5-8f6a-2b937288274c/Leonardo_Phoenix_A_cozy_and_warm_cat_shelter_scene_with_multip_1.jpg",
    },
    {
      _id: "3",
      title: "Camera 3",
      linkPic:
        "https://cdn.leonardo.ai/users/3871d2f2-3a2a-4694-a99a-6efec489dab4/generations/13e8974e-b8df-43f5-8f6a-2b937288274c/Leonardo_Phoenix_A_cozy_and_warm_cat_shelter_scene_with_multip_0.jpg",
    },
    {
      _id: "4",
      title: "Camera 4",
      linkPic:
        "https://cdn.leonardo.ai/users/3871d2f2-3a2a-4694-a99a-6efec489dab4/generations/13e8974e-b8df-43f5-8f6a-2b937288274c/Leonardo_Phoenix_A_cozy_and_warm_cat_shelter_scene_with_multip_3.jpg",
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
