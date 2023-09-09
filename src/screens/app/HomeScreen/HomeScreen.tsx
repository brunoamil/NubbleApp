import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {Box, PostItem, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Screen>
  );
}
