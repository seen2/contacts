import * as Types from "../../types/contactTypes";
import { Store } from "../../types/mainTypes";

export const contactReducer = (
  state: Store["contacts"] = [],
  action: Types.ContactAction
) => {
  switch (action.type) {
    case Types.ContactActionTypes.ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
