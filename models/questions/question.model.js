const mongoose = require("mongoose");
const questionSchema = require("./question.schema")
const questionModel = mongoose.model("QuestionModel", questionSchema);

const findAllQuestions = () => questionModel.find();

const findQuestionsForQuiz = (qid) => questionModel.find({quizId: qid});

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
