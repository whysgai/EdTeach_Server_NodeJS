const express = require("express");
const app = express();

const quizzes = [
    {_id: "001", title: "Quiz 1"},
    {_id: "002", title: "Quiz 2"},
    {_id: "003", title: "Quiz 3"},
    {_id: "004", title: "Quiz 4"}
]

const questions = [
    {_id: "01", question: "How old are you?", quizId: "001"},
    {_id: "02", question: "What is your pet's name", quizId: "001"},
    {_id: "03", question: "Where are you?", quizId: "002"},
    {_id: "04", question: "WHat's up?", quizId: "002"},
    {_id: "05", question: "Why?", quizId: "003"}
]

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/quizzes", (req, res) => {
    res.send(quizzes);
})

app.get("/quizzes/:qid", (req, res) => {
    const quizId = req.params["qid"];
    const quiz = quizzes.find(quiz => quiz._id === quizId);
    res.send(quiz);
})

app.get("/quizzes/:qid/questions", (req, res) => {
    const quizId = req.params["qid"];
    const questionsForQuiz = questions.filter(question => question.quizId === quizId)
    res.send(questionsForQuiz);
})

app.listen(4201);
