# Traditional Databse

Database:
- Types:
    - Relational
        - SQL, PostgreSql, MySQL
    - Non-relational
        - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
- Tables:
    - Primary Keys (ID)
    - Records: Data within rows of a table
- Mongo:
    Mongo = Relational
    - Database = database
    - Collections = Table
    - Documents = Records
        - Stored as JSON
    - Is a **Document Data Store**

# MERN Stack
- M: Mongo
    - Database
- E: Express
    - Server
- R: React
    - Frontend
- N: Node
    - everything in between

# Express
- Need a `package.json` file
    - run our `npm init` or `npm init -y`
- Install Dependencies:
    - Express: `npm i express`
    - Mongoose: `npm i mongoose`
        - package that connects to MongoDB
        - [Mongoose](https://wwww.npmjs.com/package.mongoose)
    - dotenv: `npm i dotenv`
    - Check Entry Point
        - `app.js` or `index.js`
        - `.gitignore`
        - set files/folders within it
    
# .env
- Contains constants that are specific for our environment.
- Stores items that we don't want published
    - passwords, port numbers / deployment
- Should be added to `.gitignore`
- Should have a sample version to communication with team.
    - `example = `

# Bcrypt
- `npm i brcypt`
- dependency that handles encryption of data
    - most common use: passwords
        - can be use on anything with strings.
    - Hashing produces a one-way randomized string based off the plain text string that provided.
        - Use `salting` as an extra layer of encryption.
    - Salting:
        - randomized string included within the hashing prior to being set to the database.

example code:
```js
bcrypt.hashSync('abc123', 10);
```
- first argument: password
- second argument: number of times the password will be salted.

## JWT
- JSON web token
- `npm i jsonwebtoken`
- A way for our server to authenicate the user.

example code:
```js
const token = jwt.sign({id: user_id}, "secret message", {expiresIn: 60 * 60 * 24});
```
- `sign(payload, message, options)`
    - 3 arguements
        - payload:
            - In the sample we are using an object that details the id of the user.
        - encrypt/decrypt message:
            - passed in as a string in the sample.
            - Typically stored as a `.env` variable.
        - Options set expiration
            - represents seconds or a string time span.
                - ex: `"2 days" or "10 hr"`
