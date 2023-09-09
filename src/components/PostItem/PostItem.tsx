import React from 'react';

import {Post} from '@domain';

import {Box} from '@components';

import {PostActions} from './components/PostActions/PostActions';
import {PostHeader} from './components/PostHeader/PostHeader';
import {PostImage} from './components/PostImage/PostImage';

interface PostItemProps {
  post: Post;
}
export function PostItem({post}: PostItemProps) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
