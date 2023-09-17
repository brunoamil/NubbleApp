export interface Post {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 2;
  text: string; // 'Vivendo no paraíso!';
  user_id: number; // 2;
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post2.jpg';
  is_fixed: boolean; // false;
  is_activated: boolean; //  true;
  created_at: string; // '2023-09-09T20:45:26.451-03:00';
  updated_at: string; // '2023-09-09T21:25:26.460-03:00';
  user: {
    id: number; // 2;
    first_name: string; //'Tamires';
    last_name: string; //'Silva';
    username: string; // 'tami_silva';
    email: string; //'tsilva@coffstack.com';
    profile_url: string; //'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/4-tamires.png';
    is_online: boolean; //  false;
    full_name: string; //'Tamires Silva';
  };
  status: string; //'published';
  meta: {
    like_count: string; //'7';
    favorite_count: string; // '1';
    comments_count: string; //'3';
  };
}
