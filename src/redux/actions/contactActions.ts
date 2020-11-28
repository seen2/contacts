import * as Types from "../../types/contactTypes";

export const addContact = (newContact: Types.Contact) => ({
  type: Types.ContactActionTypes.ADD_CONTACT,
  payload: newContact,
});
