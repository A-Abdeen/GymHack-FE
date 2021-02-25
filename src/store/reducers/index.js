import { combineReducers } from "redux";

import gymReducer from "./gymReducer";
import sessionReducer from "./sessionReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  gymReducer,
  sessionReducer,
  authReducer,
});

export default rootReducer;
