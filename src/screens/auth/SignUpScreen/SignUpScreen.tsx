import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SignUpSchemaType, signUpSchema} from './signUpSchema';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchemaType = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpSchemaType) {
    signUp(formValues);
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="firstName"
        placeholder="Digite seu nome"
        label="Primeiro nome"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="lastName"
        placeholder="Digite seu sobrenome"
        label="Sobrenome"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="email"
        placeholder="E-mail"
        label="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
