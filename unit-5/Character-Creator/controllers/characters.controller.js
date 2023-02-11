const 
    router = require('express').Router()
    fs = require('fs')
    db = require('../helpers/db.json')
    fs = require('fs')
    fsPath = './helpers/db.json';


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
    .post('/new-character', (req, res) => {
        try {
            const { name, classType, age, race, npc } = req.body;
            const obj = {
                    id: db.length + 1,
                    name,
                    classType,
                    age,
                    race,
                    npc,
                    level: 0
                };
            
            fs.readFile(fsPath, (err, data) => {
                if(err) throw err
                const db = JSON.parse(data)

                db.push(obj);

                fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err))

                res.status(200).json({
                    message: `New Character Created!`,
                    result: obj
                })
            })
        } catch(err) {
            res.status(500).json({
                message: `Error: ${err.message}`
            })
        }
    })
    .put('/:id', (req, res) => {

    })
    .delete('/:id', (req, res) => {
        try {
            // Find out what ID we need
            const id = parseInt(req.params.id);

            // Locate our database
            fs.readFile(fsPath, (err, data) => {
                if(err) throw err;

                const db = JSON.parse(data);
                
                // Locate our document
                let newDb = [];
                let foundID = false;
                let result;

                db.forEach(obj => {
                    if(obj.id === id) {
                        foundID = true;
                        result = obj;
                    } else {
                        newDb.push(obj);
                    }
                })

                if(foundID) {
                    fs.writeFile(fsPath, JSON.stringify(newDb), err => console.log(err)
                    )
                res.status(200).json({
                    message: `Record with ID ${id} has been deleted`,
                    result
                })
                } else {
                    res.status(404).json({
                        message: `No record with ID ${id} found.`
                    })
                }

            })

            // Remove it

            // Respond to the client
        } catch (err) {
            res.status(500).json({
                message: `Error: ${err}`
            })
        }
    });


module.exports = router;