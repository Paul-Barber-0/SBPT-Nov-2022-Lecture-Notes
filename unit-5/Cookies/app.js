const express = require('express')
    app = express()
    cookieParser = require('cookie-parser')
    URL = process.env.URL || '127.0.0.1'
    PORT = process.env.PORT || 4003
    cookiesController = require('./controllers/cookies.controller')
    log = console.log;

app.use(cookieParser()); // Provides us access to the middleware so that we can see what cookies are stored.
app.use('/', cookiesController);

app.listen(PORT, URL, () => log(`Server is running on ${URL}:${PORT}`));