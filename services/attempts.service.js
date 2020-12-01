const attemptDao = require('../document-access-objects/attempt.dao');
const questionService = require("../services/questions.service");

const findAttemptsForQuiz = (qid) => attemptDao.findAttemptsForQuiz(qid);

const createAttempt = (qid, questions) => {
    // for each answer, create new question and push retuned ID to array
    // Then, when creating the attempt, use that array for the answers field
    let attemptIds = [];
    for (let answer in attempt) {
        let question = {
            title: answer.title,
            question: answer.question,
            correct: answer.correct,
            answer: answer.answer,
            type: answer.type,
            choices: answer.choices
        }
        attemptIds.push(questionService.createQuestion(question))
    }
    attemptDao.createAttempt(qid, attemptIds, questions)
}

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}
