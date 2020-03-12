React Native Starter
================================================
The goal of this project is to work as template for react-native applications, providing a base project structure, core dependencies and boilerplate to jumpstart development.

## Base dependencies
  - [PropTypes](https://github.com/facebook/prop-types) to type-check our components exposed properties.
  - [React-Native-Config](https://github.com/luggit/react-native-config) to manage envionments. TODO
  - [React-Navigation](https://reactnavigation.org/) navigation library.
  - [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.
  - [Redux](https://redux.js.org/) for state management.
  - [Redux-Persist](https://github.com/rt2zz/redux-persist) as persistance layer.
  - [Redux-Saga](https://redux-saga.js.org/) to dispatch asynchronous actions.

## Usage
You can start by cloning this repository and using [react-native-rename](https://github.com/junedomingo/react-native-rename). In the current state of this project, it should give you no issues at all, just run the script, delete your node modules and reinstall them and you should be good to go.

Keep in mind that this library can cause trouble if you are renaming a project that uses `Pods` on the iOS side.

After that you should proceed as with any javascript project:
- Go to your project's root folder and run `npm install`.
- Create a `.env` file to store all your configuration constants. Remember to not commit this file, since it can store sensible information of your product.
- Run `npx react-native run-ios` or `npx react-native run-android` to start your application!

## Folder structure
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `Localization`: Contains the localization files, if you add a new language remember to modify the `index.js`
  - `Redux`: Directory containing all the redux stuff
    - `Sagas`: Contains the saga files. If you add a new file, remember to add it to the `index.js`
    - `Reducers`: Redux Reducers. If you add a new file, remember to add it to the `index.js`
  - `Screens`: Contains the screens of the Stack navigation. When adding a new screen remember to modify the `index.js`
  - `Services`: Support classes, here we can put an ApiClient class as well
  - `index.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Guide
...