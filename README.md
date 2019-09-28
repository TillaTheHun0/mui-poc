# MUI PoC

![](https://github.com/TillaTheHun0/mui-poc-now/workflows/Node%20CI/badge.svg)

A Web Application demonstrating Modular UI API PoC for fetching content

## Getting Started

- `git clone`
- `npm i`
- `npm start`

This will start a dev server with hot module reloading for the client app, as well as hot module reloading for the server.


## Tech

### Server

- Express
- NextJS 9
- Now Serverless

### Client

- NextJS 9
- React 16.9
- Styled Components

### Testing

- Jest
- Storybook 5
- Cypress

Run `npm run lint` to lint your code with StandardJS
Run `npm test` to lint your code and also run unit tests
Run `npm run storybook` to start Storybook

#### Integration Tests with Cypress

You can run the integration tests using `Cypress`. First start the app locally using `npm start`. To run Cypress tests in a viewable browser (Chrome), run `npm run cy:open` and then choose `Run All Specs` or choose the individual test that you would like to run. To run Cypress tests in a headless browser, run `npm run cy:run` and view the console output for test results.

### DX

- Lerna
- Now
- NPM
- [StandardJS](https://standardjs.com) (via ESLint)
- [Husky](https://github.com/typicode/husky)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- TypeScript
