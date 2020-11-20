const questionService = require("../services/questions.service");

module.exports = (app) => {

    // let questions = require('../models/questions.json')

    // const questions = [
    //     {_id: "01", question: "How old are you?", quizId: "001"},
    //     {_id: "02", question: "What is your pet's name", quizId: "001"},
    //     {_id: "03", question: "Where are you?", quizId: "002"},
    //     {_id: "04", question: "WHat's up?", quizId: "002"},
    //     {_id: "05", question: "Why?", quizId: "003"}
    // ]


    const findAllQuestions = (req, res) => {
        res.send(questionService.findAllQuestions());
    }

    const findQuestionsForQuiz = (req, res) => {
        res.send(questionService.findQuestionsForQuiz(req.params['qid']))
    }

    // app.get("/quizzes/:qid/questions", (req, res) => {
    //     const quizId = req.params["qid"];
    //     const questionsForQuiz = questions.filter(question => question.quizId === quizId)
    //     res.send(questionsForQuiz);
    // })


    app.get("/questions", findAllQuestions);
    app.get("/quizzes/:qid/questions", findQuestionsForQuiz);
}
