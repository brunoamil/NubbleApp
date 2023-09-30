import {useAuthIsEmailAvailable, useAuthIsUserNameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchemaType} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchemaType>;
  getFieldState: UseFormGetFieldState<SignUpSchemaType>;
};

type ReturnValue = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};
export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValue;
  emailValidation: ReturnValue;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUserNameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponivel'
        : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable
        ? 'e-mail indisponivel'
        : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
