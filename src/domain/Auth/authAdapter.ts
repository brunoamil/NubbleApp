import {userAdapter} from '../User';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuthCredentials(
  authCredentials: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: authCredentials.auth.token,
    user: userAdapter.toUser(authCredentials.user),
  };
}

export const authAdapter = {toAuthCredentials};
