import { type Handlers, handleActions } from "typed-actions/immer";
import { type Actions, LOCATION_CHANGE } from "../actions/router";
import { type Location } from "react-router-dom";

export type State = {
  location: Location;
};

const initialState = {
  location: {
    pathname: "/",
    search: "",
    hash: "",
    state: null,
    key: "",
  },
};

export default handleActions(
  {
    [LOCATION_CHANGE]: (state, { payload }) => {
      state.location = payload.newLoc;
    },
  } as Handlers<State, Actions>,
  initialState
);
