import { Loading } from "@components/Loading";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { CameraDetail } from "@screens/CameraDetail";
import { CameraList } from "@screens/CameraList";
import { Graphics } from "@screens/Graphics";
import { Home } from "@screens/Home";
import { Login } from "@screens/Login";
import { PetDetail } from "@screens/PetDetail";
import { PetList } from "@screens/PetList";
import { PetRegister } from "@screens/PetRegister";
import { PetUpdate } from "@screens/PetUpdate";
import { Profile } from "@screens/Profile";
import { ProfileList } from "@screens/ProfileList";
import { getToken } from "@storage/token";
import { useTheme } from "@themes";
import { Cat, Cctv, ChartColumn, House } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";
import { getUserData } from "src/functions/Login";

type AppRoutes = {
  cameraDetail: undefined;
  cameraList: undefined;
  graphics: undefined;
  home: undefined;
  petDetail: undefined;
  petList: undefined;
  petRegister: undefined;
  login: undefined;
  profile: undefined;
  profileList: undefined;
  petUpdate: undefined;
};

export type AppRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (token) {
        const getUser = await getUserData(token);
        if (getUser.status == 200) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      }
    };

    checkAuth();
  }, []);

  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 2,
          borderTopColor: theme.black300,
          height: Platform.OS === "android" ? 55 : 90,
        },
      })}>
      <Screen
        name='login'
        component={Login}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              color={focused ? theme.green200 : theme.green400}
              size={focused ? 28 : 25}
            />
          ),
        }}
      />
      <Screen
        name='petList'
        component={PetList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Cat
              color={focused ? theme.green200 : theme.green400}
              size={focused ? 28 : 25}
            />
          ),
        }}
      />
      <Screen
        name='cameraList'
        component={CameraList}
        options={{
          tabBarIcon: ({ focused }) => (
            <Cctv
              color={focused ? theme.green200 : theme.green400}
              size={focused ? 28 : 25}
            />
          ),
        }}
      />
      <Screen
        name='graphics'
        component={Graphics}
        options={{
          tabBarIcon: ({ focused }) => (
            <ChartColumn
              color={focused ? theme.green200 : theme.green400}
              size={focused ? 28 : 25}
            />
          ),
        }}
      />

      <Screen
        name='cameraDetail'
        component={CameraDetail}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='petDetail'
        component={PetDetail}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='profile'
        component={Profile}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='petRegister'
        component={PetRegister}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='profileList'
        component={ProfileList}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name='petUpdate'
        component={PetUpdate}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
};
