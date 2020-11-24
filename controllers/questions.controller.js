const questionService = require("../services/questions.service");

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.send(questions))

    }

    const findQuestionsForQuiz = (req, res) => {
        questionService.findQuestionsForQuiz(req.params.qid)
            .then(questions => res.send(questions));

    }

    app.get("/questions", findAllQuestions);
    app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
}
