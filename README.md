# URL SHORTENER 
![Open-Source-URL-Shortner](https://github.com/ad-chd/Url_Shortener/assets/72156890/92e42d19-5d28-4525-b746-3d14a4abfda7)

•The Efficient URL Shortener Project is a cutting-edge web application designed to simplify the process of sharing lengthy URLs by transforming them into shorter, more manageable links. This project aims to provide users with a seamless experience by offering a reliable and secure platform for creating and sharing shortened URLs.

•The URL shortener project leverages advanced algorithms and web technologies to generate unique, compact links that redirect users to the original destination. Users can easily input their lengthy URLs into the application's user-friendly interface, and within seconds, receive a concise and user-friendly alternative link that can be shared across various platforms, including social media, emails, and messaging apps.

The core features of the Efficient URL Shortener Project include:

**URL Shortening**

•The project employs sophisticated techniques to generate shortened URLs that are easy to remember, share, and analyze. These short links are created using a combination of characters and numbers to ensure uniqueness and enhance security.

**Analytics Dashboard**

• The application provides users with an intuitive analytics dashboard, allowing them to track various metrics related to their shortened URLs. Users can gain insights into the number of clicks, geographical distribution of visitors, and other key performance indicators to better understand their audience and optimize their sharing strategies.

# Incentive & Motive
•The Efficient URL Shortener Project strives to simplify the sharing of long URLs while ensuring security, analytics, and customization options for its users. With its advanced features and user-friendly interface, it serves as an invaluable tool for individuals, businesses, and organizations seeking to streamline their online communications and optimize their marketing efforts.

# How to run the project
**Node_modules**

To run a Node.js project, you can follow these steps:

Ensure that you have Node.js installed on  system. You can download and install Node.js from the official website: https://nodejs.org

•Open a terminal or command prompt and navigate to the project directory using the cd command. For example:

**cd path/to/project-directory**

Before running the project, it's essential to ensure that all the required Node modules are installed. If you haven't done so already, run the following command to install the dependencies specified in the package.json file: **npm install**

•This command will download and install the required modules from the npm registry and create a **node_modules** directory in  project.

# TO START THE PROJECT 

•Once the dependencies are installed, you can run the Node.js project using the appropriate command. The command may vary depending on  project's setup. Here are some common ways to run a Node.js project:
   **npm start**
   
a. Project has a start script defined in the package.json file, you can use the following command to start the project: 

•After executing the appropriate command, your Node.js project should start running. The output will depend on your project's implementation. If there are any errors or exceptions, they will be displayed in the terminal or command prompt.

•To stop the running Node.js project, you can use the keyboard shortcut **Ctrl + C** in the terminal or command prompt. This will terminate the process and return you to the command prompt.

# Working Of Project
![62e81ca0304e5174b6fa0d78_coding_for_business](https://github.com/ad-chd/Url_Shortener/assets/72156890/b7ba7e21-636b-4ce9-9754-c01df9120ae7)


It handles the generation of shortened links for a given input URL. When someone enters a URL, I make an API request to the "https://api.shrtco.de/v2/shorten" endpoint using axios, a popular HTTP library.

First, I import the necessary dependencies, such as React, useState, useEffect, CopyToClipboard, axios, and useNavigate. These dependencies enable me to work with React components, manage state, make HTTP requests, and handle navigation.

Within the LinkResult component, I initialize several state variables using the useState hook. These variables include "shortenLink" to hold the generated shortened link, "copied" to track whether the link has been copied to the clipboard, "loading" to indicate if the component is currently loading, and "error" to store any errors that occur during the API request.

To handle navigation, I use the useNavigate hook from the 'react-router-dom' library, which provides a navigation function.

I define a function called "fetchData" as an async function. Inside this function, I handle the API request. I set the loading state to true, make the API request to generate the shortened link using the provided URL, and update the "shortenLink" state variable with the generated link. Additionally, I update the "shortenedLinks" state variable by appending the new link to the existing array of shortened links. Finally, I use the navigate function to redirect the user to the '/logs' page. If an error occurs during the API request, I update the "error" state variable. After completing the API request (regardless of success or failure), I set the loading state back to false.

I use the useEffect hook to call the fetchData function whenever the "inputValue" (the URL) changes. If the "inputValue" is not empty, I trigger the fetchData function to generate the shortened link.

Another useEffect hook is used to set up a timer that resets the "copied" state variable to false after 1 second (1000 milliseconds). This enables me to show a temporary "Copied" message when the link is copied to the clipboard.

When it comes to rendering the component, I handle different scenarios based on the current state. If the loading state is true, I display a "Loading..." message. If the error state is true, I display a "Something went wrong" message. If the "shortenLink" has a value, I render a div element containing the shortened link and a "Copy" button. To enable copying the link, I use the CopyToClipboard component, passing the link as the text to copy and defining an onCopy callback function to update the "copied" state variable to true.

In conclusion, my  components takes care of generating shortened links by making API requests, updating state variables accordingly, and providing appropriate feedback to the user.


# The potential learning takeaways from working on a URL shortener project:

1. **React and Front-end Development:** Gain experience in building user interfaces using React, a popular JavaScript library for front-end development. Learn how to create components, handle user input, manage state, and handle routing.

2. **State Management with useState:** Understand how to manage state within React components using the `useState` hook. Learn how to define and update state variables, and how to propagate changes to the UI.

3. **Routing with React Router:** Explore React Router, a library that enables client-side routing in React applications. Learn how to define routes, handle navigation, and render components based on the current URL.

4. **Asynchronous Operations with useEffect:** Discover how to perform asynchronous operations, such as API calls, using the `useEffect` hook. Learn how to handle side effects, such as fetching data, and manage the dependencies that trigger the effect.

5. **Handling User Input:** Learn how to capture and process user input in forms. Explore techniques for validating input, managing form state, and interacting with APIs based on user actions.

6. **CSS Styling and Animation:** Practice applying CSS styles to create visually appealing user interfaces. Explore techniques for layout design, responsive design, and incorporating animations and transitions.

7. **Error Handling and Validation:** Develop skills in handling errors and implementing input validation. Learn how to display error messages, handle edge cases, and provide feedback to users when input is invalid.

8. **API Integration:** Gain experience in integrating with APIs to perform various operations, such as URL shortening and tracking link visits. Learn how to make HTTP requests, handle responses, and process data from external services.

9. **Browser APIs:** Explore browser APIs and learn how to interact with them. In this project, you may encounter browser APIs for manipulating the browser's history, opening new windows, or performing other interactions.

10. **Project Organization and Modularization:** Practice organizing your codebase into reusable and maintainable components. Learn how to break down the project into smaller, manageable parts and separate concerns to improve code readability and reusability.

11. **Debugging and Troubleshooting:** Develop problem-solving skills by identifying and fixing bugs, handling exceptions, and troubleshooting issues in the application. Learn how to use developer tools and logging techniques to aid in the debugging process.

12. **Project Deployment:** Gain insights into deploying a React application to a hosting platform or server. Learn about build processes, optimizing assets, and configuring the deployment environment.

Remember that these learning takeaways can vary depending on the specific features and requirements of your URL shortener project. Adapt and expand your learning based on your project's needs and the skills you want to develop further.

# References
Official React documentation: https://reactjs.org/docs/getting-started.html

React Hooks documentation: https://reactjs.org/docs/hooks-intro.html

React Router documentation: https://reactrouter.com/web/guides/quick-start

MDN Fetch API guide: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Axios documentation: https://axios-http.com/docs/intro

CSS Basics on MDN: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

CSS Animation and Transitions guide: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations

Deploying a React app (Create React App): https://create-react-app.dev/docs/deployment/

