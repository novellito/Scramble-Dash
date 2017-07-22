
## Scramble-Dash

You can find the working app [here](https://scramble-dash.herokuapp.com/)

<b>Scramble - Dash</b> is a simple word game that was created using the MERN stack ([MySQL](https://github.com/mysqljs/mysql), [Express.js](https://expressjs.com/), [React.js](https://facebook.github.io/react/), [Node.js](https://nodejs.org/en/)). 

This app allowed me to understand the basics of how props and states are used in a React application. By utilizing React components, I was able to easily organize my code and not worry about affecting other parts of the application. 

In the backend I used Node and Express to create end points that my frontend could make requests to in order to retrieve information from my MySQL database. 

I also set up a testing suite with [mocha](https://mochajs.org/), [expect](https://github.com/mjackson/expect), and [supertest](https://github.com/visionmedia/supertest).

## Folder Structure

```
my-app/
 ├──backend
 |      └── config
 |            └── config.js
 |      └──  node_modules
 |      └── routes
 |            └── categories.js
 |            └── scores.js
 |      └── tests
 |             └── dbCalls.test.js
 |      └── index.js
 |      └── package.json
 ├── README.md
 ├── node_modules
 ├── package.json
 ├── public
 |   └──index.html
 ├── src
 |    └── component-styles
 |           └── index.css
 |           └── navbar.css
 |    └── components
 |           └── Categories.js
 |           └── Container.js
 |           └── Main.js
 |           └── Navbar.js
 |           └── Play.js
 |           └── PlayInfo.js
 |           └── Scoreboard.js
 |           └── Submit.js
 |   └── font-awesome-4.7.0
 |   └── App.js
 |   └── index.js
    
```
## Running the App locally

If you want to go ahead and have fun with the application start by cloning the repository

You will need to have **MySQL** set up on your computer in order to run up the app properly. Once you have that configured you will need to create a new database and then seed it using the provided .SQL file. Simply run the file and your database will be populated. AFter seeding the database navigate to /backend/config/config.js and enter the proper credentials for the database.

Next you will need to install the node modules using `npm install` through your command line.
Once the modules are installed open two separate command line windows.
  On the first window run `cd backend` and then `node index.js`
  On the other window simply run `npm start`
  
If everything was set up correctly you should be able to play the app on `http://localhost:3000/`


