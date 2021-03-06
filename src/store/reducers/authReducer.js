import * as types from "../actions/types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload.userData,
      };

    default:
      return state;
  }
};

export default authReducer;
