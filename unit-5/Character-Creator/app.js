require('dotenv').config();
const
    express = require('express')
    app = express()
    PORT = process.env.PORT || 5000
    characterController = require('./controllers/characters.controller');

app
    .use(express.json())
    .use(express.urlencoded())
    .use('/characters', characterController);

app
    .listen(PORT, () => console.log(`Server running on localhost:${PORT}`));