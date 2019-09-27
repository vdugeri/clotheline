import { all, call, takeLatest, put } from "redux-saga/effects";

import { clearCart } from "./cart.actions";

import userActionTypes from "../user/user.types";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
