import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm, Controller} from 'react-hook-form';

import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/Routes';
import {Alert} from 'react-native';

type LoginFormType = {
  email: string;
  password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
    Alert.alert(`Email: ${email}, Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgoutPasswordScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            boxProps={{mb: 's20'}}
            errorMessage={fieldState.error?.message}
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'A senha deve conter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{mb: 's10'}}
            label="Senha"
            placeholder="Digite sua senha"
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        color="primary"
        bold
        mt="s10">
        Esqueci minha senha
      </Text>

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
      />
      <Button
        onPress={navigateToSignUpScreen}
        title="Criar uma conta"
        mt="s12"
        preset="outline"
      />
    </Screen>
  );
}
