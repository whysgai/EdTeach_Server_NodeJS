let questions = require('../models/questions.json')

const findAllQuestions = (req, res) => {
    return questions;
}


const findQuestionsForQuiz = (qid) => {
    return questions.filter(question => question.quizId === qid);
}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
