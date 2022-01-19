# Getting started

To get the Node server to run locally: 

- Clone this repository.
- `npm install` to install required dependencies.
- `npm start` to start the server.

## Files:

- `server.js` - This application's entry point. Where the express server is defined and the route (greeting/:name) is defined.

## Server definition: 
The server is defined as per the instructions in the initial email: 

- `/greetings/:name` is the only route that is currently supported. It will return "Hello, {name}", replacing {name} with the entered name parameter.
- All other routes will receive a 404 status and the response "Invalid Route"
