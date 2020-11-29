import { Store } from "../../types/mainTypes";
import { UserAction, UserActionTypes } from "../../types/userTypes";

export const userReducer = (state: Store["user"] = {}, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST_SENT:
      return { ...state };
    case UserActionTypes.LOGIN_FAILED:
      return { error: action.payload };
    case UserActionTypes.LOGIN_SUCCESS:
      return { user: action.payload };
    default:
      return state;
  }
};
