const router = require('express').Router()
const db = require('../db.json');

router.get('/cookie-jar', (req, res) => {
    res.cookie('cart', [
        {"item": 'milk', "price": 1.79},
        {"item": 'cheese', "price": 2.99},
        {"item": 'dog food', "price": 9.98}
    ])
    const check = req.cookies;
    console.log(check.cart);

    let offer;

    check.cart.every(obj => {
        offer = db.filter(i => i.item == obj.item && i.price < obj.price);
        if(offer.length > 0) return false;
        return true;
    });

    // console.log(offer);

    if(offer.length > 0) {
        res.send({
            offer: `Our ${offer[0].item} is ${offer[0].price}`,
            cookies: check
        })
    } else {
        res.send({
            cookies: check
        })
    }
})

module.exports = router;