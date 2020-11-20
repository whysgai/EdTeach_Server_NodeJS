const quizzesService = require("../services/quizzes.service");

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes());
    }

    const findQuizById = (req, res) => {
        res.send(quizzesService.findQuizById(req.params["qid"]));
    }

    const createQuiz = (req, res) => {
        res.send(quizzesService.createQuiz());
    }

    const deleteQuiz = (req, res) => {
        res.send(quizzesService.deleteQuiz(req.params["qid"]));
    }

    const updateQuiz = (req, res) => {
        res.sendStatus(quizzesService.updateQuiz(req.params['qid'], req.body));
    }

    app.get("/quizzes", findAllQuizzes);
    app.get("/quizzes/:qid", findQuizById);
    app.post("/quizzes", createQuiz);
    app.delete("/quizzes/:qid", deleteQuiz);
    app.put("/quizzes/:qid", updateQuiz);

}



