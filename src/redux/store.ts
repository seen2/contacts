import { createStore } from "redux";
import { contactReducer } from "./reducers/contactReducer";

export const store = createStore(contactReducer);
