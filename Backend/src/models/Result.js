const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;