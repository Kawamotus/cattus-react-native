import { Header } from "@components/Header";
import { Container, ContainerAlign, Content } from "./styles";
import { InputText } from "@components/InputText";
import { ScrollView, View } from "react-native";
import React from "react";
import { PetData } from "@screens/PetDetail";
import { TitleData } from "@screens/PetUpdate/styles";
import { searchAnimal } from "src/functions/AnimalsFetch";
import { Loading } from "@components/Loading";
import { PetItem } from "@components/PetItem";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export const PetSearch = () => {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState<Array<PetData>>();
  const [isLoading, setIsLoading] = React.useState(false);

  const navigation = useNavigation();

  const handleSearchPet = async () => {
    setIsLoading(true);
    const result = await searchAnimal(search);
    setData(result);
    setIsLoading(false);
  };

  React.useEffect(() => {
    handleSearchPet();
  }, [search]);

  return (
    <Container>
      <HeaderTitleBack
        title='Pesquisa'
        onPress={() => {
          navigation.navigate("petList");
        }}
      />
      <ContainerAlign>
        <InputText
          placeholder='digite o nome que deseja pesquisar'
          style={{ marginTop: 32, marginBottom: 20 }}
          value={search}
          onChangeText={setSearch}
        />
      </ContainerAlign>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          {data?.length !== 0 ? (
            <Content>
              {data?.map((item) => (
                <PetItem
                  imageSource={item.petPicture}
                  key={item._id}
                  petName={item.petName}
                  petSex={item.petGender}
                  petComorbidities={item.petComorbidities}
                  petAlertLevel={
                    item.petStatus
                      ? item.petStatus.petCurrentStatus == "0"
                        ? "ok"
                        : item.petStatus.petCurrentStatus == "1"
                        ? "alert"
                        : item.petStatus.petCurrentStatus == "2"
                        ? "danger"
                        : ""
                      : ""
                  }
                />
              ))}
            </Content>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 12,
              }}>
              <TitleData>Nenhum resultado encontrado D:</TitleData>
            </View>
          )}
        </ScrollView>
      )}
    </Container>
  );
};
