# Selectors

## App

- [ ] LoadingBar

- [ ] LoadingScreen

- [ ] Toast

## Layout

- **_getAuthedUserID_** : returns authedUserID

## UserCard

- **_getAuthedUser_**: returns authedUser from _authedUserID_ ownProps

## 404

1. Selectors

   - **_getQuestionRecommendationIDs_**: returns three unanswered questions only if **_authedUserID_** exists

2. Events
   - If **_questionRecommendationIDs_**, pass down to QuestionList
   - Gets the last visited URL to be able to go back to on buttonClick

## QuestionItem

- **_getQuestion_**: returns question from _questionID_ ownProps

## LoginContainer

- **_getUserIDs_**: returns ID of users

## QuestionContainer

- **_getQuestionIDs_**: returns all question IDs
- **_getUserQuestionIDs_**: returns all user question IDs

## QuestionAnswerForm

- **_getAuthedUserID_** : returns authedUserID

## QuestionForm

- **_getAuthedUserID_** : returns authedUserID

## QuestionResult

- **_getQuestionOwnerAvatar_**
- **_getQuestionVotes_**

## Leaderboard

- **_getUserIDs_**: returns ID of users

## UserItem

- **_getSubmittedQuestionsCount_**
- **_getAnsweredQuestionsCount_**
