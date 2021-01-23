// Required imports
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js';

/**
 * Gets initial data
 * @return {promise}
 */
export const getInitialData = () =>
  Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
    users,
    questions
  }));

/**
 * Saves a question
 * @param {question} question
 * @return {(question: question) => promise}
 */
export const saveQuestion = (question) =>  _saveQuestion(question);

/**
 * Saves a user's answer to a question
 * @param {answerInfo} info
 * @return {(info: answerInfo) => promise}
 */
export const saveQuestionAnswer = (info) => _saveQuestionAnswer(info);
