# CRA CSS Visualization Issue

This project demonstrates that cra can generate a visualization of the application which is different between development and productive modes.

This seems to be related somehow with the [code splitting](https://facebook.github.io/create-react-app/docs/code-splitting) feature and caused because of some css classes are duplicated in the css chunks generated by default in the productive mode.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This will render the application as expected:

![Development](/images/development.png)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

The application generated with this bundle has a different (wrong) visualization due to the issue we are trying to demonstrate here:

![Production](/images/production.png)

