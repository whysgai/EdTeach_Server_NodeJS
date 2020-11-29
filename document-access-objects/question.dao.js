const quizModel = require('../models/quizzes/quiz.model');
const questionModel = require('../models/questions/question.model');

const findAllQuestions = () => questionModel.find();

// This guy isn't working
// const findQuestionsForQuiz = (qid) => {
//     quizModel.findById(qid).populate('questions')
//         .then(quiz => quiz.questions)
// }

const findQuestionsForQuiz = (qid) => {
    questionModel.find({"quizId": qid})
        .then(questions => {
            console.log("Questions from DAO", questions);
            return questions
        });
}

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
