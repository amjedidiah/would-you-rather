/**
 * Reducer function for users
 * @param {users} state - current users state
 * @param {action} action - Redux action
 * @return {users} - returned users state
 */
const users = (state = {}, action) => {
  /**
   * @type {string}
   */
  const option = action?.option;

  /**
   * @type {id}
   */
  const userID = action?.userID;

  /**
   * @type {id}
   */
  const questionID = action?.questionID;

  /**
   * @type {id[]}
   */
  const updatedQuestions = questionID ?
    [...(state[userID]?.questions || []), questionID] :
    state[userID]?.questions;

  /**
   * @type {answer}
   */
  const updatedAnswers = userID ?
    {
      ...state[userID].answers,
      [questionID]: option,
    } :
    state[userID]?.answers;

  return (
    {
      RECEIVE_USERS: {...state, ...action.users},
      SAVE_QUESTION: {
        ...state,
        [userID]: {
          ...state[userID],
          questions: updatedQuestions,
        },
      },
      SAVE_QUESTION_ANSWER: {
        ...state,
        [userID]: {
          ...state[userID],
          answers: updatedAnswers,
        },
      },
    }[action.type] || state
  );
};

// Export users reducer
export default users;
