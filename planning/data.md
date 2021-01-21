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
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  }
}
```

- users

```js
{
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '../../images/snow.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
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

## NotFound

- lastVisited: from history

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
  optionOne: '',
  optionTwo: ''
};
```

## UserContainer

- userID: from `match.params`

## OwnerCard

- userID: from UserContainer

## UserCard

- className: from parent
- userID: from parent
- onSetAuthedUser: from login
