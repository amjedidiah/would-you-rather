/**
 * Reducer function for questions
 * @param {questions} state - current questions state
 * @param {action} action - Redux action
 * @return {questions} - returned questions state
 */
const questions = (state = {}, action) => {
  /**
   * @type {id}
   */
  const questionID = action && action.questionID;

  /**
   * @type {string}
   */
  const option = action && action.option;

  /**
   * @type {option}
   */
  const updatedOption = option ?
    {
      ...state[questionID][option],
      votes: [...state[questionID][option].votes, action.userID],
    } :
    state[questionID] && state[questionID][option];

  return (
    {
      RECEIVE_QUESTIONS: {...state, ...action.questions},
      SAVE_QUESTION: {
        ...state,
        [questionID]: action.question,
      },
      SAVE_QUESTION_ANSWER: {
        ...state,
        [questionID]: {
          ...state[questionID],
          [option]: updatedOption,
        },
      },
    }[action.type] || state
  );
};

// Export questions reducer
export default questions;
