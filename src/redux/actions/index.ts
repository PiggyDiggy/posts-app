import { action, createActions, empty } from "typed-actions";

import type { Post } from "../../entities/post";

export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAIL = "LOAD_POSTS_FAIL";

let actions;

export const {
  [LOAD_POSTS]: loadPosts,
  [LOAD_POSTS_SUCCESS]: loadPostsSuccess,
  [LOAD_POSTS_FAIL]: loadPostsFail,
} = (actions = createActions({
  [LOAD_POSTS]: empty,
  [LOAD_POSTS_SUCCESS]: (x: Post[]) => action(x),
  [LOAD_POSTS_FAIL]: (x: string) => action(x),
}));

export type Actions = typeof actions;
