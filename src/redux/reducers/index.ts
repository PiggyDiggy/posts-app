import { combineReducers } from "redux";

import page from "./posts";
import comments from "./comments";

export default combineReducers({ page, comments });
