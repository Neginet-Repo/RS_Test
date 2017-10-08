# RS_Test

RS_Test is a POC and application starter in JavaScript.

**Friendly Reminder**: This is a test/POC, please do not use any
personal information since it lacks security and encryption.

## Dev Stack

We used the following technologies to create this POC:

- React 16, main application library for User Interface components,
  alognside with React Router and history for SPA/browser-side routing.
- Axios 0.16 for the browser HTTP client.
- Express 4.16 for Backend/API code.
- Firebase 4.5 for Database, API. Used through Express.
- Webpack 3.6 is the main application builder with Webpack Dev Server
  for code injection on development mode.
- Babel to transform ES6 to browser-readable ES5.

## Architecture structure

The architecture of this application is heavily focused on
component-based/encapsulation thanks to the benefits of React. We
differentiate our components in two types: **application components** and
**core components**.

- Application components are those that handles application logic like
  submitting forms, calling services and also part of the application
  User Interface.
- Core components are those that takes care of the core/browser-related
  part of the application as well as components that handles the core
  functionality like form state management.

These are also separated to library logic, which we intent to keep with
the same approach of application vs. core library types. The only
difference between libraries and components is that components are
mostly used for User Interfaces.

You can find bootstrapped data inside the bootstrap-data folder. These
are just commonly default values.

The backend API its a simple Express code that connects you to a Google
Firebase database and handles three different endpoints; one is for the
login, the second one is for signing up and the last one is just a "GET"
to retrieve user data.

The build is done by Webpack, it handles all types of file and also
creates a different JavaScript bundle for vendor libraries such as
React, Lodash, classNames. This is configurable. It uses the hash to
rename files when building in "Production mode" to ensure there is no
caching if you need to run a fast-fix, this way the user never gets an
old version of the application because of different browser-related
issues.

## How to run

First clone this repository, change directory to enter to the folder and
run the npm commands below:

Install all the dependencies:

    npm install

Run the backend API:

    npm run backend

Start the UI application:

    npm start
