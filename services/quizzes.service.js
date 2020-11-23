let quizzes = require('../models/quizzes.json');
const quizModel = require("../models/quizzes/quiz.model");

// const findAllQuizzes = () => {
//     return quizzes
// }

const findAllQuizzes = () => quizModel.findAllQuizzes();

const findQuizById = (qid) => quizModel.findQuizById(qid);
    // const quiz = quizzes.find(quiz => quiz._id === qid);
    // return quiz;

const createQuiz = () => {
    // const quiz = {_id: (new Date()).getMilliseconds().toString(), title: "New Quiz"};
    const quiz = {title: "New Quiz"};
    return quizModel.createQuiz(quiz);
    // quizzes.push(quiz);
    // return quiz;
}

const deleteQuiz = (qid) => quizModel.removeQuiz(qid);

const updateQuiz = (qid, deltaQuiz) => {
    quizzes = quizzes.map(quiz => quiz._id === qid ? deltaQuiz : quiz);
    return 200;
}

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}
