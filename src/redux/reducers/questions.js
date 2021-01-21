/**
 * Reducer function for questions
 * @param {questions} state - current questions state
 * @param {action} action - Redux action
 * @return {questions} - returned questions state
 */
const questions = (state = {active: '', all: {}}, action) => {
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
  const updatedOption = option ?
    {
      ...state[questionID][option],
      votes: [...state[questionID][option].votes, action.userID],
    } :
    state[questionID] && state[questionID][option];

  return (
    {
      RECEIVE_QUESTIONS: {...state, all: action.questions},
      SAVE_QUESTION: {
        ...state,
        all: {...state.all, [questionID]: action.question},
      },
      SAVE_QUESTION_ANSWER: {
        ...state,
        all: {
          ...state?.all,
          [questionID]: {
            ...state?.all[questionID],
            [option]: updatedOption,
          },
        },
      },
      SET_ACTIVE_QUESTION: {...state, active: action.questionID},
    }[action.type] || state
  );
};

// Export questions reducer
export default questions;
