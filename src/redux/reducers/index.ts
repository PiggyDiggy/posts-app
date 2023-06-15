import { combineReducers } from "redux";

import posts, { type State as PostsState } from "./posts";
import comments, { type State as CommentsState } from "./comments";
import router, { type State as RouterState } from "./router";
import user, { type State as UserState } from "./user";

export type State = {
  posts: PostsState;
  comments: CommentsState;
  router: RouterState;
  user: UserState;
};

export default combineReducers({ posts, comments, router, user });
