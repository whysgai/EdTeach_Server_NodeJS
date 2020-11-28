const attemptService = require("../services/attempts.service");

module.exports = (app) => {

    const findAttemptsForQuiz = (req, res) => {
        attemptService.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts));
    }

    const createAttempt = (req, res) => {
        attemptService.createAttempt(req.params.qid, req.body)
            .then(attempt => res.send(attempt));
    }

    app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz);
    app.post('/api/quizzes/:qid/attempts', createAttempt);
}
