import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            NublbleApp
          </Text>
          <Button loading preset="primary" marginBottom="s20" title="Primary" />
          <Button
            disabled
            preset="primary"
            marginBottom="s20"
            title="Primary"
          />
          <Button preset="outline" marginBottom="s20" title="Outline" />
          <Button disabled preset="outline" title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
