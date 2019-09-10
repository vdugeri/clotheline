import userActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});

export const googleSigInSuccess = user => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user
});

export const googleSignInFailure = error => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const emailSigInSuccess = user => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error => ({
  type: userActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: error
});
