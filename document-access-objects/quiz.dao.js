const quizModel = require('../models/quizzes/quiz.model')

const findAllQuizzes = () => quizzesModel.find()

const findQuizById = (quizId) => quizzesModel.findById(quizId)

const createQuiz = (newQuiz) => quizModel.create(newQuiz);

const removeQuiz = (qid) => quizModel.remove({_id: qid});

const updateQuiz = (qid, deltaQuiz) => quizModel.update({_id: qid}, {$set: deltaQuiz});

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    removeQuiz,
    updateQuiz
}
