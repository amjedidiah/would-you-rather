// Type imports
import {RECEIVE_QUESTIONS} from 'redux/actions/types';

/**
 * Action creator for received questions
 * @param {questions} questions - Questions received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});
