import { Store } from "../../types/mainTypes";
import { UserAction, UserActionTypes } from "../../types/authTypes";

export const userReducer = (state: Store["user"] = {}, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST_SENT:
    case UserActionTypes.CREATE_ACCOUNT_REQUEST_SENT:
      return {};
    case UserActionTypes.LOGIN_FAILED:
    case UserActionTypes.CREATE_ACCOUNT_FAILED:
      return { error: action.payload };
    case UserActionTypes.LOGIN_SUCCESS:
      return { user: action.payload };
    case UserActionTypes.ON_LOGOUT:
    case UserActionTypes.LOGIN_SUCCESS:
      return {};
    default:
      return state;
  }
};
