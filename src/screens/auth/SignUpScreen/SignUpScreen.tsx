import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    // TODO: Implementar
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput placeholder="@" label="Seu username" boxProps={{mb: 's20'}} />
      <TextInput
        placeholder="Nome completo"
        label="Nome Completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        placeholder="E-mail"
        label="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Nova senha"
        placeholder="Digite sua nova senha"
        boxProps={{mb: 's48'}}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}
