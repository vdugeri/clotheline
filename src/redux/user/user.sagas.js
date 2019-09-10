import { takeLatest, call, all, put } from "redux-saga/effects";

import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/fireabase.utils";

import { googleSigInSuccess, googleSignInFailure } from "../user/user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      googleSigInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
