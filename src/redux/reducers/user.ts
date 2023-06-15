import { type Handlers, handleActions } from "typed-actions";
import { type Actions, LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAIL } from "../actions/user";
import type { User } from "../../entities/user";

export type State = User & {
  status: "LOADING" | "SUCCESS" | "FAIL";
  error: string;
};

export default handleActions({
  [LOAD_USER]: (state) => ({
    ...state,
    status: "LOADING",
  }),
  [LOAD_USER_SUCCESS]: (_, { payload }) => ({
    ...payload,
    status: "SUCCESS",
    error: "",
  }),
  [LOAD_USER_FAIL]: (state, { payload }) => ({
    ...state,
    status: "FAIL",
    error: payload,
  }),
} as Handlers<State, Actions>);
