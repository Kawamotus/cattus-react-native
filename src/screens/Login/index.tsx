import { InputText } from "@components/InputText";
import { Container, Logo, ValidationText } from "./styles";
import { Button } from "@components/Button";
import React from "react";
import { Path } from "src/functions/Path";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordValidation, setPasswordValidation] = React.useState("");

  const SignIn = async () => {
    try {
      const response = await fetch(`${Path}/employee/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeeEmail: email,
          employeePassword: password,
        }),
      });

      console.log("Pinto duro");
      const data = await response.json();
      console.log(data);
    } catch (erro) {
      console.log(erro);
    }
  };

  const handleClickButton = () => {
    console.log(email, password);
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
