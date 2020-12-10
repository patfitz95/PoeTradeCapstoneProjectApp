import { combineReducers } from 'redux';

import ACTION_TYPES from './types';

const loggedIn = (state = '', action) => {
  console.log('action : ', action);
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return action.msg;
    case 'REMOVE_LISTING':
      let listing = [...state];
      listing.splice(action.value, 1);
      return listing;
    default:
      return state;
  }
};

export default combineReducers({ loggedIn });