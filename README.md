# MUI PoC

![](https://github.com/TillaTheHun0/mui-poc/workflows/Node%20CI/badge.svg)

A Web Application demonstrating Modular UI API PoC for fetching content

## Getting Started

- `git clone`
- `npm i`
- `npm start`

This will start a dev server with hot module reloading for the client app, as well as hot module reloading for the server.

## The MUI Part

Most of this is just personal boilerplate, but you're probably interested in the MUI part. Go to `packages/mui` for that

## Tech

### Client

- NextJS 9
- React 16.9
- Styled Components

### Testing

- Jest
- Storybook 5

Run `npm run lint` to lint your code with StandardJS
Run `npm test` to lint your code and also run unit tests
Run `npm run storybook` to start Storybook

### DX

- Lerna
- Now
- NPM
- [StandardJS](https://standardjs.com) (via ESLint)
- [Husky](https://github.com/typicode/husky)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- TypeScript
