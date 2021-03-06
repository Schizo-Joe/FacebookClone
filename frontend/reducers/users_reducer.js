import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  CLEAR_USERS,
} from "../actions/user_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, action.users)
    case CLEAR_USERS:
      return {};
    default:
      return oldState;
  }
}