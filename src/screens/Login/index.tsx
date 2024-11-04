import { InputText } from "@components/InputText";
import { Container, Logo, ValidationText } from "./styles";
import { Button } from "@components/Button";
import React from "react";
import { Path } from "src/functions/Path";
import { addToken, getToken } from "@storage/token";
import { addUser } from "@storage/user";
import { getUserData } from "src/functions/Login";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesProps } from "src/routes/auth.routes";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");

  const navigation = useNavigation();

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
      navigation.navigate("main");
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
