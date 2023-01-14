# Getting Started
- Create a `package.json`
    - In terminal ~ cli command: `npm init -y`
- Install our dependencies
    - express: `npm i express`
- Create a `.gitignore` file
    - tells our local resository to ignore the `node_modules` folder when backing up
    - node_modules folder
        - Provides us access to any "behind the scenes" code that helps run express and any other depenedency.
    - package-lock.json
        - locks project into required dependencies. Helps with our versioning.
        - updated out `package.json` with `"main": "app.js"` instead of `index.js`.
    - Create a root JS file
        - `index.js` or `app.js`

# CRUD
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
    - GET / POST / PUT / DELETE on routes
    - Body
        - raw
        - JSON
            - Make a JSON object

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access to JSON files throughout our routes.

## MVC
- Model View Controller
- Architecture patern that helps our Seperation of Concerns
- View:
    - Browser, Postman, etc...
    - Applications that interface with our server.
- Controller: Part of the server application which handles logic.
- Model:
    - Database schematic

## Middleware
- A function that accesses the request and response
- Has a call stack:
  - Request
  - Response
  - Next

## CORS
- Cross Origin Resource Sharing
    - preflight
        - Checks to see if your resonse is available
        - If headers don't match in our requests, it throws an error
        - Adding this dependency is to help resolve any of these issues
    - Dependency
        - stop server and install as a dependency
        - `npm i cors`
        - import within `app.js` above `routes`