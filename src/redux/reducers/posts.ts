import { type Handlers, handleActions } from "typed-actions/immer";
import { type Actions, LOAD_POSTS, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAIL } from "../actions/posts";
import type { Post } from "../../entities/post";

export type State = {
  posts: Post[];
  status: "LOADING" | "SUCCESS" | "FAIL";
  error: string;
};

const initialState = { posts: [], status: "SUCCESS" as const, error: "" };

export default handleActions(
  {
    [LOAD_POSTS]: (state) => {
      state.status = "LOADING";
    },
    [LOAD_POSTS_SUCCESS]: (state, { payload }) => {
      state.status = "SUCCESS";
      state.posts = state.posts.concat(payload);
    },
    [LOAD_POSTS_FAIL]: (state, { payload }) => {
      state.status = "FAIL";
      state.error = payload;
    },
  } as Handlers<State, Actions>,
  initialState
);
