import * as Types from "../../types/contactTypes";

const initialState: Types.Contact[] = [];

export const contactReducer = (
  state: Types.Contact[] = initialState,
  action: Types.ContactAction
) => {
  switch (action.type) {
    case Types.ContactActionTypes.ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};
