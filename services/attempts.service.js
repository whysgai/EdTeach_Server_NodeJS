const attemptDao = require('../document-access-objects/attempt.dao');
const questionDao = require("../document-access-objects/question.dao");
const questionService = require("../services/questions.service");

const findAttemptsForQuiz = (qid) => attemptDao.findAttemptsForQuiz(qid);

const createAttempt = (qid, answers) => {
    console.log("create attempt dao")
    console.log("quiz id:", qid)
    console.log("answers", answers)
    // for each answer, create new question and push retuned ID to array
    // Then, when creating the attempt, use that array for the answers field
    let answerIds = [];
    for (let answer of answers) {
        console.log("current answer:", answer);
        let question = {
            title: answer.title,
            question: answer.question,
            correct: answer.correct,
            answer: answer.answer,
            type: answer.type,
            choices: answer.choices
        }
        let newQuestion = questionDao.createQuestion(question).then((result) => result)
        console.log("Created question", newQuestion)
        let newAnswerId = newQuestion._id
        console.log("New ID for question " + answer.title + " is " + newAnswerId)
        answerIds.push(newAnswerId)
    }
    attemptDao.createAttempt(qid, answerIds, answers)
}

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}
