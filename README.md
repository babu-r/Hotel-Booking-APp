## React Hotel Booking App

## Introduction

You will be creating a  booking web application using React.js library where users can view different hotels and reserve one for a specific date. You can use Material UI to build the UI components of the app, and Firebase for adding backend functionalities like CRUD operations and authentication to the app.


## Project Breakdown

1. **Login Page** - The first page the user visits where the user has to login using google authentication. Use `Firebase Google Authentication` to build this functionality. 

2. **Home Page** - Fetch hotel data from this api endpoint - [`https://hotels-api-4ltr.onrender.com/api/hotels](https://hotels-api-4ltr.onrender.com/api/hotels)` and display the hotel image, hotel name and the per day charges in individual cards. 

3. **Hotel Info Page** - When the user clicks on single hotel, redirect the user to the hotel info page, where the details of a specific hotel is displayed. Use this api end point to fetch the data of a single hotel - `https://hotels-api-4ltr.onrender.com/api/hotels/{slug}.` Replace the {slug} with the slug data of a specific hotel which can be retrieved from the previous endpoint. Use `React query` parameters to retrieve the slug data of a hotel from the url in the hotel info page. 

4. **Booking Modal** - In the Hotel Info Page, create a Reserve button which opens up a modal for the user to enter details like - number of guests, checkin date and checkout date. Once reserved, use `Firestore database` in Firebase to store the reservation data.

5. **Profile Page** - In the Profile Page retrieve all the bookings of the user from the `Firestore` and display it in a table. 

6. **Navbar** - In the Navbar there will the logo of the website, the home button and the profile image. The home button would take users to the home page and clicking on the profile image would give users the option to go the profile page or logout of the website. Once logged out the users should be redirected to the login page. You can add a theme togller button in the navbar as well which can be used to toglle the theme of the website from light to dark mode.

7. **Hosting the Project** - Host the project using Netlify or Firebase hosting.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
