import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { AppRoutes } from "./app.routes";
import React from "react";
import { getToken } from "@storage/token";
import { getUserData } from "src/functions/Login";

type AuthRoutes = {
  login: undefined;
  main: undefined;
};

export type AuthRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export const AuthRoutes = () => {
  const [isLogged, setIsLogged] = React.useState(false);

  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (token) {
        const getUser = await getUserData(token);
        console.log(await getUser.json());
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
    <Navigator screenOptions={{ headerShown: false }}>
      {!isLogged ? (
        <Screen name='login' component={Login} />
      ) : (
        <Screen name='main' component={AppRoutes} />
      )}
    </Navigator>
  );
};
