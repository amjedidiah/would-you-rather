/**
 * Get number of questions a user has amswered
 * @param {users} users - users from state
 * @param {id} userID - particular userID
 * @return {number}
 */
export const getAnsweredQuestionsCount = (users, userID) =>
  Object.keys((users[userID] && users[userID].answers) || {}).length;

/**
 * Gets if question is answered by authed user
 * @param {id} authedUser - authed user from state
 * @param {id} questionID - question id of a particular question
 * @param {questions} questions - questions from state
 * @param {question} q - question object
 * @return {boolean}
 */
export const getIfAnswered = (authedUser, questionID, questions, q) => {
  const question = q || getQuestion(questionID, questions);

  return (
    (question?.optionOne?.votes || []).includes(authedUser) ||
    (question?.optionTwo?.votes || []).includes(authedUser)
  );
};

/**
 * Get Laoding status
 * @param {questions} questions - questions from state
 * @param {users} users - users from state
 * @return {boolean}
 */
export const getLoading = (questions, users) =>
  Object.keys(questions) < 1 && Object.keys(users) < 1;

/**
 * Get question
 * @param {id} questionID - particular questionID
 * @param {questions} questions - questions from state
 * @return {question}
 */
export const getQuestion = (questionID, questions) => questions[questionID];

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
  const filterFunc = (q) =>
    activeCategory === 'answered' ?
      getIfAnswered(authedUser, null, null, q) :
      !getIfAnswered(authedUser, null, null, q);

  return (authorID ?
    Object.entries(questions)
        .map((i) => i[1])
        .filter(
            (question) => filterFunc(question) && question?.author === authorID,
        )
        .map((i) => i?.id) :
    Object.entries(questions)
        .map((i) => i[1])
        .filter((question) => filterFunc(question))
        .map((i) => i?.id)
  ).reverse();
};

/**
 * Get number of questions a user has submitted
 * @param {users} users - users from state
 * @param {id} userID - particular userID
 * @return {number}
 */
export const getSubmittedQuestionsCount = (users, userID) =>
  (users[userID]?.questions || []).length;

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

/**
 * Get userIDs
 * @param {users} users - users from state
 * @return {id[]}
 */
export const getSortedUserIDs = (users) =>
  Object.values(users)
      .sort(
          (a, b) =>
            Object.keys(b.answers).length +
        b.questions.length -
        (Object.keys(a.answers).length + a.questions.length),
      )
      .map(({id}) => id);
