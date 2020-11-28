export enum ContactActionTypes {
  ADD_CONTACT,
}
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
export type Store = {
  contacts: Contact[];
};

export type ContactAction = {
  type: ContactActionTypes.ADD_CONTACT;
  payload: Contact;
};

export type Reducer = (state: Store, action: ContactAction) => Store;
