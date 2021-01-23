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
  const questionID = action?.questionID;

  /**
   * @type {string}
   */
  const option = action?.option;

  /**
   * @type {option}
   */
  const updatedOptionAdd = option ?
    {
      ...state[questionID][option],
      votes: [...state[questionID][option].votes, action.userID],
    } :
    state[questionID] && state[questionID][option];

  /**
   * @type {option}
   */
  const updatedOptionRemove = option ?
    {
      ...state[questionID][option],
      votes: (state[questionID][option].votes || []).filter(
          (i) => i !== action.userID,
      ),
    } :
    state[questionID] && state[questionID][option];

  return (
    {
      RECEIVE_QUESTIONS: action?.questions,
      SAVE_QUESTION: {
        ...state,
        [questionID]: action?.question,
      },
      SAVE_QUESTION_ANSWER: {
        ...state,
        [questionID]: {
          ...state[questionID],
          [option]: updatedOptionAdd,
        },
      },
      REMOVE_QUESTION_ANSWER: {
        ...state,
        [questionID]: {
          ...state[questionID],
          [option]: updatedOptionRemove,
        },
      },
    }[action.type] || state
  );
};

// Export questions reducer
export default questions;
