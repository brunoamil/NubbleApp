export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 101;
  message: string; // 'Illum minima dolor amet laborum quis asperiores fugiat.';
  user_id: number; // 3;
  post_id: number; // 1;
  created_at: string; // '2023-09-16T18:28:11.000-03:00';
  updated_at: string; // '2023-09-17T15:30:59.353-03:00';
  user: {
    id: number; //3;
    first_name: string; // 'Ana';
    last_name: string; // 'Oliveira';
    username: string; // 'aninha23';
    email: string; // 'oliveiraana23@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/7-ana.png';
    is_online: boolean; // false;
    full_name: string; // 'Ana Oliveira';
  };
  meta: any; // {};
}
