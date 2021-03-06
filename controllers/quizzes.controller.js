const quizzesService = require("../services/quizzes.service");

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then(quizzes => res.send(quizzes));
    }

    const findQuizById = (req, res) => {
        quizzesService.findQuizById(req.params.qid)
            .then(quiz => res.send(quiz))
    }

    const createQuiz = (req, res) => {
        quizzesService.createQuiz(req.body.quiz)
            .then(actualQuiz => res.send(actualQuiz))
    }

    const deleteQuiz = (req, res) => {
        quizzesService.deleteQuiz(req.params["qid"])
            .then(status => res.send(status))
    }

    const updateQuiz = (req, res) => {
        quizzesService.updateQuiz(req.params['qid'], req.body)
            .then(status => res.send(status));

    }

    app.get("/quizzes", findAllQuizzes);
    app.get("/quizzes/:qid", findQuizById);
    app.post("/quizzes", createQuiz);
    app.delete("/quizzes/:qid", deleteQuiz);
    app.put("/quizzes/:qid", updateQuiz);

}



