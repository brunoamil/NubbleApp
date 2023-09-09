import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
