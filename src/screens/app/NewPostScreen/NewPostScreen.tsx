import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}
