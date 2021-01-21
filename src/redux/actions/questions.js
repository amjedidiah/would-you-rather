// Type imports
import {RECEIVE_QUESTIONS, SET_ACTIVE_QUESTION} from 'redux/actions/types';

/**
 * Action creator for received questions
 * @param {questions} questions - Questions received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

/**
 * Sets a particluar question to active
 * @param {id} questionID - Particluar question ID
 * @return {action}
 */
export const setActiveQuestion = (questionID) => ({
  type: SET_ACTIVE_QUESTION,
  questionID,
});

