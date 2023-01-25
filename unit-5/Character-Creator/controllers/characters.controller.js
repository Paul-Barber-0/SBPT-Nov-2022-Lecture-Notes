const 
    router = require('express').Router()
    fs = require('fs')
    db = require('../helpers/db.json');


router
    .get('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        let foundId = false;

        db.every(record => {
            foundId = record.id === id;
            return foundId;
        });

        try {
            if(foundId) {
                res.status(200).json({
                    message: `Record obtained!`,
                    results: db
                });
            } else {
                res.status(404).json({
                    message: `Record id ${id} not found.`
                });
            }
            
        } catch (err) {
            res.status(550).json({
                error: `Error: ${err.message}`
            });
        }
    })
    .get('/get-all', (req, res) => {
        try {
            res.status(200).json({
                message: `Records obtained!`,
                results: db
            });
        } catch (err) {
            res.status(550).json({
                error: `Error: ${err.message}`
            });
        }
    })
    .post('/', (req, res) => {

    })
    .put('/:id', (req, res) => {

    })
    .delete('/:id', (req, res) => {

    });


module.exports = router;