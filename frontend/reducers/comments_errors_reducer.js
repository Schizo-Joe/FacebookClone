import { RECEIVE_COMMENT_ERRORS, CLEAR_ERRORS} from '../actions/comment_actions'; 

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};