// Type imports
import {
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION_ANSWER,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from 'redux/actions/types';
import {saveQuestion, saveQuestionAnswer} from 'utils/api';

/**
 * Action creator for received questions
 * @param {questions} questions - Questions received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const resolveSaveQuestion = (question) => (dispatch, getState) =>
  dispatch({
    type: SAVE_QUESTION,
    questionID: question.id,
    question,
    userID: getState().authedUser,
  });

export const handleSaveQuestion = (question) => (dispatch) =>
  saveQuestion(question)
      .then((formattedQuestion) =>
        dispatch(resolveSaveQuestion(formattedQuestion)),
      )
      .catch((err) => console.log(err));

/**
 * Action creator to remove answer to a question
 * @param {string} option - The option text
 * @param {id} questionID - The id of the question
 * @param {id} userID - The id of the user
 * @return {action}
 */
export const removeAnswer = (option, questionID, userID) => ({
  type: REMOVE_QUESTION_ANSWER,
  questionID,
  option,
  userID,
});

/**
 * Action creator to save answer to a question
 * @param {string} option - The option text
 * @param {id} questionID - The id of the question
 * @param {id} userID - The id of the user
 * @return {action}
 */
export const saveAnswer = (option, questionID, userID) => ({
  type: SAVE_QUESTION_ANSWER,
  questionID,
  option,
  userID,
});

export const handleSaveQuestionAnswer = (authedUser, qid, answer) => (
    dispatch,
) => {
  dispatch(saveAnswer(answer, qid, authedUser));

  return saveQuestionAnswer({authedUser, qid, answer}).catch((err) => {
    dispatch(removeAnswer(answer, qid, authedUser));
    alert('An error occured. Try again ...');
  });
};
