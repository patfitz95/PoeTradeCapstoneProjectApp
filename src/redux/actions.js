import ACTION_TYPE from './types';
import axios from 'axios';

export const signUp = (data) => {
  console.log('data:', data);
  return function (dispatch) {
    axios
      .post('http://localhost:4001/auth/signup', {
        username: data.username,
        password: data.password
      })
      .then(() => dispatch(signUpSuccess()))
      .catch((err) => {
        dispatch(signUpFailure(err));
      });
  };
};

const signUpSuccess = () => {
  return {
    type: ACTION_TYPE.SIGNUP_SUCCESS,
  };
};

const signUpFailure = (err) => {
  return {
    type: ACTION_TYPE.SIGNUP_FAILURE,
    err,
  };
};

export const login = (data) => {
  return function (dispatch) {
    axios
      .post('http://localhost:4001/auth/login', {
        username: data.username,
        password: data.password,
      })
      .then((res) => dispatch(loginSuccess(res)))
      .catch((err) => {
        dispatch(loginFailure(err));
      });
  };
};

const loginSuccess = (res) => {
  console.log('res :', res);
  localStorage.setItem('token', res.data.token);
  return {
    type: ACTION_TYPE.LOGIN_SUCCESS,
    msg: 'login success',
  };
};

const loginFailure = (err) => {
  return {
    type: ACTION_TYPE.LOGIN_FAILURE,
    err,
  };
};