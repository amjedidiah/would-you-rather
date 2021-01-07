/**
 * Reducer function for authedUser
 * @param {id | null} state - current authedUser state
 * @param {action} action - Redux action
 * @return {id | null} - returned authedUser state
 */
const authedUser = (state = null, action) =>
  ({
    SET_AUTHED_USER: action.id,
    UNSET_AUTHED_USER: null,
  }[action.type] || state);

// Export authedUser reducer
export default authedUser;
