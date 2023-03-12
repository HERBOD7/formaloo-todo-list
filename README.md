# Todo List

The To-do list web application allows you to add new tasks, complete those tasks, remove pending tasks, and hide and show completed tasks.it's available [here](https://formaloo-todo-list.netlify.app/)

## Table of Contents

- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [Features](#features)
- [Optimizations](#optimizations)

## Installation

Run the command to install all dependencies:

```bash
yarn install
```

and run the below command to start the project on development mode:

```bash
yarn start
```

You can run the docker command on your machine if you have Docker installed:

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view it in a browser.

- The page will reload if you make edits.
- You will also see any lint errors in the console.

## Tech Stack

**Client:** React, Tailwind, Sass

## Contributing

#### structure:

It has `FEATURE FOLDERS` structure (dividing a program's functions into independent parts) that allows it to:

- easy to follow and read code
- easy to debug and there are fewer places where bugs appear
- easy to refactor
- easy to manage and maintain
- etc ...
  Each feature includes its own components, routes that are used in the page.
  As a project layout, all pages render into the `DefaultLayout`.
  The main components directory contains shared components that can be used throughout the project.

#### style:

The project used BEM methodology to organize and understand styles easier for specific styles.

#### git:

Feature Branch Workflow used to avoid breaking code in main branch and make possible to create pull request and discus about changes. regarding commit messages, I used the [commit linter](https://commitlint.js.org/#/) to help clarify them.

## Features

- Light/dark mode toggle
- Custom category
- Tasks dependencies
- Create a team and assign task to them
