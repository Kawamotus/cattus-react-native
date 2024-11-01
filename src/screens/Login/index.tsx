import { InputText } from "@components/InputText";
import { Container, Logo, ValidationText } from "./styles";
import { Button } from "@components/Button";
import React from "react";
import { Path } from "src/functions/Path";
import { addToken, getToken } from "@storage/token";
import { addUser, getUser } from "@storage/user";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");

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
      const userData = await fetch(`${Path}/`, {
        method: "GET",
        headers: {
          authorization: await getToken(),
        },
      });

      const dataUser = await userData.json();
      await addUser(dataUser);

      console.log(await getUser());
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
