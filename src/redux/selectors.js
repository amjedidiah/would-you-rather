/**
 * Get Laoding status
 * @param {questions} questions - questions from state
 * @param {users} users - users from state
 * @return {boolean}
 */
export const getLoading = (questions, users) =>
  Object.keys(questions) < 1 && Object.keys(users) < 1;
