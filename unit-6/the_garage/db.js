const mongoose = require('mongoose');
const connection = process.env.DBURL;
const collection = process.env.COLL;

const db = async () => {
    try {
        
        mongoose.set('strictQuery', true); // removes warnings

        await mongoose.connect(`${connection}/${collection}`, {
            // mongoose dependency warnings remove
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(
            `Database connected to: ${connection}/${collection}`
        );
    } catch (err) {
        throw new Error(`Error: ${err.message}`)
    }
}

module.exports = { db, mongoose };