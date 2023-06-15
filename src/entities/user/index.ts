import type { Post } from "../post";

export type UserId = number;

export type User = {
  id: UserId;
  name: string;
  username: string;
  email: string;
  website: string;
  city: string;
  phone: string;
  posts: Post[];
};
