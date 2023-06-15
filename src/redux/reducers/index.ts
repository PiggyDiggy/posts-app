import { combineReducers } from "redux";

import page, { type State as PageState } from "./posts";
import comments, { type State as CommentsState } from "./comments";
import router, { type State as RouterState } from "./router";

export type State = {
  page: PageState;
  comments: CommentsState;
  router: RouterState;
};

export default combineReducers({ page, comments, router });
