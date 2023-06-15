import { action, createActions } from "typed-actions";

import type { Comment } from "../../entities/comment";
import type { PostId } from "../../entities/post";

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAIL = "LOAD_COMMENTS_FAIL";

let actions;

type LoadCommentsSuccessPayload = {
  comments: Comment[];
  postId: PostId;
};

type LoadCommentsFailPayload = {
  comments: never[];
  postId: PostId;
};

export const {
  [LOAD_COMMENTS]: loadComments,
  [LOAD_COMMENTS_SUCCESS]: loadCommentsSuccess,
  [LOAD_COMMENTS_FAIL]: loadCommentsFail,
} = (actions = createActions({
  [LOAD_COMMENTS]: (x: PostId) => action(x),
  [LOAD_COMMENTS_SUCCESS]: (x: LoadCommentsSuccessPayload) => action(x),
  [LOAD_COMMENTS_FAIL]: (x: LoadCommentsFailPayload) => action(x),
}));

export type Actions = typeof actions;
