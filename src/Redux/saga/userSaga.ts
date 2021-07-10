import { call, put, takeEvery } from "@redux-saga/core/effects";

import getApi from "../../api/userApi";

function* fetchUsers() {
  try {
    const { data } = yield call(getApi);
    console.log(data);
    // console.log(response);
    yield put({ type: "GET_USERS_SUCCESS", users: data });
  } catch (e) {
    yield put({ type: "GET_USERS_FAILED", message: e.message });
  }
}

function* watchUserSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default watchUserSaga;
