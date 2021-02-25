import slugify from "react-slugify";

import * as types from "../actions/types";

const initialState = { sessions: [], loading: true };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_SESSION:
      return {
        ...state,
        sessions: action.payload,
      };
    // loading: false Loading screen to buffer between loading from backend and empty
    // array in the initial state above (Refer to last 25 minutes of Fetch Product List Redux Lesson)
    //------------------------------ADDING
    case types.ADD_SESSION:
      const { newSession } = action.payload;
      newSession.id = state.sessions[state.sessions.length - 1].id + 1;
      newSession.slug = slugify(action.payload.newSession.name);
      return {
        ...state,
        sessions: [...state.sessions, action.payload.newSession],
      };
    //------------------------------DELETING
    case types.DELETE_SESSION:
      return {
        ...state,
        sessions: state.sessions.filter(
          (session) => session.id !== action.payload.sessionId
        ),
      };

    //------------------------------UPDATING
    case types.UPDATE_SESSION:
      const { updatedSession } = action.payload;
      return {
        ...state,
        sessions: state.sessions.map((session) =>
          session.id === updatedSession.id ? updatedSession : session
        ),
      };

    default:
      return state;
  }
};

export default sessionReducer;
