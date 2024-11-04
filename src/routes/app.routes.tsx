import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { CameraDetail } from "@screens/CameraDetail";
import { CameraList } from "@screens/CameraList";
import { Graphics } from "@screens/Graphics";
import { Home } from "@screens/Home";
import { PetDetail } from "@screens/PetDetail";
import { PetList } from "@screens/PetList";
import { useTheme } from "@themes";
import { Cat, Cctv, ChartColumn, House } from "lucide-react-native";
import { Platform } from "react-native";

type AppRoutes = {
  cameraDetail: undefined;
  cameraList: undefined;
  graphics: undefined;
  home: undefined;
  petDetail: undefined;
  petList: undefined;
};

export type AppRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 2,
          borderTopColor: theme.black300,
          height: Platform.OS === "android" ? 55 : 90,
        },
      }}>
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
    </Navigator>
  );
};
