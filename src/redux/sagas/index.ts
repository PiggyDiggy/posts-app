import { takeLatest, call, put } from "redux-saga/effects";

import { getPosts } from "../../api";
import { LOAD_POSTS, loadPostsSuccess, loadPostsFail } from "../actions";

function* loadPostsSaga() {
  try {
    const posts: Awaited<ReturnType<typeof getPosts>> = yield call(getPosts, { path: "posts" });
    yield put(loadPostsSuccess(posts));
  } catch {
    yield put(loadPostsFail("Failed to load posts"));
  }
}

function* watchPostsLoadSaga() {
  yield takeLatest(LOAD_POSTS, loadPostsSaga);
}

export default function* rootSaga() {
  yield watchPostsLoadSaga();
}
