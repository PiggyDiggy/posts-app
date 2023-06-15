import { fork } from "redux-saga/effects";

import { watchPostsLoadSaga } from "./posts";
import { watchCommentsLoadSaga } from "./comments";

export default function* rootSaga() {
  yield fork(watchPostsLoadSaga);
  yield fork(watchCommentsLoadSaga);
}
