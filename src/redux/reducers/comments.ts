import { type Handlers, handleActions } from "typed-actions/immer";
import { type Actions, LOAD_COMMENTS, LOAD_COMMENTS_FAIL, LOAD_COMMENTS_SUCCESS } from "../actions/comments";
import type { Comment } from "../../entities/comment";
import type { PostId } from "../../entities/post";

type PostComments = {
  status: "LOADING" | "SUCCESS" | "FAIL";
  comments: Comment[];
};

export type State = Record<PostId, PostComments>;

export default handleActions({
  [LOAD_COMMENTS]: (state, { payload }) => {
    state[payload] = { status: "LOADING", comments: state[payload]?.comments || [] };
  },
  [LOAD_COMMENTS_SUCCESS]: (state, { payload }) => {
    state[payload.postId] = { status: "SUCCESS", comments: payload.comments };
  },
  [LOAD_COMMENTS_FAIL]: (state, { payload }) => {
    state[payload.postId] = { status: "FAIL", comments: payload.comments };
  },
} as Handlers<State, Actions>);
