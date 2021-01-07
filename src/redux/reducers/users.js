/**
 * Reducer function for users
 * @param {users} state - current users state
 * @param {action} action - Redux action
 * @return {users} - returned users state
 */
const users = (state = {}, action) =>
  ({
    RECEIVE_USERS: action.users,
    SAVE_QUESTION: {
      ...state,
      [action.userID]: {
        ...state[action.userID],
        questions: [...state[action.userID].questions, action.questionID],
      },
    },
    SAVE_QUESTION_ANSWER: {
      ...state,
      [action.userID]: {
        ...state[action.userID],
        answers: {
          ...state[action.userID].answers,
          [action.questionID]: `option${action.optionNumberText}`,
        },
      },
    },
  }[action.type] || state);

// Export users reducer
export default users;
