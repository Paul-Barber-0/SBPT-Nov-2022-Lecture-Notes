const router = require('express').Router();
const { Vehicle } = require('../models');
const { error, success, incomplete } = require('../helpers');

//! CREATE
router.post('/', async (req,res) => {
    try {
        
        const { make, model, year, color } = req.body;

        if(!make) throw new Error('Please input a vehicle make.');

        const vehicle = new Vehicle({
            make, model, year, color
        });

        const newVehicle = await vehicle.save();
        
        newVehicle ?
            success(res, newVehicle) :
            incomplete(res);

    } catch (err) {
        error(res, err);
    }
});

//! GET ALL

router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        success(res, vehicles);
    } catch (err) {
        error(res, err);
    }
})

module.exports = router;