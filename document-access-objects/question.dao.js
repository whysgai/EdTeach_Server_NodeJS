const quizModel = require('../models/quizzes/quiz.model');
const questionModel = require('../models/questions/question.model');

const findAllQuestions = () => questionModel.find();

const findQuestionsForQuiz = (qid) => quizModel.findById(qid)
    .populate('questions').then(quiz => quiz.questions)

// No longer in use due to questions no longer knowing parents
// const findQuestionsForQuiz = (qid) => questionModel.find({"quizId": qid});

const createQuestion = (question) => questionModel.create(question);

module.exports = {
    createQuestion,
    findQuestionsForQuiz,
    findAllQuestions
}
