export interface User {
  id: string;
  userFullName: string;
  userName: string;
  avatarUrl: string;
  raw_user_meta_data: {
    full_name: string;
    user_name: string;
    avatar_url: string;
  };
}

export interface Post {
  id: string;
  content: string;
  user: User;
  created_at: string;
}
