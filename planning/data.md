# Data

## Store

- authedUser

```js
{
  authedUserID: '8xf0y6ziyjabvozdd253nd';
}
```

- questions

```js
{
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: 'have horrible short term memory',
    optionTwo: 'have horrible long term memory'
  }
}
```

- users

```js
{
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '../../images/snow.jpg'
  }
}
```

- votes

```js
{
  'sibo93030393': {
    vote: "sibo93030393",
    user: "sarahedo",
    question: "8xf0y6ziyjabvozdd253nd",
    answer: "optionOne"
  }
}
```

### Components

## Navbar

- navLinks: imported

```json
[
  {
    "text": "home",
    "to": "/home"
  },
  {
    "text": "leaderboard",
    "to": "/leaderboard"
  },
  {
    "text": "new question",
    "to": "/add"
  }
]
```

## UserCard

- authedUserID: from parent

## 404

- lastVisited: from history

## AuthCard

- authInfo: imported

```json
[
  "name",
  "avatarURL"
];
```

## QuestionContainer

- questionCategory: set by QuestionSwitch
- userID: from **_UserContainer_**

## QuestionList

- questionIDs: from parent

## QuestionItem

- questionID: from parent

## QuestionDisplay

- questionID: from `match.params`

## QuestionAnswerForm

- questionID: from parent

## QuestionForm

- question: set by user

```js
const question = {
  text: '',
  optionOne: '',
  optionTwo: ''
};
```

## UserContainer

- userID: from `match.params`

## OwnerCard

- userID: from UserContainer

## UserList

- userIDs: from parent

## UserItem

- userID: from parent
