const questionService = require("../services/questions.service");

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        console.log("FindAllQuestions from Controller");
        questionService.findAllQuestions()
            .then(questions => res.send(questions));

    }

    const findQuestionsForQuiz = (req, res) => {
        console.log("Controller FindAllQuestionsForQuiz", req.params.qid);
        questionService.findQuestionsForQuiz(req.params.qid)
            .then(questions => res.send(questions));

    }

    app.get("/questions", findAllQuestions);
    app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
}
