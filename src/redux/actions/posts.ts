import { action, createActions, empty } from "typed-actions";

import type { Post } from "../../entities/post";

export const LOAD_POSTS = "@posts/LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "@posts/LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAIL = "@posts/LOAD_POSTS_FAIL";
export const CHANGE_PAGE = "@posts/CHANGE_PAGE";

let actions;

export const {
  [LOAD_POSTS]: loadPosts,
  [LOAD_POSTS_SUCCESS]: loadPostsSuccess,
  [LOAD_POSTS_FAIL]: loadPostsFail,
  [CHANGE_PAGE]: changePage,
} = (actions = createActions({
  [LOAD_POSTS]: empty,
  [LOAD_POSTS_SUCCESS]: (x: Post[]) => action(x),
  [LOAD_POSTS_FAIL]: (x: string) => action(x),
  [CHANGE_PAGE]: (x: number) => action(x),
}));

export type Actions = typeof actions;
