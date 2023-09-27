import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

// export type RootStackParamList = {
//   LoginScreen: undefined;
//   SignUpScreen: undefined;
//   SuccessScreen: {
//     title: string;
//     description: string;
//     icon: Pick<IconProps, 'name' | 'color'>;
//   };
//   ForgoutPasswordScreen: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  const {authCredentials} = useAuthCredentials();

  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
