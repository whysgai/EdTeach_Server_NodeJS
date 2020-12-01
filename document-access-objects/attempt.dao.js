const attemptModel = require('../models/attempts/attempt.model');

const scoreQuiz = (attempt) => {
    let countCorrect = 0
    attempt.forEach((question) => {
        if(question.answer === question.correct) {
            countCorrect++;
        }
    })
    return (countCorrect / attempt.length) * 100;
}

// const scoreQuiz = (questions) => {
//     let numberOfCorrectQuestions = 0
//     questions.forEach(question => question.answer === question.correct ?
//         numberOfCorrectQuestions++ : numberOfCorrectQuestions)
//     return 100 * numberOfCorrectQuestions / questions.length }


const findAttemptsForQuiz = (qid) => attemptModel.find({"quizId": qid})

const createAttempt = (qid, answerIds, attempt) => {
    attemptModel.create({
        quiz: qid,
        answers: answerIds,
        score: scoreQuiz(attempt)
    });
}

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}
