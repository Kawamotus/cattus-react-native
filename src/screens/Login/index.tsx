import React from "react";
import { InputText } from "@components/InputText";
import { Button } from "@components/Button";
import { addToken, getToken } from "@storage/token";
import { addUser } from "@storage/user";
import { Path } from "src/functions/Path";
import { getUserData } from "src/functions/Login";
import { Container, Logo, ValidationText } from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppRoutesProps } from "src/routes/app.routes";
import { Home } from "@screens/Home";
import { Loading } from "@components/Loading";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");
  const [isLogged, setIsLogged] = React.useState(false);

  const navigation = useNavigation<AppRoutesProps>();

  const SignIn = async () => {
    const response = await fetch(`${Path}/employee/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeEmail: email,
        employeePassword: password,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.log(data.message);
    }

    if (data.ok) {
      await addToken(data.token);
      const dataUser = await getUserData(await getToken());
      const user = await dataUser.json();
      await addUser(user);

      console.log("Uhul");
      console.log(dataUser.status);
      navigation.navigate("home");
    }
  };

  const handleClickButton = () => {
    if (!email) {
      setEmailValidation("Insira um e-mail válido!");
      return;
    }
    if (!password) {
      setPasswordValidation("Insira uma senha válida!");
      return;
    }

    if (email) {
      setEmailValidation("");
    }
    if (password) {
      setPasswordValidation("");
    }

    SignIn();
  };

  useFocusEffect(
    React.useCallback(() => {
      const checkAuth = async () => {
        const token = await getToken();
        if (token) {
          const getUser = await getUserData(token);
          console.log(await getUser.json());
          if (getUser.status == 200) {
            setIsLogged(true);
            navigation.navigate("home");
          } else {
            setIsLogged(false);
          }
        }
      };

      checkAuth();
    }, [])
  );

  return (
    <Container>
      <Logo source={require("@assets/tipo.png")} />
      <InputText
        placeholder='E-mail'
        keyboardType='email-address'
        onChangeText={setEmail}
      />
      {emailValidation && <ValidationText>{emailValidation}</ValidationText>}
      <InputText
        placeholder='Senha'
        secureTextEntry
        onChangeText={setPassword}
      />
      {passwordValidation && (
        <ValidationText>{passwordValidation}</ValidationText>
      )}
      <Button title='Entrar' type='green' onPress={handleClickButton} />
    </Container>
  );
};
