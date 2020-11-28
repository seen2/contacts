import { Contact, contact, contactAction } from "../actions/contactActions";

export interface ContactsState {
  contacts: contact[];
}

const initialState = { contacts: [] };

export const contactReducer = (
  state: ContactsState = initialState,
  action: contactAction
) => {
  switch (action.type) {
    case Contact.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    default:
      return state;
  }
};
