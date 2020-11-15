// let quizzes = require('./quizzes.json')


function service(app) {
// module.exports = (app) => {

    let quizzes = [
        {_id: "001", title: "Quiz 1"},
        {_id: "002", title: "Quiz 2"},
        {_id: "003", title: "Quiz 3"},
        {_id: "004", title: "Quiz 4"}
    ]

    const findAllQuizzes = (req, res) => {
        res.send(quizzes);
    }

    const findQuizById = (req, res) => {
        const quizId = req.params["qid"];
        const quiz = quizzes.find(quiz => quiz._id === quizId);
        res.send(quiz);
    }

    const createQuiz = (req, res) => {
        const quiz = {_id: (new Date()).getMilliseconds().toString(), title: "New Quiz"};
        quizzes.push(quiz);
        res.send(quiz)
    }

    const deleteQuiz = (req, res) => {
        const qid = req.params.qid;
        quizzes = quizzes.filter(quiz => quiz._id !== qid);
        res.sendStatus(200);
    }

    app.get("/quizzes", findAllQuizzes);
    app.get("/quizzes/:qid", findQuizById);
    app.post("/quizzes", createQuiz);
    app.delete("/quizzes/:qid", deleteQuiz)

}

module.exports = service

