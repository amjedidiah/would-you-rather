/**
 * Reducer function for questions
 * @param {questions} state - current questions state
 * @param {action} action - Redux action
 * @return {questions} - returned questions state
 */
const questions = (state = {}, action) =>
  ({
    RECEIVE_QUESTIONS: action.questions,
    SAVE_QUESTION: {
      ...state,
      [action.questionID]: action.question,
    },
    SAVE_QUESTION_ANSWER: {
      ...state,
      [action.questionID]: {
        ...state[action.questionID],
        [`option${action.optionNumberText}`]: {
          ...state[action.questionID][`option${action.optionNumberText}`],
          votes: action.userID,
        },
      },
    },
  }[action.type] || state);

// Export questions reducer
export default questions;
