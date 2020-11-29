import { combineReducers } from "redux";

import { contactReducer } from "./contactReducer";
import { userReducer } from "./authReducer";

export const rootReducer = combineReducers({
  contacts: contactReducer,
  user: userReducer,
});
