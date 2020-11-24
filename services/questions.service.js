let questions = require('../models/questions.json')
const questionModel = require("../models/questions/question.model")

const findAllQuestions = () => questionModel.findAllQuestions();

const findQuestionsForQuiz = (qid) => questionModel.findQuestionsForQuiz(qid);

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
