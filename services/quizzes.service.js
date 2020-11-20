let quizzes = require('../models/quizzes.json');

const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (qid) => {
    const quiz = quizzes.find(quiz => quiz._id === qid);
    return quiz;
}

const createQuiz = () => {
    const quiz = {_id: (new Date()).getMilliseconds().toString(), title: "New Quiz"};
    quizzes.push(quiz);
    return quiz;
}

const deleteQuiz = (qid) => {
    quizzes = quizzes.filter(quiz => quiz._id !== qid);
    return 200;
}

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
