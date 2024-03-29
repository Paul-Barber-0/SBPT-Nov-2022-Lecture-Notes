/* 
! Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/

const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: Number
    },
    owner_id: {
        type: String
    }
})

module.exports = mongoose.model('Movie', MovieSchema);