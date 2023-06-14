import type { UserId } from "../user";

export type PostId = number;

export type Post = {
  userId: UserId;
  id: PostId;
  title: string;
  body: string;
};
