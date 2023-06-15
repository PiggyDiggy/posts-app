import { fork, takeLatest, put } from "redux-saga/effects";

import { watchPostsLoadSaga } from "./posts";
import { watchCommentsLoadSaga } from "./comments";
import { type Actions, LOCATION_CHANGE } from "../actions/router";
import { loadPosts } from "../actions/posts";

function* locationChangeSaga({ payload }: ReturnType<Actions[typeof LOCATION_CHANGE]>) {
  const { oldLoc, newLoc } = payload;
  if (oldLoc !== null && oldLoc.pathname === newLoc.pathname) return;

  if (newLoc.pathname === "/") {
    yield put(loadPosts());
  }
}

function* watchLocationChangeSaga() {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}

export default function* rootSaga() {
  yield fork(watchLocationChangeSaga);
  yield fork(watchPostsLoadSaga);
  yield fork(watchCommentsLoadSaga);
}
