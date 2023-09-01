import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {Text} from './src/components/Text/Text';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            NublbleApp
          </Text>
          <Box flexDirection="row">
            <Icon name="eyeOn" color="carrotLight" size={40} />
            <Icon name="eyeOff" color="carrotSecondary" size={50} />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
