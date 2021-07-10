import { all } from "@redux-saga/core/effects";
import watchUserSaga from "./userSaga";

export default function* rootSaga() {
  yield all([watchUserSaga()]);
}
