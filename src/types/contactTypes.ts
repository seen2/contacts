import { Store } from "./mainTypes";

export const ContactActionTypes = {
  ADD_CONTACT: "ADD_CONTACT",
};
export interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

export interface ContactsState {
  contacts: Contact[];
}

export type ContactAction = {
  type: string;
  payload: Contact;
};

export type ContactReducer = (state: Store, action: ContactAction) => Store;
