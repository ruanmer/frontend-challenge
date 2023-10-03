# Introduction

This README explains the motivations behind most of the decisions I made.

## Tech Stack

- JavaScript
- React
- React Router
- CSS Modules
- Jest
- React Testing Library
- Nock
- Vite
- Storybook
- ESLint
- Prettier

## Before I start coding the project

First, I updated the project's dependencies to ensure all dependencies were up to date. Keeping dependencies up to date is ideal to fix issues related to security, performance or even bugs.

To ensure code quality and improve the workflow, I installed several tools, such as:

- [Prettier](https://github.com/prettier/prettier) to enforce a consistent code style.
- [ESLint](https://github.com/eslint/eslint) to ensure code quality and consistency.
- [Commitlint](https://github.com/conventional-changelog/commitlint) enforces Conventional Commits rules, ensuring that the commit messages follow a standardized format.
- [Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged) to execute commands before any commit is made, safeguarding code quality and integrity.
- [Storybook](https://github.com/storybookjs/storybook) to make building UI components easier.

## File Structure

### `src/components`

This directory is used to place all the foundational components. Think of them as the LEGO pieces that I'll use to build the project.

All foundational components were created individually and are documented in Storybook.

> Run `yarn storybook` to open Storybook.

### `src/pages`

Pages constitute the core of the project, and they are responsible for assembling everything together. Each page is associated with a route.

### `src/services`

This directory is designated for storing all the integrations that are essential for the application to function. These integrations ensure that the application can interact with external services and resources as needed.

### `src/utils`

This directory is reserved for storing all utility functions.

## What is known and could be improved

- There are many opportunities to enhance and add more tests.
- Users can access any route at any moment. It would be beneficial to implement better route validation.
- The form validation has been simplified, and it would be better to use a third-party library for improved validation.
- I used React Context to store the application data, but using a third-party library would make data management and features even better.
