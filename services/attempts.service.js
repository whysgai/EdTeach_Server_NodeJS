const attemptDao = require('../document-access-objects/attempt.dao');

const findAttemptsForQuiz = (qid) => attemptDao.findAttemptsForQuiz(qid);

const createAttempt = (qid, attempt) => attemptDao.createAttempt(qid, attempt);

module.exports = {
    findAttemptsForQuiz,
    createAttempt
}
