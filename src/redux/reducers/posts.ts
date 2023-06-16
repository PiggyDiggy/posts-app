import { type Handlers, handleActions } from "typed-actions/immer";
import {
  type Actions,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAIL,
  CHANGE_PAGE,
  SEARCH_POSTS,
  SORT_POSTS,
} from "../actions/posts";
import type { Post } from "../../entities/post";

export type State = {
  list: Post[];
  page: number;
  perPage: number;
  status: "LOADING" | "SUCCESS" | "FAIL";
  error: string;
  search: string;
  sort: "asc" | "dsc" | "none";
};

const initialState = {
  list: [],
  status: "LOADING" as const,
  error: "",
  page: 1,
  perPage: 10,
  search: "",
  sort: "none" as const,
};

export default handleActions(
  {
    [LOAD_POSTS]: (state) => {
      state.status = "LOADING";
    },
    [LOAD_POSTS_SUCCESS]: (state, { payload }) => {
      state.status = "SUCCESS";
      state.list = payload;
    },
    [LOAD_POSTS_FAIL]: (state, { payload }) => {
      state.status = "FAIL";
      state.error = payload;
    },
    [CHANGE_PAGE]: (state, { payload }) => {
      state.page = payload;
    },
    [SEARCH_POSTS]: (state, { payload }) => {
      state.search = payload;
      state.page = 1;
    },
    [SORT_POSTS]: (state, { payload }) => {
      state.sort = payload;
      state.page = 1;
    },
  } as Handlers<State, Actions>,
  initialState
);
