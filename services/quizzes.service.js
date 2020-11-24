let quizzes = require('../models/quizzes.json');
const quizModel = require("../models/quizzes/quiz.model");
const quizDao = require('../document-access-objects/quiz.dao')

// const findAllQuizzes = () => {
//     return quizzes
// }

const findAllQuizzes = () => quizDao.findAllQuizzes();

const findQuizById = (qid) => quizDao.findQuizById(qid);
    // const quiz = quizzes.find(quiz => quiz._id === qid);
    // return quiz;

const createQuiz = () => {
    // const quiz = {_id: (new Date()).getMilliseconds().toString(), title: "New Quiz"};
    const quiz = {title: "New Quiz"};
    return quizDao.createQuiz(quiz);
    // quizzes.push(quiz);
    // return quiz;
}

const deleteQuiz = (qid) => quizDao.removeQuiz(qid);

const updateQuiz = (qid, deltaQuiz) => {
    return quizDao.updateQuiz(qid, deltaQuiz);
}

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
