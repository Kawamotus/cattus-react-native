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
          borderTopWidth: 0,
          paddingBottom: 0,
        },
      }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            //                      cor meramente para testes
            <House color={focused ? theme.purple400 : theme.green400} />
          ),
        }}
      />
      <Screen
        name='petList'
        component={PetList}
        options={{ tabBarIcon: () => <Cat color={theme.green400} /> }}
      />
      <Screen
        name='cameraList'
        component={CameraList}
        options={{ tabBarIcon: () => <Cctv color={theme.green400} /> }}
      />
      <Screen
        name='graphics'
        component={Graphics}
        options={{ tabBarIcon: () => <ChartColumn color={theme.green400} /> }}
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
