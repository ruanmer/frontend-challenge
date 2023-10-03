# Introduction

This README explains the motivations behind each decision I made.

## Before I start coding the project

First, I updated the project's dependencies to ensure all dependencies were up to date. Keeping dependencies up to date is ideal to fix issues related to security, performance or even bugs.

To ensure code quality and improve the workflow, I installed several tools, such as:

- [Prettier](https://github.com/prettier/prettier) to enforce a consistent code style.
- [ESLint](https://github.com/eslint/eslint) to ensure code quality and consistency.
- [Commitlint](https://github.com/conventional-changelog/commitlint) enforces Conventional Commits rules, ensuring that the commit messages follow a standardized format.
- [Husky](https://github.com/typicode/husky) and [Lint-staged](https://github.com/okonet/lint-staged) to execute commands before any commit is made, safeguarding code quality and integrity.
- [Storybook](https://github.com/storybookjs/storybook) to make building UI components easier.
- [React Testing Library](https://github.com/testing-library/react-testing-library) to easily test components and encourage good testing practices.

## Creating the foundation

I laid down the foundation by creating some foundational components. Think of them as the LEGO pieces that I'll use to build the project. They ensure that things are kept consistent and reusable.

> The foundational components can be found in the "src/components" directory.
