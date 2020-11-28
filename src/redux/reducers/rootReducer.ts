import { combineReducers } from "redux";

import * as Types from "../../types/contactTypes";
import { contactReducer } from "./contactReducer";

export const rootReducer = combineReducers<Types.Store>({
  contacts: contactReducer,
});
