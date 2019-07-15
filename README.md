# Developers Social App

# This is the backend  created with Node JS



# Project Folder Structure

## In This project i have created seperate folder's for each and every functionality .

1. src folder contain all models , endpoints and server configuration files.
2. public folder contain all static files for serving.

## In This project i have created few files

1. .env file is used to stored confidential information.
2. .gitignore file is used to ignore files on github.
3. package.json file is Node JS file which store information about dependencies.
4. package-lock.json file is Node Js file which store information about url from which we will
   download that dependencies.
5. app.js file is Main Node Js file which import routes , create database connection and start's
   server.
6. .eslintignore file is use for ignoring folder which we don't want to lint.
7. .eslintrc.js file is use for configuring eslint rules.
8. .babelrc file is use for configuring babel js for transpiling code.
9. nodemon.json file is responsible for configuring nodemon.

# Development Rules

1. I will use prettier plugin of vscode for beautify code.
2. I will use eslint rules for linting code created by different developers.
3. I will create test case for endpoint by using jest test for load testing.
4. I will always try comment my code and i will write clean code.
5. I will create endpoints and method with proper naming i.e /user/login , /user/signup , userLogin().
6. I will used camelCase notation when declaring variable, creating functions and i have used pascal case when creating classes.
7. I will used let and const keyword , and i will create service for db operations and i will use async/await for avoiding callback hell.
8. I will save my all JS files in camel case with proper naming.
9. I will used Babel JS for transpile the code.
10. I will create validation use for db models and api endpoints.
11. I will add hard coded keywords in constant.js file.
12. I will use ES6+ syntax.

# Production Rules

1. I will use Amazon Web Service S3 Storage for storing images , Mongodb atlas for mongodb database and Amazon Web Service Elastic BeanStalk for deploying backend.
2. I will use AWS Code Deploy for CI/CD.

# Thank You
