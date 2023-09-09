import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RootStackParamList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {FormTextInput} from '../../../components/Form/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput/FormPasswordInput';
import {SignUpSchemaType, signUpSchema} from './signUpSchema';

// type SignUpFormType = {
//   username: string;
//   fullName: string;
//   email: string;
//   password: string;
// };
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

/* eslint-disable @typescript-eslint/no-unused-vars */
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValues: SignUpSchemaType) {
    console.log('formValues', formValues);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
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
        name="fullName"
        placeholder="Digite seu Nome completo"
        label="Nome Completo"
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
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
