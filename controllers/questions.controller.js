const questionService = require("../services/questions.service");

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        res.send(questionService.findAllQuestions());
    }

    const findQuestionsForQuiz = (req, res) => {
        res.send(questionService.findQuestionsForQuiz(req.params['qid']))
    }

    app.get("/questions", findAllQuestions);
    app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
}
