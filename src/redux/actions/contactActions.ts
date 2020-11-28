//Action Types
export enum Contact {
  ADD_CONTACT,
}

export interface contact {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  address: string;
}

export type contactAction = {
  type: Contact.ADD_CONTACT;
  payload: contact;
};

export const addContact = (newContact: contact) => ({
  type: Contact.ADD_CONTACT,
  payload: newContact,
});
