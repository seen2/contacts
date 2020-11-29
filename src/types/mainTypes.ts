import { Contact } from "./contactTypes";

export const INITIALSTATE: Store = { user: {}, contacts: [] };

export type Store = {
  user: any;
  contacts: Contact[];
};
