// Module imports
import {SET_AUTHED_USER, UNSET_AUTHED_USER} from 'redux/actions/types';

/**
 * Reducer function for authedUser
 * @param {id | null} state - current authedUser state
 * @param {action} action - Redux action
 * @return {id | null} - returned authedUser state
 */
const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.userID;
    case UNSET_AUTHED_USER:
      return null;
    default:
      return state;
  }
};

// Export authedUser reducer
export default authedUser;
