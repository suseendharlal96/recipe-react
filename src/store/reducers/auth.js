import * as actionTypes from "../actions/actionType";

const initialState = {
  localId: null,
  idToken: null,
  email: null,
  loading: false,
  error: null,
};

const authStore = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        localId: action.localId,
        idToken: action.idToken,
        email: action.email,
        loading: false,
        error: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        email: null,
        error: action.error,
      };
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        email: null,
        error: null,
      };
    case actionTypes.AUTH_LOGOUT:
      console.log('logout')
      return {
        ...state,
        loading: false,
        error: null,
        email: null,
        localId: null,
        idToken: null,
      };
    default:
      return state;
  }
};

export default authStore;
