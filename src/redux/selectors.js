/**
 * Get Laoding status
 * @param {questions} questions - questions from state
 * @param {users} users - users from state
 * @return {boolean}
 */
export const getLoading = (questions, users) =>
  Object.keys(questions) < 1 && Object.keys(users) < 1;

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
