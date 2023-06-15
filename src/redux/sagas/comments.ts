import { takeLatest, call, put } from "redux-saga/effects";

import { getPostComments } from "../../api";
import { type Actions, LOAD_COMMENTS, loadCommentsSuccess, loadCommentsFail } from "../actions/comments";

export function* watchCommentsLoadSaga() {
  yield takeLatest(LOAD_COMMENTS, loadCommentsSaga);
}

function* loadCommentsSaga({ payload }: ReturnType<Actions[typeof LOAD_COMMENTS]>) {
  try {
    const comments: Awaited<ReturnType<typeof getPostComments>> = yield call(getPostComments, payload);
    yield put(loadCommentsSuccess({ comments, postId: payload }));
  } catch {
    yield put(loadCommentsFail({ comments: [], postId: payload }));
  }
}
