# Leaderboard View

## Mockup

![Recommendation1](./mockup/leaderboard-recommendation.jpg)
![Layout](./mockup/app-layout.png)
![Navbar](./mockup/navbar.jpg)

> Code to navbar can be found [here](https://codepen.io/aaroniker/pen/rNMmZvq)

## Requirements

- route is `/leaderboard`
- contains a navigation bar
- Each entry on the leaderboard contains the following:

  - the user’s name;
  - the user’s picture;
  - the number of questions the user asked; and
  - the number of questions the user answered

- Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked

## Components

- [ ] App

  - [ ] Loading Bar
  - [ ] Loading Screen
  - [ ] Toast
  - Children
    - [ ] Layout
      - [ ] Navbar
      - [ ] UserCard
      - Children
        - [ ] UserList
          - [ ] UserItem
