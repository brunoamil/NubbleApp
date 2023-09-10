import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postType';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();
  // throw new Error('Not implemented');
  // return [];
  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
