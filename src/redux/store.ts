import { createStore } from "redux";

import { rootReducer } from "./reducers/rootReducer";
import * as Types from "../types/contactTypes";

export const store = createStore<Types.Store, Types.ContactAction, null, null>(
  rootReducer
);
