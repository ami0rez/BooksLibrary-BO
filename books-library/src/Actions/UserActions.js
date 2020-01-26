import userServices from "../services/userServices";
import { history } from "../Helpers/history";
import * as alertActions from './AlertActions'
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const AUTHENTICATION_LOGOUT = 'AUTHENTICATION_LOGOUT';

export const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }));

    userServices.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: LOGIN_REQUEST, user } }
  function success(user) { return { type: LOGIN_SUCCESS, user } }
  function failure(error) { return { type: LOGIN_FAILURE, error } }
}

export const logout = () => {
  userServices.logout();
  return { type: AUTHENTICATION_LOGOUT };
}

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }