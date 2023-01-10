const router = require('express').Router(); // create a variable -> import Router Enginer from Express.

router.get('/hello-world', (req, res) => {
    /* 
        - the pathway noted as a string
        - a callback function to handle the request and response
            - req, res
    */
    
    res.send("Hello World"); // Browser always do a GET method as default.
})

router.post('/greeting', (req, res) => {
    res.send('Good Afternoon!');
})

/* 
    - Request Type: POST
    - Endpoint: "greeting"
    - Send: "Good Afternoon!"
    - Test: Postman
        *hint GET should be POST
*/

module.exports = router; // don't forget to export the define route.