import {PageAPI} from '@api';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.EdeKoSq8wbygaoeUpy2njBDtMmhuGp3lI3vRE99HEu9183UTIYj11FFfqXMq',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
