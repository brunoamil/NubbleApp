import React from 'react';

import {Post} from '@domain';

import {Box, ProfileAvatar, Text} from '@components';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box mb="s24">
      <Box flexDirection="row" alignItems="center" mb="s4">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text preset="paragraphMedium" semiBold ml="s12">
          {author.userName}
        </Text>
      </Box>
    </Box>
  );
}
