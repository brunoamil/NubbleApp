import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

/* eslint-disable @typescript-eslint/no-unused-vars */
export function ForgotPasswordScreen({
  navigation,
}: AuthScreenProps<'ForgoutPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState} = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  function submitForm(values: ForgotPasswordSchemaType) {
    console.log('values', values);
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
    // navigation.reset({
    //   index: 1,
    //   routes: [
    //     {
    //       name: 'LoginScreen',
    //     },
    //     {
    //       name: 'SuccessScreen',
    //       params: {
    //         title: `Enviamos as instruções ${'\n'}para seu e-mail`,
    //         description:
    //           'Clique no link enviado no seu e-mail para recuperar sua senha',
    //         icon: {
    //           name: 'messageRound',
    //           color: 'primary',
    //         },
    //       },
    //     },
    //   ],
    // });
    // navigation.navigate('SuccessScreen', {
    //   title: `Enviamos as instruções ${'\n'}para seu e-mail`,
    //   description:
    //     'Clique no link enviado no seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={{mb: 's40'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Recuperar senha"
      />
    </Screen>
  );
}
