import firebase from "firebase";
import { UserActionTypes, LoginUser } from "../../types/authTypes";

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

export const onSignout = async (dispatch: any) => {
  try {
    firebase.auth().signOut();
    dispatch({ type: UserActionTypes.ON_LOGOUT, payload: null });
  } catch (error) {
    alert("Something went wrong");
  }
};
