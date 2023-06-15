import { takeLatest, call, put } from "redux-saga/effects";

import { getUserById } from "../../api";
import { type Actions, LOAD_USER, loadUserSuccess, loadUserFail } from "../actions/user";

function* loadUserSaga({ payload: userId }: ReturnType<Actions[typeof LOAD_USER]>) {
  try {
    const user: Awaited<ReturnType<typeof getUserById>> = yield call(getUserById, userId);
    yield put(loadUserSuccess(user));
  } catch {
    yield put(loadUserFail("Failed to load user"));
  }
}

export function* watchUserLoadSaga() {
  yield takeLatest(LOAD_USER, loadUserSaga);
}
