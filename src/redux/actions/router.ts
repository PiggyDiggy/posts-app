import { action, createActions } from "typed-actions";
import { type Location } from "react-router-dom";

export const LOCATION_CHANGE = "LOCATION_CHANGE";

type LocationChangePayload = {
  oldLoc: Location | null;
  newLoc: Location;
};

let actions;

export const { [LOCATION_CHANGE]: locationChange } = (actions = createActions({
  [LOCATION_CHANGE]: (x: LocationChangePayload) => action(x),
}));

export type Actions = typeof actions;
