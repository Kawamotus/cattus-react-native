import React from "react";
import {
  Container,
  ContainerImage,
  ContainerProfile,
  ContainerProfiles,
  TextName,
} from "./styles";
import { getEmployees } from "src/functions/EmployeesFetch";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { getUser } from "@storage/user";
import { HeaderTitleBack } from "@components/HeaderTitleBack";
import { ScrollView } from "react-native";
import { Image } from "expo-image";

type EmployeeProps = {
  _id: string;
  employeeName: string;
  employeePicture: string;
};

export const ProfileList = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [employeesData, setEmployeesData] = React.useState<
    Array<EmployeeProps>
  >([]);
  const [companyName, setCompanyName] = React.useState();

  const navigation = useNavigation();

  const fetchEmployees = async () => {
    setIsLoading(true);
    const data = await getEmployees();
    setEmployeesData(await data.result);
    setIsLoading(false);
    console.log(await data.result);
  };

  const getCompanyName = async () => {
    const user = await getUser();
    const sigla = user.companyName
      .split(" ")
      .map((word: string) => word[0]?.toUpperCase())
      .join(".");
    setCompanyName(await sigla);
  };

  useFocusEffect(
    React.useCallback(() => {
      getCompanyName();
      fetchEmployees();
    }, [])
  );

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <HeaderTitleBack
        title={companyName ? companyName + "." : ""}
        onPress={() => navigation.navigate("home")}
      />
      <ScrollView>
        {employeesData && (
          <ContainerProfiles>
            {employeesData.map((data) => (
              <ContainerProfile key={data._id}>
                <ContainerImage>
                  <Image
                    source={data.employeePicture}
                    style={{
                      flex: 1,
                      backgroundColor: "#0553",
                      borderRadius: 8,
                    }}
                    contentFit='cover'
                    transition={1000}
                  />
                </ContainerImage>
                <TextName>{data.employeeName}</TextName>
              </ContainerProfile>
            ))}
          </ContainerProfiles>
        )}
      </ScrollView>
    </Container>
  );
};
