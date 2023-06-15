import { action, createActions } from "typed-actions";

import type { User, UserId } from "../../entities/user";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAIL = "LOAD_USER_FAIL";

let actions;

export const {
  [LOAD_USER]: loadUser,
  [LOAD_USER_SUCCESS]: loadUserSuccess,
  [LOAD_USER_FAIL]: loadUserFail,
} = (actions = createActions({
  [LOAD_USER]: (x: UserId) => action(x),
  [LOAD_USER_SUCCESS]: (x: User) => action(x),
  [LOAD_USER_FAIL]: (x: string) => action(x),
}));

export type Actions = typeof actions;
