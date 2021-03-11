import * as apiUtil from "../util/session";
import { receiveErrors } from "./error";
import { Redirect, Route, withRouter } from "react-router-dom";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const login = (user) => async (dispatch) => {
  const response = await apiUtil.login(user);
  return dispatch(receiveCurrentUser(response));
  // return dispatch(receiveErrors(response));
};

export const signup = (user) => async (dispatch) => {
  const response = await apiUtil.signup(user);
  const data = await response.json();

  if (response.ok) {
    return dispatch(receiveCurrentUser(data));
  }
  return dispatch(receiveErrors(data));
};

export const logout = () => (dispatch) => {
  const response = apiUtil.logout();

  if (response.ok) {
    return dispatch(logoutCurrentUser());
  }
  // return dispatch(receiveErrors(data));
};
