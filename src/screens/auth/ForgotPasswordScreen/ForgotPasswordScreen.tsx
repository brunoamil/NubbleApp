import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgoutPasswordScreen'
>;

/* eslint-disable @typescript-eslint/no-unused-vars */
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
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
      <TextInput
        boxProps={{mb: 's40'}}
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
