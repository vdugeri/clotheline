import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const signInFailure = error => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: error
});

export const sigInSuccess = user => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = user => ({
  type: userActionTypes.SIGNUP_START,
  payload: user
});

export const signUpSuccess = user => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: user
});

export const signUpFailure = error => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error
});
