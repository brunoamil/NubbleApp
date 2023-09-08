import React from 'react';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{mb: 's20'}}
        errorMessage="Error message"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        boxProps={{mb: 's10'}}
        label="Senha"
        placeholder="Digite sua senha"
      />
      <Text preset="paragraphSmall" color="primary" bold mt="s10">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button title="Criar uma conta" mt="s12" preset="outline" />
    </Screen>
  );
}
