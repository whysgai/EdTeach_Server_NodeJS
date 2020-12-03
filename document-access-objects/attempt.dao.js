const attemptModel = require('../models/attempts/attempt.model');

const scoreQuiz = (attempt) => {
    let countCorrect = 0
    attempt.forEach((question) => {
        if(question.answer === question.correct) {
            countCorrect++;
        }
    })
    console.log("Number right", countCorrect)
    return (countCorrect / attempt.length) * 100;
}

const findAttemptsForQuiz = (qid) => attemptModel.find({"quizId": qid})

const createAttempt = (qid, answerIds, attempt) => {
    console.log("Creating attempt in DAO", "qid", qid, "answers", answerIds, "attempts", attempt)
    attemptModel.create({
        quizId: qid,
        answers: answerIds,
        score: scoreQuiz(attempt)
    });
}

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}
