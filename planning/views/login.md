# Login View

## Mockup

![Recommendation1](./mockup/login-recommendation-1.jpg)
![Recommendation2](./mockup/login-recommendation-2.jpg)
![Layout](./mockup/login-layout.jpg)
![Navbar](./mockup/navbar.jpg)
![Form](./mockup/login-form.jpg)

> Code to form can be found [here](https://codepen.io/aaroniker/pen/WNvjpxd?editors=0010)
> Code to navbar can be found [here](https://codepen.io/aaroniker/pen/rNMmZvq)

## Requirements

- route is `/auth`
- all of it is shown on app startup, after loading screen and | or bar
- only form is shown should any page be visited by typing in the address in the address bar, after loading screen and | or bar
- on successful login
  - on app startup: load homepage
  - on visiting a page: load that page

## Components

- [ ] App

  - [ ] Loading Bar
  - [ ] Loading Screen
  - [ ] Toast
  - Children
    - [ ] Layout
      - [ ] Navbar
      - Children
        - [ ] LoginContainer
          - [ ] AuthSwitch
          - [ ] AuthForm: LoginForm or RegisterForm
