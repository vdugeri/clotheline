import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.SIGNIN_SUCCESS:
    case userActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case userActionTypes.SIGNIN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default userReducer;
