const mongoose = require("mongoose");
const questionSchema = require('../questions/question.schema');

const quizSchema = mongoose.Schema({
    title: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionModel"
    }]
}, {collection: "quizzes"});

module.exports = quizSchema
