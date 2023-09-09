import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">SettingsScreen</Text>
      <Button
        title="New post"
        onPress={() =>
          props.navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
    </Screen>
  );
}
