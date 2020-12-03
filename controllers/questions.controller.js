const questionService = require("../services/questions.service");

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then(questions => res.send(questions));

    }

    const findQuestionsForQuiz = (req, res) => {
        questionService.findQuestionsForQuiz(req.params.qid)
            .then(questions => res.send(questions));
    }

    const createQuestion = (req, res) => {
        questionService.createQuestion(req.body)
            .then(question => res.send(question));
    }

    app.get("/questions", findAllQuestions);
    app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
    app.post("/questions", createQuestion);
}
