const mongoose = require("mongoose");
const quizSchema = require("./quiz.schema");
const quizModel = mongoose.model("QuizModel", quizSchema);

const findAllQuizzes = () =>
    quizModel.find()

const findQuizById = (qid) =>
    quizModel.findById(qid)

const createQuiz = (newQuiz) =>
    quizModel.create(newQuiz)

const removeQuiz = (qid) =>
    quizModel.remove({_id: qid})

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    removeQuiz
}

