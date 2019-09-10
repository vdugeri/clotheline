import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };
    case userActionTypes.GOOGLE_SIGNIN_FAILURE:
    case userActionTypes.EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default userReducer;
