const mongoose = require("mongoose");
const quizSchema = require("./quiz.schema");

const quizModel = mongoose.model("QuizModel", quizSchema);

module.exports = quizModel;

