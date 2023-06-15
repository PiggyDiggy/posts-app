import { takeLatest, call, put } from "redux-saga/effects";

import { getUserById } from "../../api";
import { type Actions, LOAD_USER, loadUserSuccess, loadUserFail } from "../actions/user";

function* loadUserSaga({ payload }: ReturnType<Actions[typeof LOAD_USER]>) {
  try {
    const { email, id, name, username, website }: Awaited<ReturnType<typeof getUserById>> = yield call(
      getUserById,
      payload
    );
    const user = { email, id, name, username, website };
    yield put(loadUserSuccess(user));
  } catch {
    yield put(loadUserFail("Failed to load user"));
  }
}

export function* watchUserLoadSaga() {
  yield takeLatest(LOAD_USER, loadUserSaga);
}
