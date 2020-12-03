const mongoose = require('mongoose');

const attemptSchema = mongoose.Schema({
    score: Number,
    quizId: String,
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionModel"
    }]
}, {collection: 'quizAttempts'});

module.exports = attemptSchema;
