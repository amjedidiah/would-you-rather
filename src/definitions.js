/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * A user's answer
 * @typedef {{questionID: string}} answer
 */

/**
 * A user or question ID
 * @typedef {string} id
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
