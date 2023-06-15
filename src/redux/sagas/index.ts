import { fork, takeLatest, put } from "redux-saga/effects";

import { watchPostsLoadSaga } from "./posts";
import { watchCommentsLoadSaga } from "./comments";
import { watchUserLoadSaga } from "./user";
import { type Actions, LOCATION_CHANGE } from "../actions/router";
import { loadPosts } from "../actions/posts";
import { loadUser } from "../actions/user";

function* locationChangeSaga({ payload }: ReturnType<Actions[typeof LOCATION_CHANGE]>) {
  const { oldLoc, newLoc } = payload;
  if (oldLoc?.pathname === newLoc.pathname) return;

  if (newLoc.pathname === "/") {
    yield put(loadPosts());
  }

  const match = newLoc.pathname.match(/\/user\/(\d+)/);
  if (match) {
    const id = Number(match[1]);
    yield put(loadUser(id));
  }
}

function* watchLocationChangeSaga() {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}

export default function* rootSaga() {
  yield fork(watchLocationChangeSaga);
  yield fork(watchPostsLoadSaga);
  yield fork(watchCommentsLoadSaga);
  yield fork(watchUserLoadSaga);
}
