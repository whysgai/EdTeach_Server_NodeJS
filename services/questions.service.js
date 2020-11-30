let questions = require('../models/questions.json');
const questionModel = require("../models/questions/question.model");
const questionDao = require("../document-access-objects/question.dao");

const findAllQuestions = () => questionDao.findAllQuestions();

const findQuestionsForQuiz = (qid) => questionDao.findQuestionsForQuiz(qid);

const createQuestion = (question) => questionDao.createQuestion(question);

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz,
    createQuestion
}
