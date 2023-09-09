import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">FavoriteScreen</Text>
    </Screen>
  );
}
