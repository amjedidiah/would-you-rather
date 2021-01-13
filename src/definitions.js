/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * A user's answer
 * @typedef {{questionID: string}} answer
 */

/**
 * A user's answer info
 * @typedef {{authedUser: id, qid: id, answer: string}} answerInfo
 */

/**
 * A user or question ID
 * @typedef {string} id
 */

/**
 * A navLink
 * @typedef {{icon: *, text: string, to: string}} navLink
 */

/**
 * A question's option
 * @typedef {{votes: id[], text: string}} option
 */

/**
 * A question object
 * @typedef {{
 *      id: id,
 *      author: id,
 *      timestamp: number,
 *      optionOne: {votes: id[], text: string},
 *      optionTwo: {votes: id[], text: string}
 * }} question
 */

/**
 * The questions object list
 * @typedef {{questionID: {
 *      id: id,
 *      author: id,
 *      timestamp: number,
 *      optionOne: {votes: id[], text: string},
 *      optionTwo: {votes: id[], text: string}
 * }} | {}} questions
 */

/**
 * Definition for state
 * @typedef {{authedUser: id, questions: questions, users: users}} state
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */

/**
 * A user object
 * @typedef {{
 *      id: id,
 *      name: string,
 *      avatarURL: string,
 *      answers: {questionID: string},
 *      questions: id[]
 * }} user
 */

/**
 * The users object list
 * @typedef {{userID: {
 *      id: id,
 *      name: string,
 *      avatarURL: string,
 *      answers: {questionID: string},
 *      questions: id[]
 * }} | {}} users
 */
