/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-Regular'}}>
        My App
      </Text>
    </SafeAreaView>
  );
}

export default App;
