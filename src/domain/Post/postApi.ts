import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  // TODO: simular um delay na API
  new Promise(resolve => setTimeout(() => resolve(''), 3000));
  return postListMock;
}

export const postApi = {
  getList,
};
