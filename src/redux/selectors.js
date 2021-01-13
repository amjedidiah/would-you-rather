/**
 * Get number of questions a user has amswered
 * @param {users} users - users from state
 * @param {id} userID - particular userID
 * @return {number}
 */
export const getAnsweredQuestionsCount = (users, userID) =>
  Object.keys(users[userID].answers).length;

/**
 * Get Laoding status
 * @param {questions} questions - questions from state
 * @param {users} users - users from state
 * @return {boolean}
 */
export const getLoading = (questions, users) =>
  Object.keys(questions) < 1 && Object.keys(users) < 1;

/**
   * Get number of questions a user has submitted
   * @param {users} users - users from state
   * @param {id} userID - particular userID
   * @return {number}
   */
export const getSubmittedQuestionsCount = (users, userID) =>
  users[userID].questions.length;

/**
 * Get user
 * @param {id} userID - particular userID
 * @param {users} users - users from state
 * @return {user}
 */
export const getUser = (userID, users) => users[userID];

/**
 * Get userIDs
 * @param {users} users - users from state
 * @return {id[]}
 */
export const getUserIDs = (users) => Object.keys(users);
