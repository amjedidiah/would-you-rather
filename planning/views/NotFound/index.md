# NotFound View

## Mockup

![Layout](../mockup/notFound.png)

> Code to NotFound can be found [here](https://codepen.io/saransh/pen/aezht)

## Requirements

- route is `/404`
- programmatically redirect here for polls or pages that don't exist. If such poll or page is accessed from browser search, then show login first before 404
- Add recommended polls below redirect buttons

> The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)

## Components

- [ ] App

  - [x] Loading Bar
  - [ ] Loading Screen
  - [ ] Toast
  - Children
    - [x] Layout
      - [x] Navbar
      - [x] UserCard
      - Children
        - [x] NotFound
