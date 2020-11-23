const mongoose = require("mongoose");
const quizSchema = require("./quiz.schema");
const quizModel = mongoose.model("QuizModel", quizSchema);

const findAllQuizzes = () =>
    quizModel.find()

const findQuizById = (qid) =>
    quizModel.find({_id: qid})

module.exports = {
    findAllQuizzes,
    findQuizById
}
