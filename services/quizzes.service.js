const quizDao = require('../document-access-objects/quiz.dao')

const findAllQuizzes = () => quizDao.findAllQuizzes();

const findQuizById = (qid) => quizDao.findQuizById(qid);

const createQuiz = () => {
    const quiz = {title: "New Quiz"};
    return quizDao.createQuiz(quiz);
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
