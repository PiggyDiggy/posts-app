import type { PostId } from "../post";

export type CommentId = number;

export type Comment = {
  id: CommentId;
  postId: PostId;
  email: string;
  body: string;
};
