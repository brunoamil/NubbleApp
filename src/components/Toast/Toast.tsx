import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  const {toast, hideToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, 2000);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }
  return (
    <Box {...$boxStyle} top={100}>
      <Icon name="checkRound" color="success" />
      <Text ml="s16" preset="paragraphMedium" bold style={{flexShrink: 1}}>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  backgroundColor: 'background',
  style: {...$shadowProps},
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};