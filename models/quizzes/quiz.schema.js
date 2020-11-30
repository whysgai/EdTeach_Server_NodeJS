const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    title: String,
    attempts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "AttemptModel"
    }]
}, {collection: "quizzes"});

module.exports = quizSchema
