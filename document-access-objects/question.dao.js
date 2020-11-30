const quizModel = require('../models/quizzes/quiz.model');
const questionModel = require('../models/questions/question.model');

const findAllQuestions = () => questionModel.find();

const findQuestionsForQuiz = (qid) => quizModel.findById(qid)
    .populate('questions').then(quiz => quiz.questions)


module.exports = {
    findQuestionsForQuiz,
    findAllQuestions

}
