import { takeLatest, call, put } from "redux-saga/effects";

import { getPosts } from "../../api";
import { LOAD_POSTS, loadPostsSuccess, loadPostsFail } from "../actions/posts";

function* loadPostsSaga() {
  try {
    const posts: Awaited<ReturnType<typeof getPosts>> = yield call(getPosts, {});
    yield put(loadPostsSuccess(posts));
  } catch {
    yield put(loadPostsFail("Failed to load posts"));
  }
}

export function* watchPostsLoadSaga() {
  yield takeLatest(LOAD_POSTS, loadPostsSaga);
}
