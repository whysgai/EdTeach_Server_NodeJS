const attemptModel = require('../models/attempts/attempt.model');

const scoreQuiz = (questions) => {
    let countCorrect = 0
    questions.forEach((question) => {
        if(question.answer === question.correct) {
            countCorrect++;
        }
    })
    return (countCorrect / questions.length) * 100;
}

// const scoreQuiz = (questions) => {
//     let numberOfCorrectQuestions = 0
//     questions.forEach(question => question.answer === question.correct ?
//         numberOfCorrectQuestions++ : numberOfCorrectQuestions)
//     return 100 * numberOfCorrectQuestions / questions.length }


const findAttemptsForQuiz = (qid) =>
    attemptModel.find({quiz: qid}).populate('quiz', 'title _id');

const createAttempt = (qid, attempt) =>
    attemptModel.create({
        quiz: qid,
        answers: attempt,
        score: scoreQuiz(attempt)
    });

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}
