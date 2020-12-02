const attemptService = require("../services/attempts.service");

module.exports = (app) => {

    const findAttemptsForQuiz = (req, res) => {
        console.log("Controller FindAttemptsForQuiz", req.params.qid)
        attemptService.findAttemptsForQuiz(req.params.qid)
            .then(attempts => res.send(attempts));
    }

    const createAttempt = (req, res) => {
        attemptService.createAttempt(req.params.qid, req.body)
            .then(questions => res.send(questions));
    }

    app.get('/quizzes/:qid/attempts', findAttemptsForQuiz);
    app.post('/quizzes/:qid/attempts', createAttempt);
}
