import slugify from "react-slugify";

import * as types from "../actions/types";

const initialState = { gyms: [], loading: true };

const gymReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_GYM:
      return {
        ...state,
        gyms: action.payload,
        // loading: false Loading screen to buffer between loading from backend and empty
        // array in the initial state above (Refer to last 25 minutes of Fetch Product List Redux Lesson)
      };
    //------------------------------ADDING
    case types.ADD_GYM:
      const { newGym } = action.payload;
      newGym.id = state.gyms[state.gyms.length - 1].id + 1;
      newGym.slug = slugify(action.payload.newGym.name);
      return {
        ...state,
        gyms: [...state.gyms, action.payload.newGym],
      };
    //------------------------------DELETING
    case types.DELETE_GYM:
      return {
        ...state,
        gyms: state.gyms.filter((gym) => gym.id !== action.payload.gymId),
      };

    default:
      return state;
  }
};

export default gymReducer;
