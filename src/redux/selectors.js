/**
 * Get number of questions a user has amswered
 * @param {users} users - users from state
 * @param {id} userID - particular userID
 * @return {number}
 */
export const getAnsweredQuestionsCount = (users, userID) =>
  Object.keys((users[userID] && users[userID].answers) || {}).length;

/**
 * Get Laoding status
 * @param {questions} questions - questions from state
 * @param {users} users - users from state
 * @return {boolean}
 */
export const getLoading = (questions, users) =>
  Object.keys(questions?.all) < 1 && Object.keys(users) < 1;

/**
 * Get question
 * @param {id} questionID - particular questionID
 * @param {questions} questions - questions from state
 * @return {question}
 */
export const getQuestion = (questionID, questions) =>
  (questions?.all)[questionID];

/**
 * Get question IDs
 * @param {questions} questions - questions from state
 * @param {string} activeCategory - active question category
 * @param {id} authorID - particular Author ID
 * @param {id} authedUser - authed user ID
 * @return {id[]}
 */
export const getQuestionIDs = (
    questions,
    activeCategory,
    authorID,
    authedUser,
) => {
  const filterFunc = ({optionOne, optionTwo}) =>
    activeCategory === 'answered' ?
      (optionOne?.votes).includes(authedUser) ||
        (optionTwo?.votes).includes(authedUser) :
      !(optionOne?.votes).includes(authedUser) &&
        !(optionTwo?.votes).includes(authedUser);

  return authorID ?
    Object.entries(questions?.all)
        .map((i) => i[1])
        .filter(
            (question) =>
              filterFunc(question) && question?.author === authorID,
        )
        .map((i) => i?.id) :
    Object.entries(questions?.all)
        .map((i) => i[1])
        .filter((question) => filterFunc(question))
        .map((i) => i?.id);
};

/**
 * Get number of questions a user has submitted
 * @param {users} users - users from state
 * @param {id} userID - particular userID
 * @return {number}
 */
export const getSubmittedQuestionsCount = (users, userID) =>
  ((users[userID]?.questions) || []).length;

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
