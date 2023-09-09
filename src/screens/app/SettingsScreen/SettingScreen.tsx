import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SettingsScreen</Text>
    </Screen>
  );
}
