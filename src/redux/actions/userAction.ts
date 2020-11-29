import firebase from "firebase";
import { User, UserActionTypes, LoginUser } from "../../types/userTypes";

export const onLogin = async (
  { email, password }: LoginUser,
  dispatch: any
) => {
  try {
    dispatch({ type: UserActionTypes.LOGIN_REQUEST_SENT, payload: null });
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    dispatch({ type: UserActionTypes.LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: UserActionTypes.LOGIN_FAILED,
      payload: error.message,
    });
  }
};
