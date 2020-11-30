let questions = require('../models/questions.json');
const questionModel = require("../models/questions/question.model");
const questionDao = require("../document-access-objects/question.dao");

const findAllQuestions = () => questionDao.findAllQuestions();

const findQuestionsForQuiz = (qid) => {
    let questions = questionDao.findQuestionsForQuiz(qid);
    console.log("Questions in Service:", questions);
    return questions;
}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
