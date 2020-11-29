import { Store } from "./mainTypes";

export const UserActionTypes = {
  LOGIN_REQUEST_SENT: "LOGIN_REQUEST_SENT",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",
  CREATE_ACCOUNT_REQUEST_SENT: "CREATE_ACCOUNT_REQUEST_SENT",
  CREATE_ACCOUNT_FAILED: "CREATE_ACCOUNT_FAILED",
  CREATE_ACCOUNT_SUCCESS: "CREATE_ACCOUNT_SUCCESS",
};

export interface UserAction {
  type: string;
  payload: User | string | null;
}
export interface LoginUser {
  email: string;
  password: string;
}
export type User = {};

export type UserReducer = (state: Store, action: UserAction) => Store;
