import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Icon, Text, Box, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;

type Props = Pick<ScreenProps, 'title' | 'canGoBack'>;
export function ScreenHeader({title, canGoBack}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      mb="s24"
      justifyContent="space-between"
      alignItems="center">
      {canGoBack && (
        <TouchableOpacityBox
          onPress={navigation.goBack}
          alignItems="center"
          flexDirection="row">
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {!title && (
            <Text ml="s8" preset="paragraphMedium" semiBold>
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box height={20} width={ICON_SIZE} />}
    </Box>
  );
}
